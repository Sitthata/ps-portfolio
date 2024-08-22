import { cardData } from './data'
import SkillCard from './skill-card'

export default function SkillSection() {
    return (
        <div className="space-y-4">
            <h2 className="font-bold text-3xl text-secondary">My Skills</h2>
            <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {cardData.map((data, index) => (
                        <SkillCard key={index} data={data} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
