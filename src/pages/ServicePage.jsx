import { useParams } from 'react-router-dom';
import Hero from '../components/services/categoryPages/Hero';

// Define service categories
const ServiceCategories = {
  'cloud-computing': {
    titleTop: 'Cloud',
    titleBottom: 'Computing Services',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      { title: 'Scalability', description: 'Easily scale your operations.' },
      { title: 'Security', description: 'Top-notch data protection.' },
    ],
    testimonials: [
      {
        name: 'John Doe',
        message: 'Amazing service! Highly recommend.',
        image: 'https://via.placeholder.com/100',
      },
      {
        name: 'Jane Smith',
        message: 'Helped us transform our business.',
        image: 'https://via.placeholder.com/100',
      },
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

      {features && features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {testimonials && testimonials.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium">{testimonial.message}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
