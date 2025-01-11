import { FiChevronRight } from 'react-icons/fi';
import { MdCheckCircle } from 'react-icons/md';

import home3 from '../../../assets/images/home3.svg';

const DiverseSectors = () => {
  return (
    <section className="mt-40 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image Container */}
        <div className="w-full max-w-[600px] h-auto flex justify-center items-center bg-gradient-to-br from-[#041429] from-[60%] to-[#244674] to-[100%] rounded-[12px]">
          <div className="lg:p-16 p-8 lg:w-[600px] box-border border-[1px] border-[#1e2c3e] rounded-[12px]">
            <img
              src={home3}
              alt=""
              className="w-full h-auto max-h-[522px] object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-[900px] px-4">
          <h3 className="text-[28px] lg:text-[32px] text-[#0B0B0B] leading-[40px] lg:leading-[45px]">
            Your Vision, Our Expertise
          </h3>
          <p className="mt-2 text-[14px] text-[#697D95B2] font-[400] leading-[22px] lg:leading-[24px]">
            At Tekktopia, we don’t just deliver services; we build partnerships.
            Our team of experts is dedicated to understanding your unique goals
            and crafting solutions that align with your vision. Whether it{"'"}s
            scaling your business, managing operations, or driving innovation,
            you can count on us to be with you every step of the way.
          </p>
          <button className="text-base mt-4 font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Request a demo <FiChevronRight />
          </button>
          <div className="mt-14">
            {[
              'Reliability',
              'Integrity',
              'Collaboration',
              'Customer Satisfaction',
            ].map((_, index) => (
              <div key={index}>
                <p className="pb-4 flex text-[16px] font-[400] items-center gap-4">
                  <MdCheckCircle className="text-[#A66928] text-[24px]" /> {_}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseSectors;
