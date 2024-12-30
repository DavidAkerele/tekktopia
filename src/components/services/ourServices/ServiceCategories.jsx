import dataAnalyticIcon from '../../../../public/dataAnalyticsIcon.png';
import consultancyIcon from '../../../../public/consultancyIcon.png';
import emergingTechIcon from '../../../../public/emergingTechIcon.png';
import itSupportIcon from '../../../../public/itSupportIcon.png';

import softwareDevIcon from '../../../../public/softwareDevICon.png';

import ServiceCategory from '../.././ServiceCategory';

export default function ServiceCategories() {
  const serviceCategories = [
    [
      {
        bgColor: 'purpleGradient',
        icon: dataAnalyticIcon,
        title: 'Data Analytics and Business Intelligence',
        descriptionText:
          'Unlock the power of your data! We turn complex data into clear insights, helping you make smart decisions.',
      },
      {
        bgColor: 'grayGradient',
        icon: itSupportIcon,
        title: 'IT Support & Infrastructure',
        descriptionText:
          'Our IT consulting services cover everything tech related to your business needs.',
      },
    ],
    [
      {
        bgColor: 'blueGradient',
        icon: softwareDevIcon,
        title: 'Software Development & Engineering',
        descriptionText:
          'We create smooth, user friendly mobile and web apps that bring your ideas to life.',
      },
    ],
    [
      {
        bgColor: 'greenGradient',
        icon: emergingTechIcon,
        title: 'Cloud Computing Services',
        descriptionText:
          'Our cloud services give your business flexibility and security, making it easy to adapt to new challenges.',
      },
      {
        bgColor: 'grayGradient',
        icon: consultancyIcon,
        title: 'Brand Identity & Design ',
        descriptionText:
          'Your brand deserves to stand out! We build your brand’s look and feel that connects with your audience.',
      },
    ],
  ];

  const renderCategoryColumn = (categoryList, isFullHeight = false) => (
    <div className="lg:w-1/3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {categoryList.map(({ bgColor, icon, title, descriptionText }, index) => (
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
