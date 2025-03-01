import { redirect } from "next/navigation";
import PaymentStatusScreen from "./screen";

const PaymentStatusPage = async ({
  params,
}: {
  params: Promise<{ statusSlug: "success" | "failed" | "canceled" }>;
}) => {
  const paymentStatus = (await params).statusSlug;
  if (!["success", "failed", "canceled"].includes(paymentStatus)) {
    redirect("/");
  }
  return (
    <>
      <PaymentStatusScreen status={paymentStatus} />
    </>
  );
};

export default PaymentStatusPage;
