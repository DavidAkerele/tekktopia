export default function Footer() {
  // Array of links and contact info
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Our Project", href: "#" },
    { text: "Blog", href: "#" },
  ];

  const productLinks = [{ text: "Let's Gidi", href: "#" }];

  const socialLinks = [
    { text: "LinkedIn", href: "#" },
    { text: "Facebook", href: "#" },
    { text: "Instagram", href: "#" },
    { text: "Twitter", href: "#" },
  ];

  const contactInfo = [
    { text: "+2340220202020" },
    { text: "+2340220202020" },
    { text: "message@techtopia.com" },
  ];

  return (
    <footer className="w-full  bottom-0">
      <section className="relative w-full flex flex-col">
        <img src="/footer.png" alt="footer" className="w-full h-[418px]" />
        <div className="left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-6xl px-4 mx-auto absolute text-white gap-4">
        <p className="font-[500] hero text-center">
          To take a trivial example, which of us ever undertakes laborious
          physical exercise
        </p>
        <p className="text-center">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,</p>
        </div>
      </section>
      <div className="footer bg-[#081527] py-8 text-white flex flex-col gap-8 items-center w-full justify-center px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full max-w-screen-2xl gap-6 lg:gap-8">
          {/* Logo and Address */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <a
              href="/"
              className="flex items-center gap-2 justify-center lg:justify-start"
            >
              <img src="/logo.png" alt="tekktopia" className="w-8 h-8" />
              <p className="name text-xl">
                <span className="text-[#F5901F]">t</span>ekk
                <span className="text-[#137CC6]">t</span>opia
              </p>
            </a>
            <p className="mt-2">Lagos:</p>
            <p>
              43, Baale Street, Idado Estate, Igbo-Efon,
              <br />
              Off Lekki - Epe Expressway, Lagos State,
              <br />
              Nigeria.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="heading font-bold text-lg">Company</p>
            <div className="flex flex-col space-y-2">
              {companyLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="hover:text-gray-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="heading font-bold text-lg">Products</p>
            {productLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="heading font-bold text-lg">Stay Connected</p>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="hover:text-gray-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="heading font-bold text-lg">Reach Us</p>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <p key={index}>{info.text}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-48">
          <p>© 2024 All Rights Reserved</p>
          <div className="flex gap-4">
            {[
              { text: "Terms & Conditions", href: "#" },
              { text: "Privacy Policy", href: "#" },
              { text: "FAQs", href: "#" },
            ].map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
