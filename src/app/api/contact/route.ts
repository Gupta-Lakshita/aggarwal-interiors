import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { company } from "@/data/company";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured. Please email us directly." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${company.name} Website <onboarding@resend.dev>`,
      to: company.email,
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
