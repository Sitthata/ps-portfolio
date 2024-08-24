'use client'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { useEffect } from 'react'

export default function CommandMenu({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [setOpen])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem>Home</CommandItem>
                    <CommandItem>About Me</CommandItem>
                    <CommandItem>Projects</CommandItem>
                </CommandGroup>
                <CommandGroup heading="Links">
                    <CommandItem>linkedin</CommandItem>
                    <CommandItem>github</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
