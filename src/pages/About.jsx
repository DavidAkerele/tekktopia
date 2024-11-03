import OurStory from '../components/About/ourStory/OurStory';
import AboutBanner from '../components/About/banner/AboutBanner';
import GetStarted from '../components/About/getStarted/GetStarted';
import CompanyEthos from '../components/About/companyEthos/CompanyEthos';

const About = () => {


  return (
    <section className="mt-24">
      {/*First about section*/}
      <div className="relative">
        <img
          src="/about-banner.png"
          alt=""
          className="w-full h-[450px] sm:h-[650px] object-cover"
        />
        <div className="absolute w-full top-[180px]">
          <div className=" flex flex-col items-center">
            <img src="/about2.png" alt="" />
            <p className="mt-3 text-[16px] text-white">ABOUT US</p>
            <h1 className="text-[60px]  text-center mt-3 text-white font-[500]">
              Crafting <br />
              Customized Wealth Solutions:
            </h1>
          </div>
        </div>
      </div>

      {/*Second about section*/}
      <OurStory />

      {/* fourth about section */}
      <AboutBanner />

      {/* fifth about section */}
      <GetStarted />

      {/* sixth about section */}
      <CompanyEthos />
    </section>
  );
};

export default About;
