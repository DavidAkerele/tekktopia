function Blog() {
  return (
    <div className="w-full h-full flex flex-col gap-16">
      <picture className="relative w-full h-full">
        <img src="/blog-hero.png" alt="blog" className="w-full h-full object-cover" />
        <pre className="absolute bottom-4 md:bottom-20 left-10 text-white font-medium">
          Building Wealth, <br />
          Securing Futures
        </pre>
      </picture>

      <h2 className="text-center text-xl font-normal">Latest Articles</h2>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center space-y-16 px-8">
        {/* First Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {["article1.png", "article2.png", "article3.png"].map((article, index) => (
            <div key={index} className="space-y-2">
              <img src={`/${article}`} alt="blog" className="w-full h-auto object-cover" />
              <p className="w-full">
                Lorem ipsum dolor, sit amet consectetur
              </p>
              <span className="text-blue-600 cursor-pointer">Read more -&gt;</span>
            </div>
          ))}
        </section>

        <h2 className="text-xl font-normal">More Articles</h2>

        {/* Second Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {["article4.png", "article5.png", "article6.png", "article7.png"].map((article, index) => (
            <div key={index} className="space-y-2">
              <img src={`/${article}`} alt="blog" className="w-full h-auto object-cover" />
              <p className="w-full">
                Lorem ipsum dolor, sit amet consectetur
              </p>
              <span className="text-blue-600 cursor-pointer">Read more -&gt;</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;
