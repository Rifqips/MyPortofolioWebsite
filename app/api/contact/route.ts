import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        {
          message: "Email and message are required",
        },
        {
          status: 400,
        },
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rifqipadi99@gmail.com",

      // SUBJECT OTOMATIS
      subject: `New Client Message from ${email}`,

      text: `
Client Email:
${email}

Message:
${message}
      `,
    });

    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("SEND_EMAIL_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to send email",
      },
      {
        status: 500,
      },
    );
  }
}