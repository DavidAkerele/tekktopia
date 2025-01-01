import { useParams } from 'react-router-dom';
import Hero from '../components/services/categoryPages/Hero';
import Features from '../components/services/categoryPages/Features';
import Testimonials from '../components/services/categoryPages/Testimonials';
import Reviews from '../components/services/categoryPages/Reviews';

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
  'mobile-web-dev': {
    titleTop: 'Mobile &',
    titleBottom: 'Web Development',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      {
        title: 'Custom Application Development',
        description:
          'Build applications tailored to your business goals and user needs. Feature-rich, interactive designs optimized for superior user experience (UX).',
        image: '/cloud-f1.png',
      },
      {
        title: 'Cross Platform Development',
        description:
          'Develop apps that work seamlessly across multiple platforms (iOS, Android, and web). Ensure consistent branding and performance across devices.',
        image: '/coding-guy.png',
      },
      {
        title: 'User-Centered Design (UI/UX)',
        description:
          'Prioritize user experience with intuitive interfaces and seamless navigation. Conduct user research, prototyping, and testing to ensure designs meet user expectations.',
        image: '/coding-guy2.png',
      },
    ],
    testimonials: '/mobile-web-att.png',
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

      <Reviews reviews={reviews} />
    </div>
  );
};

export default ServicePage;
