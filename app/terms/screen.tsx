"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { dummyPageBarProps } from "../constant";
import { motion } from "motion/react";

interface TermsScreenProps {
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

const TermsScreen: React.FC<TermsScreenProps> = (
  {
    // data
  }
) => {
  return (
    // <div classnameName="w-full pt-[130px] lg:pt-[144px]">
    //   <PageBar
    //     sectionDetails={data?.pageBar}
    //     classnameName="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
    //   />
    //   <div classnameName="common-container !w-[90%] !max-w-[1242px] !mb-[100px]">
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.headContent?.body,
    //       }}
    //     />
    //     <h2 classnameName="title">{data?.cookiesSectionTitle}</h2>

    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.cookiesSectionContent?.body,
    //       }}
    //     />

    //     <h2 classnameName="title">{data?.personalInformationSectionTitle}</h2>

    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.personalInformationSectionContent?.body,
    //       }}
    //     />

    //     <h2 classnameName="title">{data?.disclosureSectionTitle}</h2>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.disclosureSectionContent?.body,
    //       }}
    //     />

    //     <h2 classnameName="title">{data?.dataTransferSectionTitle}</h2>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: data?.dataTransferSectionContent?.body,
    //       }}
    //     />

    //     <h2 classnameName="title">{data?.updatingInformationSectionTitle}</h2>
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
        classnameName="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
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
                  text: "Terms of Use",
                  url: "",
                },
              ],
              pageTitle: "Terms of Use",
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
        <h2 classnameName="title">{data?.cookiesSectionTitle}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: data?.cookiesSectionContent?.body,
          }}
        />

        <h2 classnameName="title">Terms of Use</h2>

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
            // dangerouslySetInnerHTML={{
            //   __html: data?.headContent?.body,
            // }}
          >
            {/* <ol classnameName="list">
    <li>
       <b className="pl-2">General Terms of Use &amp; Service<br /></b>
      &nbsp;1.1 This website, 
       <a href="https://nooora.ae/">https://nooora.ae/</a> 
      (the “Site”), is a trademark registered by Nooora Beauty Concierge (“Company”), a company incorporated and existing in accordance with the laws of the United Arab Emirates. When you access, browse, or use this Site, you accept, without limitation or qualification, the terms and conditions set forth herein. These Terms and Conditions of use and any additional terms posted on this Site together constitute the entire agreement between you and the Company. 
    </li>
    <li> <b className="pl-2">General Provisions.</b>2.1 Modification of Terms.The Company may add to, modify, or remove any part of these Terms and Conditions of Use at any time as it may deem fit, without notice. Any changes to these Terms and Conditions of Use or any terms posted on this Site apply as soon as they are posted. By continuing to use this Site after any changes are posted, you are indicating your acceptance of those changes. 2.2 Changes to Content.The Company may add, change, discontinue, remove, or suspend any other Content posted on this Site, including features and specifications of products described or depicted on the Site, temporarily or permanently, at any time, without notice and without liability. 2.3 Security and Verification.The Company reserves the right to undertake all necessary steps to ensure that the security, safety, and integrity of the Company’s systems as well as its clients' and users' interests are and remain well-protected. Towards this end, the Company may take various steps to verify and confirm the authenticity, enforceability, and validity of orders placed by you. 2.4 Cancellation of Bookings.If the Company, in its sole and exclusive discretion, concludes that the said bookings are not or do not reasonably appear to be authentic, enforceable, or valid, then the Company may cancel the said bookings at any time up to the start of the on or before the expected date of visit to your said property. 2.5 Right to Alter or Discontinue Site.The Company reserves its exclusive right in its sole discretion to alter, limit, or discontinue the Site or any material posted herein, in any respect. The Company shall have no obligation to take the needs of any User into consideration in connection therewith. 2.6 Right to Deny Access.The Company reserves its right to deny, in its sole discretion, any user access to this Site or any portion thereof without notice. 2.7 No Waiver.No waiver by the Company of any provision of these Terms and Conditions shall be binding except as set forth in writing and signed by its duly authorized representative. </li>
    <li> <b className="pl-2">Disputes</b>.3.1 Arbitration If any dispute arises between you and the Company during your use of the Site or thereafter, in connection with and arising from your use or attempt to use this Site, the dispute shall be referred to arbitration. Both parties shall agree to a sole arbitrator. The place of arbitration shall be Dubai (United Arab Emirates). The arbitration proceedings shall be conducted in English/Arabic. 3.2 Governing Law.The arbitration proceedings shall be governed and construed in accordance with the Arbitration and Conciliation Act and modifications thereof as in force at the relevant time. 3.3 Jurisdiction.These terms and conditions are governed by and shall be construed in accordance with the laws of the United Arab Emirates, and any dispute shall exclusively be subject to the jurisdiction of the appropriate Courts situated in Dubai, United Arab Emirates. </li>
    <li> <b className="pl-2">Services Booking Terms</b>4.1 Indicative PicturesYou acknowledge that pictures of the services shown on the Site are indicative and may not be representative of the actual products or services. 4.2 Pricing.The rates/prices of the services shown on the Site are quotations only and no blocking has been made. Prices/taxes are subject to changes and availability. 4.3 Booking Confirmation.Booking of services and beauty packages is subject to availability and confirmation by the Company. Special rates shall apply for peak seasons and special hours, and the inclusions of such packages may vary without notice. 4.4 Substitute Services.In case the Company is unable to provide the services as shown on the Site, it reserves the right to offer substitute services of the same standard/category unless otherwise specified. 4.5 Changes in Terms.The terms of the services may be subject to change at short notice due to circumstances beyond the Company’s control, including but not limited to force majeure events. 4.6 Binding Contract.By making a booking through our Customer support or Website, you make an offer to purchase the beauty service or package from the Company. Appointments are facilitated by the Company's customer service team, who collect the necessary information from the customer to arrange the appointment. A detailed quotation specifying the services and associated costs is provided to the customer for review. The appointment shall only be confirmed upon the customer’s acceptance of the quotation, thereby ensuring transparency and mutual agreement. The Company shall not be liable for any disputes, claims, or misunderstandings arising from the appointment process once the quotation has been accepted by the customer. Once we accept your booking, a legally binding contract is formed between you and the Company. 4.7 Service Provider Terms.The service provider’s general contractual terms and conditions, made available by us to you via a link or full text before the booking, will apply in addition to those set out here. These may include provisions relating to payment procedures, default, liability, cancellations, changes of bookings, and refunds (if available). 4.8 Conflict of Terms.Where there is a conflict between any information on our Site and these terms and conditions, these terms and conditions shall prevail. Where there is a conflict between different parts of our terms the terms set out herein shall take precedence to ensure clarity and consistency in our service deliver..4.9 Performance and Availability.The Company assumes no liability for the performance of products and packages and provides no guarantee regarding their quality or fitness as represented. The Company also does not guarantee the availability of a specific product. 4.10 Insurance and Protective Measures.Clients are advised to obtain suitable insurance or other protective measures to safeguard themselves. 4.11 No Changes Post-Confirmation.Once the service or package is confirmed, no changes will be made at any cost. 4.11.1. The Company reserves the right to manage changes to booked services under the following conditions:.
      <ol  type="a">
        <li>If the modification of services results in a total value below the minimum order requirement for your area, the Company reserves the right to deny the booking.</li>
        <li>If the reduction in services results in the total amount equaling the bare minimum order value, the customer is obligated to pay the designated minimum order value specific to their area, as outlined in the provided quotation.</li>
      </ol>.4.12 Cancellation and Modification.Your right to cancel or modify your booking is determined by the applicable terms and conditions of the Company. It is your responsibility to inform us in writing of such a request, specifying your booking reference. The time of receipt by us of the declaration of cancellation shall be decisive for the time of withdrawal and cancellation fees to be applied by the Company. 4.13 Customer Behavior.Customers must ensure appropriate behavior and avoid any nuisance, quarrel, or manhandling with technicians or drivers during the service. In cases of such behavior, the Company has the authority to terminate the service, and no loss or claim resulting from such incidents shall be payable. 4.14 Service Availability :.
      <ol type="a">
        <li> <b className="pl-2">Alternative Service Provision</b>: In the event of non-availability of the requested service, the Company may provide the service through one of its sister brands within the same group. All terms and conditions outlined herein shall apply to such alternative service provision.</li>
        <li> <b className="pl-2">Platform Fee:</b> The Company reserves the right to charge a platform fee, calculated as a percentage of the service cost. This fee is imposed to cover the costs of recent technical integrations undertaken to enhance service delivery, ensuring timely and high-quality performance. The specific percentage of the platform fee will be indicated in the relevant quotation or invoice</li>
      </ol>.
    </li>
    <li> <b className="pl-2">Other Terms and Conditions</b>.5.1 Intoxication and Drugs.Customers found to be intoxicated or under the influence of drugs or similar substances will not be allowed to continue the service. Full charges will still apply during these breaks. 5.2 Breaks During Service.Customers must take breaks only at specified times and are not allowed additional breaks except in emergencies. The Company allows a flexibility period of up to 15 minutes in the event of an emergency. Any delay beyond this timeframe will incur additional charges. Clients are also expected to be prepared and ready before the technician’s arrival to avoid any further delays. 5.3 Safety and Security.Customers are responsible for their safety and security as services are performed at their premises. The Company will not indemnify or be held liable for any damages or losses arising during the provision of services. 5.4 Service Completion.Once a service is completed, it is the customer’s responsibility to review the work and raise any concerns within a reasonable time. No claims will be entertained after a period of 7 days. 5.5 Jurisdiction.All services provided are subject to the jurisdiction of the Courts of Dubai, and clients agree to resolve any disputes in this jurisdiction...
    </li>
  </ol> */}

            <ol className="list">
              <li>
                 <b className="pl-2">{`General Terms of Use & Service`}</b>
                <ol className="list">
                  <li>
                     <b className="pl-2">{`This website`}</b>
                    {`This website,`}{" "}
                    <a href="https://nooora.ae/">{`https://nooora.ae/`}</a> {`(the
                    "Site"), is a trademark registered by Nooora Beauty
                    Concierge ("Company"), a company incorporated in accordance
                    with the laws of the UAE. By accessing this Site, you accept
                    the terms and conditions set forth herein. These Terms and
                    Conditions of Use constitute the entire agreement between
                    you and the Company.`}
                  </li>
                </ol>
              </li>

              <li>
                 <b className="pl-2">{`General Provisions`}</b>
                <ol className="list">
                  <li>
                  <b className="pl-2">{`Modification of Terms`}</b>
                    <ol className="list">
                      {`The Company may modify these Terms and Conditions without
                      notice. By continuing to use this Site, you accept the
                      updated terms.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Changes to Content`}</b>
                    <ol className="list">
                      {`The Company may change or remove content on this Site
                      without notice. The Company is not liable for these
                      changes.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Security and Verification`}</b>
                    <ol className="list">
                      {`The Company reserves the right to ensure the security of
                      its systems and clients. It may take steps to verify
                      orders placed by you.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Cancellation of Bookings`}</b>
                    <ol className="list">
                      {`The Company may cancel bookings deemed invalid.
                      Cancellations can occur at any time before the expected
                      date of service.`}
                    </ol>
                  </li>

                  <li>
                  <b className="pl-2">{`Right to Alter or Discontinue Site`}</b>
                    <ol className="list">
                      {`The Company reserves its exclusive right in its sole
                      discretion to alter, limit, or discontinue the Site or any
                      material posted herein, in any respect. The Company shall
                      have no obligation to take the needs of any User into
                      consideration in connection therewith.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2"> {`Right to Deny Access`}</b>
                    <ol className="list">
                      {`The Company reserves its right to deny, in its sole
                      discretion, any user access to this Site or any portion
                      thereof without notice.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2"> {`No Waiver`}</b>
                    <ol className="list">
                      {`No waiver by the Company of any provision of these Terms
                      and Conditions shall be binding except as set forth in
                      writing and signed by its duly authorized representative.`}
                    </ol>
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Disputes`}</b>
                <ol className="list">
                  <li>
                  <b className="pl-2"> {`Arbitration`}</b>
                    <ol className="list">
                    {`If any dispute arises between you and the Company during
                    your use of the Site or thereafter, in connection with and
                    arising from your use or attempt to use this Site, the
                    dispute shall be referred to arbitration. Both parties
                    shall agree to a sole arbitrator. The place of arbitration
                    shall be Dubai (United Arab Emirates). The arbitration
                    proceedings shall be conducted in English/Arabic.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Governing Law`}</b>
                    <ol className="list">
                      {`The arbitration proceedings shall be governed and
                      construed in accordance with the Arbitration and
                      Conciliation Act and modifications thereof as in force at
                      the relevant time.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Jurisdiction`}</b>
                    <ol className="list">
                      {`These terms and conditions are governed by and shall be
                      construed in accordance with the laws of the United Arab
                      Emirates, and any dispute shall exclusively be subject to
                      the jurisdiction of the appropriate Courts situated in
                      Dubai, United Arab Emirates.`}
                    </ol>
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Services Booking Terms`}</b>
                <ol className="list">
                  <li>
                  <b className="pl-2"> {`Indicative Pictures`}</b>

                    <li>
                      {`Pictures shown on the Site are indicative and may differ
                      from actual services.`}
                    </li>
                  </li>
                  <li>
                  <b className="pl-2">{`Pricing`}</b>

                    <li>
                      {`Prices shown on the Site are quotations and subject to
                      change.`}
                    </li>
                  </li>
                  <li>
                  <b className="pl-2">{`Booking Confirmation`}</b>

                    <li>
                      {`Bookings are subject to availability and confirmation.`}
                    </li>
                    <li>{`Special rates apply during peak seasons.`}</li>
                  </li>
                  <li>
                  <b className="pl-2">{`Substitute Services`}</b>

                    <li>
                      {`The Company reserves the right to offer substitute
                      services of the same standard.`}
                    </li>
                  </li>
                  <li>
                  <b className="pl-2">{`Changes in Terms`}</b>

                    <li>
                      {`Service terms may change due to unforeseen circumstances.`}
                    </li>
                  </li>

                  <li>
                  <b className="pl-2"> {`Binding Contract`}</b>

                    <li>
                      {`By making a booking through our Customer support or
                      Website, you make an offer to purchase the beauty service
                      or package from the Company. Appointments are facilitated
                      by the Company's customer service team, who collect the
                      necessary information from the customer to arrange the
                      appointment. A detailed quotation specifying the services
                      and associated costs is provided to the customer for
                      review. The appointment shall only be confirmed upon the
                      customer’s acceptance of the quotation, thereby ensuring
                      transparency and mutual agreement. The Company shall not
                      be liable for any disputes, claims, or misunderstandings
                      arising from the appointment process once the quotation
                      has been accepted by the customer. Once we accept your
                      booking, a legally binding contract is formed between you
                      and the Company.`}
                    </li>
                  </li>

                  <li>
                  <b className="pl-2">{`Service Provider Terms`}</b>

                    <li>
                      {`The service provider’s general contractual terms and
                      conditions, made available by us to you via a link or full
                      text before the booking, will apply in addition to those
                      set out here. These may include provisions relating to
                      payment procedures, default, liability, cancellations,
                      changes of bookings, and refunds (if available).`}
                    </li>
                  </li>

                  <li>
                  <b className="pl-2">{`Conflict of Terms`}</b>

                    <li>
                      {`Where there is a conflict between any information on our
                      Site and these terms and conditions, these terms and
                      conditions shall prevail. Where there is a conflict
                      between different parts of our terms the terms set out
                      herein shall take precedence to ensure clarity and
                      consistency in our service deliver`}
                    </li>
                  </li>
                  <li>
                  <b className="pl-2">{`Performance and Availability`}</b>

                    <li>
                      {`The Company assumes no liability for the performance of
                      products and packages and provides no guarantee regarding
                      their quality or fitness as represented. The Company also
                      does not guarantee the availability of a specific product.`}
                    </li>
                  </li>
                  <li>
                  <b className="pl-2">{`Insurance and Protective Measures`}</b>

                    <li>
                      {`Clients are advised to obtain suitable insurance or other
                      protective measures to safeguard themselves.`}
                    </li>
                  </li>

                  <li>
                  <b className="pl-2">
                      {`The Company reserves the right to manage changes to booked
                      services under the following conditions:`}
                    </b>
                    <ul className="list">
                      <li>
                        {`If the modification of services results in a total value
                        below the minimum order requirement for your area, the
                        Company reserves the right to deny the booking.`}
                      </li>
                      <li>
                        {`If the reduction in services results in the total amount
                        equaling the bare minimum order value, the customer is
                        obligated to pay the designated minimum order value
                        specific to their area, as outlined in the provided
                        quotation.`}
                      </li>
                    </ul>
                  </li>

                  <li>
                    <b className="pl-2">{`Cancellation and Modification`}</b>
                    <li>
                      {`Your right to cancel or modify your booking is determined
                      by the applicable terms and conditions of the Company. It
                      is your responsibility to inform us in writing of such a
                      request, specifying your booking reference. The time of
                      receipt by us of the declaration of cancellation shall be
                      decisive for the time of withdrawal and cancellation fees
                      to be applied by the Company.`}
                    </li>
                  </li>
 
                  <li>
                  <b className="pl-2"> {`Customer Behavior`}</b>
                    <li>
                      {`Customers must ensure appropriate behavior and avoid any
                      nuisance, quarrel, or manhandling with technicians or
                      drivers during the service. In cases of such behavior, the
                      Company has the authority to terminate the service, and no
                      loss or claim resulting from such incidents shall be
                      payable.`}
                    </li>
                  </li>

                  <li>
                  <b className="pl-2">{`Service Availability :`}</b>
                    <ul className="list">
                      <li>
                         <b className="pl-2">{`Alternative Service Provision:`}</b> {`In the event of
                        non-availability of the requested service, the Company
                        may provide the service through one of its sister brands
                        within the same group. All terms and conditions outlined
                        herein shall apply to such alternative service
                        provision.`}
                      </li>

                      <li>
                      <b className="pl-2">{`Platform Fee:`}</b>
                        {`The Company reserves the right to charge a platform fee,
                        calculated as a percentage of the service cost. This fee
                        is imposed to cover the costs of recent technical
                        integrations undertaken to enhance service delivery,
                        ensuring timely and high-quality performance. The
                        specific percentage of the platform fee will be
                        indicated in the relevant quotation or invoice`}
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Other Terms and Conditions`}</b>
                <ol>
                  <li>
                  <b className="pl-2">{`Intoxication and Drugs`}</b>
                    <ol>
                      {`Customers found to be intoxicated or under the influence
                      of drugs or similar substances will not be allowed to
                      continue the service . Full charges will still apply
                      during these breaks.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Breaks During Service`}</b>
                    <ol>
                    {`Customers must take breaks only at specified times and are
                    not allowed additional breaks except in emergencies . The
                    Company allows a flexibility period of up to 15 minutes in
                    the event of an emergency. Any delay beyond this timeframe
                    will incur additional charges. Clients are also expected
                    to be prepared and ready before the technician’s arrival
                    to avoid any further delays.`}
                    </ol>
                  </li>
                  <li>
                  <b className="pl-2">{`Safety and Security`}</b>
                    <ol>
                      {`Customers are responsible for their safety and security as
                      services are performed at their premises. The Company will
                      not indemnify any loss to the customer or their belongings
                      in any event.`}
                    </ol>
                  </li>
                  <li>
                     <b className="pl-2"> {`Smoking and Tobacco Use`}</b>
                    <ol>
                      {`Smoking, chewing tobacco, or using similar substances is
                      prohibited during services.`}
                    </ol>
                  </li>
                  <li>
                     <b className="pl-2"> {`Cancellation Policy`}</b>
                    <ol>
                      {`Customers must comply with the Company’s “Cancellation
                      Policy” as provided with the confirmation email or
                      message. Refunds, if applicable, will be processed
                      according to the terms specified in the policy.`}
                    </ol>
                  </li>

                  <li>
                     <b className="pl-2"> {`Reporting Dissatisfaction`}</b>
                    <ol>
                      {`Any dissatisfaction with the services provided must be
                      reported directly to the Company within 24 hours to take
                      appropriate action. Failure to do so will absolve the
                      Company of any responsibility.`}
                    </ol>
                  </li>

                  <li>
                     <b className="pl-2"> {`Limitation of Liability`}</b>
                    <ol>
                      {`The Company does not warrant the accuracy, reliability, or
                      completeness of the content provided on the Site. The
                      Company will not be liable for any direct, indirect,
                      incidental, punitive, or consequential damages arising
                      from the use of the Site or services provided.`}
                    </ol>
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Trademarks, Intellectual Property, and Copyright`}</b>
                <ol>
                  <li>
                  <b className="pl-2">{`Intellectual Property`}</b>
                    {`The Company owns or licenses all intellectual property
                    rights on the Website and its content. Any unauthorized
                    copying, duplication, distribution, or commercial
                    exploitation of the content is prohibited.`}
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Compensation`}</b>
                <ol>
                  <li>
                  <b className="pl-2">{`Indemnification`}</b>
                    {`You agree to defend and fully compensate the Company and its
                    affiliates from and against any claims, losses, damages,
                    fines, penalties, or other costs arising from your breach of
                    these terms or any violation of applicable laws.`}
                  </li>
                </ol>
              </li>

              <li>
                 <b className="pl-2">{`Modification of Terms of Use`}</b>
                <ol>
                  <li>
                     <b className="pl-2">{`Right to Modify`}</b>
                    {`The Company reserves the right to modify these terms of use
                    for regulatory, legal, or technical reasons with future
                    effect by placing an advance notice on the Website.
                    Registered users will be notified via email.`}
                  </li>
                </ol>
              </li>

              <li>
                 <b className="pl-2">{`Governing Law`}</b>
                {`These terms and conditions are governed by and shall be
                construed in accordance with the laws of the United Arab
                Emirates. Any disputes shall exclusively be subject to the
                jurisdiction of the courts in Dubai, United Arab Emirates.`}
              </li>

              <li>
                 <b className="pl-2">{`Severability Clause`}</b>
                {`If any part of these terms is determined to be invalid or
                unenforceable, the remaining provisions shall continue in
                effect.`}
              </li>

              <li>
                 <b className="pl-2">{`Payment`}</b>
                <ol>
                  <li>
                     <b className="pl-2">{`Payment Methods`}</b>
                   {` Payment for your appointment can be made in the following
                    ways:`}
                    <ul className="list">
                      <li>{`Cash on the day after or before the service.`}</li>
                      <li>{`Credit Card in advance (Visa or Mastercard only)`}</li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Services Offered`}</b>
                <ol className="list">
                  <li className="list !pl-10">
                 
                     {` Nooora provides a comprehensive range of beauty and
                      wellness services, organized into seven main categories,
                      encompassing over 200 individual services. Detailed
                      descriptions of each service category and the specific
                      services offered can be accessed through our service menu
                      at menu.nooora.ae. or https://nooora.ae`}
                   
                  </li>
                  <li className="list !pl-10">
                  
                      {`Specific Terms for Each Service: For eyelash extensions,
                      nail extensions, and bikini waxing services, children
                      below the age of 16 will only be provided services under
                      the supervision of their parents or legal guardians`}
                   
                  </li>

                  <ul className="list">
                    <li>
                       <b className="pl-2"> {`Nails:`}</b>
                     {` Clients must be aware that nail services may pose a risk
                      of infections, particularly if they have skin
                      sensitivities or allergies to the products used. During
                      pedicure services, the removal of ingrown nails can cause
                      minor bleeding, which may lead to infections if not
                      properly managed. Clients are advised to monitor their
                      skin compatibility with the products and inform the
                      technician of any adverse reactions immediately or to the
                      customer service after the delivery of the services.`}
                    </li>
                    <li>
                       <b className="pl-2"> {`Hair:`}</b>
                    {`Consultations are mandatory for services involving hair
                      color, treatments, styles, braids, and root touch-ups.
                      These consultations help assess the current condition of
                      the client's hair and determine the appropriate procedures
                      to achieve the desired outcome. Due to potential
                      reflections in pictures, there may be slight differences
                      between the desired outcome and the actual result. The
                      Company will make every reasonable effort to fix and
                      repair the issue to meet the customer’s expectations;
                      however, refunds will not be issued for the services
                      provided.`}
                    </li>
                    <li>
                       <b className="pl-2">{`Facial: `}</b>
                     {`For Dermalogica facials, clients are required to fill out
                      a consultation card to provide information about their
                      skin type, any known allergies, and other relevant health
                      conditions. This pre-service assessment ensures that the
                      facial treatment is tailored to the client's specific skin
                      needs and avoids adverse reactions.`}
                    </li>
                    <li>
                       <b className="pl-2"> {`Makeup:`} </b>
                      {`Clients should specify the type of makeup look they desire
                      during the booking process. This allows our makeup artists
                      to prepare adequately and ensure that the desired look is
                      achieved efficiently and satisfactorily.`}
                    </li>
                    <li>
                       <b className="pl-2"> {`Waxing:`} </b>
                      {`While waxing services generally do not require special
                      terms, clients with highly sensitive skin, especially
                      concerning facial and bikini waxing, should inform the
                      salon prior to the service. This information helps our
                      technicians take necessary precautions to prevent skin
                      irritation and other complications.`}
                    </li>
                    <li>
                       <b className="pl-2"> {`Massage:`} </b>
                      {`Although consultations are not mandatory, clients often
                      inform us if they are booking massages for muscle pain
                      relief or other specific conditions. For pregnancy
                      massages, additional precautions are taken to ensure the
                      safety of both the client and the therapist. Clients
                      should be aware that post-massage activities, such as
                      taking a shower, may affect the efficacy of the treatment
                      . Clients are required to complete and sign a consent form
                      prior to the commencement of services. This form is
                      intended to protect the therapist from any liabilities
                      arising from unforeseen incidents or issues that may occur
                      during the provision of services.`}
                    </li>
                    <li>
                       <b className="pl-2">{`Eyelash Extension:`}</b>
                      {`Despite rigorous testing and verification of our products
                      and technicians, clients may experience redness or other
                      minor issues following eyelash extension services. These
                      occurrences are rare, with an incidence rate of less than
                      0.5% on a monthly or quarterly basis. Clients are
                      encouraged to follow aftercare instructions to minimize
                      any potential issues.`}
                    </li>
                  </ul>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Appointment Booking`}</b>
                <ol>
                  <li>
                  <b className="pl-2">{`Booking Procedures`}</b>
                    {`Appointments at Nooora can be booked through WhatsApp to
                    streamline the process and collect necessary client details
                    for accurate scheduling and service preparation. Even if
                    clients initiate bookings via phone calls, the final
                    confirmation and details will be handled through WhatsApp to
                    ensure clarity and record-keeping.`}
                  </li>

                  <li>
                  <b className="pl-2">{`Deposit Requirements`}</b>{`A deposit is generally not
                    required for regular appointments. However, during peak
                    seasons such as EID, Christmas, New Year, or for events
                    requiring bulk bookings of technicians, a deposit may be
                    requested. Specific conditions and the amount of the deposit
                    will be outlined in the quotation provided for such bookings
                    to secure the appointment and allocate resources
                    efficiently.`}
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Client Responsibilities`}</b>
                <ol>
                  <li>
                  <b className="pl-2"> {`Timeliness and Preparation`}</b>
                    {`Clients are expected to be ready to start their services
                    promptly upon the technician’s arrival. Adhering to the
                    allocated service times is crucial for maintaining schedule
                    efficiency and ensuring the best service quality. Delays
                    caused by clients engaging in other activities, such as
                    taking showers, attending online meetings, or having meals
                    during the appointment time, are discouraged and may result
                    in a reduced service experience.`}
                  </li>

                  <li>
                  <b className="pl-2">{`Health and Medical Disclosures`}</b>
                    {`For certain services, clients must disclose any relevant
                    health or medical conditions that may affect the provision
                    of the service. This includes, but is not limited to, skin
                    allergies, sensitivities, and any other medical conditions
                    that could influence the outcome of the service or pose a
                    risk to the client's health.`}
                  </li>
                </ol>
              </li>

              <li>
              <b className="pl-2">{`Salon’s Rights and Responsibilities`}</b>
                <ol>
                  <li>
                  <b className="pl-2"> {`Hygiene Standards and Professional Conduct`}</b>
                    {`Nooora Beauty Concierge is committed to upholding the
                    highest hygiene standards. All tools and equipment are
                    sterilized before each appointment to ensure the safety and
                    well-being of our clients. Our technicians are expected to
                    maintain professional conduct at all times, providing
                    services in a respectful and courteous manner.`}
                  </li>

                  <li>
                  <b className="pl-2">{`Dress Code`}</b>
                    {`Clients are expected to dress appropriately for their
                    appointments. This is particularly important for male
                    clients during services such as pedicures. Inappropriate
                    attire, such as wearing only innerwear, is not acceptable
                    and may result in the refusal of service.`}
                  </li>

                  <li>
                  <b className="pl-2">{`Right to Refuse Service`}</b>
                   {` Nooora Beauty Concierge reserves the right to refuse service
                    to any client under the following circumstances, with no
                    obligation to issue refunds or provide other compensation as
                    deemed appropriate by Nooora:`}
                    <ul className="list">
                      <li>
                        {`The client exhibits abusive, threatening, or
                        inappropriate behaviour towards the technician or
                        customer service staff.`}
                      </li>
                      <li>
                       {` The client has unresolved outstanding payments from
                        previous appointments.`}
                      </li>
                      <li>
                        {`The client engages in behaviour that makes the
                        technician feel unsafe or uncomfortable, including but
                        not limited to inappropriate sexual advances or
                        misconduct.`}
                      </li>
                      <li>
                        {`The client displays signs of mental instability or a
                        condition that could pose a risk to themselves or the
                        technician during the service.`}
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </motion.div>

       
        </div>
      </div>
    </div>
  );
};

export default TermsScreen;
