import { JetBrains_Mono, Kanit } from 'next/font/google'

export const jetbrain = JetBrains_Mono({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-jetbrain',
})

export const kanit = Kanit({
    weight: ['400', '700'],
    subsets: ['thai'],
    variable: '--font-kanit',
})
