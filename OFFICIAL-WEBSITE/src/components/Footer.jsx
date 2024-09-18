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
    <footer className="footer bg-[#081527] py-8 text-white flex flex-col gap-8 items-center w-full px-4">
      {/* Main Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 w-full max-w-screen-2xl">
        {/* Logo and Address */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <a href="/" className="flex items-center gap-2 justify-center lg:justify-start">
            <img src="/logo.png" alt="tekktopia" className="w-8 h-8" />
            <p className="text-xl">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </a>
          <p className="mt-2">Lagos:</p>
          <address className="not-italic">
            43, Baale Street, Idado Estate, Igbo-Efon,
            <br />
            Off Lekki - Epe Expressway, Lagos State,
            <br />
            Nigeria.
          </address>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold text-lg">Company</p>
          <div className="flex flex-col space-y-2">
            {companyLinks.map((link) => (
              <a key={link.text} href={link.href} className="hover:text-gray-300">
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold text-lg">Products</p>
          {productLinks.map((link) => (
            <a key={link.text} href={link.href} className="hover:text-gray-300">
              {link.text}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold text-lg">Stay Connected</p>
          <div className="flex flex-col space-y-2">
            {socialLinks.map((link) => (
              <a key={link.text} href={link.href} className="hover:text-gray-300">
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold text-lg">Reach Us</p>
          <div className="space-y-2">
            {contactInfo.map((info, index) => (
              <p key={index}>{info.text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
        <p>© 2024 All Rights Reserved</p>
        <div className="flex gap-4">
          {[
            { text: "Terms & Conditions", href: "#" },
            { text: "Privacy Policy", href: "#" },
            { text: "FAQs", href: "#" },
          ].map((link) => (
            <a key={link.text} href={link.href} className="hover:text-gray-300">
              {link.text}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
