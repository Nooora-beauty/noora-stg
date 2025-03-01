import { defaultMetaData } from "@/app/constant";
import QueryString from "qs";

interface Service {
  slug: string;
}

async function fetchHomePageSection(section: object) {
  console.log("running fetch homepage Data ----> ", section);
  const query = QueryString.stringify(
    { populate: section },
    { encodeValuesOnly: true }
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-pages?${query}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data[0];
}

export async function fetchHomePage() {
  try {
    // Split into logical sections
    const heroSection = {
      heroBanner: {
        populate: {
          files: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
      heroMobileVideo: {
        fields: ["id", "url", "alternativeText"],
      },
      dermalogicaImage: {
        fields: ["id", "url", "alternativeText"],
      },
    };

    const workingSection = {
      howNoooraWorks: true,
      NoooraSteps: {
        populate: {
          icon: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
    };

    const servicesSection = {
      popularHomeService: true,
      homeServiceTiles: {
        populate: {
          image: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
      beautyServices: true,
      beautyServicesTabs: {
        populate: {
          tabCards: {
            populate: {
              image: {
                fields: ["id", "url", "alternativeText"],
              },
            },
          },
        },
      },
    };

    const dealsSection = {
      coupleSpecial: true,
      coupleSpecialVideo: {
        fields: ["id", "url", "alternativeText", "height", "width"],
      },
      coupleSpecialCards: {
        populate: {
          image: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
      homeDiscount: true,
      homeDiscountCards: {
        populate: {
          image: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
      getYourDeal: true,
      dealTickets: {
        populate: {
          image: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
      dealGiftCard: {
        populate: {
          image: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
    };

    const whatsNewSection = {
      whatsNew: true,
      whatsNewTabs: {
        populate: {
          tabCards: {
            populate: {
              image: {
                fields: ["id", "url", "alternativeText"],
              },
            },
          },
          tabImage: {
            fields: ["id", "url", "alternativeText"],
          },
        },
      },
    };

    // Fetch all sections in parallel
    const [hero, working, services, deals, whatsNew] = await Promise.all([
      fetchHomePageSection(heroSection),
      fetchHomePageSection(workingSection),
      fetchHomePageSection(servicesSection),
      fetchHomePageSection(dealsSection),
      fetchHomePageSection(whatsNewSection),
    ]);

    // Merge all sections
    return {
      ...hero,
      ...working,
      ...services,
      ...deals,
      ...whatsNew,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

export async function fetchServicesIndexPage() {
  try {
    const query = QueryString.stringify(
      {
        populate: {
          pageBar: {
            populate: {
              barIcon: {
                fields: ["url", "id"],
              },
              breadCrumbs: true,
            },
          },
          chooseService: true,
          servicesTiles: {
            populate: {
              image: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          publicationImages: {
            fields: ["url", "id"],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services-index-pages?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchAboutUsPage() {
  try {
    const query = QueryString.stringify(
      {
        populate: {
          pageBar: {
            populate: {
              barIcon: {
                fields: ["id", "url"],
              },
              breadCrumbs: true,
            },
          },
          aboutNoora: true,
          NoooraSteps: {
            populate: {
              icon: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          homeService: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-pages?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function fetchCommonPageSection(section: object) {
  console.log("running fetch commonpage Data ----> ", section);
  const query = QueryString.stringify(
    { populate: section },
    { encodeValuesOnly: true }
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common-sections?${query}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data[0];
}

export async function fetchCommonSection() {
  try {
    const headerSection = {
      header: {
        populate: {
          logo: {
            fields: ["url", "id", "alternativeText"],
          },
          menuItem: {
            populate: {
              icon: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          megaMenu: {
            populate: {
              logo: {
                fields: ["url", "id", "alternativeText"],
              },
              navServices: {
                populate: {
                  media: {
                    fields: ["url", "id", "alternativeText"],
                  },
                },
              },
              benefits: {
                populate: {
                  icon: {
                    fields: ["url", "id", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
    };

    const footerSection = {
      footer: {
        populate: {
          logo: {
            fields: ["url", "id", "alternativeText"],
          },
          locationList1: true,
          locationList2: true,
          locationList3: true,

          servicesList: {
            populate: {
              list: true,
            },
          },
        },
      },
    };

    const testimonialSection = {
      testimonials: {
        populate: {
          avatar: {
            fields: ["url", "id", "alternativeText"],
          },
        },
      },
      blogTestimonial: {
        populate: true,
      },
    };

    const featuredPostSection = {
      featuredPostSection: {
        populate: {
          post1: {
            populate: {
              image: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          post2: {
            populate: {
              image: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          post3: {
            populate: {
              image: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
          post4: {
            populate: {
              image: {
                fields: ["url", "id", "alternativeText"],
              },
            },
          },
        },
      },
    };

    // Fetch all sections in parallel
    const [header, footer, testimonial, featuredPosts] = await Promise.all([
      fetchCommonPageSection(headerSection),
      fetchCommonPageSection(footerSection),
      fetchCommonPageSection(testimonialSection),
      fetchCommonPageSection(featuredPostSection),
    ]);

    // Merge all sections
    return {
      ...header,
      ...footer,
      ...testimonial,
      ...featuredPosts,
    };
  } catch (error) {
    console.error("Error fetching common page data:", error);
    throw error;
  }
}

export async function fetchPolicyPage() {
  const query = QueryString.stringify({
    populate: {
      pageBar: {
        populate: {
          barIcon: true,
          breadCrumbs: true,
        },
      },
      headContent: true,
      cookiesSectionContent: true,
      personalInformationSectionContent: true,
      disclosureSectionContent: true,
      dataTransferSectionContent: true,
      updatingInformationSectionContent: true,
    },
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/policy-pages?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchWeddingPage() {
  const query = QueryString.stringify({
    populate: {
      pageBar: {
        populate: {
          barIcon: {
            fields: ["url", "id"],
          },
          breadCrumbs: true,
        },
      },
      weddingServicesDetails: true,
      weddingServices: {
        populate: {
          image: {
            fields: ["alternativeText", "url", "id"],
          },
        },
      },
      specialDay: {
        populate: {
          image: {
            fields: ["url", "id", "alternativeText"],
          },
        },
      },
      HeadImage: {
        fields: ["alternativeText", "url", "id"],
      },
      SideImage1: {
        fields: ["alternativeText", "url", "id"],
      },
      SideImage2: {
        fields: ["alternativeText", "url", "id"],
      },
      commonQuestions: true,
    },
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/wedding-pages?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchContactPage() {
  const query = QueryString.stringify({
    populate: {
      pageBar: {
        populate: {
          barIcon: {
            fields: ["url", "id"],
          },
          breadCrumbs: true,
        },
      },
      bookingCard: true,
      contactOptions: {
        populate: {
          icon: {
            fields: ["url", "id", "alternativeText"],
          },
        },
      },
    },
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-pages?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchServicesSlug(targetSlug: string) {
  const query = QueryString.stringify({
    populate: {
      pageBar: {
        populate: {
          breadCrumbs: true,
        },
      },
      priceList: true,
      specialOffer: {
        populate: {
          image: {
            fields: ["alternativeText", "url", "id"],
          },
        },
      },
      benefits: {
        populate: {
          icon: {
            fields: ["alternativeText", "url", "id"],
          },
        },
      },
      headImage: {
        fields: ["alternativeText", "url", "id"],
      },
      serviceDetail: true,
      tabList1: {
        populate: {
          pointers: {
            populate: {
              icon: {
                fields: ["alternativeText", "url", "id"],
              },
            },
          },
        },
      },
      tabList2: {
        populate: {
          pointers: {
            populate: {
              icon: {
                fields: ["alternativeText", "url", "id"],
              },
            },
          },
        },
      },
      commonQuestions: true,
    },
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/service-detail-pages?${query}&filters[slug][$eq]=${targetSlug}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data[0] || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export async function fetchAllServicesSlug() {
  const query = QueryString.stringify({
    // populate: {
    //   pageBar: {
    //     populate: {
    //       breadCrumbs: true,
    //     },
    //   },
    //   priceList: true,
    //   specialOffer: {
    //     populate: {
    //       image: {
    //         fields: ["alternativeText", "url", "id"],
    //       },
    //     },
    //   },
    //   benefits: {
    //     populate: {
    //       icon: {
    //         fields: ["alternativeText", "url", "id"],
    //       },
    //     },
    //   },
    //   headImage: {
    //     fields: ["alternativeText", "url", "id"],
    //   },
    //   serviceDetail: true,
    //   tabList1: {
    //     populate: {
    //       pointers: {
    //         populate: {
    //           icon: {
    //             fields: ["alternativeText", "url", "id"],
    //           },
    //         },
    //       },
    //     },
    //   },
    //   tabList2: {
    //     populate: {
    //       pointers: {
    //         populate: {
    //           icon: {
    //             fields: ["alternativeText", "url", "id"],
    //           },
    //         },
    //       },
    //     },
    //   },
    //   commonQuestions: true,
    // },
    pagination: {
      pageSize: 1000, // Add this parameter to increase the limit
    },
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/service-detail-pages?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchCategorySubcategoryPage(pageSlugs: {
  category: string;
  subCategory: string;
}) {
  const { category, subCategory } = pageSlugs;
  try {
    const query = QueryString.stringify(
      {
        populate: {
          pageBar: {
            populate: {
              barIcon: {
                fields: ["url", "id"],
              },
              breadCrumbs: true,
            },
          },
          headImage: {
            fields: ["alternativeText", "url", "id"],
          },
          details: true,
          additionalDetails: true,
          categoryDetailList: {
            populate: {
              image: true,
              detailList1: {
                populate: {
                  icon: {
                    fields: ["id", "url"],
                  },
                },
              },
              detailList2: {
                populate: {
                  icon: {
                    fields: ["id", "url"],
                  },
                },
              },
            },
          },
          commonQuestions: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    let response;
    if (subCategory) {
      // fetch subCategory page data
      response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/category-subcategory-pages?${query}&filters[slug][$eq]=${subCategory}`
      );
    } else {
      // fetch category page data
      response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/category-subcategory-pages?${query}&filters[slug][$eq]=${category}`
      );
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchAllServices() {
  try {
    const query = QueryString.stringify(
      {
        populate: {
          categories: {
            populate: {
              icon: {
                fields: ["id", "url", "alternativeText"],
              },
              subCategories: {
                populate: {
                  sessions: true,
                  image: {
                    fields: ["id", "url", "alternativeText"],
                  },
                  icon: {
                    fields: ["id", "url", "alternativeText"],
                  },
                  services: {
                    populate: {
                      sessions: true,
                      image: {
                        fields: ["id", "url", "alternativeText"],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/service-items?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const fetchSEOData = async (slug?: string) => {
  try {
    const query = QueryString.stringify(
      {
        populate: {
          image: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    // const allPages = data.data;
    let response = null;

    if (slug) {
      // fetch with slug
      response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/page-seos?${query}&filters[slug][$eq]=${slug}`
      );
    } else {
      // fetch for home page
      response = await fetch(
        `${
          process.env.NEXT_PUBLIC_STRAPI_URL
        }/api/page-seos?${query}&filters[slug][$eq]=${"/"}`
      );
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data[0] || defaultMetaData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

interface SaveGiftCardDetailServiceProps {
  fromName: string;
  fromEmail: string;
  instructions: string;
  toName: string;
  toEmail: string;
  toCountryCode: string;
  toPhoneNumber: string;
}

export const saveGiftCardDetailService = async (
  pageData: SaveGiftCardDetailServiceProps
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/gift-cards`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          FromName: pageData.fromName,
          FromEmail: pageData.fromEmail,
          Instruction: pageData.instructions,
          ToName: pageData.toName,
          ToEmail: pageData.toEmail,
          ToCountryCode: pageData.toCountryCode,
          ToPhoneNumber: pageData.toPhoneNumber,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
};
