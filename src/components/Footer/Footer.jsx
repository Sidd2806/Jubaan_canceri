import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#eb4324] text-white px-4 py-8 md:py-12">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        
        <div className="space-y-1 text-sm sm:text-base">
          <p className="font-semibold uppercase tracking-wide">
            Disclaimer
          </p>
          <p>This is a parody brand concept.</p>
          <p>If you're taking this seriously… please don&apos;t.</p>
        </div>
        <div className="w-24 bg-white/40" />

        <p className="text-xs sm:text-sm opacity-90">
          © Cancerious™ — Because self-control is a myth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
