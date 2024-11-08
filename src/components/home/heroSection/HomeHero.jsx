import { FiChevronRight } from 'react-icons/fi';

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <div className="text-center md:text-left leading-tight md:leading-[80px] font-medium text-[#0B0B0B] text-[24px] sm:text-[28px] md:text-[60px]">
          We manage your IT, so
        </div>
        <div className="flex items-center mt-4 md:mt-0 relative">
          <img src="/Ellipse23.png" className="relative  " alt="ellipse23" />
          <img
            src="/Ellipse24.png"
            alt="ellipse24"
            className="relative right-2"
          />
          <img
            src="/Ellipse25.png"
            alt="ellipse25"
            className="relative right-4"
          />
        </div>
      </div>

      <div className="text-center text-[24px] sm:text-[28px] md:text-[60px] leading-tight md:leading-snug bg-gradient-to-r from-[#67BDD5] to-[#4B82CA] text-transparent font-medium bg-clip-text mt-4">
        you can manage your business.
      </div>

      <p className="text-center text-[#697D95B2] text-[12px] sm:text-[14px] md:text-[16px] mt-4 max-w-[865px]">
        Welcome to TechTopia, where innovation meets expertise in the dynamic
        world of Information Technology. We are a forward-thinking IT company
        dedicated to delivering cutting-edge solutions tailored to meet the
        unique needs of our clients.
      </p>

      <div className="flex flex-col md:flex-row mt-8 gap-4 items-center justify-center">
        <button className="bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-md text-base font-medium flex items-center">
          Contact us <FiChevronRight />
        </button>
        <button className="text-base font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
          Request a demo <FiChevronRight />
        </button>
      </div>

      <div className="mt-10 mb-20 w-full relative">
        <img
          src="/src/assets/images/home1.png"
          className="mx-auto w-full max-w-[1240px] h-auto"
          alt="hero"
        />
        <div
          className="w-[265px] h-[148px] absolute bg-white/30 backdrop-blur-sm shadow-lg rounded-md top-[-40px] left-[180px] p-[16px]"
          style={{ boxSizing: 'border-box' }}
        >
          <div className="text-[12px] text-[#697D95B2]">
            Welcome to tekktopia, where innovation
          </div>
          <div className="flex align-center justify-between mt-[8px] p-[12px] box-border border-[#CCCCCC4D] border-[1px] rounded-sm">
            <div className="w-[50px] h-[64px]">
              <img
                src="../../../assets/images/heroSection2.svg"
                alt=""
                className="w-[50px] h-[64px]"
              />
            </div>
            <div className="ml-[12px]">
              <div className="text-[14px]">
                Welcome to tekktopia lorem ispum
              </div>
              <div className="text-[12px] text-[#697D95B2] mt-[4px]">
                by Akinola Ireoluwa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
