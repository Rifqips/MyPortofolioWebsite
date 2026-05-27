import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    if (!subject || !message) {
      return NextResponse.json(
        { message: "Subject and message are required" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "rifqipadi99@gmail.com",
      subject,
      text: message,
    });

    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("SEND_EMAIL_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}