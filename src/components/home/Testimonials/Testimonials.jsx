import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Designer, Hydrogen',
      text: 'Tekktopia revolutionized how we manage our tech infrastructure. Their team is not just highly skilled but also incredibly responsive. Our business operations have become smoother and more efficient, and we’re seeing real growth thanks to their innovative solutions.',
      image: '/testimonial-image.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer, Hydrogen',
      text: 'Tekktopia revolutionized how we manage our tech infrastructure. Their team is not just highly skilled but also incredibly responsive. Our business operations have become smoother and more efficient, and we’re seeing real growth thanks to their innovative solutions.',
      image: '/testimonial-image.png',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Designer, Hydrogen',
      text: 'Tekktopia revolutionized how we manage our tech infrastructure. Their team is not just highly skilled but also incredibly responsive. Our business operations have become smoother and more efficient, and we’re seeing real growth thanks to their innovative solutions.',
      image: '/testimonial-image.png',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="w-full px-4">
      <section className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Testimonials</h2>
      </section>

      <section className="py-12">
        <div className="flex items-center justify-center">
          {/* Left Chevron */}
          <button
            aria-label="Previous testimonial"
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            onClick={handlePrev}
          >
            <HiOutlineArrowSmLeft size={24} color="white" />
          </button>

          {/* Image and Text with Sliding Transition */}
          <div className="relative max-w-3xl w-full h-64 mx-4 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 text-center flex flex-col justify-center items-center px-4"
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-16 h-16 rounded-full object-cover bg-gray-200"
                  />
                  <p className="mt-2 text-gray-800 font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="mt-4 text-gray-600 max-w-lg">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chevron */}
          <button
            aria-label="Next testimonial"
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            onClick={handleNext}
          >
            <HiOutlineArrowSmRight size={24} color="white" />
          </button>
        </div>

        {/* Dot Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-3 w-3 rounded-full ${
                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-400'
              } transition-colors duration-300`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
