import nodemailer from "nodemailer";

interface SendGiftCardConfirmationsProps {
  fromName: string;
  fromEmail: string;
  instructions: string;
  toName: string;
  toEmail: string;
  toCountryCode: string;
  toPhoneNumber: string;
  price: string;
}
interface SendContactDetailsProps {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  location: string;
  message: string;
}

const sendGiftCardConfirmations = async (
  pageData: SendGiftCardConfirmationsProps
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // Use 465 for SSL
    secure: false, // Use true for port 465
    auth: {
      user: process.env.NEXT_EMAIL_USER,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER,
    to: "info@nooora.ae",
    subject: "Gift Card Confirmation",
    replyTo: process.env.NEXT_EMAIL_USER,
    html: `
        <h1>Gift Card Confirmation</h1>
		<h6 style="font-size:18px;font-weight:600;margin-bottom:20px;margin-top:0;text-decoration: underline;">From: ${pageData.fromName}</h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Recipient Name: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.toName}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Recipient Email: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.toEmail}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Recipient Phone Number: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.toCountryCode} ${pageData.toPhoneNumber}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Instructions: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.instructions}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Total Price: <span style="font-weight:400;padding-left: 6px;font-size:16px">AED ${pageData.price}</span></h6>
	 `,
  };

  return await transporter.sendMail(mailOptions);
};
const sendContactDetails = async (pageData: SendContactDetailsProps) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // Use 465 for SSL
    secure: false, // Use true for port 465
    auth: {
      user: process.env.NEXT_EMAIL_USER,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER,
    to: "info@nooora.ae",
    subject: "Contact Details",
    replyTo: process.env.NEXT_EMAIL_USER,
    html: `
        <h1>Contact Details</h1>
		<h6 style="font-size:18px;font-weight:600;margin-bottom:20px;margin-top:0;text-decoration: underline;">From: ${pageData.name}</h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Email: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.email}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Phone Number: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.countryCode} ${pageData.phoneNumber}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Message: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.message}</span></h6>
		<h6 style="font-size:16px;font-weight:600;margin-bottom:12px;margin-top:0">Location: <span style="font-weight:400;padding-left: 6px;font-size:16px">${pageData.location}</span></h6>
	 `,
  };

  return await transporter.sendMail(mailOptions);
};

export const MailService = {
  sendGiftCardConfirmations,
  sendContactDetails,
};
