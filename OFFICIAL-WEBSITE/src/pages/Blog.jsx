function Blog() {
  return (
    <div className="w-full h-full flex flex-col gap-16">
      <picture className="relative w-full aspect-auto h-full">
        <img src={"/blog-hero.png"} alt="blog" className="aspect-auto w-full" />
        <pre className="absolute bottom-4 md:bottom-20 left-10 text-white hero font-[500]">
          Building Wealth, <br />
          Securing Futures
        </pre>
      </picture>
      <h2 className="text-center text-xl font-[400]">Latest Articles</h2>
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center space-y-16 px-8">
        <section className="grid grid-cols-3 gap-4 justify-evenly w-full">
          <div className="w-full space-y-2">
            <img src={"/article1.png"} alt="blog" className="object-cover" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
          <div className="w-full space-y-2">
            <img src={"/article2.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
          <div className="w-full space-y-2">
            <img src={"/article3.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
        </section>

        <h2 className="text-xl font-[400]">Latest Articles</h2>

        <section className="grid grid-cols-3 gap-4 justify-evenly w-full">
          <div className="w-full space-y-2">
            <img src={"/article4.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
          <div className="w-full space-y-2">
            <img src={"/article5.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
          <div className="w-full space-y-2">
            <img src={"/article6.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
          <div className="w-full space-y-2">
            <img src={"/article7.png"} alt="blog" className="aspect-square" />
            <p className="text-wrap w-full">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <span>Read more -&gt;</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
