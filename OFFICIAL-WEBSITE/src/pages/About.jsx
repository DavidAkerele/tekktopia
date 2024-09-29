import React from 'react'

const About = () => {
  return (
    <section className = "mt-24">
    {/*First about section*/}
     <div className='relative'>
    <img src="/about-banner.png" alt="" className='w-full h-[450px] sm:h-[650px] object-cover' />
    <div className='absolute w-full top-[180px]'>
      <div className=' flex flex-col items-center'>
      <img src="/about2.png" alt="" />
      <p className='mt-3 text-[16px] text-white'>ABOUT US</p>
      <h1 className='text-[60px]  text-center mt-3 text-white font-[500]'>Crafting  <br />
      Customized Wealth Solutions:</h1>
      </div>
    </div>
     </div>

     {/*Second about section*/}
     <section className='mt-[120px]'>
       <div className='flex gap[90px] justify-center'>
        <div className='max-w-[620px] flex flex-col justify-center'>
       <p className='text-[14px] font-medium mb-4'>OUR STORY</p>
       <h2 className='text-[32px] mb-4'>How We Started Till Date</h2>
       <p className='text-[#697D95B2] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat. Aliquam rutrum eget odio et mattis. Sed laoreet porta condimentum. Phasellus sollicitudin lobortis porta. Donec a eros quis nunc pretium egestas. Ut ultrices sed leo non vestibulum. Nullam ac nulla suscipit.</p>
        </div>

<div className='relative'>
  <img src="/about3.png" alt="" />
  <div className='absolute top-7 left-4'>
    <h1 className='text-[32px] text-white font-extrabold'>2021</h1>
    <p className='mt-[190px] mb-4 text-[16px] text-white font-[500]'>The Beginning</p>
    <p className='text-white text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat. </p>
  </div>
</div>
       </div>

       
     </section>
    </section>
  )
}

export default About