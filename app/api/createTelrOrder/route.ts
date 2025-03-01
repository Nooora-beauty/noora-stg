import axios from "axios";
import crypto from "crypto";
import { NextRequest } from "next/server";
import QueryString from "qs";

export async function POST(req: NextRequest) {
  try {
    const { orderDetails } = await req.json();
    console.log("orderDetails", orderDetails);

    const storeId = process.env.NEXT_TELR_STORE_ID;
    const authKey = process.env.NEXT_TELR_AUTH_KEY;

    console.log("storeId", { storeId, authKey });

    if (!storeId || !authKey) {
      return new Response(
        JSON.stringify({
          error:
            "TELR_STORE_ID and TELR_AUTH_KEY must be set in the environment variables.",
        }),
        { status: 500 }
      );
    }

    // Generate a unique cartid
    const cartId = crypto.randomBytes(8).toString("hex");

    const detailsAsQuery = QueryString.stringify(
      {
        ...orderDetails.contactDetails,
        price: orderDetails.amount,
      },
      {
        encodeValuesOnly: true,
      }
    );

    console.log("detailsAsQuery", { detailsAsQuery });

    const payload = {
      method: "create",
      store: storeId,
      authkey: authKey,
      framed: 0,
      order: {
        cartid: cartId,
        test: "0", // Use '0' for live mode
        amount: orderDetails.amount,
        currency: orderDetails.currency,
        description: orderDetails.description,
      },
      return: {
        authorised: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?${detailsAsQuery}`,
        declined: `${process.env.NEXT_PUBLIC_APP_URL}/payment/failed`,
        cancelled: `${process.env.NEXT_PUBLIC_APP_URL}/payment/canceled`,
      },
    };

    console.log("Payload", payload);

    const response = await axios.post(
      "https://secure.telr.com/gateway/order.json",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      // Now TypeScript knows this is an Error object
      console.error(error.message);
    } else {
      // Handle unknown error type
      console.error("An unknown error occurred:", error);
    }
  }
}
