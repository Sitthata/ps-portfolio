'use client'
import { useScroll, motion, useMotionValueEvent } from 'framer-motion'
import NavList from './nav-list'
import { useState } from 'react'

export default function Navbar() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest: number) => {
        console.log(latest)
        if (latest >= 110) {
            setIsScrolled(true)
            console.log('Scrolled')
        } else {
            setIsScrolled(false)
            console.log('Not Scrolled')
        }
    })

    const navVariant = {
        initial: {
            height: '120px',
            backgroundColor: 'rgba(0,0,0,0)',
            borderBottom: '1px solid rgba(255,255,255,0.0)',
        },
        scrolled: {
            height: '80px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
        },
    }

    return (
        <motion.nav
            className="sticky top-0 p-5 z-50"
            variants={navVariant}
            animate={isScrolled ? 'scrolled' : 'initial'}
            transition={{ type: 'tween', duration: 0.2 }}
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
