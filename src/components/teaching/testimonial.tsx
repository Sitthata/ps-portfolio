import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { kanit } from '@/fonts'

export default function StudentTestimonial() {
    return (
        <div className="space-y-8">
            <h2 className="font-bold text-3xl text-secondary text-center">
                What my student says?
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
                {testimonialData.map((data, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{data.name}</CardTitle>
                            <CardDescription>{data.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className={kanit.className}>
                                {data.testimonial}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const testimonialData = [
    {
        name: 'Pornnapat P.',
        title: '1-1 Full-Stack Student',
        testimonial:
            'นี่เป็นครั้งแรกที่ได้เรียนแบบเดี่ยว และต้องบอกเลยว่าเป็นประสบการณ์ที่ดีมากเกินความคาดหมาย รู้สึกสบายใจมากๆ ที่สามารถถามคำถามได้ตลอดเวลา โดยที่พี่ผู้สอนก็เต็มใจตอบทุกคำถามด้วยความกระตือรือร้น ไม่ว่าจะเป็นคำถามยากหรือง่าย พี่ก็อธิบายอย่างชัดเจนและละเอียด ทำให้เราเข้าใจเนื้อหาได้อย่างลึกซึ้ง รู้สึกว่าการเรียนแบบนี้ช่วยเพิ่มความมั่นใจและทำให้พัฒนาได้เร็วขึ้นจริงๆ',
    },
    {
        name: 'Nitchaphan N.',
        title: 'Java Programming Student',
        testimonial:
            'ค่ายนี้ทำให้มีความรู้หลายๆอย่าง ได้รู้ concept ของการเขียนโค้ด',
    },
    {
        name: 'Noppawat T.',
        title: 'Java Programming Student',
        testimonial:
            'พี่สอนดีมากเลยครับ ได้ความรู้ใหม่ๆเยอะมากเลย จากตอนเเรกที่ไม่รู้อะไรเลย เป็น 0 เเต่ตอนนี้สามารถอ่านออกเขียนได้เเล้ว',
    },
    {
        name: 'Nattachote T.',
        title: 'Java Programming Student',
        testimonial:
            'เริ่มเข้าใจคอนเซ็ปในการเขียน และหลักการทำงานเบื้องต้นของ JAVA ครับ',
    },
    {
        name: 'Ittinut R.',
        title: 'Java Programming Student',
        testimonial: 'พี่อธิบายดีมากครับ ไม่ยืด และพี่ใจดีมาก',
    },
    {
        name: 'Thanakrit Z.',
        title: 'Java Programming Student',
        testimonial:
            'สอนดีมากเลยครับสนุกสุดๆ ได้ความรู้มากมายเลยครับขอบคุณพี่ๆ มากเลยครับ',
    },
]
