import tekktopia from '../assets/images/tekktopia.png'

export default function Footer() {
  // Array of links and contact info
  const companyLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Our Project', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Careers', href: '#' },
  ];

  const productLinks = [{ text: "Let's Gidi", href: '#' }];

  const socialLinks = [
    { text: 'LinkedIn', href: 'https://www.linkedin.com/company/tekktopia/' },
    { text: 'Facebook', href: '#' },
    { text: 'Instagram', href: 'https://www.instagram.com/tekktopia?igsh=MXJramZicW80eDV0eQ==' },
    { text: 'Twitter', href: '#' },
  ];

  const contactInfo = [
    { text: '+234 809 414 0706' },
    { text: '+234 902 254 2963' },
    { text: 'support@tekktopia.com' },
  ];

  return (
    <footer className="w-full bg-[#081527] py-[60px] md:py-[100px] lg:py-[171px] text-white box-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[143px]">
          {/* Left Section: Logo and Address */}
          <div className="flex flex-col text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start text-[30px] mb-4">
              <div className="w-[44px] h-[44px]">
                <img src={tekktopia} alt="Tekktopia Logo" />
              </div>
              <span className="text-[#f5901f] ml-[10px]">t</span>eKK
              <span className="text-[#137cc6]">t</span>opia
            </div>
            <div className="text-[15px] text-[#CBCBCB] lg:text-[14px]">
              Lagos: <br />
              43, Baale Street, Idado Estate, Igbo-Efon, Off Lekki - Epe
              Expressway, Lagos State, Nigeria.
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">Company</div>
              <div>
                {companyLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">Products</div>
              <div>
                {productLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">Stay Connected</div>
              <div>
                {socialLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">Reach Us</div>
              <div>
                {contactInfo.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="mt-12 text-center lg:text-left flex justify-between items-center flex-col lg:flex-row">
          <div className="text-[16px] font-extralight tracking-wider lg:text-[14px]">
            © 2024 All Rights Reserved
          </div>
          <div className="flex gap-6 lg:text-[14px] text-[16px] font-extralight tracking-wider">
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
            <div>FAQs</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
