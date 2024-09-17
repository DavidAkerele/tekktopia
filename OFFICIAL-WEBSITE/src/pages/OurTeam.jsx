import TeamImage from '../assets/images/Team.png';
import ourTeamImage1 from '../assets/images/ourTeamImage1.png';
import ourTeamImage2 from '../assets/images/ourTeamImage2.png';
import ourTeamImage3 from '../assets/images/ourTeamImage3.png';
import ourTeamImage4 from '../assets/images/ourTeamImage4.png';
import yellowLine from '../assets/images/yellowLine.png';
import SignupTrigger from '../components/SignupTrigger';
import TeamMembers from '../components/TeamMembers';

export default function OurTeam() {
  
  return (
    <div className="w-full">
        <section className='hero-image container mx-auto relative'>
            <img src={TeamImage} alt="team" className="w-full h-[650px] object-cover"/>
            <h1 className="lg:text-[60px] text-[36px] font-medium text-center absolute left-[80px] text-white top-[390px]">
                On the other hand, <br/>
                we denounce with.
            </h1>
        </section>      
        <section className="container mx-auto p-16 ">
            <div className='relative flex'>
                <div className="flex flex-col gap-4 justify-start w-3/4">
                    <img src={ourTeamImage1} alt="team" className="w-1/2 h-100 justify-start filter grayscale object-cover col-6"/>
                    <div className='flex row w-3/4 gap-6'>
                        <img src={ourTeamImage2} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                        <img src={ourTeamImage3} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                        <img src={ourTeamImage4} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                    </div>
                </div>
                <div className='flex flex-col lg:absolute top-20 right-0  mr-0 w-[600px]'>
                    <h2 className="text-3xl mb-2 font-medium">
                        Our Team Members
                    </h2>
                    <img src={yellowLine} alt="team" className="w-1/4 h-[3px]"/>
                    <p className="text-left text-[14px] text-gray-500 mt-2">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                        lorem ispum b illo inventore veritatis et quasi architecto beatae vitae dicta 
                        sunt lorem ispum.
                    </p>
                </div>
            </div>
        </section>  
        <section className="container mx-auto p-16">
                <div className='flex flex-col items-center'>
                    <h2 className="text-3xl font-medium">
                        Driving Innovation, Building Prosperity
                    </h2>
                    <img src={yellowLine} alt="team" className="w-1/4 h-[3px] my-8"/>
                    <TeamMembers/>              
                </div>
        </section>
        <SignupTrigger/>
    </div>
  )
}
