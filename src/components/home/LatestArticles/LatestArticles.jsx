import RightArrowIcon from '../../../icons/RightArrowIcon';

const LatestArticles = () => {
  return (
    <section className="mt-24">
      <h2 className="text-left ml-44 mb-20 text-[32px] font-[400]">
        Explore our <br />
        Latest Articles
      </h2>
      <div className="flex items-center flex-col">
        <div className="flex gap-8 max-w-[1280px]">
          {['article1.png', 'article2.png', 'article3.png'].map(
            (article, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={`/${article}`}
                  alt="blog"
                  className="w-[400px] rounded-md h-[260px] object-cover"
                />
                <p className="w-full text-[22px] pt-4 pb-4">
                  Lorem ipsum dolor sit amet, consecte adipisci elit, lorem
                  ispum
                </p>
                <span className="text-[#0B0B0B] text-[16px] pt-8 cursor-pointer flex items-center">
                  Read More
                  <div className="ml-[8px]">
                    <RightArrowIcon />
                  </div>
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
