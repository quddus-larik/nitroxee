import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, description } = await req.json();

    if (!name || !email || !description) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:sans-serif;background:#f9fafb;padding:20px;border-radius:8px;max-width:600px;margin:auto">
        <h2 style="color:#16a34a">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:15px;border:1px solid #e5e7eb;border-radius:6px;background:#fff;">
          ${description}
        </div>
        <p style="margin-top:20px;font-size:12px;color:#6b7280">© ${new Date().getFullYear()} Abdul Quddus</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Message from ${name}`,
      html,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
