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
        <div className="absolute left-0 px-4 sm:px-8">
          <p className="text-[14px] font-[400] text-[#FFFFFF] mb-4">
            TEKKTOPIA
          </p>
          <h3 className="text-[24px] sm:text-[32px]  text-[#FFFFFF] mb-4">
            Bridging excellence and innovation
          </h3>
          <p className="max-w-[588px] text-[14px] font-[400] text-[#FFFFFF] mb-4">
            “We are committed to delivering solutions that combine innovation
            with practical results, helping our clients succeed in a constantly
            evolving world”.
          </p>
          <a href="/contact-us">
            <button className="text-base sm:text-[14px] mt-10 bg-[#FFFFFF] text-[#6797D5] font-medium flex items-center rounded-md px-[20px] py-2 border shadow-sm">
              Contact us
              <FiChevronRight />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
