"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { dummyPageBarProps } from "../constant";
import { motion } from "motion/react";

interface RefundPolicyScreenProps {
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

const RefundPolicyScreen: React.FC<RefundPolicyScreenProps> = () => {
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
                  text: "Refunds Policy",
                  url: "",
                },
              ],
              pageTitle: "Refund Policy",
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
          {/* <ol className="list">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`1. Refunds`}</b>
            <p className="paragraph">
              {`Nooora offers refunds under specific circumstances, at
            Nooora's sole discretion. Clients can cancel or reschedule the
            services according to the terms mentioned below. Refunds are
            typically issued when the service provided was fundamentally faulty
            or grossly failed to meet the client's expectations at the sole
            discretion of Nooora.`}
            </p>
            <b> {`1.1 Non-refundable Services or Products`}</b>
            <p className="paragraph">
              {`
            
            Certain services or products are
            strictly non-refundable. The details of non-refundable services or
            products time of purchase or booking. Clients acknowledge and accept
            that these terms are non-negotiable.`}
            </p>

            <b> {`1.2 Refund Eligibility`}</b>
            <p className="paragraph">
              {`Refund eligibility may be determined based on
            the following criteria:`}
            </p>

            <ul className="list">
              <li>
                {`The nature of the complaint and whether it is covered under our
              satisfaction guarantee.`}
              </li>
              <li>The time elapsed since the service was provided.</li>
              <li> {`The client's history of complaints and refunds.`}</li>
            </ul>

            <b> {`1.3 Exception`}</b>

            <p className="paragraph">
              {`In the case of a hospital emergency or a similarly
            serious situation, Nooora may accept a free cancellation or offer a
            refund at its sole discretion.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <p className="paragraph">
            {`2. Refund requests made after the specified time frame may be
            considered on a case-by-case basis, but are not guaranteed to be
            accepted.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`3. Process for Requesting a Refund`}</b>

            <p className="paragraph">
              {`3.1 Request Submission: To
            request a refund, clients need to provide specific information,
            including the mode of payment used, details of the service or
            product, and the reason for the refund request. Refunds are
            processed back to the original payment method, whether a credit card
            or bank account. For cash payments, refunds will be issued via bank
            transfer. The processing time for refunds is typically 7 working
            days after the refund is confirmed.`}
            </p>

            <p className="paragraph">
              {`3.2 Refund requests must be submitted in email to info@nooora.ae or
            customer care support to ensure proper documentation and processing.`}
            </p>

            <p className="paragraph">
              {`3.3 Clients may need to provide additional documentation or evidence
            to support their refund request, such as photographs of the service
            provided, receipts, or correspondence with Nooora’s staff.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`4. Fees or Deductions Applied to Refunds `}</b>
            <br/>
            <br/>
            <b> {`4.1 Faulty Service`}</b>
            <p className="paragraph">
            
              {`If the
            service provided was faulty enough to warrant an approval for a
            refund, there are no deductions. Subject to Nooora's discretion, a
            partial refund of 50% of the service value may be issued if the
            matter is not fully convincing to Nooora’s satisfaction if the
            matter for an approval for a refund.`}
            </p>

            <b> {`4.2 Cancellation Charges`}</b>
            <p className="paragraph">
              {`
Refunds for services cancelled under non-faulty circumstances will incur standard cancellation charges as outlined in Section 7.`}
            </p>
            <p className="paragraph">
              {`4.3 Your Bank may debit its own separate charges from refunds made
            to your credit card or bank account.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`5.Refund Processing`}</b>
            <br />
            <br />
            <b> {`5.1 Mode of Refund`}</b>

            <p className="paragraph">
              {`Refunds are issued based on
            the original mode of payment:`}
            </p>
            <ul className="list">
              <li>
                {`Credit card payments will be refunded back to the credit
              card.Credit card payments will be refunded back to the credit
              card.`}
              </li>
              <li>
                Cash payments will be refunded via bank transfer or cash
                deposit.
              </li>
            </ul>

            <p className="paragraph">
              {`5.2 The processing time for refunds is typically 7 working days
            after the refund is confirmed, Clients will be notified via email or
            SMS once their refund has been processed.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`6. Partial Refunds `}</b>
            <p className="paragraph">
              {`Partial refunds may be issued under certain
            conditions as outlined in Section 4.1. This may include instances
            where only part of the service was unsatisfactory or when the
            client's request is not fully convincing but warrants some
            compensation. Partial refunds will be calculated based on the
            proportion of the service that was unsatisfactory and any applicable
            cancellation charges.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`7. Amendment and Modifications `}</b>
            <p className="paragraph">
              {`
            The company does not accept amendment requests to the reservation`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`8. No-Show Policy `}</b>
            <p className="paragraph">
              {`
            A 100% fee is charged in case of no show ,you are not available at
            the venue at the said date and time or you don’t start your package
            without cancelling it.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`9. Additional Refund Policy Details `}</b>
            <p className="paragraph">
              {`
            Your advance deposit after deducting cancellation charges will be
            refundable to you.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`10. Payment `}</b>
            <br/>
            
            <b> {`Accepted Payment Methods:  `}</b>
            <p className="paragraph">
              {`
            Payment for your appointment can be made
            in the following ways:`}
            </p>
            <ul className="list">
              <li>Cash immediately after the service.</li>
              <li>Credit Card in advance (Visa, Amex or Mastercard only)</li>
              <li>Apple Pay and Samsung Pay</li>
            </ul>
            <p className="paragraph">
              {`Please inform us in advance so we can bring a credit card machine.
         (Subject to availability)`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="paragraph"
          >
            <b> {`11. General Notes  `}</b>
            <p className="paragraph">
              {`All the refunds shall be done by the company
            directly to you. Any employee, Director, officer, or Manager is not
            responsible for ensuring any refunds whatsoever. Your bank may debit
            its own separate charges from refunds made to your credit card or
            bank account. All refund and cancellation policies are subject to
            change at Nooora's discretion and will be communicated to clients as
            necessary. Clients are responsible for providing accurate and timely
            information when requesting refunds or cancellations. Failure to do
            so may result in delays or denial of the request. Nooora strives to
            ensure client satisfaction with all services provided. Clients are
            encouraged to communicate any issues or concerns immediately to
            allow for prompt resolution. Nooora Beauty Concierge is a trademark
            registered brand operating under the legal identity of Shams Beauty
            Saloon and here are the official channel of communication: For call:
            +971555007326 | Email:`}{" "}
              <a href="mailto:info@nooora.ae">{`info@nooora.ae`} </a>
            </p>
          </motion.div>

          </ol> */}

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
            // dangerouslySetInnerHTML={{
            //   __html: data?.headContent?.body,
            // }}
          >
            <ol className="list">
              <li>
                <b>Refunds</b>
                <p>
                 {`Nooora offers refunds under specific circumstances, at
                  Nooora's sole discretion. Clients can cancel or reschedule the
                  services according to the terms mentioned below. Refunds are
                  typically issued when the service provided was fundamentally
                  faulty or grossly failed to meet the client's expectations at
                  the sole discretion of Nooora.`

                 } 
                </p>

                <ol className="list">
                  <li>
                    <b>{`Non-refundable Services or Products`}</b>
                    <p>
                      {`Certain services or products are strictly non-refundable.
                      The details of non-refundable services or products time of
                      purchase or booking. Clients acknowledge and accept that
                      these terms are non-negotiable.`}
           
                    </p>
                  </li>
                  <li>
                    <b>{`Refund Eligibility`}</b>
                    <p>
                     {`Refund eligibility may be determined based on the
                      following criteria:`}
                    </p>

                    <ul className="list">
                      <li>
                       {`The nature of the complaint and whether it is covered
                        under our satisfaction guarantee.`}
                      </li>
                      <li>{`The time elapsed since the service was provided.`}</li>
                      <li>{`The client's history of complaints and refunds.`}</li>
                    </ul>
                  </li>
                  <li>
                    <b>{`Exception`}</b>
                    <p>
                      {`In the case of a hospital emergency or a similarly serious
                      situation, Nooora may accept a free cancellation or offer
                      a refund at its sole discretion.`}
                    </p>
                  </li>
                </ol>
              </li>

              <li>
               {`Refund requests made after the specified time frame may be
                considered on a case-by-case basis, but are not guaranteed to be
                accepted.`}
              </li>

              <li>
                <b>{`Process for Requesting a Refund`}</b>
                <ol className="list">
                  <li>
                   {`Request Submission: To request a refund, clients need to
                    provide specific information, including the mode of payment
                    used, details of the service or product, and the reason for
                    the refund request. Refunds are processed back to the
                    original payment method, whether a credit card or bank
                    account. For cash payments, refunds will be issued via bank
                    transfer. The processing time for refunds is typically 7
                    working days after the refund is confirmed.`}
                  </li>
                  <li>
                   {`Refund requests must be submitted in email to info@nooora.ae
                    or customer care support to ensure proper documentation and
                    processing.`}
                  </li>
                  <li>
                   {`Clients may need to provide additional documentation or
                    evidence to support their refund request, such as
                    photographs of the service provided, receipts, or
                    correspondence with Nooora’s staff.`}
                  </li>
                </ol>
              </li>
              <li>
                <b>{`Fees or Deductions Applied to Refunds`}</b>
                <ol className="list">
                  <li>
                    <b>{`Faulty Service`}</b>
                    <p>
                      {`If the service provided was faulty enough to warrant an
                      approval for a refund, there are no deductions. Subject to
                      Nooora's discretion, a partial refund of 50% of the
                      service value may be issued if the matter is not fully
                      convincing to Nooora’s satisfaction if the matter for an
                      approval for a refund.`}
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <b>{`Refund Processing`}</b>

                <ol className="list">
                  <li>
                    <b>{`Mode of Refund`}</b>
                    <p>
                     {`Refunds are issued based on the original mode of payment:`}
                    </p>

                    <ul className="list">
                      <li>
                      {`Credit card payments will be refunded back to the credit
                        card.`}
                      </li>
                      <li>
                     {`Cash payments will be refunded via bank transfer or cash
                        deposit.`}
                      </li>
                    </ul>
                  </li>
                  <li>
          {`The processing time for refunds is typically 7 working days
                    after the refund is confirmed, Clients will be notified via
                    email or SMS once their refund has been processed.`}
                  </li>
                </ol>
              </li>
              <li>
                <b>{`Partial Refunds`} </b>
                <p>
                {`Partial refunds may be issued under certain conditions as
                  outlined in Section 4.1. This may include instances where only
                  part of the service was unsatisfactory or when the client's
                  request is not fully convincing but warrants some
                  compensation. Partial refunds will be calculated based on the
                  proportion of the service that was unsatisfactory and any
                  applicable cancellation charges.`}
                </p>
              </li>

              <li>
                <b>{`Additional Refund Policy Details`}</b>
                <p>
                 {`Your advance deposit after deducting cancellation charges will
                  be refundable to you.`}
                </p>
              </li>
              <li>
                <b>{`Payment`}</b>
                <p>
                  <b>{`Accepted Payment Methods:`} </b> {`Payment for your appointment
                  can be made in the following ways:`}
                </p>

                <ul className="list">
                  <li>{`Cash immediately after the service.`}</li>
                  <li>
                  {`Credit Card in advance (Visa, Amex or Mastercard only)`}
                  </li>
                  <li>{`Apple Pay and Samsung Pay`}</li>
                </ul>
                <p>
                  {`Please inform us in advance so we can bring a credit card
                  machine. (Subject to availability)`}
                </p>
              </li>
              <li>
                <b>{`General Notes`}</b>
                <p>
                  {`All the refunds shall be done by the company directly to you.
                  Any employee, Director, officer, or Manager is not responsible
                  for ensuring any refunds whatsoever.`}
                </p>
                <p>
                  {`Your bank may debit its own separate charges from refunds made
                  to your credit card or bank account.`}
                </p>
                <p>
                 {`All refund and cancellation policies are subject to change at
                  Nooora's discretion and will be communicated to clients as
                  necessary.`}
                </p>
                <p>
                 {`Clients are responsible for providing accurate and timely
                  information when requesting refunds or cancellations. Failure
                  to do so may result in delays or denial of the request.`}
                </p>
                <p>
                 {`Nooora strives to ensure client satisfaction with all services
                  provided. Clients are encouraged to communicate any issues or
                  concerns immediately to allow for prompt resolution.`}
                </p>
                <p>
                 {`Nooora Beauty Concierge is a trademark registered brand
                  operating under the legal identity of Shams Beauty Saloon and
                  here are the official channel of communication:`}
                </p>
                <p>
                 {`For call: +971555007326 | Email: `}
                  <a href="mailto:info@nooora.ae">{`info@nooora.ae`}</a>
                </p>
              </li>
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyScreen;
