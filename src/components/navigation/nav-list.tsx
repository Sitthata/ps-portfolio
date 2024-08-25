'use client'
import { useState } from 'react'
import CommandMenu from '../command/command-menu'
import { ThemeToggle } from '../theme-toggle'
import { Button } from '../ui/button'
import { FiCommand } from 'react-icons/fi'

export default function NavList({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex gap-2">
            <ThemeToggle />
            <Button
                variant={'outline'}
                size={'icon'}
                onClick={() => setOpen((prev) => !prev)}
            >
                <FiCommand fontSize={17} />
            </Button>

            <CommandMenu open={open} setOpen={setOpen} />
            {children}
        </div>
    )
}
