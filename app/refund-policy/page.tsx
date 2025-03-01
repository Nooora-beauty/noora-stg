import React from "react";
import RefundPolicyScreen from "./screen";
import { fetchPolicyPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateMetaObject } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("refund-policy");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const RefundPolicy = async () => {
  const termsPageData = await fetchPolicyPage();
  return <RefundPolicyScreen data={termsPageData} />;
};

export default RefundPolicy;
