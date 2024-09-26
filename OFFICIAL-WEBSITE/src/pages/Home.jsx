import React from 'react';
import { FiChevronRight, FiChevronLeft  } from "react-icons/fi";
import HeroImage from "../assets/images/home1.png";
import { GrStatusGood } from "react-icons/gr";

const Home = () => {
  const inno = [
    { id: 1,
      img: "/inno1.png",
      title: "Transportation"
},
{ id: 2,
  img: "/inno2.png",
  title: "Corporate Organisation"
},  
{ id: 3,
  img: "/inno3.png",
  title: "Health care"
},
{ id: 4,
  img: "/inno4.png",
  title: "Finance"
}
  ]

  return (
    <section className="mt-24 md:mt-44 ">
      {/* First Home Section */}
      <div className="flex flex-col  items-center min-h-screen px-4">
        <div className="flex flex-col  md:flex-row items-center justify-center gap-2">
          <div className="text-center md:text-left leading-tight md:leading-[80px] font-medium text-[#0B0B0B] text-[28px] sm:text-[36px] md:text-[60px]">
            We manage your IT, so
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <img src="/Ellipse23.png" className="absolute" alt="ellipse23" />
            <img
              src="/Ellipse24.png"
              alt="ellipse24"
              className="relative left-4 md:left-14"
            />
            <img
              src="/Ellipse25.png"
              alt="ellipse25"
              className="relative left-2 md:left-12"
            />
          </div>
        </div>

        <div className="text-center text-[28px] sm:text-[36px] md:text-[60px] leading-tight md:leading-snug bg-gradient-to-r from-[#67BDD5] to-[#4B82CA] text-transparent font-medium bg-clip-text mt-4">
          you can manage your business.
        </div>

        <p className="text-center text-[#697D95B2] text-[14px] sm:text-[16px] mt-4 max-w-[865px]">
          Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology. We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to meet the unique needs of our clients.
        </p>

        <div className="flex mt-8 gap-2 items-center justify-center">
          <button className="bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-md text-base font-medium flex items-center">
            Contact us <FiChevronRight />
          </button>
          <button className="text-base font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Request a demo <FiChevronRight />
          </button>
        </div>

        <div className="mt-10 mb-20 w-full">
          <img src={HeroImage} className="mx-auto w-full max-w-[1240px]" alt="hero" />
        </div>
      </div>

      {/* Second Home Section */}
      <section className="bg-[#081527] w-full">
        <div className="flex flex-col items-center min-h-screen px-4">
          <div className="mt-16 md:mt-[115px] text-center">
            <div className="text-[#FFFFFF] text-[22px] sm:text-[24px] md:text-[32px] font-[DM Sans] font-medium leading-[28px] sm:leading-[30px] md:leading-[45px] mb-2">
              Bridging excellence and <br />
              innovation across diverse sectors.
            </div>
            <div className="text-[#FFFFFFB2] text-center text-[14px] sm:text-[16px] leading-[24px]">
              Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology.<br />
              We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to.
            </div>
          </div>
          <div className='flex mt-16 items-center gap-[24px]'>
           <img src="/frame1.png" className='rounded-md' alt="" />
           <img src="/frame2.png" className='rounded-md' alt="" />
          </div>
          <div className='flex gap-16 mt-16'>
            <div>
             <div className='text-[32px] text-[#FFFFFF]  font-[400]'>Bridging excellence and innovation</div>
             <p className='w-[564px] text-[#FFFFFFB2] leading-[24px] text-[14px] '>Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology. We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to.</p>
            </div>
           
            <div className='flex justify-between flex-wrap mb-24 w-[570px] gap-[90px]'>
  {Array(4).fill().map((_, index) => (
    <div key={index} className='flex-grow'>
      <div className='text-[24px] mb-2 font-[500] text-[#C2813B]'>5 Mins</div>
      <p className='text-[16px] text-[#FFFFFF] font-[500] mb-2'>Setup</p>
      <p className='text-[12px] border-b-[0.05px] border-[#CCCCCC]  pb-4 text-[#FFFFFFB2]'>
        Welcome to TechTopia, <br /> where innovation meets
      </p>
      
    </div>
  ))}
</div>
            </div>
          </div>
        
      </section>

      {/* Third Home Section */}
      <section className='mt-40'>
        <div className='flex items-center justify-center gap-12'>
    <div>
<img src="/Hom3.png" alt="" />
    </div>
    <div className='w-[588px]'>
  <h3 className='text-[32px] font-[400] text-[#0B0B0B] font-[DM-Sans] leading-[45px]'>Bridging excellence and innovation across diverse sectors.</h3>
  <p className='mt-2 leading-[24px] text-[14px] text-[#697D95B2] font-[400]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt lorem ispum.</p>
  <button className="text-base mt-4 font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Request a demo <FiChevronRight />
          </button>
          <div className='mt-14'>
          {Array(4).fill().map((_, index) => (
    <div key={index} className=''>
     <p className='pb-4 flex text-[16px] font-[400] items-center gap-4'><GrStatusGood className='text-[#A66928]'/> Poluptatem accusantium dolore laudantium, totam rem.</p>
    </div>
  ))}
          </div>
    </div>
    </div>
      </section>

      {/* Fourth Home Section */}
      <section className='mt-40 flex flex-col items-center ' >
      <div class="relative text-center">
  <span class="inline-block pb-4 text-[32px] font-[400] relative">
  Driving Innovation, Building Prosperity
    <span class="absolute left-1/2 -translate-x-1/2 bottom-[-2px] w-[120px] border-b-[3px] border-[#F8901F80]"></span>
  </span>
</div> 
<div className='text-center text-[14px] leading-[24px] mx-auto text-[#697D95B2] mt-6 max-w-[700px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dic.</div>
<div className='mt-24 flex'>
        {inno.map((inn) =>( 
        <div key={inn.id} className='relative'>
        <img src={inn.img} alt="" />
        <h1 className='text-[18px] text-left absolute top-72 font-[700] text-[#FFFFFF] left-6 bottom-0'>{inn.title}</h1>
        </div>
        ))}
        </div> 
      </section>


      {/*Fifth Home section */}
      <section className='mt-20'>
        <div className='relative'>
         <img src="/banner.png" className='w-full h-[450px] sm:h-[650px] object-cover' alt="" />
         <div className='absolute top-[166px] left-[80px]'>
          <p className='text-[14px] font-[400] text-[#FFFFFF] mb-4'>Tekktopia</p>
          <h3 className='text-[32px] font-[700] text-[#FFFFFF] mb-4'>Bridging excellence and innovation</h3>
          <p className='max-w-[588px] text-[14px] font-[400] text-[#FFFFFF] mb-4'>Welcome to TechTopia, where innovation meets expertise in the dynamic world of Information Technology. We are a forward-thinking IT company dedicated to delivering cutting-edge solutions tailored to.</p>
          <button className="text-base mt-10 bg-[#FFFFFF]  text-[#6797D5] font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Contact us<FiChevronRight />
          </button>
         </div>
        </div>
      </section>

      {/*Sixth Home section*/}
      <section className='mt-[120px]'>
       <h2 className='text-[32px] text-center font-[400]'>Driving Innovation, Building Prosperity</h2>
      </section>

      <section className="py-12">
      <div className="flex items-center justify-center">
        {/* Left Chevron */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FiChevronLeft size={30} />
        </button>

        {/* Image and Text */}
        <div className="mx-8 text-center">
          <img
            src="/path-to-image.jpg"
            alt="Testimonial"
            className="w-48 h-48 rounded-full mx-auto object-cover"
          />
          <h2 className="text-xl mt-4 font-semibold">John Doe</h2>
          <p className="mt-2 text-gray-500">"This is an amazing service! Highly recommend it!"</p>
        </div>

        {/* Right Chevron */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FiChevronRight size={30} />
        </button>
      </div>

      {/* Dot Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        <span className="h-3 w-3 bg-gray-300 rounded-full cursor-pointer"></span>
        <span className="h-3 w-3 bg-blue-500 rounded-full cursor-pointer"></span>
        <span className="h-3 w-3 bg-gray-300 rounded-full cursor-pointer"></span>
      </div>
    </section>

     {/*Seventh Home section*/}
     <section className='mt-24'>
     <h2 className='text-left ml-44 mb-20 text-[32px] font-[400]'>Explore our <br />
     Latest Articles</h2>
      <div className='flex items-center flex-col'>
     <div className='flex gap-8 max-w-[1280px]'>
          {["article1.png", "article2.png", "article3.png"].map((article, index) => (
            <div key={index} className="space-y-2">
              <img src={`/${article}`} alt="blog" className="w-[400px] rounded-md h-[260px] object-cover" />
              <p className="w-full text-[22px] pt-4 pb-4">
              Lorem ipsum dolor sit amet, consecte adipisci elit, lorem ispum
              </p>
              <span className="text-[#0B0B0B] text-[16px] pt-8 cursor-pointer">Read more -&gt;</span>
            </div>
          ))}
          </div>
          </div>
     </section>
    </section>
  );
};

export default Home;
