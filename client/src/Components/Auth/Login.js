import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Sign In
        </h2>

        <button className="flex items-center justify-center w-full px-4 py-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100">
          <img
            src="src\assets\images\google.png"
            alt="Google logo"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>

        <button className="flex items-center justify-center w-full px-4 py-3 mb-6 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100">
          <img
            src="src\assets\images\facebook.png"
            alt="Facebook logo"
            className="w-6 h-6 mr-3"
          />
          Sign in with Facebook
        </button>

        <div className="relative mb-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative px-3 text-gray-500 bg-white">or</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 mt-1 border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mt-1 border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-600 shadow-md rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="font-semibold text-indigo-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
