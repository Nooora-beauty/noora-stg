import React, { Suspense } from "react";
import WeddingScreen from "./screen";
import { fetchSEOData, fetchWeddingPage } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import PageLoader from "@/components/library/elements/PageLoader";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("wedding");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export default function WeddingPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <WeddingPageWrapper />
    </Suspense>
  );
}

async function WeddingPageWrapper() {
  const weddingData = await fetchWeddingPage();
  return (
    <>
      <Script
        id="jsonld-script16"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              weddingData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <WeddingScreen weddingData={weddingData} />;
    </>
  );
}
