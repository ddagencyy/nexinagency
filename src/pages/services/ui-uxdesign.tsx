import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle,
    Palette,
    Layout,
    Smartphone,
    ShoppingCart,
    Layers,
    Search,
    Globe,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ThreeCharacter } from "@/components/three-character"

export default function UIUXDesignUK() {
    return (
        <main className="min-h-screen bg-background text-foreground dark">
            <Navigation variant="page" />

            {/* ================= HERO SECTION ================= */}
            <header className="pt-24 pb-24 relative overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />

                <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30">
                    <ThreeCharacter />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                    <Badge variant="secondary" className="mb-6 mt-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
                        UI/UX Design Services in the UK
                    </Badge>

                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
                        UI/UX Design Services
                        <span className="block text-gradient-primary">
                            For UK Businesses
                        </span>
                    </h1>

                    <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                        We deliver user-centred UI/UX design services for UK companies,
                        creating intuitive digital experiences that increase engagement,
                        improve usability, and drive conversions. From London startups to
                        established businesses across Manchester, Birmingham, and Leeds,
                        our designs are built to perform.
                    </p>

                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-black font-semibold px-10 py-6 text-lg"
                        asChild
                    >
                        <a
                            href="/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start Your UI/UX Design Project

                        </a>
                    </Button>

                </div>
            </header>

            {/* ================= INTRO ================= */}
            {/* <section className="py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Strategic UI/UX Design That Drives Business Growth
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Poor user experience costs UK businesses millions each year through
                        abandoned checkouts, low engagement, and frustrated users. Great
                        UI/UX design, on the other hand, builds trust, improves accessibility,
                        and turns visitors into loyal customers. At Nexin, we combine design
                        psychology, user research, and modern UI principles to create
                        digital products that look exceptional and perform commercially.
                    </p>
                </div>
            </section> */}

            {/* ================= WHAT IS UI UX ================= */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Understanding UI & UX Design
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <article className="rounded-lg border-2 border-accent p-6 hover-lift hover:shadow-2xl transition-all duration-700 overflow-hidden border-0 hover:scale-105 animate-fade-in relative cursor-pointer hover-glow-primary border-glow">
                            <h3 className="text-2xl font-semibold mb-3">
                                User Interface (UI) Design
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                UI design focuses on the visual and interactive elements of a
                                digital product — layouts, typography, colours, buttons, icons,
                                and spacing. Strong UI design ensures consistency, accessibility,
                                and a polished visual identity that reflects your brand.
                            </p>
                        </article>

                        <article className="rounded-lg border-2 border-accent p-6 hover-lift hover:shadow-2xl transition-all duration-700 overflow-hidden border-0 hover:scale-105 animate-fade-in relative cursor-pointer hover-glow-primary border-glow">
                            <h3 className="text-2xl font-semibold mb-3">
                                User Experience (UX) Design
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                UX design focuses on how users interact with your product and
                                how easily they can achieve their goals. It involves usability,
                                navigation, information architecture, and user flows to remove
                                friction and improve satisfaction.
                            </p>
                        </article>
                    </div>

                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-12">
                        The most successful digital products combine intuitive UX with
                        visually compelling UI — this balance is the foundation of our
                        design approach.
                    </p>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our UI/UX Design Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Layout,
                                title: "Web Application UI/UX Design",
                                desc: "User experience design for SaaS platforms, dashboards, and web applications that improve usability, clarity, and productivity.",
                                price: "From $800",
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile App UI/UX Design",
                                desc: "iOS and Android app design services following platform guidelines while maintaining strong brand consistency.",
                                price: "From $1000",
                            },
                            {
                                icon: Palette,
                                title: "Website UI Design",
                                desc: "Conversion-focused website design that attracts visitors, builds trust, and supports SEO performance.",
                                price: "From $500",
                            },
                            {
                                icon: ShoppingCart,
                                title: "E-Commerce UX Design",
                                desc: "Optimised e-commerce design to reduce checkout friction, improve product discovery, and increase online sales.",
                                price: "From $1000",
                            },
                            {
                                icon: Layers,
                                title: "Design Systems",
                                desc: "Scalable design systems with reusable components, typography, colour systems, and documentation.",
                                price: "From $1200",
                            },
                            {
                                icon: Search,
                                title: "UX Research & Strategy",
                                desc: "User research, usability testing, personas, and journey mapping to support data-driven design decisions.",
                                price: "From $1500",
                            },
                        ].map((service, i) => (
                            <Card key={i} className="hover-lift transition-all duration-500">
                                <CardContent className="p-8">
                                    <service.icon className="w-8 h-8 text-accent mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-5">
                                        {service.desc}
                                    </p>
                                    <div className="font-bold text-primary">
                                        {service.price}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our Proven UI/UX Design Process
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Research & Discovery",
                            "Information Architecture",
                            "Wireframing",
                            "Visual UI Design",
                            "Interactive Prototyping",
                            "Usability Testing",
                            "Developer Handover",
                        ].map((step, i) => (
                            <Card key={i}>
                                <CardContent className="p-6 flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            Step {i + 1}: {step}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Our structured process ensures clarity, validation, and
                                            high-quality outcomes before development begins.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Why Choose Nexin for UI/UX Design in the UK?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: Globe,
                                title: "UK Market Expertise",
                                desc: "We understand UK users, accessibility standards, and market expectations across industries.",
                            },
                            {
                                icon: Search,
                                title: "User-Centred Approach",
                                desc: "Every design decision is backed by user research, usability testing, and behavioural insights.",
                            },
                            {
                                icon: Palette,
                                title: "Design That Delivers ROI",
                                desc: "Our designs balance aesthetics with conversion optimisation and measurable business outcomes.",
                            },
                            {
                                icon: Layers,
                                title: "Collaboration & Transparency",
                                desc: "You stay involved throughout the process with clear communication and regular feedback loops.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <item.icon className="w-8 h-8 text-accent" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-28 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-black" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Improve Your Product’s User Experience?
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Book a free UI/UX consultation with our UK-focused design team and
                        discover how better design can transform your digital product.
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
                            Get Your Free Design Quote
                        </a>
                    </Button>


                    <div className="mt-10 flex justify-center gap-6 text-white/80 text-sm">
                        <span>✔ Free Consultation</span>
                        <span>✔ UK-Based Expertise</span>
                        <span>✔ Proven Results</span>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
            <Footer />
        </main>
    )
}
