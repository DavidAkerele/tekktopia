import PropTypes from 'prop-types';
export default function Features({features}) {
  return (
    <div>
      {features && features.length > 0 && (
        <section className="my-12 mt-32 px-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex ${index === 1 ? 'flex-col-reverse gap-0' : 'flex-col'} items-center gap-4 justify-between`}
              >
                <img src={feature.image} alt={feature.title} />
                <div className="bg-[#C3C1DA] p-6 py-8 m-h-[250px] font-medium shadow-md text-black">
                  <h3 className="text-[16px] mb-2">{feature.title}</h3>
                  <p className="text-[14px] text-[#13131397]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
Features.propTypes = {
  features: PropTypes.array.isRequired
};