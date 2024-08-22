'use client'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '../ui/button'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import BadgeList from './badge-list'
import { useCardAnimation } from './hooks/use-card-animation'

type ProjectCardProps = {
    title: string
    imgSrc: string
    badges: string[]
    description: string
}

gsap.registerPlugin(useGSAP)

export default function ProjectCard({
    imgSrc,
    title,
    badges,
    description,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    useCardAnimation(cardRef, contentRef, overlayRef)

    return (
        <div
            className={cn(
                'relative overflow-hidden outline outline-1 outline-accent content-between rounded-lg md:min-h-[20rem] min-h-[18rem] p-4 grid bg-cover',
                imgSrc
            )}
            ref={cardRef}
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full z-50"
                        >
                            <MdOutlineArrowOutward fontSize={20} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent align="center" side="left">
                        <p>View Live</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
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
    )
}
