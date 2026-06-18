import { SITE } from "@/lib/site";

/**
 * Builds a pre-filled WhatsApp deep link (wa.me) for an enquiry.
 * Opening this URL starts a chat with the admissions number with the
 * lead's details ready to send.
 */
export function buildWhatsAppEnquiryUrl(input: {
  name: string;
  phone: string;
  stream: string;
  message?: string;
}): string {
  const lines = [
    "Hi Edapt Future School! 👋 I'd like to enquire about Plus One admissions.",
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Stream: ${input.stream}`,
    input.message ? `Message: ${input.message}` : null,
  ].filter(Boolean) as string[];

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

/** A plain "say hi" WhatsApp link with no pre-filled enquiry details. */
export function whatsAppHelloUrl(): string {
  const text = encodeURIComponent("Hi Edapt Future School! I'd like to know more about Plus One admissions.");
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
