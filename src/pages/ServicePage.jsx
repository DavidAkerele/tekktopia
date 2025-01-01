import { useParams } from 'react-router-dom';
import Hero from '../components/services/categoryPages/Hero';
import Features from '../components/services/categoryPages/Features';

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
    testimonials: [
      
    ],
    image: '/cloud-computing.png',
  },
};

const ServicePage = () => {
  const { name } = useParams(); // Get the service name from the URL
  const service = ServiceCategories[name]; // Look up the service in the dictionary
  console.log(service);
  // Handle case where the service is not found
  if (!service) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Service Not Found. Please check the URL.
        </h1>
      </div>
    );
  }

  // Destructure service properties
  const { titleTop, titleBottom, subtitle, features, testimonials, image } =
    service;

  return (
    <div className="bg-[#081527] text-white w-full items-center flex flex-col justify-center  mx-auto">
      <Hero
        imageUrl={image}
        topText={titleTop}
        bottomText={titleBottom}
        subtitle={subtitle}
      />

      <Features features={features}/>

      {testimonials && testimonials.length > 0 && (
        <section className="mb-12">
          
          
        </section>
      )}

      <footer className="bg-blue-900 text-center py-6">
        <p className="text-white font-light">
          Dedicated to Innovating the Future of Technology
        </p>
      </footer>
    </div>
  );
};

export default ServicePage;
