import { StickyScroll } from '../scroll-section/sticky-scroll-reveal'
import { content } from './data'

export default function AboutMe() {
    return (
        <div className="">
            <StickyScroll content={content} />
        </div>
    )
}
