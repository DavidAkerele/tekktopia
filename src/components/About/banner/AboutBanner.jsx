import AnimatedLines from '../../../components/AnimatedLines';

import About3 from '../../../assets/images/about/About3.png';

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
          Empowering your vision with innovative solutions, because your success
          is our mission
        </div>

        <div className="w-full sm:w-[700px] mt-[52px] z-2">
          <img
            src={About3}
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-[800px] mt-[52px] px-4">
          <div className="text-lg sm:text-xl font-semibold">Why Choose Us?</div>
          <div className="mt-[12px] text-[14px] sm:text-[16px] font-extralight tracking-wider">
            We combine industry expertise with a client-centered approach,
            making tech easy, efficient, and perfectly tailored to you. Trust us
            to be your partner in innovation
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
