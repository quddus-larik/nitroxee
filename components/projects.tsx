import type React from "react";
import Heads from "@components/heads";
import { Image, Button } from "@heroui/react";
import { FiArrowUpRight } from "react-icons/fi";
import useWindowSize from "@hooks/useWindowSize";
interface Project {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  url?: string;
  githubIssueUrl: string;
  githubRepoUrl: string;
  year: string;
  chipLabel: string;
}


const projects: Project[] = [
  {
    title: "oneManage",
    description:
      "A Employee Management System for Small Organizations to manage employees details.",
    imageSrc: "https://github.com/quddus-larik/oneManage/raw/main/media/thumbnail.png",
    alt: "Screenshot of Qvis Employee Management System",
    url: "https://one-manage.vercel.app",
    githubIssueUrl:
      "https://github.com/quddus-larik/oneManage/issues",
    githubRepoUrl: "https://github.com/quddus-larik/oneManage",
    year: "2025",
    chipLabel: "#01"
  },
  {
    title: "oneRepo",
    description:
      "A Gemini-based Web Application Chatbot including Auth0, MongoDB, with minimal design",
    imageSrc:
      "/media/one-repo.png",
    alt: "Screenshot of oneRepo", 
    githubIssueUrl: "https://github.com/quddus-larik/oneRepo/issues",
    githubRepoUrl: "https://github.com/quddus-larik/oneRepo",
    year: "2025",
    chipLabel: "#02"
  },
];
const Projects: React.FC = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 375;
  return (
    <div className="mt-5">
      <Heads title="INITIATIVES" />
      <div className="grid gap-12 px-8 my-4 lg:px-24 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={`PC${index+1}`} className="w-full h-auto rounded-xl">
            <Image src={project.imageSrc} alt={project.alt} loading="lazy" className="mb-2" />
            <div className="flex items-center justify-between w-full">
            <h1 className="text-small lg:text-xl font-inter text-slate-100">{project.title}</h1>
            {(!isSmallScreen)? (
              <Button size="md" radius="full" className="bg-lime-300 font-poppins-rg" startContent={<FiArrowUpRight className="hover:rotate-[45deg] text-lg transition-all"
            />}
            onPress={()=> window.open(project.githubRepoUrl,"_blank")}
            > explore repo</Button>
              ) : (
                <Button size="md" radius="full" isIconOnly className="bg-lime-300 font-poppins-rg" startContent={<FiArrowUpRight className="hover:rotate-[45deg] text-lg transition-all"
            />}
            onPress={()=> window.open(project.githubRepoUrl,"_blank")}
            />
              )
}
            </div>
            <h1 className="text-tiny lg:text-sm font-poppins-rg text-slate-300">{project.year}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;