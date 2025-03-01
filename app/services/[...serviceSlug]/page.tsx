import {
  fetchAllServices,
  fetchCategorySubcategoryPage,
  fetchSEOData,
} from "@/services/strapiService";
import ServiceScreen from "./screen";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import PageLoader from "@/components/library/elements/PageLoader";
import { appPaths } from "@/app/constant";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const [service, category, subCategory] = (await params).serviceSlug;

  const metaData = await fetchSEOData(subCategory || category || service);
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export async function generateStaticParams() {
  const params = appPaths.map((path: string[]) => ({
    serviceSlug: path,
  }));

  console.log("RUNNING generateStaticParams ------ ", params);

  return params;
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string[] }>;
}) {
  return (
    <Suspense fallback={<PageLoader />}>
      <ServicePageWrapper params={params} />
    </Suspense>
  );
}

async function ServicePageWrapper({
  params,
}: {
  params: Promise<{ serviceSlug: string[] }>;
}) {
  const [service, category, subCategory] = (await params).serviceSlug;

  if (service === "makeup-salon" && !category) {
    redirect("/services/makeup-salon/looks");
  }
  const [pageData, services] = await Promise.all([
    fetchCategorySubcategoryPage({
      category: category || service,
      subCategory,
    }),
    fetchAllServices(),
  ]);

  return (
    <>
      <Script
        id="jsonld-script4"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: pageData.pageBar.pageTitle,
            image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${pageData.headImage.url}`,
            description:
              pageData.serviceDetail?.description?.[0].children?.[0]?.text ||
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
        id="jsonld-script13"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              pageData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <ServiceScreen
        service={service}
        category={category}
        subCategory={subCategory}
        pageData={pageData}
        allServices={services}
      />
    </>
  );
}
