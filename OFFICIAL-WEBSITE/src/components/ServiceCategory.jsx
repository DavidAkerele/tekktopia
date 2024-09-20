import PropTypes from "prop-types";

export default function ServiceCategory({ bgColor, icon, title, description }) {
  return (
    <div className={`p-4 bg-${bgColor} text-white rounded-lg service-category h-full`}>
      <div className="relative">
        <img
          className="top-0 left-0 service-icon"
          src={icon}
          alt="data analytic icon"
        />
        <div className="flex flex-col gap-4">
          <h2 className="service-title font-bold text-lg mt-8">{title}</h2>
          <p className="service-description">{description}</p>
          <a>Read More</a>
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
};
