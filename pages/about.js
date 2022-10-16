import Head from "next/head";
import React from "react";
import { Footer, Header, Team } from "../components";

const About = () => {
  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>

      <div>
        <Header />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-14 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="/adzvera-banner.png"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center shadow-md text-gray-400">
                    <img src="/logo.png" alt="logo" className="rounded-full" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      AdzVera Inc.
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Know more about AdzVera marketing services.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    In the new Era of the trending market of <span className="font-semibold">NFTs</span> everyone wants
                    their own place to stand out with some awesome projects to
                    showcase their arts and to do something for the community to
                    help people out. But in the immense world full of people
                    around the globe where we can&apos;t reach them so we mainly
                    rely on the old school Collaboration method and here things
                    get messed up. Here <span className="font-semibold">AdzVera</span> | NFT Marketing Services takes
                    part in solving all of your problems. At <span className="font-semibold">AdzVera</span> our main
                    aim is to provide sorted workers to work seamlessly for your
                    projects with almost zero% risk. &quot;Your trust won&apos;t
                    be shattered here.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Team />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;
