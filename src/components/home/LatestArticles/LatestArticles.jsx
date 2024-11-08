import RightArrowIcon from '../../../icons/RightArrowIcon';

const LatestArticles = () => {
  const articles = [
    { id: 1, img: 'article1.png', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, img: 'article2.png', title: 'Consectetur adipiscing elit' },
    { id: 3, img: 'article3.png', title: 'Mauris tempor auctor orci' },
  ];

  return (
    <section className="mt-24">
      <h2 className="text-left ml-4 sm:ml-8 md:ml-16 text-[32px] font-semibold mb-20">Explore our Latest Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(({ id, img, title }) => (
          <div key={id} className="space-y-2">
            <img src={`/${img}`} alt={title} className="w-full rounded-md h-[260px] object-cover" />
            <p className="text-[22px]">{title}</p>
            <span className="text-[#0B0B0B] text-[16px] flex items-center cursor-pointer">
              Read More <RightArrowIcon />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
