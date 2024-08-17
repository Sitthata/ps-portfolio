"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ProjectCardProps = {
  title: string;
  imgSrc: string;
  description: string;
};

gsap.registerPlugin(useGSAP);

export default function ProjectCard({
  imgSrc,
  title,
  description,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    const timeline = gsap.timeline({ paused: true });

    timeline.to(overlay, {
      opacity: 0.8,
      ease: "power3",
    });

    timeline.fromTo(
      content,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );

    card?.addEventListener("mouseenter", () => timeline.play());
    card?.addEventListener("mouseleave", () => timeline.reverse());
  }, [cardRef, contentRef, overlayRef]);

  return (
    <div
      className={cn(
        "relative overflow-hidden outline outline-1 outline-accent content-between rounded-lg md:min-h-[20rem] min-h-[18rem] p-4 grid bg-cover",
        imgSrc
      )}
      ref={cardRef}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full z-50">
              <MdOutlineArrowOutward fontSize={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent align="center" side="left">
            <p>View Live</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="z-50" ref={contentRef}>
        <h1 className="text-lg">{title}</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          iusto odit perspiciatis fugiat optio error beatae quae nostrum iste
          quis.
        </p>
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      />
    </div>
  );
}
