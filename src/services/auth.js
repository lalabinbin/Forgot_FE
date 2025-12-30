import api from "./index";

export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  console.log(res.data); // success: true
  return res.data;
};

export const forgotPassword = async (data) => {
  return await api.post("/auth/forgot-password", data);
};

export const resetPassword = async (token, data) => {
  return await api.put(`/auth/confirm-new-password/${token}`, data);
};
