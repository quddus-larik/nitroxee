"use client"
import React from "react";
import { FaCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { FiArrowUpRight } from "react-icons/fi";

const Footer: React.FC = () => {
  const Router = useRouter();

  return (
    <div className="flex flex-col justify-center w-full gap-2 px-4 py-6 bg-gray-900 lg:px-24 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex items-center justify-center w-full gap-2 p-2 h-7 ">
        <FaCircle className="text-tiny lg:text-sm text-lime-300" />
        <h1 className="text-sm tracking-wide lg:text-md font-poppins-md text-slate-200">
          Avaliable for <span className="text-lime-300">work</span>
        </h1>
      </div>
      <h1 className="text-3xl font-bold tracking-wide lg:text-6xl center font-clash text-slate-300">
        Start the <span className="text-lime-300">Developement!</span>
      </h1>
      <p className="mb-16 text-slate-300 text-small lg:text-medium font-poppins-rg">
        Designing Interactions,{" "}
        <span className="text-lime-300">Engineering Solutions</span> – MERN
        Style
        <Button color="success" radius="full" className="ml-4 bg-lime-400 font-poppins-md" size="sm" onPress={()=> Router.push("/contact")} startContent={<FiArrowUpRight className="text-md text-gray-950" />}>Contact</Button>
      </p> 
      <p className="w-full text-slate-400 text-tiny lg:text-small font-poppins-rg">
        © {new Date().getFullYear()} Abdul Quddus. All rights reserved. Unauthorized use or reproduction of content is prohibited.
      </p>
    </div>
  );
};

export default Footer;
