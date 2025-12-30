import React from "react";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
};

export default InputField;
