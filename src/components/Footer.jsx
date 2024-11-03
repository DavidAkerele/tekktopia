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
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/tekktopia?igsh=MXJramZicW80eDV0eQ==',
    },
    { text: 'Twitter', href: '#' },
  ];

  const contactInfo = [
    { text: '+234 809 414 0706' },
    { text: '+234 902 254 2963' },
    { text: 'support@tekktopia.com' },
  ];

  return (
    <footer className="w-full bottom-0 footer bg-[#081527] lg:px-6 h-[505px] py-[171px] flex items-center justify-center text-[white] box-border md:h-[705px]">
      <div className="w-[1280px]">
        <div className="flex justify-between w-full gap-[143px]">
          <div className="max-w-[264px]">
            <div className="flex items-center text-[30px]">
              <div className="w-[44px] h-[44px]">
                <img src="/src/assets/images/tekktopia.png" alt="" />
              </div>
              <span className="text-[#f5901f] ml-[10px]">t</span>eKK
              <span className="text-[#137cc6]">t</span>opia
            </div>
            <div className="text-[15px] text-[#CBCBCB] mt-[16px] lg:text-[14px]">
              Lagos: <br />
              43, Baale Street, Idado Estate, Igbo-Efon, Off Lekki - Epe
              Expressway, Lagos State, Nigeria.
            </div>
          </div>
          <div className="grid w-[874px] tracking-wider lg:w-[874px] md:w-[427px] gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1">
            <div>
              <div className="text-[18px] mb-[24px] lg:text-[16px] md:text-[16px]">
                Company
              </div>
              <div>
                {companyLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight lg:text-[14px] md:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-[24px] lg:text-[16px] md:text-[16px]">
                Products
              </div>
              <div>
                {productLinks.map((link, index) => (
                  <div key={index} className="">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight lg:text-[14px] md:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-[24px] lg:text-[16px] md:text-[16px]">
                Stay Connected
              </div>
              <div>
                {socialLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight lg:text-[14px] md:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-[24px] lg:text-[16px] md:text-[16px]">
                Reach Us
              </div>
              <div>
                {contactInfo.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight lg:text-[14px] md:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-[76px] text-[16px] font-extralight tracking-wider lg:text-[14px] md:text-[14px]">
          <div>© 2024 All Rights Reserved</div>
          <div className="flex items-center gap-[24px] lg:text-[14px]">
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
            <div>FAQs</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
