import { defaultMetaData } from "@/app/constant";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MetaDataInterface {
  title: string;
  description: string;
  image: { url: string };
  url: string;
  sitename: string;
  type: string;
  robots: string;
  category: string;
  keywords: string;
  language: string;
  canonical: string;
}

export const generateMetaObject = (metaData: MetaDataInterface) => {
  return {
    ...defaultMetaData,
    title: metaData.title || "",
    description: metaData.description || "",
    openGraph: {
      title: metaData.title || "",
      description: metaData.description || "",
      url: metaData.url || "",
      siteName: metaData.sitename || "",
      type: metaData.type || "website",
      images: [
        `${process.env.NEXT_PUBLIC_STRAPI_URL}${metaData?.image?.url || ""}`,
      ],
    },
    robots: metaData.robots || "",
    category: metaData.category || "",
    keywords: metaData.keywords || "",
    alternates: {
      canonical: metaData.canonical || "",
      languages: {
        [metaData.language || ""]: metaData.url || "",
      },
    },
  };
};

export const generateBreadcrumbSchema = (
  breadcrumbsList: {
    text: string;
    url: string;
  }[]
) => {
  const generatedList = breadcrumbsList.map(
    (crumbItem: { text: string; url: string }, index: number) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumbItem.text,
        item: crumbItem.url
          ? `${process.env.NEXT_PUBLIC_APP_URL}${
              crumbItem.url.startsWith("/")
                ? crumbItem.url.slice(1)
                : crumbItem.url
            }`
          : `${process.env.NEXT_PUBLIC_APP_URL}`,
      };
    }
  );
  return generatedList;
};
