import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import VideoPlayer from "./video-player";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-3xl text-secondary">Projects</h2>
      <div className="grid gap-4">
        <VideoPlayer />
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectCard
            title={"Kanban Board Fullstack"}
            imgSrc={"bg-kanban-bg"}
          />
          <ProjectCard
            title={"Dictionary App"}
            imgSrc={"bg-dictionary-app"}
            invertText
          />
        </div>
      </div>
    </div>
  );
}
