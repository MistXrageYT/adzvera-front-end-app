import Head from 'next/head';
import React from 'react'
import { Footer, Header } from '../components';

const soon = () => {
    return (
        <div>
          <div>
            <Head>
              <title>Coming Soon..</title>
            </Head>
          </div>
    
          <div className="h-screen">
            <Header />
    
            <div className="h-[50%] flex flex-col justify-center items-center">
              <div className="text-center px-6 font-semibold sm:text-5xl text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Coming soon..
                </span>
                <p className="lg:w-2/3 mx-auto leading-relaxed my-5 text-gray-500 text-base">
                  this page still under construction.
                </p>
              </div>
            </div>
            <div></div>
    
            <Footer />
          </div>
        </div>
      );
}

export default soon