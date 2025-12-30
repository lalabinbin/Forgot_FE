import React, { useState } from "react";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "@/services/auth";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendLink = async () => {
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }
    setLoading(true);
    try {
      await forgotPassword({ email });
      alert("Link đổi mật khẩu đã được gửi");
    } catch (error) {
      alert("Gửi email thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#faf7f5] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          AuthFlow
        </div>

        <div className="flex items-center gap-6 text-sm">
          <span className="cursor-pointer hover:underline">Help</span>
          <span className="cursor-pointer hover:underline">
            Contact Support
          </span>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white font-medium">
            Login
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
              🔒
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
          <p className="text-gray-500 text-sm mb-6">
            Enter the email address associated with your account and we&apos;ll
            send you a link to reset your password.
          </p>

          {/* Email */}
          <div className="mb-6">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e)}
            />
          </div>

          {/* Button */}
          <button onClick={handleSendLink} className="w-full py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Send Reset Link
          </button>

          {/* Back */}
          <div
            onClick={() => navigate("/")}
            className="mt-6 text-sm text-gray-600 cursor-pointer hover:underline flex items-center justify-center gap-1"
          >
            ← Back to Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
