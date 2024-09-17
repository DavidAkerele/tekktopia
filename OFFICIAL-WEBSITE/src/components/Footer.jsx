export default function Footer() {
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Our Project", href: "#" },
    { text: "Blog", href: "#" },
  ];

  const productLinks = [
    { text: "Let's Gidi", href: "#" },
  ];

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
    <footer className="footer bg-[#081527] h-[456px] absolute bottom-0 w-full text-white flex flex-col gap-8 items-center justify-center px-4">
      <section className="grid grid-cols-5 w-full max-w-screen-2xl gap-2">
        <div className="flex flex-col gap-2">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="tekktopia" className="aspect-square max-w-12 w-full" />
            <p className="name">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </a>
          <p>Lagos:</p>
          <p>
            43, Baale Street, Idado Estate, Igbo-Efon,<br />
            Off Lekki - Epe Expressway, Lagos State,<br />
            Nigeria.
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Company</p>
          <div className="flex flex-col space-y-2">
            {companyLinks.map((link) => (
              <a key={link.text} href={link.href} className="hover:text-gray-300">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Products</p>
          {productLinks.map((link) => (
            <a key={link.text} href={link.href} className="hover:text-gray-300">
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Stay Connected</p>
          <div className="flex flex-col space-y-2">
            {socialLinks.map((link) => (
              <a key={link.text} href={link.href} className="hover:text-gray-300">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Reach Us</p>
          <div className="space-y-2">
            {contactInfo.map((info, index) => (
              <p key={index}>{info.text}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-2xl flex gap-48 items-center justify-between mx-auto">
        <p>© 2024 All Rights Reserved</p>
        <div className="flex gap-8 self-end">
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
