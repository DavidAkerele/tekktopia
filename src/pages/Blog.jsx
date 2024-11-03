import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
// import blogHeroImage from "/blog-hero.png";
import SignupTrigger from '../components/SignupTrigger';

function Blog() {
  return (
    <div className="w-full h-full flex flex-col gap-16 container">
      <Hero
        imageUrl={'/blog-hero.png'}
        topText="Building Wealth,"
        bottomText="Securing Futures"
      />

      <h2 className="text-center text-xl font-normal">Latest Articles</h2>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center space-y-16 px-8">
        {/* First Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { image: 'article1.png', title: 'Lorem weoighwegioeh iwohfewn' },
            { image: 'article2.png', title: 'Somethings' },
            { image: 'article3.png', title: 'Example' },
          ].map((article, index) => (
            <Link
              to={{ pathname: `/blog/${article.title}`, state: 'Water' }}
              key={index}
              className="space-y-2"
            >
              <img
                src={`/${article.image}`}
                alt="blog"
                className="w-full h-auto object-cover"
              />
              <p className="w-full">{article.title}</p>
              <span className="text-blue-600 cursor-pointer">
                Read more -&gt;
              </span>
            </Link>
          ))}
        </section>

        <h2 className="text-xl font-normal">More Articles</h2>

        {/* Second Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { image: 'article4.png', title: 'Lorem weoighwegioeh iwohfewn' },
            { image: 'article5.png', title: 'Somethings' },
            { image: 'article6.png', title: 'Example' },
            { image: 'article7.png', title: 'Example' },
          ].map((article, index) => (
            <Link
              to={{ pathname: `/blog/${article.title}`, state: 'Water' }}
              key={index}
              className="space-y-2"
            >
              <img
                src={`/${article.image}`}
                alt="blog"
                className="w-full h-auto object-cover"
              />
              <p className="w-full">{article.title}</p>
              <span className="text-blue-600 cursor-pointer">
                Read more -&gt;
              </span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;
