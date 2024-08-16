import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  imgSrc: string;
  invertText?: boolean;
};

export default function ProjectCard({
  imgSrc,
  title,
  invertText,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "outline outline-1 outline-accent content-between rounded-lg md:min-h-[20rem] min-h-[15rem] p-4 grid bg-cover",
        imgSrc
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <MdOutlineArrowOutward fontSize={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent align="center" side="left">
            <p>View Live</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <h2 className={cn("font-bold", { "text-accent": invertText })}>
        {title}
      </h2>
    </div>
  );
}
