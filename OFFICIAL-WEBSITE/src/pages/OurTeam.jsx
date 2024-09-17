import TeamImage from '../assets/images/Team.png';
import ourTeamImage1 from '../assets/images/ourTeamImage1.png';
import ourTeamImage2 from '../assets/images/ourTeamImage2.png';
import ourTeamImage3 from '../assets/images/ourTeamImage3.png';
import ourTeamImage4 from '../assets/images/ourTeamImage4.png';
import yellowLine from '../assets/images/yellowLine.png';
export default function OurTeam() {
  return (
    <div className="w-full bg-red h-100">
        <section className='hero-image relative'>
            <img src={TeamImage} alt="team" className="w-full h-[650px] object-cover"/>
            <h1 className="text-4xl text-center absolute left-[80px] text-white top-[390px]">
                On the other hand, <br/>
                we denounce with.
            </h1>
        </section>      
        <section className="container mx-auto p-16 relative">
            <div className="flex flex-col gap-4 justify-start">
                <img src={ourTeamImage1} alt="team" className="w-1/2 h-100 justify-start filter grayscale object-cover col-6"/>
                <div className='flex row w-3/4 gap-6'>
                    <img src={ourTeamImage2} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                    <img src={ourTeamImage3} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                    <img src={ourTeamImage4} alt="team" className="w-1/3 h-100 filter grayscale object-cover"/>
                </div>
            </div>
            <div className='top-[220px] left-[728px] absolute flex flex-col items-center'>
                <h2 className="text-4xl text-center mb-2 font-md">
                    Our Team Members
                </h2>
                <img src={yellowLine} alt="team" className="flex w-1/2 h-100"/>
            </div>
        </section>  
    </div>
  )
}
