import React, { Suspense } from "react";
import GiftCardScreen from "./screen";
import { Metadata } from "next";
import { fetchSEOData } from "@/services/strapiService";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import PageLoader from "@/components/library/elements/PageLoader";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("gift-a-friend");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export default function GiftCardPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Script
        id="jsonld-script9"
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
                text: "Gift Card",
                url: "",
              },
            ]),
          }),
        }}
      />
      <GiftCardScreen />
    </Suspense>
  );
}
