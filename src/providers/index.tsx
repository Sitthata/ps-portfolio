'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProvider } from '@/components/scroll-context'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ScrollProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ScrollProvider>
    )
}
