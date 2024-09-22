import Hero from "../components/Hero";
import HeroImage from "../assets/images/Team.png";
import yellowLine from "../assets/images/yellowLine.png";
import ServiceCategories from "../components/ServiceCategories";
import SignupTrigger from "../components/SignUpTrigger";

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
            <img
              src={yellowLine}
              alt="yellow line"
              className="w-full my-2 h-[3px]"
            />
          </h2>
          <p className="text-[22px] font-500 text-center">
            Our world class services that are unbeatable by no other
          </p>
        </div>
        <ServiceCategories />
      </section>

      {/*Quality Assurance Section */}
      <section className="w-full bg-qualityAssuranceBg p-12">
        <div className="mx-auto flex flex-col lg:flex-row text-white items-center">
          <div className="lg:w-[40%] mr-auto flex flex-col">
            <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
              Trust Us Process
              <img
                src={yellowLine}
                alt="yellow line"
                className="w-1/2 my-2 h-[3px]"
              />
            </h2>
            <p className="text-[22px] font-semibold my-3">
              Our world class services that are unbeatable by no other
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt lorem ispum b illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt lorem ispum.
            </p>
          </div>
          <img src="/progressBar.png" className="lg:mt-0 mt-8 mr-auto lg:mr-0"/> 
        </div>
      </section>

      {/*SignUpTrigger Section*/}
      <section className="lg:p-32">
        <SignupTrigger signUpRounded={signUpRounded} />
      </section>
    </div>
  );
}
