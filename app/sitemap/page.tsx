import React from "react";
import { fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateMetaObject } from "@/lib/utils";
import SiteMapScreen from "./screen";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("refund-policy");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const SiteMapPage = async () => {
//   const termsPageData = await fetchPolicyPage();
  return <SiteMapScreen />;
};

export default SiteMapPage;
