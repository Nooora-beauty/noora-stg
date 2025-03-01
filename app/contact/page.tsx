import React from "react";
import ContactScreen from "./screen";
import { fetchContactPage, fetchSEOData } from "@/services/strapiService";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateMetaObject } from "@/lib/utils";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("contact");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

const ContactPage = async () => {
  const contactData = await fetchContactPage();
  return (
    <>
      <Script
        id="jsonld-script8"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: generateBreadcrumbSchema(
              contactData.pageBar.breadCrumbs
            ),
          }),
        }}
      />
      <ContactScreen contactData={contactData} />;
    </>
  );
};

export default ContactPage;
