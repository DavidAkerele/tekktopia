import React from 'react';

const BridgingExcellence = () => {
  return <section className="bg-[#081527] w-full">
  <div className="flex flex-col items-center min-h-screen px-4">
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
    <div className="flex mt-16 items-center gap-[24px] h-[275px]">
      <div className="w-[588px] h-full relative">
        <img
          src="/src/assets/images/innovation1.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute w-[100%] h-full top-0 bg-gradient-to-r from-[#231506]/90 from-[10%] via-[#372511]/90 via-[20%] to-[#554c3b]/0 to-[100%] text-[white] py-[80px] px-[40px] box-border">
          <div className="max-w-[300px]">
            <p className="text-[20px]">Businesses trying to grow</p>
            <p className="mt-[8px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Facilisi a mattis
              risus sit pellentesque turpis. Morbi et enim tempor ante
              nulla massa semper felis.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[588px] h-full relative">
        <img
          src="/src/assets/images/innovation2.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute w-[100%] h-full top-0 bg-gradient-to-r from-[#231506]/90 from-[10%] via-[#372511]/90 via-[20%] to-[#554c3b]/0 to-[100%] text-[white] py-[80px] px-[40px] box-border">
          <div className="max-w-[300px]">
            <p className="text-[20px]">Businesses trying to grow</p>
            <p className="mt-[8px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Facilisi a mattis
              risus sit pellentesque turpis. Morbi et enim tempor ante
              nulla massa semper felis.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-16 mt-16">
      <div>
        <div className="text-[32px] text-[#FFFFFF]  font-[400]">
          Bridging excellence and innovation
        </div>
        <p className="w-[564px] text-[#FFFFFFB2] leading-[24px] text-[14px] ">
          Welcome to TechTopia, where innovation meets expertise in the
          dynamic world of Information Technology. We are a
          forward-thinking IT company dedicated to delivering cutting-edge
          solutions tailored to.
        </p>
      </div>

      <div className="flex justify-between flex-wrap mb-24 w-[570px] gap-[90px]">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex-grow">
              <div className="text-[24px] mb-2 font-[500] text-[#C2813B]">
                5 Mins
              </div>
              <p className="text-[16px] text-[#FFFFFF] font-[500] mb-2">
                Setup
              </p>
              <p className="text-[12px] border-b-[0.05px] border-[#CCCCCC]  pb-4 text-[#FFFFFFB2]">
                Welcome to TechTopia, <br /> where innovation meets
              </p>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>;
};

export default BridgingExcellence;
