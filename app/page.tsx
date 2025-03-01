import { fetchHomePage, fetchSEOData } from "@/services/strapiService";
import HomePage from "./screen";
import { Metadata } from "next";
import { generateMetaObject } from "@/lib/utils";
import { Suspense } from "react";
import PageLoader from "@/components/library/elements/PageLoader";
import { homePageStaticData } from "./constant";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await fetchSEOData("/");
  const generatedMetaObject = generateMetaObject(metaData);
  return generatedMetaObject;
}

export default async function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomePageWrapper />
    </Suspense>
  );
}

function HomePageWrapper() {
  const homePageFetchPromise = fetchHomePage();
  // console.log("homePageData ---> ", data);
  return (
    <>
      <Script
        id="jsonld-script2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nooora Beauty Concierge",
            url: process.env.NEXT_PUBLIC_APP_URL,
            logo: "https://nooora.ae/catalog/view/theme/noora/image/noora/logo-black.svg",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971 55 500 7326",
              contactType: "Service",
            },
          }),
        }}
      />
      <Script
        id="jsonld-script3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Nooora Beauty Concierge",
            url: "https://nooora.ae",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://nooora.ae/blog/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <HomePage
        pageData={homePageStaticData}
        fetchDataPromise={homePageFetchPromise}
      />
    </>
  );
  return <>hello world</>;
}
