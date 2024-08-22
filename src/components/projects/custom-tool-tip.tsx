import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

export default function CustomToolTip({
    icon,
    tooltipContent,
    link,
}: {
    icon: JSX.Element
    tooltipContent: string
    link?: string
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        className={cn(
                            buttonVariants({
                                size: 'icon',
                                variant: 'outline',
                            }),
                            'rounded-full'
                        )}
                        href={link}
                    >
                        {icon}
                    </a>
                </TooltipTrigger>
                <TooltipContent align="center" side="top">
                    <p>
                        {link
                            ? tooltipContent
                            : 'Live Preview is not available'}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
