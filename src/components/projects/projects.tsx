import VideoPlayer from './video-player'
import ProjectCard from './project-card'
import { Button } from '../ui/button'
import { FaArrowRight } from 'react-icons/fa'

const projectsData = [
    {
        title: 'Kanban Board Fullstack',
        imgSrc: 'bg-kanban-bg',
        badges: ['Vue.js', 'Spring Boot', 'MySQL'],
    },
    {
        title: 'Dictionary App',
        imgSrc: 'bg-dictionary-app',
        badges: ['React', 'Tailwind', 'Dictionary API'],
    },
]

export default function Projects() {
    return (
        <div className="space-y-4">
            <h2 className="font-bold text-3xl text-secondary">Projects</h2>
            <div className="grid gap-4">
                <VideoPlayer />
                <div className="grid md:grid-cols-2 gap-4">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="text-xl space-x-3 p-2 hover:bg-secondary hover:text-accent" variant={'outline'}>
                    <span>View More</span> <FaArrowRight />
                </Button>
            </div>
        </div>
    )
}
