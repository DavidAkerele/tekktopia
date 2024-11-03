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
    <section className="mt-[200px]">
      <div className="flex justify-between items-end">
        <div className="text-[32px] max-w-[518px]">
          Bridging excellence and innovation across diverse sectors.
        </div>
        <div className="max-w-[484px] text-[14px] text-[#697D95B2]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt lorem ispum.
        </div>
        <div>Get started</div>
      </div>
      <div className="flex items-center justify-between mt-[112px]">
        {items.map((item, index) => (
          <div className="max-w-[265px]" key={index}>
            <div className="h-[40px] w-[40px] border-[#CCCCCC4D] border-[1px] flex items-center justify-center rounded-md">
              <GlobalIcon />
            </div>
            <div className="mt-[32px]">
              <div className="text-[16px] text-[#697D95]">{item.title}</div>
              <div className="text-[14px] text-[#697D95B2]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
