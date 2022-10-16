import Link from "next/link";
import React from "react";

const Heroheader = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mx-0 sm:mx-14">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-gray-900">
              AdzVera Marketing
              <br className="inline-block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                NFTs Business Services
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              We Offer Best NFT Collabration Services, Community
              Modration/Management Services, NFT dApp Development Services NFT
              Art Designing, Promotion/Adverstising. Our All Services Are 100%
              Trusted And We Offer you our Services At Best Price.
            </p>

            <div className="flex justify-center">
              <Link href="discord">
                <div className="inline-flex cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Join Discord
                </div>
              </Link>
              <Link href="service">
                <div className="ml-4 inline-flex cursor-pointer text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Our Services
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src="/color-logo.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heroheader;
