import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle,
    Bot,
    Workflow,
    Cpu,
    MessageSquare,
    Database,
    Globe,
    Zap,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ThreeCharacter } from "@/components/three-character"

export default function AIAutomation() {
    return (
        <main className="min-h-screen bg-background text-foreground dark">
            <Navigation variant="page" />

            {/* ================= HERO ================= */}
            <header className="pt-24 pb-24 min-h-screen flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
                <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30">
                    <ThreeCharacter />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                    <Badge variant="secondary" className="mb-6 mt-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
                        AI Automation Services in the UK
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8">
                        AI Automation Services
                        <span className="block text-gradient-primary">
                            Save 20+ Hours
                        </span>
                    </h1>

                    <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10">
                        Automate customer support, sales, marketing, and operations with
                        AI-powered workflows. Reduce costs, improve efficiency, and scale
                        your UK business without hiring more staff.
                    </p>

                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-black font-semibold px-10 py-6 text-lg"
                        asChild
                    >
                        <a
                            href="https://calendly.com/muteebcheema243/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Your Free Automation Audit
                        </a>
                    </Button>

                </div>
            </header>

            {/* ================= INTRO ================= */}
            {/* <section className="py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Work Smarter, Not Harder with AI Automation
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Nexin Agency, we build AI automation systems that replace manual,
                        repetitive work with intelligent workflows. From chatbots handling
                        customer enquiries 24/7 to fully automated back-office operations,
                        our solutions deliver measurable ROI for UK businesses.
                    </p>
                </div>
            </section> */}

            {/* ================= WHAT CAN BE AUTOMATED ================= */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        What Can Be Automated?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Customer service & live chat automation (24/7 AI support)",
                            "Sales lead capture, scoring & automated follow-ups",
                            "Email & marketing campaign automation",
                            "CRM updates & sales pipeline management",
                            "Invoice processing, billing & financial reporting",
                            "HR, onboarding & internal admin workflows",

                            "Appointment booking & calendar scheduling automation",
                            "AI-powered chatbot for lead generation & qualification",
                            "Order processing & status update automation",
                            "Data entry, data validation & system syncing",
                            "Customer feedback collection & survey automation",
                            "Document handling, uploads & approvals",

                        ].map((item, i) => (
                            <Card key={i} className="hover-lift transition-all duration-500">
                                <CardContent className="p-6 flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SERVICES ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our AI Automation Solutions
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Bot,
                                title: "AI Chatbot Development",
                                desc: "24/7 AI chatbots for customer support, lead generation and e-commerce.",
                                price: "$500 setup + £300/month",
                            },
                            {
                                icon: Workflow,
                                title: "Workflow Automation",
                                desc: "Custom workflows connecting CRM, email, accounting & internal tools.",
                                price: "$500 per workflow",
                            },
                            {
                                icon: MessageSquare,
                                title: "Email Marketing Automation",
                                desc: "Behaviour-based email sequences and lead nurturing systems.",
                                price: "$500 setup + £400/month",
                            },
                            {
                                icon: Cpu,
                                title: "Lead Qualification Automation",
                                desc: "AI lead scoring and smart routing for sales teams.",
                                price: "$1000 setup",
                            },
                            {
                                icon: Database,
                                title: "Data Processing Automation",
                                desc: "Automated data entry, validation, and reporting systems.",
                                price: "$500 setup",
                            },
                            {
                                icon: Zap,
                                title: "Custom AI Solutions",
                                desc: "Bespoke AI systems tailored to your unique business challenges.",
                                price: "Custom Quote",
                            },
                        ].map((service, i) => (
                            <Card key={i}>
                                <CardContent className="p-8">
                                    <service.icon className="w-8 h-8 text-accent mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-4">{service.desc}</p>
                                    <div className="font-bold text-primary">{service.price}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ROI ================= */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        The ROI of AI Automation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            "Save 20–40 hours per week on manual tasks",
                            "Reduce operational costs within 3–6 months",
                            "Improve customer satisfaction with instant responses",
                            "Scale operations without increasing headcount",
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-accent" />
                                <p className="text-muted-foreground">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our AI Automation Process
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Automation Audit & ROI Analysis",
                            "Strategy & Architecture Planning",
                            "Development & System Integration",
                            "Training & Launch",
                            "Ongoing Optimisation & Support",
                        ].map((step, i) => (
                            <Card key={i}>
                                <CardContent className="p-6 flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            Step {i + 1}: {step}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            A proven, ROI-focused automation framework.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TECHNOLOGIES ================= */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Technologies We Use
                    </h2>

                    <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
                        We work with industry-leading AI platforms and automation tools to build
                        secure, scalable, and future-ready systems tailored to your business.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                title: "AI & Machine Learning",
                                desc: "OpenAI GPT, Google Cloud AI, and custom AI models for intelligent automation and decision-making.",
                            },
                            {
                                title: "Automation Platforms",
                                desc: "Zapier, Make, n8n, and Microsoft Power Automate to connect apps and automate complex workflows.",
                            },
                            {
                                title: "CRM & Sales Systems",
                                desc: "HubSpot and Salesforce integrations for lead management, follow-ups, and pipeline automation.",
                            },
                            {
                                title: "Communication Tools",
                                desc: "Slack, email, SMS, and chatbot automation to keep teams and customers connected 24/7.",
                            },
                            {
                                title: "Cloud & Infrastructure",
                                desc: "Scalable cloud solutions designed for performance, security, and reliability.",
                            },
                            {
                                title: "500+ Integrations",
                                desc: "We connect virtually any tool your business uses into one seamless automated ecosystem.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-background shadow-sm border border-accent"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="py-28 text-center relative">
                <div className="absolute inset-0 bg-black" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Automate Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Stop wasting time on tasks a computer can do better.
                        Book your free AI automation audit today.
                    </p>

                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-black font-semibold px-10 py-6 text-lg"
                        asChild
                    >
                        <a
                            href="https://calendly.com/muteebcheema243/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule Your Free Automation Audit
                        </a>
                    </Button>

                </div>
            </section>

            <TestimonialsSection />
            <Footer />
        </main>
    )
}
