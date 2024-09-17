import blueRect from "../assets/images/blueRect.png";
export default function SignupTrigger() {
  return (
    <section className=" mx-auto pt-16">
      <div
        className=" mx-auto bg-cover bg-center h-[300px]"
        style={{ backgroundImage: `url(${blueRect})` }}
      >
        <div className="p-16 text-center text-white container w-3/4 mx-auto">
          <h2 className="text-[30px] font-500 ">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise
          </h2>
          <h3 className="text-sm">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth,But I must explain to you how all this
            mistaken idea of denouncing pleasure and praising pain was born and
            I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth,
          </h3>
        </div>
      </div>
    </section>
  );
}
