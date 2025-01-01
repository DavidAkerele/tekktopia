import ServiceCategory from '../.././ServiceCategory';

export default function ServiceCategories() {
  const serviceCategories = [
    [
      {
        bgColor: 'purpleGradient',
        icon: '/softwareDevICon.png',
        title: 'Mobile & Web App Development',
        descriptionText:
          'We create smooth, user friendly mobile and web apps that bring your ideas to life.',
        link: '/services/mobile-web-dev',
      },
      {
        bgColor: 'grayGradient',
        icon: '/dataAnalyticsIcon.png',
        title: 'Data Analytics and Business Intelligence',
        descriptionText:
          'Unlock the power of your data! We turn complex data into clear insights, helping you make smart decisions.',
        link: '/services/data-analytics',
      },
    ],
    [
      {
        bgColor: 'blueGradient',
        icon: '/pen-tool-2.png',
        title: 'Brand Identity & Design',
        descriptionText:
          'Your brand deserves to stand out! We build your brand’s look and feel that connects with your audience.',
        link: "/services/product-design",
      },
      {
        bgColor: 'brownGradient',
        icon: '/itSupportIcon.png',
        title: 'IT Consulting',
        descriptionText:
          'Our IT consulting services cover everything tech related to your business needs.',
        link: "/services/it-consulting",
      },
    ],
    [
      {
        bgColor: 'greenGradient',
        icon: '/key-square.png',
        title: 'Cloud Computing Services',
        descriptionText:
          'Our cloud services give your business flexibility and security, making it easy to adapt to new challenges.',
        link: '/services/cloud-computing',
      },
      {
        bgColor: 'purpleGradient',
        icon: '/emergingTechIcon.png',
        title: 'Cybersecurity Solutions',
        descriptionText:
          'Protect your business with advanced cybersecurity solutions designed to safeguard your data and networks.',
        link: '/services/cyber-security'
      },
    ],
  ];

  const renderCategoryColumn = (categoryList) => (
    <div className="lg:w-1/3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {categoryList.map(({ bgColor, icon, title, descriptionText, link }, index) => (
        <ServiceCategory
          key={index}
          bgColor={bgColor}
          icon={icon}
          title={title}
          description={descriptionText}
          link={link}
        />
      ))}
    </div>
  );

  return (
    <div className="service-categories mt-12 flex-col lg:flex-row flex h-full gap-4">
      {serviceCategories.map((categoryList) =>
        renderCategoryColumn(categoryList)
      )}
    </div>
  );
}
