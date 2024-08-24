'use client'
import {
    useScroll,
    motion,
    useTransform,
    useMotionValueEvent,
} from 'framer-motion'
import NavList from './nav-list'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {
    const { scrollYProgress, scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)
    const { theme } = useTheme()

    useMotionValueEvent(scrollYProgress, 'change', (value: number) => {
        if (value > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    })

    const blur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(8px)'])

    const backgroundInitial = theme === 'dark' ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.5)'
    const backgroundOnScrolled = theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'

    const variants = {
        initial: {
            height: 140,
            blur: 0,
            backgroundColor: backgroundInitial,
            borderBottom: '1px solid rgba(255, 255, 255, 0)',
        },
        scrolled: {
            height: 70,
            blur: 20,
            backgroundColor: backgroundOnScrolled,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
    }

    return (
        <motion.nav
            className="sticky top-0 p-5 z-50 bg-background backdrop-blur-sm"
            style={{ backdropFilter: blur }}
            variants={variants}
            initial="hidden"
            animate={!isScrolled ? 'initial' : 'scrolled'}
            transition={{ type: 'ease-in-out', duration: 0.3 }}
        >
            <div className="m-auto max-w-[1150px] flex justify-between">
                <h1 className="text-3xl font-bold font-jetbrain hover:text-secondary cursor-pointer duration-150">
                    PS
                </h1>
                <NavList />
            </div>
        </motion.nav>
    )
}
