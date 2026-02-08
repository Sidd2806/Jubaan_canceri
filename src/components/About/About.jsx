import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-full  items-center justify-center pt-12 md:pt-24">
      <div className="text-center">
        <h1 className="text-xl  sm:text-3xl md:text-4xl font-semibold mn-3 md:mb-5">About Us</h1>
        <p className="font-semibold text-base md:text-xl">
          Who we are ? (why we shouldn't be)
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-20 md:gap-20 pt-10 md:pt-20 pb-5 md:pb-10">
          <img
            src="/assets/bimal_elaichi.png"
            alt=""
            className="block  w-full sm:max-w-sm md:max-w-md bg-[#FCECD9] rounded-xl  pb-0 md:pb-20"
          />
        <div className="content text-base md:text-xl font-semibold  flex flex-col gap-6 md:gap-10 max-w-full md:max-w-lg text-center md:tex-left">
          <p >At Bimal-Ultra, we don't sell products… </p>
          <p > we sell memories, stains, and questionable life choices. </p>
          <p>
            {" "}
            Made for people who treat health warnings like terms & conditions -
            ignored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
