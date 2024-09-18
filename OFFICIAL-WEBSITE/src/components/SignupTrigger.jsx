import blueRect from "../assets/images/blueRect.png";

export default function SignupTrigger() {
  return (
    <section className="mx-auto mt-16">
      {/* Background section with an image */}
      <div
        className="bg-cover bg-center flex h-[300px] md:h-[350px] lg:h-[400px] items-center"
        style={{ backgroundImage: `url(${blueRect})` }}
      >
        {/* Container for text content */}
        <div className="text-center text-white container mx-auto p-4 md:p-8 lg:p-16 w-11/12 md:w-4/5 lg:w-3/5">
          {/* Main heading */}
          <h2 className="text-[24px] md:text-[28px] lg:text-[30px] font-medium tracking-wide mb-4">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise
          </h2>
          {/* Subheading */}
          <h3 className="text-xs md:text-sm lg:text-base">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth.
          </h3>
        </div>
      </div>
    </section>
  );
}
