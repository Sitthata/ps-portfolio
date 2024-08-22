import type { Metadata } from 'next'
import './globals.css'
import { jetbrain } from '@/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

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
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    jetbrain.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
