"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonProps = {
  label: string;
  path: string;
};

// Button component for navigation
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

// Navbar component
const Navbar: React.FC = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },      // ✅ lowercase
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },  // ✅ lowercase
  ];

  return (
    <div className="fixed z-50 items-center justify-between hidden w-full h-16 p-4 md:flex">
      <div className="hidden tracking-widest text-lime-400 text-md font-akira-bd md:block">
        nitroXee.
      </div>

      <div className="flex items-center justify-center w-full h-10 gap-1 px-6 border rounded-full bg-slate-800/30 backdrop-blur-md border-white/10 md:gap-4 md:w-auto">
        {navItems.map((item, index) => (
          <Button key={index} label={item.label} path={item.path} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
