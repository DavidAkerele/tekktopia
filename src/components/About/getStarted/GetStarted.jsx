import GlobalIcon from '../../../icons/GlobalIcon';

const GetStarted = () => {
  const items = [
    {
      title: 'Sed ut perspiciatis under.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
    {
      title: 'Sed ut perspiciatis under.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
    {
      title: 'Sed ut perspiciatis under.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
    {
      title: 'Sed ut perspiciatis under.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
  ];

  return (
    <section className="mt-[200px] px-4 sm:px-8">
      <div className="flex flex-col text-center justify-between items-center">
        <div className="text-[32px] sm:text-[36px] max-w-[518px] text-center ">
          Bridging excellence and innovation across diverse sectors.
        </div>
        <div className="max-w-[484px] text-[14px] text-[#697D95B2] text-center  mt-4 sm:mt-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt lorem ispum.
        </div>
        <div className="mt-6 sm:mt-0 text-[#0056b3] font-semibold cursor-pointer">
          Get started
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-[112px] gap-8 sm:gap-16">
        {items.map((item, index) => (
          <div className="flex flex-col items-center text-center sm:text-left max-w-[265px]" key={index}>
            <div className="h-[40px] w-[40px] border-[#CCCCCC4D] border-[1px] flex items-center justify-center rounded-md mb-4">
              <GlobalIcon />
            </div>
            <div className="text-[16px] text-[#697D95]">{item.title}</div>
            <div className="text-[14px] text-[#697D95B2]">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
