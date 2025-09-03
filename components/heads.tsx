import React from "react";
import { motion } from "framer-motion";
// Define the interface for props
interface HeadsProps {
  title: string;
}

// Use the interface in the component
const Heads: React.FC<HeadsProps> = ({ title }) => {
  return (
    <motion.div
    className={"flex items-center justify-center w-full h-auto mt-8"}
    transition={{
      duration: 0.5,
    }}
    initial={{ 
      opacity: 0,
      y: -10
     }}
     whileInView={{
      opacity: 100,
      y: 0
     }}
    >
    <h1 className={"text-sm sm:text-lg md:text-2xl tracking-wide font-akira-bd text-lime-300 lg:text-2xl" }>{`{ ${title} }`}</h1>
    </motion.div>
  );
};

export default Heads;