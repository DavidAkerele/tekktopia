import ShadedTriangleIcon from '../../../icons/ShadedTriangleIcon';

const CompanyEthos = () => {
  const cards = [
    {
      title: 'Mission',
      description:
        'After setting up your account, add recipients by entering their details and selecting their preferred payout method. Save these details for even faster future transactions.',
    },
    {
      title: 'Vision',
      description:
        'After setting up your account, add recipients by entering their details and selecting their preferred payout method. Save these details for even faster future transactions.',
    },
    {
      title: 'Core Values',
      description:
        'After setting up your account, add recipients by entering their details and selecting their preferred payout method. Save these details for even faster future transactions.',
    },
  ];

  return (
    <section className="mt-[176px]">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[700px] h-[750px] mb-8 lg:mb-0">
          <img
            src="/src/assets/images/about/About4.png"
            alt="Company Ethos Overview"
            className="object-cover w-full h-full"
          />
          <div className="flex flex-col items-center justify-between h-[506px] w-[150px] absolute top-[32px] right-[32px]">
            {['Mission', 'Vision', 'Core Values'].map((title, index) => (
              <div
                key={index}
                className="w-full h-[150px] bg-[#0000004D] rounded-[30px] flex flex-col items-center justify-center text-[white]"
              >
                <div className="text-[50px] mb-[2px]">{index + 1}</div>
                <div>{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col gap-[32px] items-center w-full lg:w-[544px]">
          {cards.map((card, index) => (
            <div
              className="w-full h-[304px] bg-[#F8F8FA] p-[40px] box-border rounded-[20px]"
              key={index}
            >
              <ShadedTriangleIcon />
              <div className="mt-[40px]">
                <div className="text-[16px] font-bold">{card.title}</div>
                <div className="text-[14px] text-[#697D95B2] mt-[12px]">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyEthos;
