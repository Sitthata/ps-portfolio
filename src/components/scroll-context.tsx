'use client'

import { createContext, useContext } from 'react'

type ScrollContextT = {
    // eslint-disable-next-line no-unused-vars
    scrollTo: (id: string) => void
}

const ScrollContext = createContext<ScrollContextT | undefined>(undefined)

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <ScrollContext.Provider value={{ scrollTo }}>
            {children}
        </ScrollContext.Provider>
    )
}

export function useScrollTo() {
    const context = useContext(ScrollContext)
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider')
    }
    return context
}
