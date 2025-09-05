"use client"
import React, { useEffect, useCallback, useMemo } from "react";
import { Divider, Link, Button, Chip, Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ScrollVelocity from "@libs/ScrollVelocity/ScrollVelocity";
import MyAnimatedText from "@utils/splitText";
import {
  FiArrowUpRight,
} from "react-icons/fi";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import dynamic from "next/dynamic";

// Lazy load components that are not immediately visible on page load
const AboutMe = dynamic(() => import("@components/aboutme"));
const Projects = dynamic(() => import("@components/projects"));
const SkillMarque = dynamic(() => import("@components/skillmarque"));
const DesignFlow = dynamic(() => import("@components/designflow"));

const Page: React.FC = () => {
  const Router = useRouter();

  

  // Memoize the links array to prevent unnecessary re-creations
  const links = useMemo(
    () => [
      { name: "GITHUB", src: "https://github.com/EnderTonol" },
      {
        name: "LINKEDIN",
        src: "https://www.linkedin.com/abdul-quddus-158643273/",
      },
      { name: "THREADS", src: "./" },
      {
        name: "EMAIL",
        src: "mailto:example@gmail.com?subject=Hello&body=I want to talk about... you by portfolio",
      },
    ],
    []
  );

  // Use useCallback for event handlers to prevent unnecessary re-renders of child components
  const handleMyJourneyClick = useCallback(() => {
    Router.push("/about");
  }, [Router]);

  // Alert for maintenance, consider a more user-friendly alternative
  useEffect(() => {
    // Only show the alert once per session
    if (!sessionStorage.getItem("maintenanceAlertShown")) {
      alert(
        "Notice: This site is currently under maintenance. Please check back soon."
      );
      sessionStorage.setItem("maintenanceAlertShown", "true");
    }
  }, []);
  const handleClick = (url: string) => {
    console.log("URL received:", url); // Add this line
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
      <div className="overflow-hidden bg-slate-950">
        <title>Quddus Portfolio</title>
        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center px-8 md:px-20 min-h-svh">
          <Chip color="warning" variant="solid" size="sm" className="mb-1">
            in Maintainance
          </Chip>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="flex items-center gap-2 p-1 pl-2 font-medium text-black rounded-full text-md lf:text-lg bg-slate-100 font-clash w-fit -rotate-3">
                <p>mongoDB</p>
                <button
                  className="block w-8 h-8 rounded-full md:w-10 md:h-10 bg-lime-400 place-items-center"
                  onClick={() => handleClick("mongodb.com")}
                >
                  <SiMongodb className="text-xl text-gray-900 transition -rotate-45 md:text-2xl active:text-xl" />
                </button>
              </h2>
              <h2 className="flex items-center gap-2 p-1 pl-2 font-medium text-black rounded-full text-md md:text-lg bg-slate-100 font-clash w-fit rotate-6">
                <p>express</p>
                <button
                  className="block w-8 h-8 rounded-full md:w-10 md:h-10 bg-lime-400 place-items-center"
                  onClick={() => handleClick("expressjs.com")}
                >
                  <SiExpress className="text-xl text-gray-900 transition active:text-xl" />
                </button>
              </h2>
            </div>
            <MyAnimatedText />
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="flex items-center gap-3 p-1 pl-2 font-medium text-black rounded-full md:text-lg bg-slate-100 font-clash w-fit rotate-6">
                <p>react js</p>
                <button
                  className="block w-8 h-8 rounded-full md:w-10 md:h-10 bg-lime-400 place-items-center"
                  onClick={() => handleClick("react.dev")}
                >
                  <SiReact className="text-xl text-gray-900 transition active:text-xl" />
                </button>
              </h2>
              <h2 className="flex items-center gap-3 p-1 pl-2 font-medium text-black rounded-full text-md md:text-lg bg-slate-100 font-clash w-fit -rotate-6">
                <p>node js</p>
                <button className="block w-8 h-8 rounded-full md:w-10 md:h-10 bg-lime-400 place-items-center">
                  <SiNodedotjs
                    className="text-xl text-gray-900 transition active:text-xl"
                    onClick={() => handleClick("nodejs.org")}
                  />
                </button>
              </h2>
            </div>
          </div>
          <motion.h1
            transition={{
              delay: 0.5,
            }}
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            className="w-full text-tiny font-poppins-rg text-slate-400 mt-8"
          >
            I specialize in crafting full-stack MERN applications that turn
            ideas into reliable, intuitive, and goal-oriented web products.
          </motion.h1>
          <div className="flex flex-col items-end w-full mt-2 space-x-4 md:justify-between md:p-2 md:flex-row">
            <motion.div
              transition={{
                delay: 0.5,
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              className="flex flex-row items-center justify-center gap-1 p-0 md:p-1"
            >
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.src}
                  isExternal
                  showAnchorIcon
                  className="text-lime-300 font-poppins-rg hover:text-slate-50 text-tiny"
                  >
                  {item.name}
                </Link>
              ))}
            </motion.div>
            <motion.div
              transition={{
                delay: 0.8,
                
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
            >
              <Button
                className="mt-2 bg-lime-400 font-poppins-md md:mt-0 text-slate-950"
                onPress={handleMyJourneyClick}
                radius="full"
                startContent={<FiArrowUpRight className="text-lg" />}
              >
                My Journey
              </Button>
            </motion.div>
          </div>
        </div>
        {/* <CurvedLoop
                  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
                  speed={2}
                  curveAmount={100}
                  direction="right"
                  interactive={true}
                  className="text-5xl"
                /> */}

        {/* ScrollVelocity Sections */}
        <div className="relative overflow-hidden rotate-1 opacity-20">
          <Divider className="mt-6 mb-2 bg-slate-200" />
          <ScrollVelocity
            texts={["REQUIREMENTS DESIGNS DEVELOPEMENT TESTING "]}
            velocity={45}
            className="text-white custom-scroll-text font-neue-rg whitespace-nowrap"
          />
          <Divider className="mt-2 bg-slate-200" />
          <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
        </div>

        <div className="relative mt-4 overflow-hidden -rotate-1 opacity-15">
          <Divider className="mt-6 mb-2 bg-slate-200" />
          <ScrollVelocity
            texts={["MONGODB ! EXPRESSJS ! REACTJS ! NODEJS ! "]}
            velocity={40}
            className="custom-scroll-text font-neue-rg whitespace-nowrap text-slate-200"
          />
          <Divider className="mt-2 bg-slate-200" />
          <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
        </div>

        {/* Other Components */}
        
          <AboutMe />
          <Projects />
          <SkillMarque />
          <DesignFlow />
      </div>
  );
};

export default Page;
