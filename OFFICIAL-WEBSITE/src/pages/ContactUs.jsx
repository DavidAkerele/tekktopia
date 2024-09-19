import contactUsImage from "../assets/images/contactUsImage.png";
import yellowLine from "../assets/images/yellowLine.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Map from "../components/Map";
import Form from "../components/Form";

// ContactUs component
export default function ContactUs() {
  // Array containing contact information
  const contactLinks = [
    {
      icon: "FaPhone",
      title: "Call Us at",
      info: "1234567890",
    },
    {
      icon: "FaMapMarkerAlt",
      title: "Location",
      info: "Anywhere street, Anywhere city",
    },
    {
      icon: "FaEnvelope",
      title: "Send us a mail",
      info: "1234567890",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={contactUsImage}
          alt="team"
          className="w-full h-[450px] sm:h-[650px] object-cover"
        />
        <h1 className="absolute text-white text-left left-4 sm:left-[80px] top-[200px] sm:top-[390px] font-medium text-[24px] sm:text-[36px] lg:text-[60px]">
          Creating Prosperity, <br />
          Ensuring Tomorrow&apos;s Success
        </h1>
      </section>

      {/* Contact Info Section */}
      <section className="relative w-full p-10">
        <div className="w-full flex flex-col  lg:w-1/2 items-start">
          <h2 className="text-2xl sm:text-3xl mb-2 font-medium">
            Contact Information
          </h2>
          <img src={yellowLine} alt="yellow line" className="w-1/4 h-[3px]" />
          <p className="text-left text-[14px] mt-2">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
        </div>
        <div className="flex gap-4 lg:gap-16 mt-8 w-full">
          {contactLinks.map((contactLink, index) => (
            // Contact link item
            <div key={index} className="flex gap-2 lg:gap-8 items-center">
              {contactLink.icon === "FaPhone" && (
                <FaPhone className="text-[#B0610F] text-xl rotate-90" />
              )}
              {contactLink.icon === "FaMapMarkerAlt" && (
                <FaMapMarkerAlt className="text-[#B0610F] text-xl" />
              )}
              {contactLink.icon === "FaEnvelope" && (
                <FaEnvelope className="text-[#B0610F] text-xl" />
              )}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs lg:text-sm font-bold">
                  {contactLink.title}
                </h4>
                <p>{contactLink.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full z-0">
        <Map />
      </section>

      {/* Form Section */}
      <section className="relative w-full h-[450px] sm:h-[650px] p-20">
        <Form />
      </section>
    </div>
  );
}
