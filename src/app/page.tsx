import AboutMe from '@/components/about-me/about-me'
import HeroBanner from '@/components/hero/hero-banner'
import Projects from '@/components/projects/projects'
import SkillSection from '@/components/skills-section/skills'

export default function Home() {
    return (
        <>
            <div className='h-10'></div>
            <main className="md:container px-6 flex flex-col gap-24 mb-10">
                <HeroBanner />
                <SkillSection />
                <AboutMe />
                <Projects />
            </main>
        </>
    )
}
