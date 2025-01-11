import PropTypes from 'prop-types';

export default function ServiceCategory({
  bgColor,
  icon,
  title,
  description,
  link,
}) {
  const bgClasses = {
    purpleGradient: 'bg-purpleGradient',
    grayGradient: 'bg-grayGradient',
    greenGradient: 'bg-greenGradient',
    blueGradient: 'bg-blueGradient',
    brownGradient: 'bg-brownGradient',
  };

  return (
    <div
      className={`p-5 ${bgClasses[bgColor]} text-white rounded-lg service-category h-[272px]`}
    >
      <div className="relative flex flex-col gap-4">
        <img className="top-0 left-0 service-icon w-[40px]" src={icon} alt={title} />
        <div className="flex flex-col gap-2">
          <h2 className="service-title font-semibold  leading-[28px] text-[20px] mt-8">{title}</h2>
          <p className="service-description text-[14px]">{description}</p>
          <a href={link} className='text-[14px]'>Read More</a>
        </div>
      </div>
    </div>
  );
}

ServiceCategory.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
