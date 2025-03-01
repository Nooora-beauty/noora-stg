import React from "react";
import StaticServiceScreen from "./screen";
import { staticNailsPageParams } from "@/app/constant";
import { fetchCategorySubcategoryPage } from "@/services/strapiService";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/utils";

const ServicePage = async () => {
  const { service, category, subCategory, services } = staticNailsPageParams;

  const pageData = await fetchCategorySubcategoryPage({
    category: "nails",
    subCategory: "nails",
  });

  return (
    <>
      <Script
        id="jsonld-script14"
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
      <StaticServiceScreen
        service={service}
        category={category}
        subCategory={subCategory}
        pageData={pageData as any}
        allServices={services as any}
      />
    </>
  );
};

export default ServicePage;
