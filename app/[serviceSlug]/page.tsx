import React, { Suspense } from "react";
import ServiceDetailScreen from "./screen";
import {
  fetchAllServicesSlug,
  fetchSEOData,
  fetchServicesSlug,
} from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import PageLoader from "@/components/library/elements/PageLoader";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;

  const metaData = await fetchSEOData(serviceSlug);
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export async function generateStaticParams() {
  const detailPageRecords = await fetchAllServicesSlug();
  const params = detailPageRecords.map((record: { slug: string }) => ({
    serviceSlug: record.slug,
  }));

  console.log("RUNNING generateStaticParams for Details ------ ", params);

  return params;
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  return (
    <Suspense fallback={<PageLoader />}>
      <ServiceDetailPageWrapper params={params} />
    </Suspense>
  );
}

async function ServiceDetailPageWrapper({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const serviceData = (await params).serviceSlug;

  const fetchData = await fetchServicesSlug(serviceData);
  // const fetchAllSlugs = await fetchAllServicesSlug();
  console.log("fetchData ----> ", { fetchData });

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Script
        id="jsonld-script4"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: fetchData.pageBar.pageTitle,
            image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${fetchData.headImage.url}`,
            description:
              fetchData.serviceDetail?.description?.[0].children?.[0]?.text ||
              "",
            brand: {
              "@type": "Brand",
              name: "Nooora Beauty Concierge",
            },
            sku: "001",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "953",
            },
          }),
        }}
      />
      <Script
        id="jsonld-script5"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              fetchData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <ServiceDetailScreen data={fetchData} />
    </>
  );
}
