import { FiChevronRight } from 'react-icons/fi';

const HomeBanner = () => {
  return (
    <section className="mt-20">
      <div className="relative">
        <img
          src="/banner.png"
          className="w-full h-[450px] sm:h-[650px] object-cover"
          alt=""
        />
        <div className="absolute top-[166px] left-[80px]">
          <p className="text-[14px] font-[400] text-[#FFFFFF] mb-4">
            Tekktopia
          </p>
          <h3 className="text-[32px] font-[700] text-[#FFFFFF] mb-4">
            Bridging excellence and innovation
          </h3>
          <p className="max-w-[588px] text-[14px] font-[400] text-[#FFFFFF] mb-4">
            Welcome to TechTopia, where innovation meets expertise in the
            dynamic world of Information Technology. We are a forward-thinking
            IT company dedicated to delivering cutting-edge solutions tailored
            to.
          </p>
          <button className="text-base mt-10 bg-[#FFFFFF]  text-[#6797D5] font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Contact us
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
