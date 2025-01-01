import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
// import blogHeroImage from "/blog-hero.png";
// import SignupTrigger from '../components/SignupTrigger';

function Blog() {
  return (
    <div className="w-full h-full flex flex-col gap-16 ">
      <Hero
        imageUrl={'/blog-hero.png'}
        topText="Tech that simplifies,"
        bottomText="Solutions that deliver"
      />

      <h2 className="text-center text-[32px] font-normal">Latest Articles</h2>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center space-y-16 px-8">
        {/* First Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              image: 'article1.png',
              id: 1,
              title:
                'AI content detection in the emerging information ecosystem',
            },
            {
              image: 'article3.png',
              id: 2,
              title:
                'How to deal with Big Tech power! The “ Big Tech Rah”, a new form of biopower in the digital age',
            },
            {
              image: 'article8.png',
              id: 3,
              title:
                'The urban-texh feedback loop: A surveillance and development data-walk in South Lake Union',
            },
            {
              image: 'article7.png',
              id: 4,
              title: 'Equity Structure and Business Innovation Performance',
            },
            {
              image: 'article5.png',
              id: 5,
              title:
                'Tech revolution unleashed : Navigating the winds of digital transformation in the fast lane',
            },
            {
              image: 'article6.png',
              id: 6,
              title: 'The rise and fall of Tech Clusters: A literature revirew',
            },
            {
              image: 'article2.png',
              id: 7,
              title:
                'How tech companies advance sustainability through artificial intelligence ',
            },
            {
              image: 'article4.png',
              id: 7,
              title:
                'How tech companies advance sustainability through artificial intelligence ',
            },
          ].map((article, index) => (
            <Link
              to={{ pathname: `/blog/${article.id}`, state: 'Water' }}
              key={index}
              className="space-y-2"
            >
              <img
                src={`/${article.image}`}
                alt="blog"
                className="w-full h-auto object-cover"
              />
              <p className="w-full">{article.title}</p>
              <span className="cursor-pointer mt-4">Read more -&gt;</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;
