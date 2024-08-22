import { Badge } from '@/components/ui/badge'

export default function BadgeList({ badges }: { badges: string[] }) {
    return (
        <div className='flex gap-2'>
            {badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
            ))}
        </div>
    )
}
