import React from "react";
import InputField from "../InputField";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit, handleGoogleLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-8">
          Please enter your details to sign in.
        </p>

        <div className="space-y-5">
          <InputField
            label="Email Address"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={setEmail}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              Remember me
            </label>
            <span onClick={() => navigate("/forgot-password")} className="text-red-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Sign in */}
          <button onClick={handleSubmit} className="w-full py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button onClick={handleGoogleLogin} className="w-full py-3 rounded-full border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?
            <span className="text-red-500 cursor-pointer hover:underline ml-1">
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
