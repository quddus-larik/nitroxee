"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonProps = {
  label: string;
  path: string;
};

// Button component for navigation within the BottomNav
const Button: React.FC<ButtonProps> = ({ label, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`text-sm px-3 py-1 rounded-md transition-colors duration-200 font-poppins-rg ${
        isActive ? "text-lime-400" : "text-white hover:text-gray-400"
      }`}
    >
      {label}
    </Link>
  );
};

const BottomNav: React.FC = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between w-full h-16 p-1 sm:p-4 md:hidden">
      {/* The actual navigation buttons container */}
      <div className="flex items-center justify-center w-full h-10 gap-1 px-6 border rounded-xl bg-slate-800/30 backdrop-blur-md border-white/10 lg:gap-4 lg:w-auto">
        {navItems.map((item, index) => (
          <Button key={index} label={item.label} path={item.path} />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
