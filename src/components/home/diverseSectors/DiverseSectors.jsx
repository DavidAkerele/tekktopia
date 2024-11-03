import { FiChevronRight } from 'react-icons/fi';
import { GrStatusGood } from 'react-icons/gr';

const DiverseSectors = () => {
  return (
    <section className="mt-40">
      <div className="flex items-center justify-center gap-12">
        <div className="w-[600px] h-[650px] flex justify-center items-center bg-gradient-to-br from-[#041429] from-[60%] to-[#244674] to-[100%] rounded-[12px]">
          <div className="p-[10px] box-border border-[1px] border-[#1e2c3e] rounded-md">
            <img
              src="/src/assets/images/home3.svg"
              alt=""
              className="w-[472px] h-[522px]"
            />
          </div>
        </div>
        <div className="w-[588px]">
          <h3 className="text-[32px] text-[#0B0B0B] leading-[45px]">
            Bridging excellence and innovation across diverse sectors.
          </h3>
          <p className="mt-2 leading-[24px] text-[14px] text-[#697D95B2] font-[400]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
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
                <div key={index} className="">
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
