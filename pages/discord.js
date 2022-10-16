import Head from "next/head";
import React, { useEffect } from "react";
import { Footer, Header } from "../components";

function Discord() {
  useEffect(() => {
    window.open('https://discord.gg/TYshbCuYU3', '_blank');
  }, []);

  return (
    <div>
      <div>
        <Head>
          <title>Discord Redirecting</title>
        </Head>
      </div>

      <div className="h-screen">
        <Header />

        <div className="h-[50%] flex flex-col justify-center items-center">
          <div className="text-center px-6 font-semibold sm:text-5xl text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Redirecting..
            </span>
            <p className="lg:w-2/3 mx-auto leading-relaxed my-5 text-gray-500 text-base">
              We are redirecting to discord with new tab.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Discord;
