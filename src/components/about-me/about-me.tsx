import Image from "next/image";
import { StickyScroll } from "../scroll-section/sticky-scroll-reveal";
import AboutCard from "./experience-card";

const experiences = [
  {
    title: "Hello-Goose Project - Head of Frontend Speaker",
    description:
      "Led workshops on frontend development best practices, focusing on React and TypeScript. Mentored a team of freshmen, guiding them through the development of responsive, interactive web applications.",
  },
  {
    title: "IT Starter Pack #30 - Web Technology Teacher",
    description:
      "Taught fundamental web development concepts, including HTML, CSS, and JavaScript, to university freshmen. Guided students in building projects using modern frameworks like React and Vue.",
  },
];
const educations = [
  {
    title: "King Mongkut’s University of Technology Thonburi",
    description: "Bachelor of Science in Information Technology",
  },
  {
    title: "Assumption College",
    description: "High School Diploma in Math-Science-Technology",
  },
];
const content = [
  {
    title: "About Me",
    description:
      "I am a dedicated IT student with a strong foundation in full-stack development, My expertise spans both frontend and backend technologies, including React, Vue, Spring Boot, and MySQL.",
    content: (
      <Image
        src="/about-me-portrait.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Education",
    description: (
      <div className="flex flex-col gap-4">
        {educations.map((experience, index) => (
          <AboutCard
            key={experience.title + index}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Experience",
    description: (
      <div className="flex flex-col gap-5">
        {experiences.map((experience, index) => (
          <AboutCard
            key={experience.title + index}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function AboutMe() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
