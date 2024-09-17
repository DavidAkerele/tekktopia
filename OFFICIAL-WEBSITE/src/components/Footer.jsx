export default function Footer() {
  return (
    <footer className="bg-[#081527] lg:h-[456px] px-16 w-full relative bottom-0 text-white flex flex-col gap-8 items-center justify-center">
      <section className="w-full max-w-screen-2xl lg:flex grid grid-cols-2 gap-x-6 lg:gap-24">
        <div className="flex flex-col gap-2 lg:border-none lg:py-0 py-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="tekktopia" />
            <p className="text-[30px]">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </div>
          <p>Lagos:</p>
          <p>
            43, Baale Street, Idado Estate, Igbo-Efon,<br />
            Off Lekki - Epe Expressway, Lagos State,<br /> 
            Nigeria.
          </p>
        </div>
        <div className="flex flex-col gap-[24px] lg:border-none lg:py-0 py-6">
          <p className="font-bold">Company</p>
          <div className="space-y-2">
            <p>About Us</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Our Project</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] lg:border-none]">
          <p className="font-bold">Products</p>
          <p>Let&apos;s Gidi</p>
        </div>
        <div className="flex flex-col gap-[24px] lg:border-none lg:py-0 py-6">
          <p className="font-bold">Stay Connected</p>
          <div className="space-y-2">
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] lg:border-none lg:py-0 py-6 -mt-32 lg:mt-0">
          <p className="font-bold">Reach Us</p>
          <div className="space-y-2">
            <p>+2340220202020</p>
            <p>+2340220202020</p>
            <p>message@techtopia.com</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-2xl flex flex-col lg:flex-row lg:gap-48 lg:items-center justify-between mx-auto">
        <p>© 2024 All Rights Reserved</p>
        <div className="flex gap-8">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>
      </section>
    </footer>
  );
}
