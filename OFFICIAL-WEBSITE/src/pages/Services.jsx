import Hero from "../components/Hero";
import HeroImage from "../assets/images/Team.png";
import yellowLine from "../assets/images/yellowLine.png";
import ServiceCategories from "../components/ServiceCategories";
export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageUrl={HeroImage}
        topText="On the other hand,"
        bottomText="we denounce with."
      />
      {/*Our Services Section */}
      <section className="relative w-full p-12">
        <div className="w-1/3 mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
            Our Services
          </h2>
          <img src={yellowLine} alt="yellow line" className="w-1/4 h-[3px]" />
          <p className="text-[22px] font-[600px] text-center mt-2">
            Our world class services that are unbeatable by no other
          </p>
        </div>
        <ServiceCategories/>
      </section>
    </div>
  );
}
