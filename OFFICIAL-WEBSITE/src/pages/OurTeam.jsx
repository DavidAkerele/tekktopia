import TeamImage from '../assets/images/Team.png';
import ourTeamImage1 from '../assets/images/ourTeamImage1.png';
import ourTeamImage2 from '../assets/images/ourTeamImage2.png';
import ourTeamImage3 from '../assets/images/ourTeamImage3.png';
import ourTeamImage4 from '../assets/images/ourTeamImage4.png';
import yellowLine from '../assets/images/yellowLine.png';
import SignupTrigger from '../components/SignupTrigger';
import TeamMembers from '../components/TeamMembers';

export default function OurTeam() {
  // Array to store team images to avoid redundancy
  const teamImages = [ourTeamImage2, ourTeamImage3, ourTeamImage4];

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="hero-image container mx-auto relative">
        <img src={TeamImage} alt="team" className="w-full h-[450px] sm:h-[650px] object-cover" />
        <h1 className="text-[24px] sm:text-[36px] lg:text-[60px] font-medium text-center absolute left-4 sm:left-[80px] text-white top-[200px] sm:top-[390px] z-2">
          On the other hand, <br />
          we denounce with.
        </h1>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto p-8 sm:p-16">
        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Left side images */}
          <div className="flex flex-col gap-4 justify-start w-full lg:w-3/4">
            <img
              src={ourTeamImage1}
              alt="team"
              className="w-full lg:w-1/2 h-64 sm:h-auto filter grayscale object-cover"
            />
            <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 w-full lg:w-3/4">
              {teamImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`team ${index + 2}`}
                  className="w-full lg:w-1/3 h-40 sm:h-auto filter grayscale object-cover"
                />
              ))}
            </div>
          </div>

          {/* Right side text */}
          <div className="flex flex-col lg:absolute top-0 right-0 w-full lg:w-[600px] z-9 lg:top-20">
            <h2 className="text-2xl sm:text-3xl mb-2 font-medium">Our Team Members</h2>
            <img src={yellowLine} alt="yellow line" className="w-1/5 h-[3px]" />
            <p className="text-left text-[14px] text-gray-500 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              lorem ipsum b illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt lorem ipsum.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container mx-auto p-8 sm:p-16">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-center">
            Driving Innovation, Building Prosperity
          </h2>
          <img src={yellowLine} alt="yellow line" className="w-1/8 h-[3px] my-4 sm:my-8" />
          <TeamMembers />
        </div>
      </section>

      {/* Signup Trigger */}
      <SignupTrigger />
    </div>
  );
}
