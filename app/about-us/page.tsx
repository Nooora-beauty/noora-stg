import React, { Suspense } from "react";
import AboutScreen from "./screen";
import { fetchAboutUsPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import PageLoader from "@/components/library/elements/PageLoader";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("about-us");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export default function AboutPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AboutPageWrapper />
    </Suspense>
  );
}

async function AboutPageWrapper() {
  const aboutUsData = await fetchAboutUsPage();
  return (
    <>
      <Script
        id="jsonld-script6"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              aboutUsData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <AboutScreen aboutUsData={aboutUsData} />;
    </>
  );
}
