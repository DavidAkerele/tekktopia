import PropTypes from 'prop-types';
const RequestDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Request a Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoModal;

RequestDemoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
