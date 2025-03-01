export const saveGiftCardDetails = async (details: {
  fromName: string;
  fromEmail: string;
  instructions: string;
  toName: string;
  toEmail: string;
  toCountryCode: string;
  toPhoneNumber: string;
  price: string;
}) => {
  const response = await fetch("/api/saveGiftCardConfirmation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ details }),
  });

  const data = await response.json();
};

export const sendContactEmail = async (details: {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  location: string;
  message: string;
}) => {
  const response = await fetch("/api/sendContactEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ details }),
  });

  const data = await response.json();
};
