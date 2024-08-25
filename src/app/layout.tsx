import type { Metadata } from 'next'
import './globals.css'
import { jetbrain } from '@/fonts'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navigation/navbar'
import { Providers } from '@/providers'

export const metadata: Metadata = {
    title: 'PS Portfolio',
    description: 'Pattaradanai Portfolio built with Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    jetbrain.className
                )}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
