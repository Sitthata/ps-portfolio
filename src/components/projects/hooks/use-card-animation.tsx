import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

gsap.registerPlugin(useGSAP);

export const useCardAnimation = (
  cardRef: React.RefObject<HTMLDivElement>,
  contentRef: React.RefObject<HTMLDivElement>,
  overlayRef: React.RefObject<HTMLDivElement>
) => {
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
};
