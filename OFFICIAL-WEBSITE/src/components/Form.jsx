import { MdArrowForward, MdPerson, MdPhone, MdMail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Form component
export default function Form() {
  // Array containing input field data
  const inputContent = [
    {
      icon: <MdPerson className="text-gray-500 text-xl sm:text-2xl" />,
      placeholder: "First Name",
      name: "first_name",
      type: "text"
    },
    {
      icon: <MdPerson className="text-gray-500 text-xl sm:text-2xl" />,
      placeholder: "Last Name",
      name: "last_name",
      type: "text"
    },
    {
      icon: <MdPhone className="text-gray-500 text-xl sm:text-2xl" />,
      placeholder: "Phone Number",
      name: "user_phone",
      type: "tel"
    },
    {
      icon: <MdMail className="text-gray-500 text-xl sm:text-2xl" />,
      placeholder: "Email",
      name: "user_email",
      type: "email"
    },
  ];

  const form = useRef();
  const [emailSent, setEmailSent] = useState("");

  // Function to handle input validation for phone number
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    e.target.value = value.replace(/\D/g, '');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v84wlm2", "template_n3bfm7c", form.current, {
        publicKey: "FRzkYgrpiHA_BogGH",
      })
      .then(
        () => {
          setEmailSent("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailSent("Failed to send email!");
        }
      );
  };

  return (
    // Form container
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full lg:max-w-2xl lg:w-1/2 flex flex-col bg-[#253141] gap-4 mx-auto -mt-32 h-[461px] rounded-lg p-6 lg:p-12"
    >
      {/* Form title */}
      <h2 className="text-2xl sm:text-3xl text-white font-medium">
        Connect with us
      </h2>
      {/* Input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {inputContent.map((item, index) => (
          // Input field container
          <div
            className="flex items-center gap-2 bg-white rounded-lg p-2"
            key={index}
          >
            {/* Icon */}
            {item.icon}
            {/* Input field */}
            <input
              placeholder={item.placeholder}
              className="outline-0 w-full text-sm sm:text-base"
              name={item.name}
              type={item.type}
              onInput={item.type === 'tel' ? handlePhoneInput : null}  //Ensuring only numbers are allowed in phone number field
              required
            />
          </div>
        ))}
      </div>

      {/* Textarea for additional requests */}
      <textarea
        className="w-full h-28 sm:h-40 p-2 rounded-lg outline-0 text-sm sm:text-base"
        placeholder="Write your request"
        name="message"
      />
      <div className="flex items-center flex-col lg:flex-row">
        {/* Submit button */}
        <button type="submit" className="ml-0 bg-[#F5901F] w-full text-center lg:w-1/4 text-white text-xs p-2 py-3 text-xs rounded-lg flex items-center gap-2">
          Send Message
          <MdArrowForward className="ml-auto" />
        </button>
        <p className="text-white ml-auto text-sm sm:text-base">{emailSent}</p>
      </div>
    </form>
  );
}
