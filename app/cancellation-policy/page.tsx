import React from "react";
import CancellationPolicyScreen from "./screen";
import { fetchPolicyPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("cancellation-policy");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const CancellationPolicy = async () => {
  const termsPageData = await fetchPolicyPage();
  return (
    <>
      <Script
        id="jsonld-script7"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              termsPageData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <CancellationPolicyScreen data={termsPageData} />;
    </>
  );
};

export default CancellationPolicy;
