const DrivingInnovation = () => {
  const inno = [
    { id: 1, img: '/inno1.png', title: 'Transportation' },
    { id: 2, img: '/inno2.png', title: 'Corporate Organisation' },
    { id: 3, img: '/inno3.png', title: 'Health care' },
    { id: 4, img: '/inno4.png', title: 'Finance' },
  ];

  return (
    <section className="mt-40 flex flex-col items-center ">
      <div className="relative text-center">
        <span className="inline-block pb-4 text-[32px] font-[400] relative">
          Driving Innovation, Building Prosperity
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2px] w-[120px] border-b-[3px] border-[#F8901F80]"></span>
        </span>
      </div>
      <div className="text-center text-[14px] leading-[24px] mx-auto text-[#697D95B2] mt-6 max-w-[700px]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dic.
      </div>
      <div className="mt-24 flex">
        {inno.map((inn) => (
          <div
            key={inn.id}
            className="relative transform hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <img src={inn.img} alt="" className="w-full h-auto" />
            <h1 className="text-[18px] text-left absolute top-72 font-[700] text-[#FFFFFF] left-6 bottom-0">
              {inn.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrivingInnovation;
