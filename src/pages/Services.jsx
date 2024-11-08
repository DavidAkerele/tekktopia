import Hero from '../components/Hero';
import HeroImage from '../assets/images/Team.png';
import OurServices from '../components/services/ourServices/OurServices';
import TrustOurProcess from '../components/services/trustOurProcess/TrustOurProcess';

export default function Services() {
  return (
    <div className="w-full container mx-auto px-4">
      {/* Hero Section */}
      <Hero
        imageUrl={HeroImage}
        topText="On the other hand,"
        bottomText="we denounce with."
      />

      {/* Our Services Section */}
      <div className="mt-16">
        <OurServices />
      </div>

      {/* Quality Assurance Section */}
      <div className="mt-16">
        <TrustOurProcess />
      </div>
    </div>
  );
}
