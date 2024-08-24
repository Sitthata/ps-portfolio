'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import NavList from './nav-list'

export default function Navbar() {
    const { scrollY } = useScroll()

    // Use transform to determine whether the navbar should be in its scrolled state
    const opacity = useTransform(
        scrollY,
        [0, 100],
        [1, 0.9],
    )
    const blur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(5px)'])
    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ['none', '1px solid rgba(200, 200, 200, 0.1)'],
    )

    return (
        <motion.nav
            className="sticky top-0 p-5 z-50 bg-background"
            style={{
                opacity: opacity,
                backdropFilter: blur,
                borderBottom: borderBottom,
            }}
            transition={{ type: 'tween', duration: 0.3 }}
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
