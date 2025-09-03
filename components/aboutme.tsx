import type React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import Heads from "./heads";

type TechStackIcon = {
  name: string;
  icon: any;
  bg: string;
  color: string;
  spin?: boolean;
};

const techStackIcons: TechStackIcon[] = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    name: "Express",
    icon: SiExpress,
    bg: "bg-gray-200",
    color: "text-black",
  },
  {
    name: "React",
    icon: SiReact,
    bg: "bg-blue-100",
    color: "text-blue-500",
    spin: true,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bg: "bg-lime-100",
    color: "text-lime-600",
  },
];

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 mt-10 lg:px-24">
      <Heads title="ABOUT ME" />
      <div
        className="w-full pt-4 text-sm text-center font-inter text-slate-300 lg:text-lg"
      >
        {" "}
        Skilled in{" "}
        <span className="text-lime-300">
          MongoDB, Express.js, React, and Node.js
        </span>{" "}with a strong commitment to building intuitive user experiences and
        writing efficient, maintainable code. Dedicated to turning ideas into{" "}
        <span className="text-lime-300">
          real-world digital solutions and always eager to collaborate, learn,
          and grow through{" "}
        </span>{" "}
        impactful projects.
      </div>
      <div className="flex flex-row gap-2 p-1 mt-3 bg-gray-800 rounded-full ">
        {techStackIcons.map(({ name, icon: Icon, bg, color, spin }) => (
          <div key={name} className={`p-2 rounded-full ${bg} lg:p-4`}>
            <Icon
              className={`text-lg ${color} ${
                spin ? "animate-spin-slow" : ""
              } lg:text-xl`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
