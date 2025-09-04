import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center md:justify-start">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center bg-white p-8 md:p-10 shadow-lg">
        <div className="flex items-center gap-2 mb-8 text-center md:text-left">
          <img
            src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737148/samples/a9netvmy3epwecuknnpq.png"
            alt="JSR PRODUCTION HOUSE Logo"
            className="h-10"
          />
          <h1 className="text-2xl md:text-4xl font-bold">
            JSR PRODUCTION HOUSE
          </h1>
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-sm">
          <h2 className="text-lg md:text-xl font-semibold mb-6">Sign In</h2>

          <input
            type="text"
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect="off"
            style={{ textTransform: "none" }}
            className="font2 w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect="off"
              style={{ textTransform: "none" }}
              className="font2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center md:text-left">
            New to JSR PRODUCTION HOUSE?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Create an account
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-2/3 flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Welcome to JSR PRODUCTION HOUSE
        </h1>
        <p className="text-base md:text-lg text-center max-w-md">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}

export default Login;
