"use client"
import React, { useEffect, useState } from "react";
import { Button, Divider, Image, Link, Tooltip } from "@heroui/react"; // Re-added Image component
import { useRouter } from "next/navigation";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import {
  SiFigma,
  SiGithub,
  SiGraphql,
  SiNetlify,
  SiRedis,
} from "react-icons/si";

// Lazy load heavy components
const ScrollVelocity = dynamic(
  () => import("@libs/ScrollVelocity/ScrollVelocity")
);
const Heads = dynamic(() => import("@components/heads"));
const SkillMarque = dynamic(() => import("@components/skillmarque"));


import dynamic from "next/dynamic";


const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();
  const CV_PDF = process.env.CV_PDF;

  const initialAwards = [
  {
    title: "Web3.0 Development",
    institute: "Algorand Inc",
    url: "https://www.algorand.com",
    image: "/images/algo_certificate.png",
  },
  {
    title: "Full Stack Development",
    institute: "codeSignal Inc",
    url: "https://codesignal.com/",
    image: "/images/fullstack.png",
  },
  {
    title: "Microsoft Azure",
    institute: "Microsoft Inc",
    url: "https://microsoft.com/",
    image: "/images/azure.webp",
  },
];

  
  const additionalAwards = [
    {
      title: "JavaScript Development",
      institute: "codeSignal Inc",
      url: "https://codesignal.com/",
      image: "/images/js.png",
    },
    {
      title: "MySQL Development",
      institute: "codeSignal Inc",
      url: "https://codesignal.com/",
      image: "/images/mysql.png",
    }
  ];

  const [awardsState, setAwardsState] = useState(initialAwards);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = () => {
    setAwardsState((prevAwards) => [...prevAwards, ...additionalAwards]);
    setShowLoadMore(false);
  };

  return (
    <div className="bg-slate-950">
      <div className="z-20 px-8 bg-slate-950 lg:px-24">
        <div className="flex flex-col items-center justify-center min-h-screen gap-3 pt-10 pb-20 rounded-md lg:pt-28 lg:gap-6">
          {/* Using @heroui/react Image component for myPIC */}
          <div className="flex flex-col justify-center py-4 ">
            <div className="z-30 flex items-center self-start gap-2 p-1 pl-2 mb-4 font-medium text-black rounded-full z- lg:mb-0 text-md lg:text-lg bg-slate-100 font-clash w-fit rotate-6">
              <p>I am Abdul Quddus</p>
              <button className="block w-8 h-8 rounded-full lg:h-10 lg:w-10 bg-lime-400 place-items-center">
                <FiArrowUpRight className="text-2xl text-gray-900 transition hover:rotate-45" />
              </button>
            </div>

            <Image
              src="/images/quddus.jpg"
              alt="Profile"
              className="rounded-full h-64 md:h-[300px] shadow-lg ring-1 ring-lime-400"
              loading="lazy"
            />
            <div className="z-30 flex flex-row-reverse items-center self-end gap-3 p-1 pr-2 mt-4 font-medium text-black rounded-full lg:mt-0 text-md lg:text-lg bg-slate-100 font-clash w-fit -rotate-3">
              <p>Full Stack Engineer</p>
              <button className="block w-8 h-8 rounded-full lg:w-10 lg:h-10 bg-lime-400 place-items-center">
                <FiArrowUpLeft className="text-gray-900 text-2xl transition hover:-rotate-[45deg]" />
              </button>
            </div>
          </div>
          <div className="text-sm font-poppins-rg text-slate-50 lg:text-lg">
            <div className="flex items-center justify-center w-full h-auto my-4 text-center">
              <p className="text-2xl font-clash text-slate-50 lg:text-6xl">
                passionate <span className="text-lime-500">developer</span> &{" "}
                <span className="text-lime-500">design thinker</span>
              </p>
            </div>

            <p className="text-center">
              I team up with brands to design smart, mission-driven websites
              that create value and meet objectives.
            </p>
          </div>
          <div>
            <Button
              className="mt-2 lg:w-auto bg-lime-400 font-poppins-rg text-slate-950"
              onPress={() => router.push("/contact")}
              size="md"
              radius="full"
            >
              Contact Me
            </Button>
            <Button
              className="mt-2 ml-2 lg:w-auto bg-lime-400 text-slate-950 font-poppins-rg"
              onPress={() => window.open(CV_PDF, "_blank")}
              variant="solid"
              size="md"
              endContent={<FiArrowUpRight className="text-md" />}
              radius="full"
            >
              View CV
            </Button>
          </div>
        </div>
      </div>
      <Divider className="bg-slate-400 opacity-40" />
      <div className="px-6 py-4 bg-slate-950 lg:px-10">
        <p className="text-xl font-neue-bd text-slate-200 lg:text-5xl">
          Next-Gen Web App with{" "}
          <span className="text-lime-300">Community & Collaboration</span> at
          its <span className="text-lime-300">Core</span>
        </p>
        <p className="mt-2 text-lg text-slate-200">
          Developed a modern web application that fosters a strong community
          ecosystem and real-time collaboration. Focused on scalability,
          responsiveness, and user-centered experience using the MERN stack.
        </p>

        <div className="relative mt-4 mb-4 overflow-hidden opacity-15">
          <Divider className="mt-6 mb-2 bg-slate-200" />
         
            <ScrollVelocity
              texts={[
                "✧ Full Stack MERN Developer ✧ React.js Specialist ✧ Node.js Backend Engineer ✧ MongoDB + Express Expert ✧ UI/UX Focused ✧ Clean Code Advocate ✧ Scalable Web Apps ✧ RESTful API Builder ✧ TailwindCSS Designer ✧ Figma-Driven Design ✧ Real-Time Features ✧ Cloud Deployment ✧ Team Collaboration Ready ✧ Building the Future, One Line at a Time ",
              ]}
              velocity={40}
              className="font-poppins-rg whitespace-nowrap text-slate-200"
            />
          <Divider className="mt-2 bg-slate-200" />
          <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
          <SkillMarque />
        <p className="w-full p-4 pt-6 text-center text-slate-300 font-poppins-rg">
          I’m a passionate Junior MERN Stack Developer with hands-on experience
          in building full-stack web applications. I focus on clean code,
          responsive UI, and performance optimization. Always eager to learn new
          technologies, I enjoy turning complex problems into simple, scalable
          solutions.
        </p>
        <Heads title="CERTFICATIONS" />
        <div className="flex flex-wrap justify-center gap-2 p-2 lg:p-4 ">
          {awardsState.map((itm, idx) => (
            <div
              key={`C56${idx + 10}`}
              className="flex flex-col p-2 bg-gray-900 rounded-2xl"
            >
              {/* Using @heroui/react Image component for award images */}

              <Image
                src={itm.image}
                className="max-w-72 md:min-w-64"
                isZoomed
                alt={itm.title}
                loading="lazy"
              />
              <p className="mt-1 text-md font-inter text-slate-100">
                {itm.title}
              </p>
              <Link
                isExternal
                href={itm.url}
                className="mb-2 text-sm w-fit font-poppins-rg text-lime-200"
              >
                {itm.institute}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          {showLoadMore && (
            <Button
              variant="light"
              className="block text-white"
              onPress={handleLoadMore}
            >
              more awards
            </Button>
          )}
        </div>
          <Heads title="Skills Catalog" />
        <div className="flex flex-col gap-2 px-0 py-2 mt-4 sm:px-3 lg:gap-10 lg:px-20 md:flex-row">
          <div className="flex w-full gap-10 p-4 max-h-60 bg-slate-100 rounded-3xl">
            <div className="w-full">
              <h1 className="text-lg font-semibold tracking-wide lg:text-2xl font-clash text-gray-950">
                Full Stack Development
              </h1>
              <p className="w-full mt-3 tracking-wide text-tiny lg:text-sm font-poppins-rg text-gray-950">
                I've built full-stack web applications, showcasing my
                proficiency in MongoDB, Express.js, React.js, and Node.js
                through a robust project portfolio.
              </p>
            </div>
            <div>
              <button className="block h-10 w-10 sm:w-16 sm:h-16 rounded-full ring-1 hover:rotate-[45deg] transition-all ring-slate-900 place-items-center">
                <FiArrowUpRight className="text-2xl text-gray-900" />
              </button>
              <div className="flex items-center justify-center w-10 h-10 mt-2 rounded-full sm:w-16 sm:h-16 xs:h-10 xs:w-10 ring-1 ring-slate-800">
                <SiGithub className="text-xl text-gray-900" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10 p-4 max-h-60 bg-slate-100 rounded-3xl">
            <div className="w-full">
              <h1 className="text-xl font-semibold tracking-wide lg:text-2xl font-clash text-gray-950">
                UI & UX
              </h1>
              <p className="w-full mt-3 tracking-wide text-tiny lg:text-sm font-poppins-rg text-gray-950">
                UI/UX Designer (since 2024) specializing in user-centric web
                development. I create high-fidelity UI prototypes and refine
                user experiences using Framer and Figma.
              </p>
            </div>
            <div>
              <button className="block h-10 w-10 sm:w-16 sm:h-16 rounded-full ring-1 hover:rotate-[45deg] transition-all ring-slate-900 place-items-center">
                <FiArrowUpRight className="text-2xl text-gray-900" />
              </button>
              <div className="flex items-center justify-center w-10 h-10 mt-2 rounded-full sm:w-16 sm:h-16 xs:h-10 xs:w-10 ring-1 ring-slate-800">
                <SiFigma className="text-xl text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-0 py-2 sm:px-3 lg:gap-10 lg:px-20 md:flex-row">
          <div className="flex w-full gap-10 p-4 max-h-60 bg-slate-100 rounded-3xl">
            <div className="w-full">
              <h1 className="text-lg font-semibold tracking-wide lg:text-2xl font-clash text-gray-950">
                Deployment
              </h1>
              <p className="w-full mt-3 tracking-wide text-tiny lg:text-sm font-poppins-rg text-gray-950">
                I’ve used tools like Vercel, Netlify (frontend) and Supabase
                (backend SQL) to simulate real-world scenarios and keep the
                project close to professional standards.
              </p>
            </div>
            <div>
              <Tooltip content="supabase" color="default">
              <button
                className="block h-10 w-10 sm:w-16 sm:h-16 rounded-full ring-1 hover:rotate-[45deg] transition-all ring-slate-900 place-items-center"
                onClick={() => window.open("https://supabase.com/")}
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"currentColor"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M19.98 9.12h-8.03l-.04-6.26c-.01-.82-1.05-1.17-1.56-.53l-7.7 9.71c-.91 1.15-.09 2.84 1.37 2.84h7.97l.09 6.26c.01.82 1.05 1.17 1.56.53l7.71-9.71c.91-1.15.09-2.84-1.37-2.84"></path>
                </svg>
              </button>
              </Tooltip>
              <Tooltip content="netlify">
              <button
                className="flex items-center justify-center w-10 h-10 mt-2 rounded-full sm:w-16 sm:h-16 xs:h-10 xs:w-10 ring-1 ring-slate-800"
                onClick={() => window.open("https://www.netlify.com/")}
              >
                <SiNetlify className="text-2xl text-gray-900" />
              </button>
              </Tooltip>
            </div>
          </div>
          <div className="flex w-full gap-10 p-4 max-h-60 bg-slate-100 rounded-3xl">
            <div className="w-full">
              <h1 className="text-xl font-semibold tracking-wide lg:text-2xl font-clash text-gray-950">
                Optimized Backend
              </h1>
              <p className="w-full mt-3 tracking-wide text-tiny lg:text-sm font-poppins-rg text-gray-950">
                Integrated GraphQL for flexible data queries and Redis for
                caching — both used in a dev setup to build efficient, modern
                backend systems.
              </p>
            </div>
            <div>
              <Tooltip content="redis" color="default">
              <button
                className="block h-10 w-10 sm:w-16 sm:h-16 rounded-full ring-1 hover:rotate-[45deg] transition-all ring-slate-900 place-items-center"
                onClick={() => window.open("https://redis.io/")}
              >
                <SiRedis className="text-xl text-gray-900" />
              </button>
              </Tooltip>
              <Tooltip content="graphql" color="default">
              <button
                className="flex items-center justify-center w-10 h-10 mt-2 rounded-full sm:w-16 sm:h-16 xs:h-10 xs:w-10 ring-1 ring-slate-800"
                onClick={() => window.open("https://graphql.org/")}
              >
                <SiGraphql className="text-xl text-gray-900" />
              </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
