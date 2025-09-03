import React from "react";
import ScrollFloat from "../libs/ScrollFloat/ScrollFloat";
import { Avatar, AvatarGroup } from "@heroui/react";
import { HiOutlineGlobe } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  {
    icon: <HiOutlineGlobe className="text-5xl text-lime-400" />,
    title: "explore",
    description:
      "I actively follow modern web development trends like TypeScript adoption, component-driven UI, serverless deployments, and AI-powered features, keeping my MERN stack skills relevant and future-ready.",
    avatars: [
      "https://cdn.freebiesupply.com/logos/large/2x/dribbble-5-logo-svg-vector.svg",
      "https://cdn-icons-png.flaticon.com/512/9018/9018764.png",
      "https://creatorwala.in/wp-content/uploads/2023/02/flaticon-8.png",
      "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
      "https://freelogopng.com/images/all_img/1656738600fiverr-app-logo.png",
    ],
  },
  {
    icon: <MdOutlineDesignServices className="text-5xl text-lime-400" />,
    title: "design",
    description:
      "To improve the visual and functional quality of my applications, I integrate Figma into my development workflow. I use it to design intuitive layouts, create interactive prototypes, and plan responsive UI components before starting actual coding.",
    avatars: [
      "https://www.figma.com/community/resource/8f3b2e8c-0d3f-4409-ae0d-42449d61b841/thumbnail",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoKk8ADopGpzpgcUN06EmKmdV0nGBamFGpA&s",
      "https://img.freepik.com/premium-vector/adobe-illustrator-logo-design_765850-36.jpg?semt=ais_items_boosted&w=740",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/45/bb/40/45bb405c-9368-6317-24c6-1d3f34881f03/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x600wa.png",
    ],
  },
  {
    icon: <FaCode className="text-5xl text-lime-400" />,
    title: "development",
    description:
      "I continuously improve my projects by iterating on both functionality and design. Converting design to code, I upgrade my tech stack based on project needs, and document each version to track progress. This allows me to build scalable applications over time.",
    avatars: [
      "https://static-00.iconduck.com/assets.00/stack-overflow-icon-256x256-c4mcfbrg.png",
      "https://images.seeklogo.com/logo-png/47/1/node-js-logo-png_seeklogo-479905.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOVOH4NHf85lJfAD7WCeOrqx3gvTLWl5eVQ&s",
      "https://www.cdnlogo.com/logos/r/85/react.svg",
    ],
  },
];

const DesignFlow: React.FC = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-slate-950">
      <div className="relative flex flex-col items-center justify-center w-full h-auto px-4 lg:h-svh bg-slate-950">
        <div className="relative z-10 flex flex-col items-center justify-center w-full lg:h-screen">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=40%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.03}
            textClassName="text-lime-300 font-akira-bd tracking-wider md:text-6xl lg:text-7xl"
          >
            {"{ WORK FLOW }"}
          </ScrollFloat>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-16 p-2 lg:h-52">
          <div className="text-6xl rotate-90 rounded-full font-akira-bd text-slate-50">
            {"}"}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-2 mt-2 lg:px-10 lg:flex-row">
        {sections.map((section, index) => (
          <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 100, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5+index+1 , ease: "easeIn" }}
          key={index} className="flex flex-col w-full gap-1 p-4 bg-slate-900 rounded-2xl">
            {section.icon}
            <h1 className="text-2xl font-semibold tracking-wide font-clash text-slate-50">
              {section.title}
            </h1>
            <p className="text-sm font-inter text-slate-100">
              {section.description}
            </p>
            <AvatarGroup size="sm" className="mt-4 lg:mt-1" max={3}>
              {section.avatars.map((src, avatarIndex) => (
                <Avatar key={avatarIndex} radius="md" src={src} />
              ))}
            </AvatarGroup>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignFlow;