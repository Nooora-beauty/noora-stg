import React from "react";
import PolicyScreen from "./screen";
import { fetchPolicyPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("privacy-policy");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const PolicyPage = async () => {
  const policyPageData = await fetchPolicyPage();
  return (
    <>
      <Script
        id="jsonld-script11"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              policyPageData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <PolicyScreen data={policyPageData} />;
    </>
  );
};

export default PolicyPage;
