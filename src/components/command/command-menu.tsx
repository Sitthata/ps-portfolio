'use client'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { scrollTo } from '@/lib/utils'
import { useEffect } from 'react'
import { commandLinkItems, commandNavItems } from './data'

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

    const onCommandItemClick = (id: string) => {
        scrollTo(id)
        setOpen(false)
    }

    const onCommandLinkClick = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    {commandNavItems.map((item, index) => (
                        <CommandItem
                            className="cursor-pointer"
                            key={index}
                            onSelect={() => onCommandItemClick(item.id)}
                        >
                            {item.title}
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Contact">
                    {commandLinkItems.map((item, index) => (
                        <CommandItem
                            className="cursor-pointer"
                            key={index}
                            onSelect={() => onCommandLinkClick(item.link)}
                        >
                            <div className='flex gap-3'>
                                {item.icon}
                                {item.title}
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
