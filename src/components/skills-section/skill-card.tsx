'use client'

import { CardData } from '@/types/type'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SkillCard({
    data,
    index,
    ...props
}: {
    data: CardData
    index: number
}) {
    const { icon, title } = data
    const cardRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.from(cardRef.current, {
            scrollTrigger: cardRef.current,
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1,
        })
    })

    return (
        <div
            className="flex justify-center items-center p-5 gap-3 outline outline-1 rounded-md outline-accent hover:bg-primary hover:text-accent cursor-pointer transition-colors duration-200 skill-card"
            ref={cardRef}
            {...props}
        >
            <div className="text-2xl">{icon}</div>
            <h3>{title}</h3>
        </div>
    )
}
