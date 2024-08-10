import { useState } from "react";
import axios from "axios";

const initialSignupInfo = {
  fullname: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
  age: "",
  height: "",
  weight: "",
  medicalCondition: "",
  needHelp: false,
  password: "",
};

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState(initialSignupInfo);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ["fullname", "email", "phone", "age", "password"];
    for (const field of requiredFields) {
      if (!signupInfo[field]) {
        setError(`Field ${field} is required`);
        return false;
      }
    }
    setError("");
    return true;
  };
  console.log(signupInfo, "signup");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const dataToSubmit = {
        ...signupInfo,
        height: signupInfo.height ? signupInfo.height : 0,
        weight: signupInfo.weight ? signupInfo.weight : 0,
      };

      try {
        const response = await axios.post(
          "https://backend-three-phi-42.vercel.app/auth/signup",
          // "https://localhost:8080/auth/signup",
          dataToSubmit
        );
        alert("Signup successful");
        setSignupInfo(initialSignupInfo);
        console.log("Signup successful:", response.data);
        // Optionally, redirect or handle successful signup
      } catch (error) {
        console.error("Signup error:", error);
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="flex flex-col p-5 justify-center items-center">
        <img
          src="https://rushfitness.in/img/icons/rgstration-weight.png"
          alt="Sign Up Icon"
          className="p-5 w-28"
        />
        <h1 className="text-3xl font-mono uppercase font-bold text-yellow-50">
          REGISTRATION
        </h1>
        <p className="text-yellow-50 text-sm">
          Lorem ipsum dolor, sit amet consectetur
        </p>
      </div>
      <div className="m-4 p-10 border rounded-xl border-gray-700 bg-custom-linear-gradient">
        <form
          onSubmit={handleSignup}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={signupInfo.fullname}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={signupInfo.email}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="tel"
              name="phone"
              placeholder="Phone"
              value={signupInfo.phone}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-yellow-100 h-14 text-white w-full"
            />
          </div>
          <div>
            <select
              onChange={handleChange}
              name="gender"
              value={signupInfo.gender}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-yellow-100 h-14 text-white w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="address"
              placeholder="Address"
              value={signupInfo.address}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-yellow-100 h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="age"
              placeholder="Age"
              value={signupInfo.age}
              className="border m-2 p-2 rounded-md bg-[#161515] border-none hover:border-yellow-100 h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={signupInfo.height}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={signupInfo.weight}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="medicalCondition"
              placeholder="Any medical condition"
              value={signupInfo.medicalCondition}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div className="flex items-center">
            <input
              onChange={handleChange}
              type="checkbox"
              name="needHelp"
              checked={signupInfo.needHelp}
              className="mr-2"
            />
            <label className="text-yellow-50">
              Do you need help with your condition?
            </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={signupInfo.password}
              className="border m-2 p-2 rounded-md border-none hover:border-yellow-100 bg-[#161515] h-14 text-white w-full"
            />
          </div>
          {error && <div className="text-red-500 mt-2 col-span-2">{error}</div>}
          <div className="flex justify-center items-center mt-4 col-span-2">
            <button
              type="submit"
              className="text-yellow-50 border border-yellow-500 bg-yellow-500 font-bold text-lg px-4 py-2 rounded hover:bg-none hover:text-black"
            >
              SIGNUP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
