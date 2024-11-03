import PropTypes from 'prop-types';
export default function SignupTrigger({ signUpRounded }) {
  return (
    <div
      className={`relative w-full mt-[80px] flex flex-col rounded-lg ${signUpRounded ? 'lg:rounded-lg' : ''}`}
    >
      <img
        src="/footer.png"
        alt="footer"
        className={`w-full h-[418px] ${signUpRounded ? 'lg:rounded-lg' : ''}`}
      />
      <div className="left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-6xl px-4 mx-auto absolute text-white gap-4">
        <p className="font-[500] hero text-center text-[40px] mb-[20px]">
          To take a trivial example, which of us ever undertakes laborious
          physical exercise
        </p>
        <p className="text-center">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth,
        </p>
      </div>
    </div>
  );
}

SignupTrigger.propTypes = {
  signUpRounded: PropTypes.bool,
};
