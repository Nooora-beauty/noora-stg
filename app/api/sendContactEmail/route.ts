import { MailService } from "@/lib/mailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { details } = await request.json();
  const createdData = await MailService.sendContactDetails(details)
    .then(async () => {
      return true;
    })
    .catch(() => false);
    console.log('THIS IS CREATED DATA _____> ', createdData)
  if (createdData) {
    return NextResponse.json({
      data: {},
      status: 200,
    });
  }
}
