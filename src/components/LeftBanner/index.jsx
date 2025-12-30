import React from "react";

const LeftBanner = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-black to-zinc-900 text-white p-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 flex flex-col justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center font-bold">
            L
          </div>
          Lumina UI
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Capturing the Essence of <br /> Modern Aesthetics.
          </h1>
          <p className="text-gray-300 max-w-md">
            Join thousands of designers building the future of the web with our
            intuitive tools.
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-400 flex gap-4">
          <span>© 2023 Lumina Inc.</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
