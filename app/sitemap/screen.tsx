"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { dummyPageBarProps } from "../constant";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SiteMapScreen = () => {
  return (
    <div>
      <div className="w-full pt-[130px] lg:pt-[144px]">
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
                  text: "SiteMap",
                  url: "",
                },
              ],
              pageTitle: "SiteMap",
              //   barIcon: {
              //     url: "/uploads/policies_259c935d5c.png",
              //   },
            },
          }}
          className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          }}
           className="common-container !w-[90%] !max-w-[1242px] !mb-[100px] font-inter">
          <div className="flex items-start justify-between flex-wrap text-[15px]">
            <div className="w-full md:w-1/2 sitemap-list">
              <ol>
                <li>
                    <a href="https://nooora.ae/services">Services</a>
                  <ol>
                    <li className="w-[318px] md:w-[508px] mb-2">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem value="Eyelash" className=" !border-0">
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/services/eyelash"
                            >
                              Eyelash
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a
                                  className="block"
                                  href="https://nooora.ae/services/eyelash/eyelash-extension"
                                >
                                  Eyelash Extension
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block"
                                  href="https://nooora.ae/services/eyelash/brow-lamination"
                                >
                                  Brow Lamination
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block"
                                  href="https://nooora.ae/services/eyelash/lash-lift"
                                >
                                  Lash Lift
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <a href="https://nooora.ae/services/nails">Nails</a>
                      <ol>
                        <li className="w-[295px] md:w-[450px]">
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full !border-0"
                          >
                            <AccordionItem
                              value="Nail SPA"
                              className="!border-0"
                            >
                              <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                                <a
                                  href="https://nooora.ae/services/nails/nail-spa"
                                  className="!font-normal"
                                >
                                  Nail SPA
                                </a>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                                <ol>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-spa/manicure">
                                      Manicure
                                    </a>
                                    <ol>
                                      <li>
                                        <a href="https://nooora.ae/gel-manicure">
                                          Gel Manicure
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/mens-manicure">
                                          Men`s Manicure
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/russian-manicure">
                                          Russian Manicure (Classic Polish)
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/french-manicure">
                                          French Manicure
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/classic-manicure">
                                          Classic Manicure
                                        </a>
                                      </li>
                                    </ol>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-spa/pedicure">
                                      Pedicure
                                    </a>
                                    <ol>
                                      <li>
                                        <a href="https://nooora.ae/gel-pedicure">
                                          Gel Pedicure
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/mens-pedicure">
                                          Men’s Pedicure
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/french-pedicure">
                                          French Pedicure
                                        </a>
                                      </li>
                                    </ol>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-spa/manicure-pedicure">
                                      Manicure Pedicure
                                    </a>
                                    <ol>
                                      <li>
                                        <a href="https://nooora.ae/mens-mani-pedi">
                                          Men’s Mani + Pedi
                                        </a>
                                      </li>
                                    </ol>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-spa/nail-polish">
                                      Nail Polish
                                    </a>
                                    <ol>
                                      <li>
                                        <a href="https://nooora.ae/gel-french-polish">
                                          Gel French Polish
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/gel-nail-polish">
                                          Gel Nail Polish
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://nooora.ae/gel-polish-removal">
                                          Gel Polish Removal
                                        </a>
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </li>
                        <li className="w-[295px] md:w-[450px]">
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full !border-0"
                          >
                            <AccordionItem
                              value="Nail Extension"
                              className="!border-0"
                            >
                              <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                                <a
                                  href="https://nooora.ae/services/nails/nail-extension"
                                  className="!font-normal"
                                >
                                  Nail Extension
                                </a>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                                <ol>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-extension/acrylic-nails">
                                      Acrylic Nails
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-extension/biab-nails">
                                      BIAB Extensions
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-extension/gel-nails">
                                      Gel Nail Extensions
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-extension/soft-gel-nail">
                                      Soft Gel Nail
                                    </a>
                                  </li>
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </li>
                        <li className="w-[295px] md:w-[450px]">
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full !border-0"
                          >
                            <AccordionItem
                              value="Nail Treatment"
                              className="!border-0"
                            >
                              <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                                <a
                                  href="https://nooora.ae/services/nails/nail-treatment"
                                  className="!font-normal"
                                >
                                  Nail Treatment
                                </a>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                                <ol>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-treatment/callus-treatment">
                                      Callus Treatment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-treatment/paraffin-therapy">
                                      Paraffin Therapy
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/services/nails/nail-treatment/spa-treatment">
                                      Spa Treatment
                                    </a>
                                  </li>
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </li>
                      </ol>
                    </li>
                    <li className="w-[320px] md:w-[510px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem value="Massage" className="!border-0">
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/services/massage"
                            >
                              Massage
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/services/massage/couples-massage">
                                  Couples Massage
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/massage/therapeutic-massage">
                                  Therapeutic Massage
                                </a>
                                <ol>
                                  <li>
                                    <a href="https://nooora.ae/4-hand-massage">
                                      4 Hand Massage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/anti-cellulite-massage">
                                      Anti-Cellulite
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/aromatherapy-massage">
                                      Aromatherapy
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/balinese-massage">
                                      Balinese
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/chair-massage">
                                      Chair Massage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/deep-tissue-massage">
                                      Deep Tissue
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/hot-stone-massage">
                                      Hot Stone
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/lymphatic-drainage-massage">
                                      Lymphatic Drainage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/maderotherapy-massage">
                                      Maderotherapy
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/prenatal-massage">
                                      Prenatal
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/shiatsu-massage">
                                      Shiatsu
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/slimming-massage">
                                      Slimming
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/sports-massage">
                                      Sports
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/swedish-massage">
                                      Swedish
                                    </a>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/massage/reflexology-massage">
                                  Reflexology Massage
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/massage/dry-massage">
                                  Dry Massage
                                </a>
                                <ol>
                                  <li>
                                    <a href="https://nooora.ae/back-massage">
                                      Back Massage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/face-massage">
                                      Face Massage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://nooora.ae/thai-massage">
                                      Thai Massage
                                    </a>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[510px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem value="Body" className="!border-0">
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/services/body"
                            >
                              Body
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/services/body/bikini-waxing">
                                  Bikini/Brazilian
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/body/threading">
                                  Threading
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/body/waxing">
                                  Waxing
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>

                    <li className="w-[320px] md:w-[510px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Face Treatments"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/services/face"
                            >
                              Face Treatments
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/services/face/facial">
                                  Facial
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/face/clean-up">
                                  Face Clean Up
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[510px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem value="Hair" className="!border-0">
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/services/hair"
                            >
                              Hair
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blow-dry">
                                  Blow Dry
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/hair/hair-color">
                                  Hair Color
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/hair/hair-cut">
                                  Hair Cut
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/services/hair/hair-styling">
                                  Hair Styling
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/keratin-hair-treatment">
                                  Keratin Treatment
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <a href="https://nooora.ae/services/makeup-salon">
                        Makeup Artists
                      </a>
                    </li>
                    <li className="w-[320px] md:w-[510px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem value="Nooora" className="!border-0">
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a href="https://nooora.ae" className="!font-normal">
                              Nooora
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/gift-and-package-policy">
                                  Gift and Package Policy
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/refund-policy">
                                  Refund Policy
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/wedding">Wedding</a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/about-us">
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/cancellation-policy">
                                  Cancellation Policy
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/privacy-policy">
                                  Privacy Policy
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/terms">
                                  Terms of Use
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/gift-a-friend">
                                  Gift Cards
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/contact">Contact</a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
            {/* right list */}
            <div className="w-full md:w-1/2 sitemap-list">
              <ol>
                <li>
                    <a href="https://nooora.ae/blog">Blog</a>
                  <ol>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Nails : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Nails"
                            >
                              Nails : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/want-healthy-nails-here-are-10-things-you-should-do">
                                  Want Healthy Nails? Here are 10 things You
                                  Should Do
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/nail-polish-summer-color-trends">
                                  Top 12 Summer Nail Polish Color in Trend
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/9-tips-to-make-a-mani-pedi-last-longer">
                                  9 Tips to Make a Mani-Pedi Last Longer
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/the-difference-between-gel-nails-and-acrylic-nails">
                                  The Difference Between Gel Nails and Acrylic
                                  Nail Extensions
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/winter-color-trends-by-essie-and-opi">
                                  Winter Color Trends by Essie and OPI
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/french-nails-the-style-everyone-loves">
                                  French Nails - The Style Everyone Loves
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/how-can-i-get-a-salon-quality-pedicure-at-home">
                                  How Can I Get a Salon Quality Pedicure at
                                  Home?
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/how-mani-and-pedi-treatments-improve-nail-health">
                                  How Mani and Pedi Treatments Improve Nail
                                  Health
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/how-to-choose-the-best-nail-extension-type-for-you">
                                  How To Choose The Best Nail Extension Type For
                                  You
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/everything-you-need-to-know-about-gel-manicure">
                                  Everything you Need to Know about Gel manicure
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/gel-vs-shellac-manicure">
                                  Gel vs Shellac Nails: Difference between Gel
                                  and Shellac Nails
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/before-and-aftercare-for-gel-manicure">
                                  Before and After Care for Gel Manicure
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/10-essential-nail-care-tools-for-mani-pedi-at-home">
                                  10 Essential Nail Care Tools for At-Home
                                  Manicure &amp; Pedicure
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/nail-shapes-to-pick-the-best-for-you">
                                  Top 6 Fingernail Shapes - Pick the Best Nail
                                  Shape for You
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/breathable-nail-polish-benefits">
                                  Breathable Fingernail Polish - 5 Amazing
                                  Benefits
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/all-about-acrylic-nail-extensions">
                                  Acrylic Nail Extensions: What You Need to Know
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/biab-nails-application-process">
                                  BIAB Nails: Step-By-Step Process for
                                  Application
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/fingernail-bed-and-importance">
                                  What is a Nail Bed: The Foundation of Healthy
                                  Nails
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/nail-files-types-and-uses">
                                  Your Guide to Nail Files: Types &amp; Uses,
                                  and Best Practices
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Body : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Body"
                            >
                              Body : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/waxing-all-you-need-to-know-about-it">
                                  What is waxing, its type, benefits and what
                                  wax is used for what body parts!
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/full-body-waxing-at-home-with-nooora">
                                  Everything You Need To Know About Full Body
                                  Waxing At Home
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/whats-so-special-about-bikini-waxing-why-you-need-it">
                                  What`s so special about Bikini waxing &amp;
                                  why you need it
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/a-guide-about-hard-wax-or-soft-wax">
                                  A Complete Guide to Hard wax vs Soft Wax
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Face : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Face"
                            >
                              Face : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/home-remedies-for-dry-skin-what-to-do-in-between-facials">
                                  Home Remedies for Dry Skin—What to Do
                                  In-Between Facials
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/what-is-your-skin-trying-to-tell-you-symptoms-causes-and-treatments">
                                  What Is Your Skin Trying to Tell You?
                                  Symptoms, Causes and Treatments
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/acne-the-puberty-devil">
                                  Acne; The Puberty Devil!
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/how-to-build-a-perfect-skincare-routine">
                                  How to build a perfect skincare routine in
                                  2023.
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Massage : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Massage"
                            >
                              Massage : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/why-salons-offering-home-services-are-the-future">
                                  Why Salons Offering Home Services Are the
                                  Future
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/things-to-consider-when-choosing-beauty-salon">
                                  Things to Consider When Choosing a Beauty
                                  Salon
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Hair : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Hair"
                            >
                              Hair : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/tips-preventing-treating-dry-hair">
                                  How to Prevent Dry Hair: 6 Amazing Tips
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/keratin-treatment-v-s-hair-botox-is-there-a-difference">
                                  Keratin Treatment v.s. Hair Botox—Is There a
                                  Difference?
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/what-is-balayage">
                                  What You Need to Know About Balayage?
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/hairstyles-for-winter">
                                  Hairstyles for Winter 2020
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/best-hair-treatments-for-hair-loss">
                                  Best Hair Treatments for Hair Loss
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/guide-to-doing-professional-hair-color-at-home">
                                  9 Easy Step to Color your Hair at Home like a
                                  Professional
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/trending-hair-and-makeup-style">
                                  Hair and Makeup Style for 2023
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/blow-dry-for-voluminous-hair">
                                  10 Steps to Blow Dry for a Voluminous hair
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/best-foods-to-eat-for-healthy-thick-hair">
                                  What are the top 10 foods to eat for Thick
                                  Hair Growth
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/10-good-hair-growth-oils">
                                  Top 10 Oils the Promote Hair Growth
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/home-remedies-to-reduce-hair-fall">
                                  Top 10 Home Remedies that Help Reduce Hair
                                  Fall
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/hair-keratin-vs-hair-rebonding">
                                  Hair Keratin vs. Rebond treatment: Know the
                                  Difference
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/different-hair-treatments">
                                  6 different hair treatments you can choose
                                  from
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/15-hairstyles-for-curly-hair">
                                  15 On-the-Go Hairstyles for Naturally Curly
                                  Hair
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/hair-highlights-vs-lowlights">
                                  Hair Highlights vs. Hair Lowlights - What
                                  should you know
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Eyelash : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Eyelash"
                            >
                              Eyelash : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/difference-between-eyelash-extensions-and-lash-lifts">
                                  The Difference Between Regular Eyelash
                                  Extensions, Russian Lash Extensions and Lash
                                  Lifts
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/eyelashes-how-to-look-after-your-lashes">
                                  Eyelashes: How to Look After Your Lashes
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/hot-eyelash-trends-right-now">
                                  Hot Eyelash Trends Right Now—2021
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/lash-lift-tips-on-how-to-maintain-it">
                                  Lash Lift - Tips On How To Maintain It
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/russian-volume-lashes-everything-you-should-know-about">
                                  Russian Volume Lashes-Everything you should
                                  know about
                                </a>
                              </li>
                              <li>
                                <a href="https://nooora.ae/blog/brow-lamination-everything-to-know-about-it">
                                  Brow Lamination : Know Everything About it
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className="w-[320px] md:w-[600px]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full !border-0"
                      >
                        <AccordionItem
                          value="Make Up : Quick Guide"
                          className="!border-0"
                        >
                          <AccordionTrigger className="py-2 !no-underline !font-normal !border-0">
                            <a
                              href="https://nooora.ae/blog/category/Make Up"
                            >
                              Make Up : Quick Guide
                            </a>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-body font-normal leading-[26px]">
                            <ol>
                              <li>
                                <a href="https://nooora.ae/blog/makeup-101-how-to-look-your-best">
                                  Makeup 101; how to look your best.
                                </a>
                              </li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SiteMapScreen;
