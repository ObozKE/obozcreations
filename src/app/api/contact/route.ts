import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    // 1. Origin / Same-origin check for basic CORS protection
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");

    if (origin && host && !origin.includes(host)) {
      return NextResponse.json(
        { message: "Cross-origin requests forbidden." },
        { status: 403 }
      );
    }

    // 2. Parse request body JSON
    const body = await req.json();

    // 3. Validate against Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, inquiryType, message, companyWebsite, renderedAt } =
      validationResult.data;

    // 4. Honeypot anti-spam check
    if (companyWebsite && companyWebsite.trim().length > 0) {
      console.warn("[Contact API] Honeypot triggered by submission.", { email });
      // Silently accept to trick bot without sending email
      return NextResponse.json({ message: "Inquiry received." }, { status: 200 });
    }

    // 5. Submission speed timing check (bots submit in < 3000ms)
    if (renderedAt && Date.now() - renderedAt < 2500) {
      console.warn("[Contact API] Bot submission detected via fast timing check.", {
        elapsedMs: Date.now() - renderedAt,
      });
      return NextResponse.json({ message: "Inquiry received." }, { status: 200 });
    }

    // 6. Resend Email Dispatch
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@obozcreations.com";

    if (apiKey && apiKey !== "re_123456789") {
      const resend = new Resend(apiKey);

      const emailResponse = await resend.emails.send({
        from: "ObozCreations Website <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: email,
        subject: `New Inquiry [${inquiryType}] from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #141310; background-color: #FEFFE4;">
            <h2 style="color: #100F0E; border-bottom: 2px solid #100F0E; padding-bottom: 10px;">
              New Website Inquiry — ObozCreations
            </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone / WhatsApp:</strong> ${phone || "Not provided"}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <hr style="border: 0; border-top: 1px solid #55564A; margin: 20px 0;" />
            <h3 style="color: #100F0E;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #FDFFE5; padding: 15px; border-left: 4px solid #100F0E;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #55564A; margin: 20px 0;" />
            <p style="font-size: 12px; color: #55564A;">Submitted at ${new Date().toISOString()} (Africa/Nairobi)</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error("[Contact API] Resend email delivery failed:", emailResponse.error);
        return NextResponse.json(
          { message: "Failed to send email. Please try again later." },
          { status: 500 }
        );
      }
    } else {
      // Development mode fallback when RESEND_API_KEY is unconfigured
      console.log("[Contact API] Demo/Dev mode submission received successfully:", {
        name,
        email,
        inquiryType,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: "Inquiry submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Unexpected error handling contact route:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

// Reject all non-POST methods explicitly
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
