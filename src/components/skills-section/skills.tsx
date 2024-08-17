import { CardData } from '@/types/type'
import SkillCard from './skill-card'
import { FaReact } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiSpringboot } from 'react-icons/si'
import { BsFiletypeSql } from 'react-icons/bs'

export default function SkillSection() {
    const cardData: CardData[] = [
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
    return (
        <div className="font-jetbrain space-y-4">
            <h2 className="font-bold text-3xl text-secondary">My Skills</h2>
            <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                {cardData.map((data, index) => (
                    <SkillCard key={index} data={data} index={index} />
                ))}
            </div>
        </div>
    )
}
