import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import ContactDetailsSection from "@/components/library/sections/ContactDetailsSection";
import ContactFormSection from "@/components/library/sections/ContactFormSection";

export interface ContactScreenProps {
  title?: string;
  contactData: {
    pageBar: {
      pageTitle: string;
      barIcon: {
        url: string;
      };
      breadCrumbs: {
        text: string;
        url: string;
      }[];
    };
    pageSubtitle: string;
    bookingCard: {
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
    contactOptions: {
      text: string;
      icon: {
        url: string;
      };
    }[];
    FormTitle: string;
  };
}

const ContactScreen: React.FC<ContactScreenProps> = async ({ contactData }) => {
  const { FormTitle, ...restContactData } = contactData;
  return (
    <div className="w-full pt-[130px] lg:pt-[144px]">
      <PageBar
        sectionDetails={restContactData.pageBar}
        className="!mt-[20px] md:!mt-[24px]"
      />
      <ContactDetailsSection contactData={restContactData} />
      <ContactFormSection title={FormTitle} />
    </div>
  );
};

export default ContactScreen;
