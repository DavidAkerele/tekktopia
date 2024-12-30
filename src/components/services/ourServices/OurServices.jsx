import ServiceCategories from './ServiceCategories';

const OurServices = () => {
  return (
    <section className="relative w-full p-12 mt-[85px]">
      <div className="lg:w-1/3 mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
          Our Services
          <img
            src="../../../assets/images/yellowLine.png"
            alt="yellow line"
            className="w-full my-2 h-[3px]"
          />
        </h2>
        <p className="text-[22px] font-semibold text-center">
          World class services isn’t just a claim, it’s our commitment
        </p>
      </div>
      <ServiceCategories />
    </section>
  );
};

export default OurServices;
