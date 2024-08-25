import { StickyScroll } from '../scroll-section/sticky-scroll-reveal'
import { content } from './data'

export default function AboutMe() {
    return (
        <div id="about-me">
            <StickyScroll content={content} />
        </div>
    )
}
