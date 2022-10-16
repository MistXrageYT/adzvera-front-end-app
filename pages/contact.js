import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Header, Footer } from "../components";

const Contact = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Contact Us</title>
        </Head>
      </div>

      <div>
        <Header />

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-18 mx-auto flex flex-wrap justify-center items-center">
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-5/6 w-5/6"
                src="/color-logo.png"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 mb-5 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Twitter
                  </h2>
                  <p className="leading-relaxed text-base">
                  https://twitter.com/adzvera
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link href='https://twitter.com/adzvera'>
                    Go to link
                    </Link>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 mb-5 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Instagram
                  </h2>
                  <p className="leading-relaxed text-base">
                  https://instagram.com/adzvera
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">
                    <Link href='https://instagram.com/adzvera'>
                    Go to link
                    </Link>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-5 lg:items-start items-center">
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 mb-5 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Email
                  </h2>
                  <p className="leading-relaxed text-base">
                  adzverainc@gmail.com
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link href='mailto: adzverainc@gmail.com'>
                    Go to link
                    </Link>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
