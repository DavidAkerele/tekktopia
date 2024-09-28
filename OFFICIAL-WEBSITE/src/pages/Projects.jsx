import HeroImage from "../assets/images/Team.png";
import Hero from "../components/Hero";
export default function Projects() {
  return (
    <div className="w-full container mx-auto">
      {/* Hero Section */}
      <Hero
        imageUrl={HeroImage}
        topText="Projects"
        bottomText="Page"
      />
    </div>
  )
}