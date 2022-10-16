import React from "react";

const Team = () => {
  return (
    <div>
      <hr />
      <section className="text-gray-600 body-font font-semibold">
        <div className="container px-5 pb-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="text-center px-6 pt-10 font-semibold sm:text-5xl text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Our Team
              </span>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              This our team who is behind the scene of this and working hard to
              get best results.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="xeno.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    XeNo
                  </h2>
                  <h3 className="text-gray-500 mb-3">Founder & adviser</h3>
                  <p className="mb-4">
                    An enthusiast entrepreneur who sees this world in a new way.
                    A sharp minded man who always seek new opportunities to
                    build the world the way he wants to. Always stands behind
                    his team to support and encourage them.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/mist.png"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    MistX Rage
                  </h2>
                  <h3 className="text-gray-500 mb-3">Founder & developer</h3>
                  <p className="mb-4">
                    A technical person who can craft the web according to his
                    imagination. As the main developer of our team who brings
                    new things with his mind to the world in different ways
                    which leads our team as a leader.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/color-logo.png"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                  MajestiQue
                  </h2>
                  <h3 className="text-gray-500 mb-3">Founder & investor</h3>
                  <p className="mb-4">
                    The person who invests in this way not only to get profit,
                    it is sometimes about the journey. It is not just about
                    taking risks, but with one small step our goal can be
                    achieved.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="logo.png"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Jboss
                  </h2>
                  <h3 className="text-gray-500 mb-3">Head admin</h3>
                  <p className="mb-4">
                    Nothing can be just kept without any moderation. Our staff
                    who work seamlessly maintain the reliability of our
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
