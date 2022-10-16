import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="text-center px-6 font-semibold sm:text-5xl text-4xl">
        Welcome To{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          AdzVera
        </span>
        <p className="lg:w-2/3 mx-auto leading-relaxed my-5 text-gray-500 text-base">
          We are here support new NFT projects. We provide best promotion
          services,best community management staff and best other services at
          best prices.
        </p>
      </div>

      <div className="container mx-auto flex px-5 py-5 justify-center items-center">
        <img
          className="lg:w-3/6 md:w-4/6 w-5/6 object-cover object-center rounded-xl"
          alt="hero"
          src="/long-banner.jpg"
        />
      </div>
      <hr />
    </div>
  );
};

export default Welcome;
