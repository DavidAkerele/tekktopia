import RightArrowIcon from '../../../icons/RightArrowIcon';

const LatestArticles = () => {
  const articles = [
    { id: 1, img: 'article1.png', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, img: 'article2.png', title: 'Consectetur adipiscing elit' },
    { id: 3, img: 'article3.png', title: 'Mauris tempor auctor orci' },
  ];

  return (
    <section className="mt-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-left text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-12">
        Explore our Latest Articles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map(({ id, img, title }) => (
          <div key={id} className="space-y-2 group">
            <img
              src={`/${img}`}
              alt={title}
              className="w-full h-[220px] sm:h-[260px] rounded-md object-cover transition-transform transform group-hover:scale-105"
            />
            <p className="text-[20px] md:text-[22px] font-medium">{title}</p>
            <a href="/blog" className="inline-block text-white">
              <button className="mt-2 flex items-center gap-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition">
                Read More{' '}
                <RightArrowIcon className="ml-2 transition-transform text-white group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
