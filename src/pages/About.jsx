import OurStory from '../components/About/ourStory/OurStory';
import AboutBanner from '../components/About/banner/AboutBanner';
import GetStarted from '../components/About/getStarted/GetStarted';
import CompanyEthos from '../components/About/companyEthos/CompanyEthos';

const About = () => {
  return (
    <section className="mt-24  w-full">
      {/* First about section */}
      <div className="relative items-center flex flex-col justify-center">
        {/* Background Image */}
        <img
          src="/about-banner.png"
          alt="About Banner"
          className="w-full h-[300px] sm:h-[450px] md:h-[650px] object-cover"
        />

        {/* Overlay Div */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="/about2.png"
            alt="About Us"
            className="w-[120px] sm:w-[150px] lg:w-[180px] object-contain"
          />
          <p className="mt-4 text-sm sm:text-base text-white">ABOUT US</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center text-white mt-3">
            Crafting <br />
            Customized Wealth Solutions
          </h1>
        </div>
      </div>

      {/* Second about section */}
      <OurStory />

      {/* Fourth about section */}
      <AboutBanner />

      {/* Fifth about section */}
      <GetStarted />

      {/* Sixth about section */}
      <CompanyEthos />
    </section>
  );
};

export default About;
