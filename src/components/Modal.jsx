import PropTypes from "prop-types";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <button className=" top-2 right-2 text-black" onClick={onClose}>
           CERRAAR
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default Modal;
