import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextui,
  SiNextdotjs,
  SiVite,
  SiNpm,
  SiYarn,
  SiC,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiMarkdown,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiNetlify,
  SiSass,
  SiPlotly,
  SiMysql,
  SiPrisma,
  SiMongoose,
  SiPostman,
  SiVitest,
  SiClerk,
  SiSupabase,
} from "react-icons/si";

const skills = [
  // Languages
  { name: "C", icon: SiC, bg: "bg-gray-200", color: "text-blue-700" },
  { name: "C++", icon: SiCplusplus, bg: "bg-gray-200", color: "text-blue-700" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    bg: "bg-yellow-100",
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: SiPython,
    bg: "bg-indigo-100",
    color: "text-indigo-500",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  { name: "CSS", icon: SiCss3, bg: "bg-blue-50", color: "text-blue-500" },
  {
    name: "Markdown",
    icon: SiMarkdown,
    bg: "bg-gray-100",
    color: "text-black",
  },

  // Libraries/Frameworks
  {
    name: "React",
    icon: SiReact,
    bg: "bg-blue-100",
    color: "text-blue-500",
    spin: true,
  },
  { name: "Next.js", icon: SiNextdotjs, bg: "bg-black", color: "text-white" },
  {
    name: "NextUI",
    icon: SiNextui,
    bg: "bg-purple-100",
    color: "text-purple-500",
  },
  { name: "Express", icon: SiExpress, bg: "bg-gray-100", color: "text-black" },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bg: "bg-lime-100",
    color: "text-lime-600",
  },
  { name: "Vite", icon: SiVite, bg: "bg-yellow-100", color: "text-yellow-600" },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
    bg: "bg-green-50",
    color: "text-green-800",
  },
  { name: "Prisma", icon: SiPrisma, bg: "bg-gray-100", color: "text-black" },
  { name: "MySQL", icon: SiMysql, bg: "bg-blue-50", color: "text-blue-700" },
  { name: "Plotly", icon: SiPlotly, bg: "bg-pink-100", color: "text-pink-600" },

  // DevOps / Tools
  { name: "Docker", icon: SiDocker, bg: "bg-blue-100", color: "text-blue-500" },
  { name: "Git", icon: SiGit, bg: "bg-orange-100", color: "text-orange-600" },
  {
    name: "Netlify",
    icon: SiNetlify,
    bg: "bg-teal-100",
    color: "text-teal-500",
  },
  { name: "Sass", icon: SiSass, bg: "bg-pink-100", color: "text-pink-500" },

  // Package Managers
  { name: "npm", icon: SiNpm, bg: "bg-red-100", color: "text-red-600" },
  { name: "Yarn", icon: SiYarn, bg: "bg-blue-50", color: "text-blue-400" },

  // Testing Tools
  {
    name: "Postman",
    icon: SiPostman,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  { name: "Vitest", icon: SiVitest, bg: "bg-lime-100", color: "text-lime-700" },
  { name: "Clerk", icon: SiClerk, bg: "bg-sky-100", color: "text-sky-700" },
{ name: "Supabase", icon: SiSupabase, bg: "bg-emerald-100", color: "text-emerald-700" },
  // { name: "Playwright", icon: SiPlaywright, bg: "bg-purple-100", color: "text-purple-700" },
];

const SkillMarque: React.FC = () => {
  return (
    <div className="relative flex flex-row items-center p-2 overflow-x-auto bg-transparent rounded-full scrollbar-hide">
      {/* Left Shadow Fade */}
      <div className="absolute top-0 left-0 z-10 h-full rounded-l-full pointer-events-none w-28 bg-gradient-to-r from-slate-950 to-transparent" />

      {/* Marquee Content */}
      <Marquee speed={30} gradient={false} className="z-0">
        {skills.map(({ name, icon: Icon, bg, color }) => (
          <div
            key={name}
            className={`flex flex-row items-center justify-center p-1 ${bg} rounded-full w-12 h-12 gap-3 ml-6`}
          >
            <Icon className={`text-base ${color}`} />
          </div>
        ))}
      </Marquee>

      {/* Right Shadow Fade */}
      <div className="absolute top-0 right-0 z-10 h-full rounded-r-full pointer-events-none w-28 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
};

export default SkillMarque;
