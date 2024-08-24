import { Badge } from '@/components/ui/badge'

export default function BadgeList({ badges }: { badges: string[] }) {
    return (
        <div className='flex gap-2 flex-wrap'>
            {badges.map((badge, index) => (
                <Badge className='text-xs md:text-sm' key={index}>{badge}</Badge>
            ))}
        </div>
    )
}
