import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    ChevronDown,
    ChevronUp,
    Sparkles,
    ArrowRight,
    CheckCircle2,
} from "lucide-react"



export const FAQSection = () => {
    const faqs = [
        {
            question: "How long does it take to build a website?",
            answer:
                "Most websites are completed within 4-8 weeks, depending on complexity. Custom web applications may take 8-12 weeks. We provide a detailed timeline during our discovery phase.",
        },
        {
            question: "Do you offer website hosting and maintenance?",
            answer:
                "Yes! All our packages include hosting setup, and we offer ongoing maintenance plans starting at $200/month. This includes security updates, backups, and minor content changes.",
        },
        {
            question: "What makes your AI automation different?",
            answer:
                "Unlike basic chatbots, our AI automation solutions are custom-built for your specific business needs. We integrate with your existing systems, train the AI on your data, and continuously optimize for better results.",
        },
        {
            question: "How quickly will I see results from SEO?",
            answer:
                "Local SEO typically shows results in 30-60 days. Broader SEO campaigns take 3-6 months to see significant rankings. We provide monthly reports so you can track progress every step of the way.",
        },
        {
            question: "Do you work with businesses outside your local area?",
            answer:
                "Absolutely! While we specialize in local SEO for area businesses, we work with clients nationwide (and internationally) for web development, design, and automation projects.",
        },
        {
            question: "What if I'm not satisfied with the results?",
            answer:
                "We offer a 90-day results guarantee. If you don't see measurable improvement within 90 days, we'll continue working at no additional cost until you achieve your goals.",
        },
        {
            question: "Can you redesign my existing website?",
            answer:
                "Yes! Website redesigns are one of our specialties. We'll audit your current site, preserve what works, and transform what doesn't—all while maintaining your SEO rankings.",
        },
        {
            question: "What industries do you work with?",
            answer:
                "We work with diverse industries including healthcare, legal services, home services, e-commerce, SaaS companies, real estate, restaurants, and professional services. Our strategies adapt to your specific industry needs.",
        },
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="pt-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <Badge variant="secondary" className="mb-4">FAQS</Badge>

                <h2 className="font-display text-display-lg font-bold mb-6">
                    Frequently Asked
                    <span className="text-gradient-primary block"> Questions</span>
                </h2>

                {/* Intro paragraph */}
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Have questions? We've got you covered. Explore our most common questions below.

                </p>

                {/* Accordion */}
                <div className="space-y-5 mt-14 text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-white">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-accent" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-accent" />
                                )}
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-700 dark:text-gray-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>


            </div>

            {/* CTA Section */}
            <section className="mt-20 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-gradient-primary">Grow Your Business?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Let's talk about your project. Get a free consultation and custom quote – no pressure, just honest advice.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

                        {/* Schedule Free Call */}
                        <Button size="lg" className="group" asChild>
                            <a
                                href="https://calendly.com/muteebcheema243/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule Free Call
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        {/* View Our Work */}
                        <Button size="lg" variant="outline" asChild>
                            <a
                                href="/projects"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Our Work
                            </a>
                        </Button>

                    </div>


                    <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            Free consultation
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            No obligation
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            90-day guarantee
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            Transparent pricing
                        </div>
                    </div>
                </div>
            </section>


        </section>
    )
}
