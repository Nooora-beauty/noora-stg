import { redirect } from "next/navigation";

interface OrderDetailsInterface {
  fromName: string;
  fromEmail: string;
  instructions: string;
  toName: string;
  toEmail: string;
  toCountryCode: string;
  toPhoneNumber: string;
}

export const createPayment = async (details: {
  amount: string;
  description: string;
  orderDetails: OrderDetailsInterface;
}) => {
  let orderDetails = {
    amount: details.amount,
    currency: "AED",
    description: details.description,
    contactDetails: details.orderDetails,
  };

  const response = await fetch("/api/createTelrOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderDetails }),
  });

  const data = await response.json();
  //   console.log("Telr Response:", data);
  redirect(data.order.url);
};
