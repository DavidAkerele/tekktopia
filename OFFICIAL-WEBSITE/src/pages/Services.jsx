import Hero from "../components/Hero";
import HeroImage from "../assets/images/Team.png";
import yellowLine from "../assets/images/yellowLine.png";
import ServiceCategories from "../components/ServiceCategories";
import SignUpTrigger from "../components/SignUpTrigger";
import qualityAssuranceBg from "../assets/images/qualityAssuranceBg.png";

export default function Services() {
  const signUpRounded = true;
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
        <div className="lg:w-1/3 mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
            Our Services
            <img src={yellowLine} alt="yellow line" className="w-full my-2 h-[3px]" />
          </h2>
          <p className="text-[22px] font-500 text-center">
            Our world class services that are unbeatable by no other
          </p>
        </div>
        <ServiceCategories/>
      </section>

      {/*Quality Assurance Section */}
      <section className="w-full bg-[#F9F9F9] py-12">
        <img className="top-0 left-0 w-full h-full object-cover" src={qualityAssuranceBg} alt="quality assurance bg"/>
      </section>

      {/*SignUpTrigger Section*/}
      <section className="lg:p-32">
        <SignUpTrigger signUpRounded={signUpRounded}/>
      </section>
    </div>
  );
}
