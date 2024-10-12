import dataAnalyticIcon from '../assets/icons/dataAnalyticsIcon.png';
import consultancyIcon from '../assets/icons/consultancyIcon.png';
import emergingTechIcon from '../assets/icons/emergingTechIcon.png';
import itSupportIcon from '../assets/icons/itSupportIcon.png';
import softwareDevIcon from '../assets/icons/softwareDevIcon.png';

import ServiceCategory from './ServiceCategory';

export default function ServiceCategories() {
  const serviceCategories = [
    [
      {
        bgColor: 'purpleGradient',
        icon: dataAnalyticIcon,
        title: 'Data & Analytics',
      },
      {
        bgColor: 'grayGradient',
        icon: itSupportIcon,
        title: 'IT Support & Infrastructure',
      },
    ],
    [
      {
        bgColor: 'blueGradient',
        icon: softwareDevIcon,
        title: 'Software Development & Engineering',
      },
    ],
    [
      {
        bgColor: 'greenGradient',
        icon: emergingTechIcon,
        title: 'Emerging Technologies',
      },
      {
        bgColor: 'grayGradient',
        icon: consultancyIcon,
        title: 'Consultancy & Strategy',
      },
    ],
  ];

  const descriptionText =
    'Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.';

  const renderCategoryColumn = (categoryList, isFullHeight = false) => (
    <div className="lg:w-1/3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {categoryList.map(({ bgColor, icon, title }, index) => (
        <ServiceCategory
          key={title}
          bgColor={bgColor}
          icon={icon}
          title={title}
          description={descriptionText}
          className={`h-1/2 ${isFullHeight && index === 0 ? 'h-full lg:h-1/2' : ''}`} // Full height only for the first item in the 3rd category
        />
      ))}
    </div>
  );

  return (
    <div className="service-categories mt-12 flex-col lg:flex-row flex h-full gap-4">
      {serviceCategories.map((categoryList, index) =>
        index === 2
          ? renderCategoryColumn(categoryList, true)
          : renderCategoryColumn(categoryList)
      )}
    </div>
  );
}
