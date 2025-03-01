import { Metadata } from "next";
import ServicesIndexScreen from "./screen";
import { fetchSEOData, fetchServicesIndexPage } from "@/services/strapiService";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import { Suspense } from "react";
import PageLoader from "@/components/library/elements/PageLoader";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("services");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export default function ServicesIndexPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ServicesIndexPageWrapper />
    </Suspense>
  );
}

async function ServicesIndexPageWrapper() {
  const data = await fetchServicesIndexPage();
  return (
    <>
      <Script
        id="jsonld-script12"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(data.pageBar.breadCrumbs),
          }),
        }}
      />
      <ServicesIndexScreen pageData={data} />
    </>
  );
}
