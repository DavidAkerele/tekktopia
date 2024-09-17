export default function Footer() {
  return (
    <footer className="footer bg-[#081527] h-[456px] w-full fixed bottom-0 text-white flex flex-col gap-8 items-center justify-center px-4">
      <section className="grid grid-cols-5 w-full max-w-screen-2xl gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="tekktopia" className="aspect-square max-w-12 w-full"/>
            <p className="name">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </div>
          <p>Lagos:</p>
          <p >
            43, Baale Street, Idado Estate, Igbo-Efon,<br />
            Off Lekki - Epe Expressway, Lagos State,<br /> 
            Nigeria.
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Company</p>
          <div className="flex flex-col space-y-2">
            <a>About Us</a>
            <a>Services</a>
            <a>About Us</a>
            <a>Our Project</a>
            <a>Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Products</p>
          <a>Let&apos;s Gidi</a>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Stay Connected</p>
          <div className="flex flex-col space-y-2">
            <a>LinkedIn</a>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="heading">Reach Us</p>
          <div className="space-y-2">
            <p>+2340220202020</p>
            <p>+2340220202020</p>
            <p>message@techtopia.com</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-2xl flex gap-48 items-center justify-between mx-auto">
        <p>© 2024 All Rights Reserved</p>
        <div className="flex gap-8 self-end">
          <a>Terms & Condition</a>
          <a>Privacy Policy</a>
          <a>FAQs</a>
        </div>
      </section>
    </footer>
  );
}
