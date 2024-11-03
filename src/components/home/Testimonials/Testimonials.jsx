import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Designer, Hydrogen',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor auctor orci a scelerisque. Donec semper nunc a ligula suscipit congue. Nunc et placerat ante, quis posuere tellus. Integer eleifend efficitur dignissim.',
      image: '/path-to-image1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer, Hydrogen',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor auctor orci a scelerisque. Donec semper nunc a ligula suscipit congue. Nunc et placerat ante, quis posuere tellus. Integer eleifend efficitur dignissim.',
      image: '/path-to-image2.jpg',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Designer, Hydrogen',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor auctor orci a scelerisque. Donec semper nunc a ligula suscipit congue. Nunc et placerat ante, quis posuere tellus. Integer eleifend efficitur dignissim.',
      image: '/path-to-image3.jpg',
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
    <div>
      <section className="mt-[120px]">
        <h2 className="text-[32px] text-center font-[400]">Testimonials</h2>
      </section>

      <section className="py-12">
        <div className="flex items-center justify-center overflow-hidden">
          {/* Left Chevron */}
          <button
            className="p-2 bg-[#4E7BFF] rounded-full hover:bg-gray-300"
            onClick={handlePrev}
          >
            <HiOutlineArrowSmLeft size={30} color="white" />
          </button>

          {/* Image and Text with Sliding Transition */}
          <div className="relative max-w-[923px] h-64 mx-8 overflow-hidden ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 text-center flex flex-col justify-center items-center"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[60px] h-[60px] rounded-full mx-auto object-cover bg-red-500"
                  />
                  <p className="mt-[8px] text-[#697D95]">{testimonial.name}</p>
                  <p className="text-[#697D95B2] text-[14px]">
                    {testimonial.role}
                  </p>
                  <p className="mt-[32px] text-gray-500 max-w-[639px]">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chevron */}
          <button
            className="p-2 bg-[#4E7BFF] rounded-full hover:bg-gray-300"
            onClick={handleNext}
          >
            <HiOutlineArrowSmRight size={30} color="white" />
          </button>
        </div>

        {/* Dot Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
