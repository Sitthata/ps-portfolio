'use client'

import VideoPlayer from './video-player'
import { Button } from '../ui/button'
import { FaArrowRight } from 'react-icons/fa'
import { projectsData } from './data'
import dynamic from 'next/dynamic'
const ProjectCard = dynamic(() => import('./project-card'), { ssr: false })

export default function Projects() {
    return (
        <div className="space-y-4" id="projects">
            <h2 className="font-bold text-3xl text-secondary">Projects</h2>
            <div className="grid gap-4">
                <VideoPlayer customClass="hidden md:block" />
                <div className="grid md:grid-cols-2 gap-4">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
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
