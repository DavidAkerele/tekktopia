import HomeHero from '../components/home/heroSection/HomeHero';
import BridgingExcellence from '../components/home/bridgingExcellence/BridgingExcellence';
import DiverseSectors from '../components/home/diverseSectors/DiverseSectors';
import DrivingInnovation from '../components/home/drivingInnovation/DrivingInnovation';
import HomeBanner from '../components/home/banner/HomeBanner';
import Testimonials from '../components/home/Testimonials/Testimonials';
import LatestArticles from '../components/home/LatestArticles/LatestArticles';

const Home = () => {
  return (
    <section className="mt-24 md:mt-44 ">
      {/* First Home Section */}
      <HomeHero />

      {/* Second Home Section */}
      <BridgingExcellence />

      {/* Third Home Section */}
      <DiverseSectors />

      {/* Fourth Home Section */}
      <DrivingInnovation />

      {/*Fifth Home section */}
      <HomeBanner />

      {/*Sixth Home section*/}
      <Testimonials />

      {/*Seventh Home section*/}
      <LatestArticles />

    </section>
  );
};

export default Home;
