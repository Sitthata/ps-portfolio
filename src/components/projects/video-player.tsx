import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function VideoPlayer() {
  return (
    <div className="relative md:min-h-[20rem] min-h-[18rem]">
      <video
        className="outline outline-1 outline-accent rounded-lg"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/videos/planet-side-scale.mp4" type="video/mp4" />
      </video>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full absolute top-4 left-4"
            >
              <IoIosInformationCircleOutline fontSize={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent align="center" side="right">
            <p>Planet Side Info App</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4"
            >
              <MdOutlineArrowOutward fontSize={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent align="center" side="left">
            <p>View Live</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
