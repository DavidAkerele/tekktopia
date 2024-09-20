import dataAnalyticIcon from "../assets/icons/dataAnalyticsIcon.png";
import consultancyIcon from "../assets/icons/consultancyIcon.png";
import emergingTechIcon from "../assets/icons/emergingTechIcon.png";
import itSupportIcon from "../assets/icons/itSupportIcon.png";
import softwareDevIcon from "../assets/icons/softwareDevIcon.png";

import ServiceCategory from "./ServiceCategory";
export default function ServiceCategories() {
  const serviceCategories = [
    [
      {
        bgColor: "purpleGradient",
        icon: dataAnalyticIcon,
        title: "Data & Analytics",
        description:
          "Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.",
      },
      {
        bgColor: "grayGradient",
        icon: itSupportIcon,
        title: "IT Support & Infrastructure",
        description:
          "Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.",
      },
    ],
    [
      {
        bgColor: "blueGradient",
        icon: softwareDevIcon,
        title: "Software Development & Engineering",
        description:
          "Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.",
      },
    ],
    [
      {
        bgColor: "greenGradient",
        icon: emergingTechIcon,
        title: "Emerging Technologies",
        description:
          "Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.",
      },
      {
        bgColor: "grayGradient",
        icon: consultancyIcon,
        title: "Consultancy & Strategy",
        description:
          "Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.",
      },
    ],
  ];
  return (
    <div className="service-categories mt-12 flex h-full gap-4">
      <div className="w-1/3 grid grid-cols-1 gap-4">
        {
          serviceCategories[0].map((serviceCategory, index) => (
            <ServiceCategory
              key={index}
              bgColor={serviceCategory.bgColor}
              icon={serviceCategory.icon}
              title={serviceCategory.title}
              description={serviceCategory.description}
            />
          ))
        }
      </div>
      <div className="w-1/3">
        {
          serviceCategories[1].map((serviceCategory, index) => (
            <ServiceCategory
              key={index}
              bgColor={serviceCategory.bgColor}
              icon={serviceCategory.icon}
              title={serviceCategory.title}
              description={serviceCategory.description}
            />
          ))
        }
      </div>
      <div className="w-1/3 grid grid-cols-1 gap-4">
        {
          serviceCategories[2].map((serviceCategory, index) => (
            <ServiceCategory
              key={index}
              bgColor={serviceCategory.bgColor}
              icon={serviceCategory.icon}
              title={serviceCategory.title}
              description={serviceCategory.description}
            />
          ))
        }
      </div>
    </div>
  );
}
