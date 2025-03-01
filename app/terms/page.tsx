import React from "react";
import TermsScreen from "./screen";
import { fetchPolicyPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("terms");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const TermsPage = async () => {
  const termsPageData = await fetchPolicyPage();
  return (
    <>
      <Script
        id="jsonld-script15"
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
                text: "Terms of Use",
                url: "",
              },
            ]),
          }),
        }}
      />
      <TermsScreen data={termsPageData} />;
    </>
  );
};

export default TermsPage;
