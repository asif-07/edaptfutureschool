import { NextResponse } from "next/server";

/**
 * Enquiry lead-capture endpoint.
 *
 * Receives { name, phone, stream, message } from the EnquiryForm component,
 * validates it server-side, and (currently) just logs it.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * 👉 CONNECT YOUR REAL BACKEND HERE
 * ─────────────────────────────────────────────────────────────────────────
 * This is the single place to wire lead delivery. Pick one (or several):
 *
 *  1) EMAIL — send to admissions inbox
 *     e.g. Resend / SendGrid / Nodemailer
 *     const { Resend } = await import("resend");
 *     await new Resend(process.env.RESEND_API_KEY).emails.send({ ... });
 *
 *  2) WHATSAPP — notify the admissions number (9072 616200)
 *     e.g. WhatsApp Cloud API / Twilio
 *     await fetch("https://graph.facebook.com/v20.0/<phone-id>/messages", { ... });
 *
 *  3) CRM / SHEET — store the lead
 *     e.g. Google Sheets API, HubSpot, Airtable, a database (Prisma).
 *
 * Add the relevant secrets to your environment (.env.local / Vercel project
 * settings) — NEVER commit them. Example keys: RESEND_API_KEY, WHATSAPP_TOKEN.
 * ─────────────────────────────────────────────────────────────────────────
 */

type EnquiryPayload = {
  name?: string;
  phone?: string;
  stream?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: EnquiryPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const stream = (data.stream ?? "").trim();
  const message = (data.message ?? "").trim();

  // Server-side validation (never trust the client).
  const digits = phone.replace(/\D/g, "");
  if (!name || digits.length < 10 || !stream) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid fields (name, phone, stream are required)." },
      { status: 422 }
    );
  }

  // TODO: Replace this log with real delivery (see header comment above).
  console.info("[enquiry] New lead received:", { name, phone, stream, message });

  return NextResponse.json({ ok: true, message: "Enquiry received." }, { status: 200 });
}

// Reject non-POST methods cleanly.
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
