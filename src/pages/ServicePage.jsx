import { useParams } from 'react-router-dom';
import Hero from '../components/services/categoryPages/Hero';
import Features from '../components/services/categoryPages/Features';
import Testimonials from '../components/services/categoryPages/Testimonials';
import { FiChevronRight } from 'react-icons/fi';

// Define service categories
const ServiceCategories = {
  'cloud-computing': {
    titleTop: 'Cloud',
    titleBottom: 'Computing Services',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      {
        title: 'Cloud Strategy and Consulting',
        description:
          'Collaborate with Tekktopia to create a cloud adoption roadmap tailored to your business goals.Assess your current IT infrastructure and identify workloads ideal for migration.',
        image: '/cloud-f1.png',
      },
      {
        title: 'Cloud Migration Services',
        description:
          'Seamlessly migrate workloads, applications, and data to the cloud with minimal downtime.Employ phased migration strategies to reduce risks and ensure continuity.',
        image: '/cloud-f2.png',
      },
      {
        title: ' SaaS, PaaS, and IaaS Solutions',
        description:
          'SaaS:  Enable your business with ready-to-use software applications accessible from anywhere. PaaS: Accelerate development cycles with pre configured platforms and tools for app development. IaaS: Gain access to on demand computing power.',
        image: '/cloud-f3.png',
      },
    ],
    testimonials: '/cloud-computing-att.png',
    image: '/cloud-computing.png',
    reviews: {
      image: '/review-guy.png',
      name: 'John Doe',
      comment:
        'Tekktopia didn’t just provide us with solutions, they empowered our team to harness the full potential of technology. We’re truly grateful for their expertise and dedication.',
    },
  },
};

const ServicePage = () => {
  const { name } = useParams(); // Get the service name from the URL
  const service = ServiceCategories[name]; // Look up the service in the dictionary

  // Handle case where the service is not found
  if (!service) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Service Not Found. Please check the URL.
        </h1>
      </div>
    );
  }

  // Destructure service properties
  const {
    titleTop,
    titleBottom,
    subtitle,
    features,
    testimonials,
    image,
    reviews,
  } = service;

  return (
    <div className="bg-[#081527] text-white w-full items-center flex flex-col justify-center  mx-auto">
      <Hero
        imageUrl={image}
        topText={titleTop}
        bottomText={titleBottom}
        subtitle={subtitle}
      />

      <Features features={features} />

      <Testimonials testimonials={testimonials} />

      <section className="bg-white text-black px-6 lg:px-[80px] w-full gap-12 flex flex-col items-center justify-center pt-16 pb-10">
        <h1 className="text-[32px]">What Our Customers Say</h1>
        <div className="grid sm:grid-cols-2 mt-10 w-full">
          <img src={reviews.image} alt="Review Guy" className="max-w-[552px] w-full" />
          <div className="p-8 bg-gradient-to-r from-[#F4DBBF] to-[#EEDAC4] justify-between flex flex-col">
            <h2 className="text-[14px]">{reviews.name}</h2>
            <p className="sm:text-[20px]">{reviews.comment}</p>
            <a
              href="/contact-us"
              className={`bg-[#070223] lg:mt-auto mt-8 text-[#6797D5] hover:text-white max-w-[170px] px-4 py-2 box-border rounded-md text-xs sm:text-sm font-medium flex items-center`}
            >
              Connect With Us <FiChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
