import { FiChevronRight } from 'react-icons/fi';

const HomeBanner = () => {
  return (
    <section className="mt-20">
      <div className="relative flex flex-col items-center justify-center">
        <img
          src="/banner.png"
          className="w-full h-[450px] sm:h-[650px] object-cover"
          alt="TechTopia Banner"
        />
        <div className="absolute   px-4 sm:px-8">
          <p className="text-[14px] sm:text-[16px] font-[400] text-[#FFFFFF] mb-4">
            Tekktopia
          </p>
          <h3 className="text-[24px] sm:text-[32px] font-[700] text-[#FFFFFF] mb-4">
            Bridging excellence and innovation
          </h3>
          <p className="max-w-[588px] text-[14px] sm:text-[16px] font-[400] text-[#FFFFFF] mb-4">
            Welcome to TechTopia, where innovation meets expertise in the
            dynamic world of Information Technology. We are a forward-thinking
            IT company dedicated to delivering cutting-edge solutions tailored
            to your needs.
          </p>
          <button className="text-base sm:text-lg mt-10 bg-[#FFFFFF] text-[#6797D5] font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Contact us
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
