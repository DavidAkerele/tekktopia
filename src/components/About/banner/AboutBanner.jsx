import AnimatedLines from '../../../components/AnimatedLines';

const AboutBanner = () => {
  return (
    <div className="relative bg-[#081527] h-[884px] w-full mt-[200px] flex items-center justify-center">
      {/* Animated Background Lines - Hidden on smaller screens */}
      <div className="absolute inset-0 z-0  overflow-hidden hidden lg:block">
        <AnimatedLines />
        <AnimatedLines direction="left" />
        <AnimatedLines />
        <AnimatedLines direction="left" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-white w-full flex flex-col items-center justify-center text-center px-4">
        <div className="text-[32px] sm:text-[36px] lg:text-[40px] font-medium">
          There is no one who loves pain itself, <br /> who seeks after it and.
        </div>

        <div className="w-full sm:w-[700px] mt-[52px] z-2">
          <img
            src="/src/assets/images/about/About3.png"
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-[800px] mt-[52px] px-4">
          <div className="text-lg sm:text-xl font-semibold">Secured and Trusted</div>
          <div className="mt-[12px] text-[14px] sm:text-[16px] font-extralight tracking-wider">
            In a changing global economy, HydrogenHR gives you the ultimate
            enterprise advantage with our People Management Software. We
            automate everyday mundane tasks so you can focus on your business
            core operations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
