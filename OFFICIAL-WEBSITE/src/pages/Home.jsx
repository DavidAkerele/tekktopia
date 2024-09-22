import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import HeroImage from "../assets/images/home1.png";

const Home = () => {
  return (
    <section className="mt-24 md:mt-44 font-[Inter]">
      {/* First Home Section */}
      <div className="flex flex-col items-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="text-center md:text-left leading-tight md:leading-[80px] font-medium text-[#0B0B0B] text-[36px] md:text-[60px] max-w-[906px]">
            We manage your IT, so
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <img src="/Ellipse23.png" className="absolute" alt="ellipse23" />
            <img
              src="/Ellipse24.png"
              alt="ellipse24"
              className="relative left-4 md:left-14"
            />
            <img
              src="/Ellipse25.png"
              alt="ellipse25"
              className="relative left-2 md:left-12"
            />
          </div>
        </div>

        <div className="text-center text-[36px] md:text-[60px] leading-tight md:leading-snug bg-gradient-to-r from-[#67BDD5] to-[#4B82CA] text-transparent font-medium bg-clip-text mt-4">
          you can manage your business.
        </div>

        <p className="text-center text-[#697D95B2] text-[14px] md:text-[16px] mt-4 max-w-[865px]">
          Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology. We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to meet the unique needs of our clients.
        </p>

        <div className="flex mt-8 gap-2 items-center justify-center">
          <button className="bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-md text-base font-medium flex items-center">
            Contact us <FiChevronRight />
          </button>
          <button className="text-base font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Request a demo <FiChevronRight />
          </button>
        </div>

        <div className="mt-10 mb-20 w-full">
          <img src={HeroImage} className="mx-auto w-full max-w-[1240px]" alt="hero" />
        </div>
      </div>

      {/* Second Home Section */}
      <section className="bg-[#081527] w-full">
        <div className="flex flex-col items-center min-h-screen px-4">
          <div className="mt-16 md:mt-[115px] text-center">
            <div className="text-[#FFFFFF] text-[24px] md:text-[32px] font-[DM Sans] font-medium leading-[30px] md:leading-[45px] mb-2">
              Bridging excellence and <br />
              innovation across diverse sectors.
            </div>
            <div className="text-[#FFFFFFB2] text-center text-[14px] md:text-[16px] leading-[24px]">
              Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology.<br/> We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
