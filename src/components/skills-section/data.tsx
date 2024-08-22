import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiSpringboot } from 'react-icons/si'
import { BsFiletypeSql } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { CardData } from '@/types/type'

export const cardData: CardData[] = [
    {
        title: 'React.js',
        icon: <FaReact />,
    },
    {
        title: 'Next.js',
        icon: <RiNextjsLine />,
    },
    {
        title: 'Spring Boot',
        icon: <SiSpringboot />,
    },
    {
        title: 'Express.js',
        icon: <SiExpress />,
    },
    {
        title: 'SQL',
        icon: <BsFiletypeSql />,
    },
    {
        title: 'Tailwind',
        icon: <RiTailwindCssFill />,
    },
]