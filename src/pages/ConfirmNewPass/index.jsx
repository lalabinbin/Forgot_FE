import React from "react";
import InputField from "../../components/InputField";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "@/services/auth";

const ConfirmNewPass = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Token không hợp lệ");
      return;
    }
    if (!password || !confirmPassword) {
      alert("Không được để trống mật khẩu");
      return;
    }

    if (password.length < 8) {
      alert("Mật khẩu tối thiểu 8 ký tự");
      return;
    }
    if (!/\d/.test(password)) {
      alert("Mật khẩu phải chứa số");
      return;
    }
    if (!/[a-zA-Z]/.test(password)) {
      alert("Mật khẩu phải chứa chữ cái");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    setLoading(true);
    try {
      await resetPassword(token, {
        password,
      });

      alert("Đổi mật khẩu thành công");
      navigate("/login");
    } catch (error) {
      alert("Đổi mật khẩu thất bại");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
            🔒
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          Create new password
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Your new password must be different from previously
          used passwords.
        </p>

        {/* Form */}
        <div className="space-y-5 text-left">
          <InputField
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e)}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e)}
          />
        </div>

        {/* Button */}
        <button onClick={handleResetPassword} className="w-full mt-8 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition">
          Set New Password
        </button>

        {/* Back */}
        <div className="mt-6 text-sm text-gray-600 cursor-pointer hover:underline flex items-center justify-center gap-1" onClick={() => navigate("/")}>
          ← Back to Login
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewPass;
