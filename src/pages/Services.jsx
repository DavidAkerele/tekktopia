import Hero from '../components/Hero';
import HeroImage from '../assets/images/Team.png';
import OurServices from '../components/services/ourServices/OurServices';
import TrustOurProcess from '../components/services/trustOurProcess/TrustOurProcess';

export default function Services() {
  return (
    <div className="w-full container">
      {/* Hero Section */}
      <Hero
        imageUrl={HeroImage}
        topText="On the other hand,"
        bottomText="we denounce with."
      />

      {/*Our Services Section */}
      <OurServices />

      {/*Quality Assurance Section */}
      <TrustOurProcess />
    </div>
  );
}
