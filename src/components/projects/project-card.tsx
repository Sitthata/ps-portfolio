'use client'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import BadgeList from './badge-list'
import { useCardAnimation } from './hooks/use-card-animation'
import { FaGithub } from 'react-icons/fa'
import CustomToolTip from './custom-tool-tip'

type ProjectCardProps = {
    title: string
    imgSrc: string
    badges: string[]
    description: string
    githubLink?: string
    liveLink?: string
}

gsap.registerPlugin(useGSAP)

export default function ProjectCard({
    imgSrc,
    title,
    badges,
    description,
    githubLink,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    useCardAnimation(cardRef, contentRef, overlayRef)

    return (
        <a href={'https://react-icons.github.io/react-icons/search/#q=sql'}>
            <div
                className={cn(
                    'relative overflow-hidden outline outline-1 outline-accent content-between rounded-lg md:min-h-[20rem] min-h-[18rem] p-4 grid bg-cover',
                    imgSrc
                )}
                ref={cardRef}
            >
                <div className="space-x-2 z-50">
                    <CustomToolTip
                        icon={<MdOutlineArrowOutward fontSize={20} />}
                        tooltipContent="Live"
                    />
                    <CustomToolTip
                        icon={<FaGithub fontSize={20} />}
                        tooltipContent="Github"
                        link={githubLink}
                    />
                </div>
                <div className="z-50 space-y-2" ref={contentRef}>
                    <h1 className="text-lg md:text-2xl">{title}</h1>
                    <BadgeList badges={badges} />
                    <p className="text-sm md:text-base">{description}</p>
                </div>
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black opacity-0 pointer-events-none"
                />
            </div>
        </a>
    )
}
