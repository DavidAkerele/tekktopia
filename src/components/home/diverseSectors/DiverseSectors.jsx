import { FiChevronRight } from 'react-icons/fi';
import { GrStatusGood } from 'react-icons/gr';

const DiverseSectors = () => {
  return (
    <section className="mt-40 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image Container */}
        <div className="w-full max-w-[600px] h-auto flex justify-center items-center bg-gradient-to-br from-[#041429] from-[60%] to-[#244674] to-[100%] rounded-[12px]">
          <div className="p-4 box-border border-[1px] border-[#1e2c3e] rounded-md">
            <img
              src="/src/assets/images/home3.svg"
              alt=""
              className="w-full h-auto max-w-[472px] max-h-[522px] object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-[900px] px-4">
          <h3 className="text-[28px] lg:text-[32px] text-[#0B0B0B] leading-[40px] lg:leading-[45px]">
            Bridging excellence and innovation across diverse sectors.
          </h3>
          <p className="mt-2 text-[14px] lg:text-[16px] text-[#697D95B2] font-[400] leading-[22px] lg:leading-[24px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt lorem ispum.
          </p>
          <button className="text-base mt-4 font-medium flex items-center rounded-md px-4 py-2 border shadow-sm">
            Request a demo <FiChevronRight />
          </button>
          <div className="mt-14">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index}>
                  <p className="pb-4 flex text-[16px] font-[400] items-center gap-4">
                    <GrStatusGood className="text-[#A66928]" /> Poluptatem
                    accusantium dolore laudantium, totam rem.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseSectors;
