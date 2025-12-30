import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftBanner from "@/components/LeftBanner";
import LoginForm from "@/components/LoginForm";
import { login } from "@/services/auth";
import { auth, googleProvider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const testLoginGoogle = async () => {
    try {
      // 1. Login với Firebase UI
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      console.log("1. Đã lấy được Firebase Token");
      console.log("User info:", {
        name: user.displayName,
        email: user.email,
        uid: user.uid
      });

      // 2. Gửi token xuống Backend xác thực
      const res = await axios.post('http://localhost:3001/api/auth/google-login', {
        token: idToken
      });

      console.log("2. Backend xác thực thành công");
      alert(`Đăng nhập thành công! Xin chào ${user.displayName}`);
      // onLoginSuccess(res.data); // data gồm { user, token }

    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      
      // Nếu lỗi là do backend không chạy, vẫn cho phép đăng nhập với Firebase
      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        console.warn("Backend chưa chạy, nhưng Firebase đăng nhập thành công");
        alert("⚠️ Firebase đăng nhập thành công!\nNhưng backend chưa kết nối được.\nVui lòng khởi động backend server.");
      } else {
        alert("Đăng nhập thất bại!");
      }
    }
  };
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!email || !password) {
      alert("Email và password không được để trống");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }

    setLoading(true);

    try {
      const res = await login({ email, password });

      // ✅ CHECK RESPONSE
      if (res?.success) {
        alert("Đăng nhập thành công");
        navigate("/dashboard");
      } else {
        alert(res?.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error(error);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      <LeftBanner />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        loading={loading}
        handleGoogleLogin= {testLoginGoogle}
      />
    </div>
  );
};

export default Login;
