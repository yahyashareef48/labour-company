"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const copyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).catch((err) => {
      alert("Failed to copy");
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Contact Details
          </h2>
          <p className="mb-5 font-light sm:text-lg text-sm text-gray-400">
            Get in touch with us for all your manpower needs. Our dedicated team is here to assist
            you with any inquiries or requirements. Reach out to us through the following contact
            details:
          </p>
        </div>

        <div>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="rounded-2xl w-full p-6 overflow-hidden bg-gray-800 flex flex-col justify-between">
              <div>
                <h3 className="text-zinc-100 font-bold tracking-wide">
                  Looking for Manpower, Laborers, or Suppliers?
                </h3>
                <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  Need Reliable Labor Contractors?
                </p>
                <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  No Registration Charges. It's Free!
                </p>
              </div>

              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYf3CBFcNRKmTxEORQsgw01HQwE80_gWwRxlXunp2QMVRNYQ/viewform?usp=send_form">
                <button className="mt-3 bg-[rgb(79,70,229)] py-1 px-2 rounded">
                  REGISTER NOW FOR FREE
                </button>
              </Link>
            </div>

            <div className="rounded-2xl w-full p-6 overflow-hidden bg-gray-800">
              <div>
                <h3 className="text-zinc-100 font-bold tracking-wide">
                  Are You an Agency, Labor Contractor, or Manpower Supplier?
                </h3>
                <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  Looking for Leads and Projects?
                </p>
                <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  Register with Us for Free!
                </p>
              </div>

              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScwGOyRkdaM1uLzvwLxxeudg3kGAhb2XBFvrFAD5hrK1jHLbg/viewform">
                <button className="mt-3 bg-[rgb(79,70,229)] py-1 px-2 rounded">
                  REGISTER NOW FOR FREE
                </button>
              </Link>
            </div>
          </div>

          <hr className="border-t-2 rounded-full border-gray-800 my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl w-full p-6 overflow-hidden bg-gray-800">
                <h3 className="text-zinc-100 font-bold tracking-wide">Call Us</h3>
                <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  +91 8019322468
                </p>
                <button
                  className="mt-3 bg-[rgb(79,70,229)] py-1 px-2 rounded"
                  onClick={() => {
                    copyText("+91 8019322468");
                    setNumberCopied(true);
                    setTimeout(() => {
                      setNumberCopied(false);
                    }, 5000);
                  }}
                >
                  {numberCopied ? "Number Copied" : "Copy Number"}
                </button>
              </div>

              <div className="rounded-2xl w-full p-6 overflow-hidden bg-gray-800">
                <h3 className="text-zinc-100 font-bold tracking-wide">Email Us</h3>
                <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {hydrated ? (
                    <>
                      contact
                      <span className="text-[#ffe101]">@labour</span>
                      .company
                    </>
                  ) : (
                    "contact@labour.company"
                  )}
                </p>

                <button
                  className="mt-3 bg-[rgb(79,70,229)] py-1 px-2 rounded"
                  onClick={() => {
                    copyText("contact@labour.company");
                    setEmailCopied(true);
                    setTimeout(() => {
                      setEmailCopied(false);
                    }, 5000);
                  }}
                >
                  {emailCopied ? "Email Copied" : "Copy Email"}
                </button>
              </div>

              <div className="rounded-2xl w-full p-6 max-h-fit overflow-hidden bg-gray-800">
                <h3 className="text-zinc-100 font-bold tracking-wide">
                  Connect with Us on Social Media
                </h3>
                <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  Looking for Leads and Projects?
                </p>
                <div className="flex gap-3 mt-3">
                  <Link
                    className="bg-[rgb(79,70,229)] p-2 rounded"
                    href="https://www.instagram.com/labour.company"
                    aria-label="Instagram"
                  >
                    <ImInstagram />
                  </Link>
                  <Link
                    className="bg-[rgb(79,70,229)] p-2 rounded"
                    href="https://www.facebook.com/theLabourCompany"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    className="bg-[rgb(79,70,229)] p-2 rounded"
                    href="https://twitter.com/LabourComp"
                    aria-label="Twitter"
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-full p-6 overflow-hidden bg-gray-800 flex flex-col">
              <h3 className="text-zinc-100 font-bold tracking-wide">Visit Our Office</h3>
              <p className="mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm">
                CIE, Vindhya C4, IIITH Campus, Gachibowli, Hyderabad, Telangana: 500032
              </p>
              <div className="flex-grow mt-3">
                <iframe
                  title="google maps of labour.company"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7612.785870319268!2d78.34324794135162!3d17.44089733382146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939bb620f75f%3A0xd02a4507e09ce8bb!2sLABOUR%20COMPANY!5e0!3m2!1sen!2sin!4v1719332912277!5m2!1sen!2sin"
                  loading="lazy"
                  className="w-full h-full aspect-video rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
