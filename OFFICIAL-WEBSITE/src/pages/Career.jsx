import HeroImage from "../assets/images/Team.png";
import Hero from "../components/Hero";
export default function Career() {
  return (
    <div className="w-full container mx-auto">
      {/* Hero Section */}
      <Hero
        imageUrl={HeroImage}
        topText="Career"
        bottomText="Page"
      />
    </div>
  )
}
