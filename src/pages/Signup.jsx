import { useState } from "react";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    age: "",
    height: "",
    weight: "",
    medicalCondition: "",
    helpDescription: "", // Changed from needHelp to helpDescription
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "fullname",
      "email",
      "phone",
      "gender",
      "address",
      "age",
      "height",
      "weight",
    ];
    for (const field of requiredFields) {
      if (!signupInfo[field]) {
        setError(`Field ${field} is required`);
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Implement signup logic here
      console.log("Signing up with:", signupInfo);
      // Reset form after successful signup
      setSignupInfo({
        fullname: "",
        email: "",
        phone: "",
        gender: "",
        address: "",
        age: "",
        height: "",
        weight: "",
        medicalCondition: "",
        helpDescription: "", // Reset helpDescription
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div>
        <h1 className="text-2xl font-bold text-white">Customer Signup</h1>
        <p className="text-gray-300">Please fill in your details</p>
      </div>
      <div className="m-4 p-10 border rounded-xl bg-gradient-to-tl from-gray-800 via-slate-500 to-gray-600">
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
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={signupInfo.email}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="tel"
              name="phone"
              placeholder="Phone"
              value={signupInfo.phone}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <select
              onChange={handleChange}
              name="gender"
              value={signupInfo.gender}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
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
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="age"
              placeholder="Age"
              value={signupInfo.age}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={signupInfo.height}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={signupInfo.weight}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          <div>
            <textarea
              onChange={handleChange}
              name="medicalCondition"
              placeholder="Any medical condition"
              value={signupInfo.medicalCondition}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            ></textarea>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="helpDescription"
              placeholder="Do you need any help with your condition?"
              value={signupInfo.helpDescription}
              className="border m-2 p-2 rounded-md bg-[#161515] h-14 text-white w-full"
            />
          </div>
          {error && <div className="text-red-500 mt-2 col-span-2">{error}</div>}
          <div className="flex justify-center items-center mt-4 col-span-2">
            <button
              type="submit"
              className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black"
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
