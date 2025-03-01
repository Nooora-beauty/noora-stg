import React from "react";
import GiftPackageScreen from "./screen";
import { fetchPolicyPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("gift-and-package-policy");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const GiftPackagePage = async () => {
  const termsPageData = await fetchPolicyPage();
  return (
    <>
      <Script
        id="jsonld-script10"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema([
              {
                text: "Home",
                url: "/",
              },
              {
                text: "Gift and Package Policy",
                url: "",
              },
            ]),
          }),
        }}
      />
      <GiftPackageScreen data={termsPageData} />;
    </>
  );
};

export default GiftPackagePage;
