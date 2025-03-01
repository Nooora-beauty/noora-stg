"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { dummyPageBarProps } from "../constant";
import { motion } from "motion/react";

interface CancellationPolicyScreenProps {
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

const CancellationPolicyScreen: React.FC<
  CancellationPolicyScreenProps
> = () => {
  return (
    // <div className="w-full pt-[130px] lg:pt-[144px]">
    //   <PageBar
    //     sectionDetails={data?.pageBar}
    //     className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
    //   />
    //   <div className="common-container !w-[90%] !max-w-[1242px] !mb-[100px]">
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.headContent?.body,
    //       }}
    //     />
    //     <h2 className="title">{data?.cookiesSectionTitle}</h2>

    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.cookiesSectionContent?.body,
    //       }}
    //     />

    //     <h2 className="title">{data?.personalInformationSectionTitle}</h2>

    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.personalInformationSectionContent?.body,
    //       }}
    //     />

    //     <h2 className="title">{data?.disclosureSectionTitle}</h2>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.disclosureSectionContent?.body,
    //       }}
    //     />

    //     <h2 className="title">{data?.dataTransferSectionTitle}</h2>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.dataTransferSectionContent?.body,
    //       }}
    //     />

    //     <h2 className="title">{data?.updatingInformationSectionTitle}</h2>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.updatingInformationSectionContent?.body,
    //       }}
    //     />
    //   </div>
    // </div>

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
                text: "Cancellation Policy",
                url: "",
              },
            ],
            pageTitle: "Cancellation Policy",
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

        {/* this */}


        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          }}
          className="content-container"
  
        >
          <ol className="list">
            <li>
              <b>{`Cancellation Policy`}</b>
              <ol className="list">
                <li>
                {`  Clients are required to notify Nooora of any cancellations or
                  rescheduling requests within a reasonable notice period,
                  subject to the mentioned slabs. Cancellations will only be
                  accepted in writing via WhatsApp, or call.`}
                </li>
                <li>
                {`  Cancellation Charges: will be calculated on the basis of the
                  time we receive your written cancellation request.Cancellation
                  charges (calculated on the total package amount/individual
                  service cost) will be applicable as follows:`}
                  <ul>
                    <li>
                      {`Cancellations up to 4 hours before the booking: No charge.`}
                    </li>
                    <li>{`Cancellations at the door: AED 100 fee.`}</li>
                    <li>{`No-shows: Charged at full booking value.`}</li>
                  </ul>
                </li>
                <li>
                 {` Rescheduling: Postpone/Prepone of your service as rescheduling
                  will be treated as a cancellation of the previous service and
                  booking of a new service , After technician/therapist has
                  arrived at your doorstep and the new and is subject to
                  availability.`}
                </li>
              </ol>
            </li>
            <li>
              <b>{`Exceptions to the Cancellation Policy`} </b>
              <p>
         {`       In the case of a hospital emergency or a similarly serious
                situation, Nooora may accept a free cancellation. Other
                exceptions may be considered on a case-by-case basis, such as
                natural disasters, severe weather conditions, or other
                uncontrollable events.`}
              </p>
            </li>
            <li>
              <b>{`Amendment and Modifications`}</b>
              <p>
                {`The company does not accept amendment requests to the
                reservation`}
              </p>
            </li>
            <li>
              <b>{`No-Show Policy`}</b>
              <p>
                {`A 100% fee is charged in case of no show ,you are not available
                at the venue at the said date and time or you don’t start your
                package without cancelling it.`}
              </p>
            </li>

            <li>
              <b>{`Payment`}</b>
              <p>
                <b>{`Accepted Payment Methods: `}</b> 
               {` Payment for your appointment
                can be made in the following ways:`}
              </p>

              <ul className="list">
                <li>{`Cash immediately after the service.`}</li>
                <li>{`Credit Card in advance (Visa, Amex or Mastercard only)`}</li>
                <li>{`Apple Pay and Samsung Pay`}</li>
              </ul>
              <p>
               {` Please inform us in advance so we can bring a credit card
                machine. (Subject to availability)`}
              </p>
            </li>
            <li>
              <b>{`General Notes `}</b>
              <p>
               {` All the refunds shall be done by the company directly to you.
                Any employee, Director, officer, or Manager is not responsible
                for ensuring any refunds whatsoever.`}
              </p>
              <p>
               {` Your bank may debit its own separate charges from refunds made
                to your credit card or bank account.`}
              </p>
              <p>
               {` All refund and cancellation policies are subject to change at
                Nooora's discretion and will be communicated to clients as
                necessary.`}
              </p>
              <p>
                {`Clients are responsible for providing accurate and timely
                information when requesting refunds or cancellations. Failure to
                do so may result in delays or denial of the request.`}
              </p>
              <p>
               {` Nooora strives to ensure client satisfaction with all services
                provided. Clients are encouraged to communicate any issues or
                concerns immediately to allow for prompt resolution.`}
              </p>
              <p>
              {`  Nooora Beauty Concierge is a trademark registered brand
                operating under the legal identity of Shams Beauty Saloon and
                here are the official channel of communication:`}
              </p>
              <p>
               {` For call: +971555007326 | Email: `}
                <a href="mailto:info@nooora.ae">{`info@nooora.ae`} </a>
              </p>
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default CancellationPolicyScreen;
