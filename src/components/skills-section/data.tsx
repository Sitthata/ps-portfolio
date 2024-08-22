import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiSpringboot } from 'react-icons/si'
import { DiMysql } from "react-icons/di";
import { FaDocker, FaGithub, FaLinux, FaReact, FaVuejs } from 'react-icons/fa'
import { CardData } from '@/types/type'

export const cardData: CardData[] = [
    {
        title: 'React.js',
        icon: <FaReact />,
        tipContent: 'Frontend library for building user interfaces',
    },
    {
        title: 'Vue.js',
        icon: <FaVuejs />,
        tipContent: 'Frontend framework for building user interfaces',
    },
    {
        title: 'Next.js',
        icon: <RiNextjsLine />,
        tipContent: 'SSA React framework for production',
    },
    {
        title: 'Spring Boot',
        icon: <SiSpringboot />,
        tipContent: 'Java-based framework for building Backend applications',
    },
    {
        title: 'Express.js',
        icon: <SiExpress />,
        tipContent: 'Node.js framework for building Backend applications',
    },
    {
        title: 'SQL',
        icon: <DiMysql />,
        tipContent: 'Structured Query Language for managing databases',
    },
    {
        title: 'Tailwind',
        icon: <RiTailwindCssFill />,
        tipContent: 'Utility-first CSS framework',
    },
    {
        title: 'Git/Github',
        icon: <FaGithub />,
        tipContent:
            'Version control system for tracking changes in source code',
    },
    {
        title: 'Docker',
        icon: <FaDocker />,
        tipContent:
            'Containerization platform for building, shipping, and running applications',
    },
    {
        title: 'Linux OS',
        icon: <FaLinux />,
        tipContent: 'Open-source operating system',
    },
]
