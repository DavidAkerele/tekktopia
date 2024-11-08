// import React from 'react';
import innovation1 from '../../../assets/images/innovation1.png'
import innovation2 from '../../../assets/images/innovation2.png'
const BridgingExcellence = () => {
  return (
    <section className="bg-[#081527] w-full px-4 lg:px-16">
      <div className="flex flex-col items-center ">
        {/* Heading Section */}
        <div className="mt-16 md:mt-[115px] text-center">
          <div className="text-[#FFFFFF] text-[22px] sm:text-[24px] md:text-[32px] font-[DM Sans] font-medium leading-[28px] sm:leading-[30px] md:leading-[45px] mb-2">
            Bridging excellence and <br />
            innovation across diverse sectors.
          </div>
          <div className="text-[#FFFFFFB2] text-center text-[14px] sm:text-[16px] leading-[24px]">
            Welcome to TechTopia, where innovation meets expertise in the
            dynamic world of Information Technology.
            <br />
            We are a forward-thinking IT company dedicated to delivering
            cutting-edge solutions tailored to.
          </div>
        </div>

        {/* Image Section with Overlay */}
        <div className="flex flex-col lg:flex-row mt-16 items-center justify-center gap-[24px] h-auto w-full">
          <div className="w-full lg:w-[588px] h-auto relative">
            <img
              src={innovation1}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#231506]/90 via-[#372511]/90 to-[#554c3b]/0 text-white py-[80px] px-[40px]">
              <div className="max-w-[300px]">
                <p className="text-[20px]">Businesses trying to grow</p>
                <p className="mt-[8px] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisi a mattis
                  risus sit pellentesque turpis. Morbi et enim tempor ante nulla
                  massa semper felis.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[588px] h-auto relative">
            <img
              src={innovation2}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#231506]/90 via-[#372511]/90 to-[#554c3b]/0 text-white py-[80px] px-[40px]">
              <div className="max-w-[300px]">
                <p className="text-[20px]">Businesses trying to grow</p>
                <p className="mt-[8px] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisi a mattis
                  risus sit pellentesque turpis. Morbi et enim tempor ante nulla
                  massa semper felis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 mt-16 w-full justify-center">
          <div className="max-w-[600px] w-full">
            <div className="text-[32px] text-[#FFFFFF] font-[400]">
              Bridging excellence and innovation
            </div>
            <p className="w-full text-[#FFFFFFB2] leading-[24px] text-[14px] lg:text-[16px]">
              Welcome to TechTopia, where innovation meets expertise in the
              dynamic world of Information Technology. We are a forward-thinking
              IT company dedicated to delivering cutting-edge solutions tailored
              to.
            </p>
          </div>

          <div className="flex flex-wrap gap-[90px] mb-24 w-full lg:w-[570px] justify-center">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex-grow max-w-[280px]">
                  <div className="text-[24px] mb-2 font-[500] text-[#C2813B]">
                    5 Mins
                  </div>
                  <p className="text-[16px] text-[#FFFFFF] font-[500] mb-2">
                    Setup
                  </p>
                  <p className="text-[12px] border-b-[0.05px] border-[#CCCCCC] pb-4 text-[#FFFFFFB2]">
                    Welcome to TechTopia, <br /> where innovation meets
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingExcellence;
