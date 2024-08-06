import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OtpModal = ({ isOpen, onClose, onSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      try {
        await onSubmit(otpValue);
        navigate("/data");
      } catch (error) {
        setError("Verification failed. Please try again.");
      }
    } else {
      setError("Please enter a valid 4-digit OTP");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative border rounded-xl border-gray-700 bg-custom-linear-gradient p-6 shadow-lg w-80 flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col items-center"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 z-10"
          >
            x
          </button>

          <h2 className="text-2xl text-yellow-50 font-bold mb-4">
            VERIFICATION
          </h2>
          <h1 className="text-white w-64 text-center">
            Enter the four digit code we just sent to your registration email!
          </h1>

          <div className="flex gap-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                placeholder="0"
                maxLength="1"
                className="border border-gray-300 p-2 rounded-md w-12 text-center"
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>

          {error && (
            <div className="text-red-500 mb-2 text-center">{error}</div>
          )}

          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default OtpModal;
