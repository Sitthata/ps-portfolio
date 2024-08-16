import HeroBanner from "@/components/hero/hero-banner";
import Navbar from "@/components/navigation/navbar";
import SkillSection from "@/components/skills-section/skills";

export default function Home() {
  return (
    <main className="md:container px-6 flex flex-col gap-24">
      <Navbar />
      <HeroBanner />
      <SkillSection />
    </main>
  );
}
