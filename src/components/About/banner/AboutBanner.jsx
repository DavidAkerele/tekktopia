import AnimatedLines from '../../../components/AnimatedLines';

const AboutBanner = () => {
  return (
    <div className="relative bg-[#081527] h-[884px] w-full mt-[200px] flex items-center justify-center">
      <div className="h-[190px]">
        <div className="absolute left-0 right-0 z-0 overflow-hidden h-full">
          <AnimatedLines />
          <AnimatedLines direction="left" />
          <AnimatedLines />
          <AnimatedLines direction="left" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center text-[white] z-10">
        <div className="text-[32px] text-center">
          There is no one who loves pain itself, <br /> who seeks after it and.
        </div>
        <div className="w-[700px] h-[450px] mt-[52px] z-2">
          <img
            src="/src/assets/images/about/About3.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center max-w-[800px] mt-[52px]">
          <div>Secured and trusted</div>
          <div className="mt-[12px] text-[14px] font-extralight tracking-wider">
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
