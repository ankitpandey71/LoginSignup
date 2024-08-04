import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Logging in with:", loginInfo);
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div>
        <h1 className="text-2xl font-bold text-black">Customer Login</h1>
        <p className="text-black">Lorem ipsum dolor, sit amet consectetur</p>
      </div>
      <div className="m-4 p-10 border rounded-xl bg-gradient-to-tl from-gray-800 via-slate-500 to-gray-600">
        <form onSubmit={handleLogin}>
          <div>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={loginInfo.email}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={loginInfo.password}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white"
            />
          </div>
          <div className="text-yellow-50">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black"
            >
              LOGIN
            </button>
          </div>
          <div className="text-yellow-50 mt-4">
            <span>
              Dont have an account?{" "}
              <Link to="/signup" className="text-yellow-400 hover:underline">
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
