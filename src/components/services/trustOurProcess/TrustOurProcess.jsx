import { useEffect, useState, useRef } from 'react';

const TrustOurProcess = () => {
  const progressBarData = [
    { text: '24/7 Support', barPercent: 94 },
    { text: 'Technical Assistance', barPercent: 85 },
    { text: 'Bug Fixing', barPercent: 78 },
    { text: 'Customer Service', barPercent: 92 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } 
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-[url('/qualityAssuranceBg.png')] p-12 mt-[100px] rounded-md">
      <div className="mx-auto flex flex-col lg:flex-row text-white items-center">
        <div className="lg:w-[40%] mr-auto flex flex-col">
          <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
            Trust Us Process
            <img
              src="/src/assets/images/yellowLine.png"
              alt="yellow line"
              className="w-1/2 my-2 h-[3px]"
            />
          </h2>
          <p className="text-[22px] font-semibold my-3">
            Our world class services that are unbeatable by no other
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt lorem ispum b illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt lorem ispum.
          </p>
        </div>
        <div className="w-[451px] h-[158px] flex flex-col justify-between">
          {progressBarData.map((item, index) => (
            <div key={index}>
              <div className="text-[white]">{item.text}</div>
              <div
                ref={progressRef}
                className="relative w-full h-[7px] rounded-[50px] bg-[white] mt-[6px]"
              >
                <div
                  className={`h-full bg-[#F5901F] relative transition-width duration-1000 ease-in-out rounded-md`}
                  style={{ width: isVisible ? `${item.barPercent}%` : '0%' }} // Dynamically update width based on visibility
                >
                  <div
                    className={`absolute top-[-35px] right-0 transform translate-x-[50%] bg-[white] text-[black] text-xs py-1 px-2 rounded transition-opacity duration-1500 ease-in-out ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: isVisible ? '1s' : '0s' }} // Tooltip delay to show after bar fills
                  >
                    {item.barPercent}%
                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-[white]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOurProcess;
