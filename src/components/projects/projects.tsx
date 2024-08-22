import VideoPlayer from './video-player'
import ProjectCard from './project-card'
import { Button } from '../ui/button'
import { FaArrowRight } from 'react-icons/fa'

const projectsData = [
    {
        title: 'Kanban Board Fullstack',
        imgSrc: 'bg-kanban-bg',
        badges: ['Vue.js', 'Spring Boot', 'MySQL'],
        description:
            'A full-stack project with JWT Authentication that allows users to create, update, and delete tasks. The frontend is built with Vue.js and the backend is built with Spring Boot.',
    },
    {
        title: 'Dictionary App',
        imgSrc: 'bg-dictionary-app',
        badges: ['React', 'Tailwind', 'Dictionary API'],
        description:
            'A simple dictionary app that allows users to search for the meaning of words. The app is built with React and Tailwind CSS.',
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
                <Button
                    className="text-xl space-x-3 p-2 hover:bg-secondary hover:text-accent"
                    variant={'outline'}
                >
                    <span>View More</span> <FaArrowRight />
                </Button>
            </div>
        </div>
    )
}
