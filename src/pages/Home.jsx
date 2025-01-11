import { useState } from 'react';
import HomeHero from '../components/home/heroSection/HomeHero';
import BridgingExcellence from '../components/home/bridgingExcellence/BridgingExcellence';
import DiverseSectors from '../components/home/diverseSectors/DiverseSectors';
import DrivingInnovation from '../components/home/drivingInnovation/DrivingInnovation';
import HomeBanner from '../components/home/banner/HomeBanner';
// import Testimonials from '../components/home/Testimonials/Testimonials';
import LatestArticles from '../components/home/LatestArticles/LatestArticles';
import RequestDemoModal from '../components/RequestDemoModal'; // Import the modal component

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full flex-col flex items-center justify-center mt-24 md:mt-44">
      {/* First Home Section */}
      <HomeHero setIsModalOpen={setIsModalOpen} />

      {/* Second Home Section */}
      <BridgingExcellence />

      {/* Third Home Section */}
      <DiverseSectors />

      {/* Fourth Home Section */}
      <DrivingInnovation />

      {/* Fifth Home section */}
      <HomeBanner />

      {/*Sixth Home section*/}
      {/* <Testimonials /> */}
      
      {/* Modal Component */}
      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Seventh Home section */}
      <LatestArticles />
    </section>
  );
};

export default Home;
