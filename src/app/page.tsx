import AboutMe from "@/components/about-me/about-me";
import HeroBanner from "@/components/hero/hero-banner";
import Navbar from "@/components/navigation/navbar";
import Projects from "@/components/projects/projects";
import SkillSection from "@/components/skills-section/skills";

export default function Home() {
  return (
    <main className="md:container px-6 flex flex-col gap-24 mb-10">
      <Navbar />
      <HeroBanner />
      <SkillSection />
      <AboutMe />
      <Projects />
    </main>
  );
}
