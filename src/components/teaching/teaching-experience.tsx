import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

interface HeaderImageProps {
    url?: string
    imagePosition:
        | 'center'
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
}

export function TeachingExperienceBento() {
    return (
        <BentoGrid className="mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                />
            ))}
        </BentoGrid>
    )
}

const HeaderImage = ({ url, imagePosition = 'center' }: HeaderImageProps) => {
    // Map the imagePosition prop to corresponding Tailwind CSS classes
    const positionClassMap: {
        // eslint-disable-next-line no-unused-vars
        [key in HeaderImageProps['imagePosition']]: string
    } = {
        center: 'bg-center',
        top: 'bg-top',
        bottom: 'bg-bottom',
        left: 'bg-left',
        right: 'bg-right',
        'top-left': 'bg-top-left',
        'top-right': 'bg-top-right',
        'bottom-left': 'bg-bottom-left',
        'bottom-right': 'bg-bottom-right',
    }

    return (
        <div
            className={cn(
                'bg-cover flex flex-1 w-full h-full min-h-[18rem] rounded-xl',
                !url
                    ? 'bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'
                    : positionClassMap[imagePosition]
            )}
            style={url ? { backgroundImage: `url(${url})` } : {}}
        ></div>
    )
}

const items = [
    {
        title: 'LCS Java Programming Bootcamp',
        description:
            'A 3-day intensive bootcamp teaching fundamental Java programming concepts.',
        header: <HeaderImage url="/teaching/teach-1.jpg" imagePosition='center' />,
        className: 'md:col-span-2',
        icon: <p className="text-xs font-extralight">Aug 2-4, 2024</p>,
    },
    {
        title: 'LCS 1-1 Fullstack mentorship',
        description:
            'Personalized one-on-one mentorship to develop comprehensive full-stack development skills.',
        header: <HeaderImage url="/teaching/teach-4.jpg" imagePosition='center' />,
        className: 'md:col-span-1 bg-bottom',
        icon: <p className="text-xs font-extralight">Avaliable</p>,
    },
    {
        title: 'IT Starter Web Technologies',
        description:
            'Teaching fundamental web development concepts including HTML, CSS, and JavaScript.',
        header: <HeaderImage url="/teaching/teach-3.jpg" imagePosition='center'/>,
        className: 'md:col-span-1',
        icon: <p className="text-xs font-extralight">10-12</p>,
    },
    {
        title: 'Hello-Goose React Bootcamp',
        description:
            'A React-focused bootcamp guiding students through frontend development and project creation.',
        header: <HeaderImage url="/teaching/teach-5.jpg" imagePosition='center'/>,
        className: 'md:col-span-2',
        icon: <p className="text-xs font-extralight">10-12</p>,
    },
]
