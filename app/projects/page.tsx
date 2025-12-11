"use client";
import React from "react";
import { motion } from "framer-motion";
import { Image, Button, Link} from "@heroui/react";
import {
    SiReact,
    SiVite,
    SiTailwindcss,
    SiNextui,
    SiMongodb,
    SiExpress,
    SiAuth0,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiMui,
    SiJsonwebtokens,
    SiNextdotjs,
    SiGraphql,
    SiRedis,
    SiShadcnui,
    SiSupabase,
    SiPostgresql,
    SiClerk,
    SiGithub
} from "react-icons/si";
import {
    FaDribbble,
    FaGithub,
    FaProjectDiagram,
} from "react-icons/fa";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import Heads from "@components/heads";
import useWindowSize from "@hooks/useWindowSize";
import { MdMore } from "react-icons/md";

const techIcons: Record<string, JSX.Element> = {
    Html: <SiHtml5 className="text-orange-600" />,
    Css: <SiCss3 className="text-blue-600" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    React: <SiReact className="text-blue-500" />,
    Vite: <SiVite className="text-yellow-500" />,
    TailwindCSS: <SiTailwindcss className="text-sky-500" />,
    NextUI: <SiNextui className="text-purple-500" />,
    MaterialUI: <SiMui className="text-blue-700" />,
    Auth0: <SiAuth0 className="text-orange-500" />,
    JWT: <SiJsonwebtokens className="text-green-600" />,
    NextJS: <SiNextdotjs className="text-white" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Express: <SiExpress className="text-gray-600" />,
    GraphQL: <SiGraphql className="text-pink-500" />,
    Redis: <SiRedis className="text-red-600" />,
    ShadCN: <SiShadcnui className="text-white"/>,
    Supabase: <SiSupabase className="text-green-300"/>,
    PostgreSQL: <SiPostgresql className="text-sky-300"/>,
    Clerk: <SiClerk className="text-gray-400"/>,
    Github: <SiGithub className="text-white"/>,
    More: <p className="text-white font-poppins-rg text-xs flex items-center justify-center px-2 py-0">---</p>
};

const projects = [
    {
        title: "oneRepo",
        description:
            "A Github Assistant manage Insights in Next level with Automated AI Generation of Debug reports, Version docs, SRS and README in markdown code",
        imageSrc:
            "/media/one-repo.png",
        alt: "Screenshot of Github Assistant",
        githubRepoUrl: "https://github.com/quddus-larik/oneRepo",
        githubIssue: "https://github.com/quddus-larik/oneRepo/issue",
        date: "2024",
        chipLabel: "#02",
        techStack: [
            "TypeScript",
            "NextJS",
            "ShadCN",
            "Clerk",
            "Github",
            "Supabase",
            "PostgreSQL"
        ],
    },
    {
        title: "OneManage",
        description:
            "A Employee Management System for Small Organizations to manage employees details - build with Nextjs and Supabase DB SQL",
        imageSrc: "https://github.com/quddus-larik/oneManage/raw/main/media/thumbnail.png",
        alt: "Screenshot of oneManage",
        githubRepoUrl: "https://github.com/quddus-larik/oneManage",
        githubIssue: "https://github.com/quddus-larik/oneManage/issue",
        date: "2025",
        chipLabel: "#02",
        techStack: ["NextJS", "TailwindCSS", "ShadCN", "Supabase","PostgreSQL","Clerk"],
        url: "https://one-manage.vercel.app",
    },
    {
        title: "Memog",
        description:
            "A Mini Memory Game Built with basic html.",
        imageSrc:
            "/media/memog.png",
        alt: "Screenshot of Memog Game",
        githubRepoUrl: "https://github.com/quddus-larik/Memory-Game",
        githubIssue: "https://github.com/quddus-larik/Memory-Game/issue",
        date: "2024",
        chipLabel: "#03",
        techStack: [
            "Html",
            "Css",
            "JavaScript"
        ],
    },
];

const Page: React.FC = () => {
    const { width } = useWindowSize();
    const isSmallSize: boolean = width <= 320;
    return (
        <div className="bg-slate-950">
            <div className="p-0 bg-slate-950">
                <div className="flex flex-col w-full gap-6 p-6 rounded-xl">
                    {/* Page Title */}
                    <div className="flex items-center justify-center p-20 h-svh">
                        <div className="absolute mt-5 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 lg:h-[400px] lg:w-[400px] ring-1 ring-lime-300 opacity-60 -z-0" />
                        <div className="flex flex-col justify-center p-4">
                            <div className="flex items-center self-start gap-2 p-1 pl-2 mb-4 font-medium text-black rounded-full lg:mb-0 text-md lg:text-lg bg-slate-100 font-clash w-fit rotate-6">
                                <p>agile development</p>
                                <button className="block w-8 h-8 rounded-full lg:h-10 lg:w-10 bg-lime-400 place-items-center">
                                    <FiArrowUpRight className="text-2xl text-gray-900 transition hover:rotate-45" />
                                </button>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                className="text-4xl text-center md:text-6xl lg:text-9xl font-akira-bd text-lime-300"
                            >
                                PROJECTS
                            </motion.h1>

                            <div className="flex items-center self-end gap-3 p-1 pl-2 mt-4 font-medium text-black rounded-full lg:mt-0 text-md lg:text-lg bg-slate-100 font-clash w-fit -rotate-3">
                                <p>design development</p>
                                <button className="block w-8 h-8 rounded-full lg:w-10 lg:h-10 bg-lime-400 place-items-center">
                                    <FiArrowUpLeft className="text-gray-900 text-2xl transition hover:-rotate-[45deg]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full place-items-center">
                        <FaProjectDiagram className="text-5xl text-lime-200" />
                    </div>
                    <div className="w-fullmd:px-20 md:text-center">
                        <p className="text-2xl font-medium lg:text-4xl font-clash text-slate-50">
                            We Engineer{" "}
                            <span className="text-lime-300">Digital Products</span> that{" "}
                            <span className="text-lime-300">Redefine User Expectations</span>{" "}
                            and Drive Market Leadership
                        </p>
                        <Button
                            size="md"
                            startContent={<FaDribbble className="text-xl" />}
                            radius="full"
                            className="mt-2 mr-2 text-xl font-clash bg-[#FFABE7]"
                            onPress={() => window.open("https://dribbble.com/abdul-quddus", "_blank")}
                        >
                            dribbble
                        </Button>
                        <Button
                            size="md"
                            startContent={<FaGithub className="text-xl" />}
                            radius="full"
                            className="mt-2 text-xl bg-gray-200 font-clash"
                            onPress={() => window.open("https://github.com/quddus-larik", "_blank")}
                        >
                            github
                        </Button>
                    </div>
                    {/* Projects Container */}
                    <Heads title="SELECTED PROJECTS" />
                    <div className="grid px-0 my-4 sm:px-2 gap-x-6 gap-y-12 lg:px-24 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <div key={index} className="w-full h-auto rounded-xl">
                                <Image
                                    src={project.imageSrc}
                                    alt={project.alt}
                                    className="mb-2"
                                    width={"100%"}
                                />
                                <div className="flex flex-row w-auto gap-1 my-1 bg-transparent rounded-full shadow-sm">
                                    {project.techStack.map((techName) => {
                                        const TechIcon = techIcons[techName];
                                        if (!TechIcon) return null; // Handle cases where techName might not be in techIcons
                                        return (
                                            <div
                                                key={techName}
                                                className={`p-2 rounded-full ${techName} bg-gray-900 text-xl`} // You might want to add specific background colors here if not already handled by the icon component itself
                                                aria-label={`Technology: ${techName}`}
                                            >
                                                {TechIcon}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="flex items-center gap-2 text-md lg:text-xl font-inter text-slate-100">
                                        <p>{project.title}</p>
                                    </h1>
                                    {(!isSmallSize) ? (
                                        <Button
                                            size="sm"
                                            radius="full"
                                            className="bg-slate-200 font-poppins-rg"
                                            startContent={
                                                <FiArrowUpRight className="hover:rotate-[45deg] text-lg transition-all" />
                                            }
                                            onPress={() => window.open(project.githubRepoUrl, "_blank")}
                                        >
                                            {" "}
                                            explore repo
                                        </Button>
                                    ) : (
                                        <Button
                                            size="md"
                                            radius="full"
                                            className="bg-slate-200 font-poppins-rg"
                                            startContent={
                                                <FaGithub className="hover:rotate-[45deg] text-xl transition-all" />
                                            }
                                            onPress={() => window.open(project.githubRepoUrl, "_blank")}
                                            isIconOnly
                                        />
                                    )
                                    }
                                </div>
                                <p className="mt-2 text-slate-200 text-tiny lg:text-sm font-inter">
                                    {project.description}
                                </p>
                                { project.url && (<Link onClick={() => window.open(project.url)} className="text-white">{project.url.replace("https://","")}</Link>) }
                                <h1 className="mt-2 text-tiny lg:text-sm font-poppins-rg text-slate-300">
                                    {project.date}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
