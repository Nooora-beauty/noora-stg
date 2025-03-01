"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { dummyPageBarProps } from "../constant";
import { motion } from "motion/react";

interface GiftPackageScreenProps {
  title?: string;
  data: {
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

    headContent: {
      body: string;
    };
    cookiesSectionTitle: string;
    cookiesSectionContent: {
      body: string;
    };
    personalInformationSectionTitle: string;
    personalInformationSectionContent: {
      body: string;
    };
    disclosureSectionTitle: string;
    disclosureSectionContent: {
      body: string;
    };
    dataTransferSectionTitle: string;
    dataTransferSectionContent: {
      body: string;
    };
    updatingInformationSectionTitle: string;
    updatingInformationSectionContent: {
      body: string;
    };
  };
}

const GiftPackageScreen: React.FC<GiftPackageScreenProps> = () => {
  return (
    <div>
      <div className="w-full pt-[130px] lg:pt-[144px]">
        {/* <PageBar
        sectionDetails="Terms of Use"
        className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
      /> */}
        <PageBar
          {...{
            ...dummyPageBarProps,
            sectionDetails: {
              ...dummyPageBarProps.sectionDetails,
              breadCrumbs: [
                {
                  text: "Home",
                  url: "/",
                },
                {
                  text: "Gift and Package Policy",
                  url: "",
                },
              ],
              pageTitle: "Gift and Package Policy",
              barIcon: {
                url: "/uploads/policies_259c935d5c.png",
              },
            },
          }}
          className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
        />

        <div className="common-container !w-[90%] !max-w-[1242px] !mb-[100px]">
          {/* <div
          dangerouslySetInnerHTML={{
            __html: data?.headContent?.body,
          }}
        />
        <h2 className="title">{data?.cookiesSectionTitle}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: data?.cookiesSectionContent?.body,
          }}
        />

        <h2 className="title">Terms of Use</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: data?.personalInformationSectionContent?.body,
          }}
        /> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            {`Nooora Gift cards can be purchased online through our website or by
            contacting our customer service team. We offer both monetary value
            gift cards and service-specific gift cards, catering to various
            needs and preferences. and are activated at the time of purchase for
            immediate use. Customers can choose between monetary gift cards (or
            service-based gift cards, which are applicable to specific services.
            They can be redeemed for any of our services and products but cannot
            be used to purchase other gift cards. The remaining balance on a
            gift card can be checked online or by contacting customer service,
            and multiple gift cards can be used for a single purchase. Gift
            cards are valid for one year from the date of purchase, after which
            any remaining balance will be forfeited, and their validity cannot
            be extended. No extensions or refunds will be provided after the
            expiry date.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            {`They are non-transferable, non-refundable, and cannot be exchanged
            for cash. If the total value of a purchase is less than the gift
            card value or inconvenience caused by the customer's failure to use
            the package within the validity period, the remaining balance will
            be retained for future use. Nooora is not responsible for lost,
            stolen, or damaged gift cards, and such cards will not be replaced.
            We reserve the right to cancel a gift card if any fraudulent
            activity is suspected, This includes, but is not limited to,
            unauthorized use or any actions that violate the terms and
            conditions of the gift card. These cards will not be replaced or
            refunded under any circumstances. Customers are advised to schedule
            and utilize their sessions promptly to avoid forfeiture.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            {`Nooora also reserves the right to amend the terms and conditions of
            the gift card policy at any time, with changes posted on our website
            effective immediately.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            {`For any questions or assistance, please contact our customer service
            team. Gift cards purchased during promotions are subject to specific
            promotion terms, and those purchased from third-party retailers are
            subject to the retailer's terms and conditions. This policy is
            governed by the laws of the United Arab Emirates, with any disputes
            subject to the exclusive jurisdiction of the courts in Dubai, in
            case of any legal disputes, the decision of Nooora will be final,
            and the applicable laws will prevail.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
          <b> {`Usage Conditions :`}</b> {` Gift cards can be used multiple times until the
            balance is exhausted, provided that the minimum order value (MOV)
            for the selected service is met during each use. The MOV varies by
            service area, and customers are advised to check the specific MOV
            requirements for their region before booking. Nooora retains the
            right to determine service eligibility and may refuse service based
            on internal policies, customer behavior, or other reasonable
            grounds. The decision to provide or deny service is at Nooora's sole
            discretion.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
               <b> {`Amendments to Terms : `}</b> 
            {`Nooora reserves the right to amend the gift
            card terms and conditions and conditions of the 5+1 package policy
            at any time. Any changes will be effective immediately upon posting
            on our website. It is the customer's responsibility to review the
            terms periodically. Nooora reserves the right to determine
            eligibility for services. We maintain the discretion to refuse
            service based on internal policies and customer conduct.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          > <b> {`Transferability and Sharing : `}</b> 
            {` The 5+1 package is non-transferable
            and intended for the use of the purchasing customer only. Sharing or
            transferring sessions to others is not allowed and may result in the
            cancellation of the package without refund.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          ><b> {`Package Suspension and Reactivation :`}</b>
            {` Customers may request a
            temporary suspension of their 5+1 package in case of valid reasons
            such as medical emergencies or extended travel. Suspensions are
            subject to approval and can only be reactivated once within the
            validity period.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          ><b> {`Additional Fees and Adjustments :`}</b>
            {` Any additional services requested
            beyond the package's terms or outside the specified area’s MOV may
            incur extra charges. Adjustments to services under the package must
            meet the MOV requirements and are subject to availability.`}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GiftPackageScreen;
