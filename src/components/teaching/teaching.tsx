import { buttonVariants } from '../ui/button'
import { TeachingExperienceBento } from './teaching-experience'
import StudentTestimonial from './testimonial'

export default function TeachingSection() {
    return (
        <div className="space-y-8">
            <IntroductionSection />
            <TeachingExperienceBento />
            <div className="h-10"></div>
            <StudentTestimonial />
        </div>
    )
}

function IntroductionSection() {
    return (
        <div className="space-y-6">
            <h2 className="font-bold text-3xl text-secondary">
                Teaching Experience
            </h2>
            <p>
                {`Beyond creating innovative web and mobile applications, I am passionate about empowering aspiring developers through mentorship.`}
                <span className='md:block hidden'>{`Whether you're just starting your coding journey or looking to enhance your full-stack skills, I'm here to guide you every step of the way.`}</span>
            </p>
            <p className="italic">What to learn code with me?</p>
            <div className="flex gap-3">
                <a
                    href="https://lcs.stationgroup.co.th/"
                    className={buttonVariants({ variant: 'default' })}
                >
                    Learning Code Station
                </a>
                <a
                    href="https://lcs.stationgroup.co.th/1by1/"
                    className={buttonVariants({ variant: 'outline' })}
                >
                    Enroll Now
                </a>
            </div>
        </div>
    )
}
