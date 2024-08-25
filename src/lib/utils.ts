import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const scrollTo = (id: string, offset: number = 100) => {
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
    }
    const element = document.getElementById(id)
    if (!element) {
        throw new Error(`Element with id ${id} not found`)
    }

    const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    })
}
