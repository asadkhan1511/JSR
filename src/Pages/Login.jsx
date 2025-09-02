import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-screen h-screen flex">
      {/* Left Section */}
      <div className="w-1/3 flex flex-col justify-center items-center bg-white p-10 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737148/samples/a9netvmy3epwecuknnpq.png" alt="JSR PRODUCTION HOUSE Logo" className="h-10" />
          <h1 className="text-4xl font-bold ">JSR PRODUCTION HOUSE</h1>
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-6">Sign In</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => loginWithRedirect()}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-600 mt-4">
            New to JSR PRODUCTION HOUSE?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Create an account
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to JSR PRODUCTION HOUSE</h1>
        <p className="text-lg text-center max-w-md">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
    </div>
  );
}

export default Login;
