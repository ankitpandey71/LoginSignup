import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OtpModal from "../components/OtpModal";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend-three-phi-42.vercel.app/auth/login",
        loginInfo
      );

      if (response.data.requiresOtp) {
        // Show OTP modal if OTP is required
        setIsOtpModalOpen(true);
      } else {
        // Save token and redirect if login is successful
        const { token } = response.data;
        localStorage.setItem("token", token);
        window.location.href = "/data";
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (otp) => {
    try {
      const response = await axios.post(
        "https://backend-three-phi-42.vercel.app/auth/verify-otp", // Replace with your OTP verification URL
        { otp }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      window.location.href = "/data";
    } catch (error) {
      console.error("OTP verification error:", error);
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsOtpModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="flex flex-col p-5 justify-center items-center">
        <img
          src="https://rushfitness.in/img/icons/login.png"
          alt="Login Icon"
          className="p-5 w-28"
        />
        <h1 className="text-3xl font-mono uppercase font-bold text-yellow-50">
          Customer Login
        </h1>
        <p className="text-yellow-50 text-sm">
          Lorem ipsum dolor, sit amet consectetur
        </p>
      </div>
      <div className="m-4 p-10 border rounded-xl border-gray-700 bg-custom-linear-gradient">
        <form onSubmit={handleLogin}>
          <div>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={loginInfo.email}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-yellow-100 h-14 text-white"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={loginInfo.password}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-orange-500 h-14 text-white"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="text-yellow-50">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="font-bold border border-yellow-500 px-4 py-2 rounded bg-yellow-500 text-yellow-50 hover:bg-none hover:text-black"
              disabled={loading}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </div>
          <div className="text-yellow-50 mt-4">
            <span>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-yellow-400 hover:underline">
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
      <OtpModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        onSubmit={handleOtpSubmit}
      />
    </div>
  );
};

export default Login;
