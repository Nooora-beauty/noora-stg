import { MailService } from "@/lib/mailService";
import { saveGiftCardDetailService } from "@/services/strapiService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { details } = await request.json();
  const {
    fromName,
    fromEmail,
    instructions,
    toName,
    toEmail,
    toCountryCode,
    toPhoneNumber,
    price,
  } = details;
  const createdData = await saveGiftCardDetailService({
    fromName,
    fromEmail,
    instructions,
    toName,
    toEmail,
    toCountryCode,
    toPhoneNumber,
  })
    .then(async () => {
      await MailService.sendGiftCardConfirmations({
        fromName,
        fromEmail,
        instructions,
        toName,
        toEmail,
        toCountryCode,
        toPhoneNumber,
        price,
      });
      return true;
    })
    .catch(() => false);
  if (createdData) {
    return NextResponse.json({
      data: {},
      status: 200,
    });
  }
}
