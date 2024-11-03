import TriangleIcon from '../../../icons/TriangleIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const OurStory = () => {
  const yearData = [
    {
      year: '2021',
      image: '/about3.png',
      title: 'The Beginning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat.',
    },
    {
      year: '2022',
      image: '/about3.png',
      title: 'Growth',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat.',
    },
    {
      year: '2023',
      image: '/about3.png',
      title: 'Expansion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat aliquam, faucibus erat a, dictum erat aliquam, faucibus erat a, dictum erat.',
    },
    {
      year: '2024',
      image: '/about3.png',
      title: 'Future Vision',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula aliquam, faucibus erat a, dictum erat.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Cycle through the years every 5 seconds, but pause when hovering
  useEffect(() => {
    if (!hovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % yearData.length);
      }, 5000);
      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [hovering]);

  return (
    <div>
      <section className="mt-[120px]">
        <div className="flex gap-[80px] justify-center">
          <div className="max-w-[620px] flex flex-col justify-center">
            <p className="text-[14px] font-medium mb-4">OUR STORY</p>
            <h2 className="text-[32px] mb-4">How We Started Till Date</h2>
            <p className="text-[#697D95B2] text-[14px] w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
              ligula aliquam, faucibus erat a, dictum erat. Aliquam rutrum eget
              odio et mattis. Sed laoreet porta condimentum. Phasellus
              sollicitudin lobortis porta. Donec a eros quis nunc pretium
              egestas. Ut ultrices sed leo non vestibulum. Nullam ac nulla
              suscipit.
            </p>
          </div>

          <div
            className="relative w-[580px] h-[400px] cursor-pointer"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <AnimatePresence>
              {yearData.map((year, index) =>
                index === currentIndex ? (
                  <motion.div
                    key={year.year}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <img src={year.image} alt="" className="w-full h-full" />
                    <div className="top-0 absolute h-full flex flex-col justify-between px-[30px] box-border py-[30px]">
                      <h1 className="text-[32px] text-white font-extrabold">
                        {year.year}
                      </h1>
                      <div className="text-white text-[14px]">
                        <p>{year.title}</p>
                        {year.description}
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="flex gap-[80px] justify-center mt-[120px]">
        <div className="w-[580px] h-[400px]">
          <img
            src="/src/assets/images/about/About2.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-w-[620px] flex flex-col justify-center px-[40px] box-border">
          <h2 className="text-[32px] mb-4">
            We offer diverse tech related solutions to our diverse range of
            clients
          </h2>
          <p className="text-[#697D95B2] text-[14px] w-[600px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt lorem ispum b illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt lorem ispum.
          </p>
          <ul>
            <li className="flex items-center mt-[16px]">
              <TriangleIcon />
              <div className="ml-[8px] text-[14px] text-[#697D95B2]">
                Lorem Ispum eit
              </div>
            </li>
            <li className="flex items-center mt-[16px]">
              <TriangleIcon />
              <div className="ml-[8px] text-[14px] text-[#697D95B2]">
                Lorem Ispum eit
              </div>
            </li>
            <li className="flex items-center mt-[16px]">
              <TriangleIcon />
              <div className="ml-[8px] text-[14px] text-[#697D95B2]">
                Lorem Ispum eit
              </div>
            </li>
            <li className="flex items-center mt-[16px]">
              <TriangleIcon />
              <div className="ml-[8px] text-[14px] text-[#697D95B2]">
                Lorem Ispum eit
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
