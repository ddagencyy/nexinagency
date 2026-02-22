import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { ThreeCharacter } from "@/components/three-character"
import {
    Rocket,
    Target,
    Users,
    Award,
    Zap,
    Heart,
    TrendingUp,
    CheckCircle2,
    Sparkles,
    Code,
    Palette,
    Bot,
    Search,
    ArrowRight,
    Star,
    Quote
} from "lucide-react"

export default function AboutPage() {
    const stats = [
        { number: "80+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "95%", label: "Client Satisfaction" },
        { number: "3.5x", label: "Average ROI" },
    ]

    const values = [
        {
            icon: Sparkles,
            title: "Innovation First",
            description: "We embrace new technologies and methodologies that deliver better results for our clients. From AI automation to progressive web apps, we're always exploring cutting-edge solutions."
        },
        {
            icon: Target,
            title: "Results-Driven Excellence",
            description: "Beautiful design and clean code are important, but they're means to an end. We measure success by tangible business outcomes: increased traffic, more leads, higher conversion rates."
        },
        {
            icon: Heart,
            title: "Transparent Communication",
            description: "We believe in honest, clear communication. Our clients always know what we're working on, why we're doing it, and how it's performing. No jargon, no surprises."
        },
        {
            icon: Users,
            title: "Client Partnership",
            description: "We're not just a vendor – we're your growth partner. Your success is our success, and we're invested in building long-term relationships built on trust and results."
        },
        {
            icon: TrendingUp,
            title: "Continuous Learning",
            description: "The digital landscape evolves constantly, and so do we. Our team is committed to ongoing education and staying ahead of industry trends."
        },
        {
            icon: CheckCircle2,
            title: "Quality Without Compromise",
            description: "We never cut corners. Every line of code, every design element, every optimization is executed with meticulous attention to detail."
        }
    ]

    const services = [
        {
            icon: Code,
            title: "Web Development & Design",
            description: "Fast, secure, mobile-responsive websites using modern technologies like React, Next.js, and Node.js.",
            technologies: "React, Next.js, Vue.js, Node.js, Python, PHP"
        },
        {
            icon: Palette,
            title: "UI/UX Design Services",
            description: "Beautiful, intuitive interfaces backed by deep user research and psychology that drive conversions.",
            technologies: "Figma, Adobe XD, Sketch, InVision"
        },
        {
            icon: Bot,
            title: "AI Automation & Integration",
            description: "Intelligent automation systems that save 20+ hours per week through chatbots and workflow optimization.",
            technologies: "OpenAI, Zapier, Make, n8n, Custom Solutions"
        },
        {
            icon: Search,
            title: "Local SEO & Digital Marketing",
            description: "Rank #1 on Google Maps and capture high-intent customers actively searching for your services.",
            technologies: "Google Business Profile, SEO, Content Marketing"
        }
    ]
    const process = [
        {
            phase: "Discovery & Strategy",
            duration: "Week 1-2",
            description: "Understanding your business, goals, and challenges through research and analysis.",
            deliverables: ["Project brief", "Competitive analysis", "Strategy document", "Project roadmap"]
        },
        {
            phase: "Design & Planning",
            duration: "Week 2-4",
            description: "Creating wireframes and high-fidelity designs that bring your vision to life.",
            deliverables: ["Wireframes", "Design mockups", "Style guide", "Interactive prototypes"]
        },
        {
            phase: "Development",
            duration: "Week 4-8",
            description: "Building your solution with clean, efficient code and regular progress updates.",
            deliverables: ["Functional website", "CMS setup", "Integrations", "Quality assurance"]
        },
        {
            phase: "Launch & Growth",
            duration: "Week 8+",
            description: "Deploying your project and providing ongoing optimization and support.",
            deliverables: ["Production deployment", "Analytics setup", "Training", "Ongoing support"]
        }
    ]

    return (
        <div className="min-h-screen bg-background text-foreground dark">
            {/* Navigation */}
            <Navigation variant="page" />

            {/* Hero Section with 3D Background */}
            <section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
                {/* Tech-themed 3D Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30">
                        <ThreeCharacter />
                    </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-accent/30 morphing-shape blur-3xl floating-element z-30"></div>
                <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/30 morphing-shape blur-3xl floating-element z-30" style={{ animationDelay: "3s" }}></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="text-center animate-fade-in">
                        <Badge variant="secondary" className="mb-6 mt-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
                            About Nexin Agency
                        </Badge>
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
                            WHERE <span className="text-gradient-primary">INNOVATION</span><br />
                            MEETS EXECUTION
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                            We're not your typical web development agency. We're digital strategists, technology innovators,
                            and growth partners who help ambitious businesses transform their online presence and dominate
                            their markets through intelligent design, powerful automation, and data-driven SEO strategies.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-sm text-white/70">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge variant="outline" className="mb-4">Our Story</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Built on a Foundation of <br /><span className="text-gradient-primary">Innovation and Results</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Nexin Agency was founded in 2020 with a simple yet powerful mission: to help businesses
                                leverage technology to grow faster, work smarter, and compete more effectively in an
                                increasingly digital world.
                            </p>

                            <p>
                                Too many talented entrepreneurs and business owners were being held back by outdated websites,
                                inefficient processes, and invisibility on search engines. Traditional web agencies were either
                                too expensive, too slow, or focused solely on aesthetics without delivering measurable business results.
                            </p>

                            <p>
                                We knew there had to be a better way. By combining modern web development practices, user-centered
                                design principles, intelligent automation, and proven SEO strategies, we created a comprehensive
                                approach that addresses the complete digital needs of growing businesses.
                            </p>

                            <p>
                                Unlike agencies that specialize in just one area, we built expertise across the entire digital spectrum.
                                This holistic approach means our clients get cohesive solutions where their website, automation systems,
                                and marketing strategies work together seamlessly – creating compounding results that single-service
                                providers simply can't match.
                            </p>

                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                                <p className="text-foreground font-medium">
                                    Today, Nexin Agency is proud to be a trusted digital partner for businesses across diverse industries.
                                    We've built hundreds of websites, automated thousands of hours of manual work, and helped countless
                                    businesses achieve first-page Google rankings. But we're most proud of the long-term relationships
                                    we've built – clients who trust us as their go-to technology and marketing partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Values */}
            <section className="py-20 bg-muted/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Our Foundation</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Mission, Vision & <span className="text-gradient-primary">Core Values</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card className="p-8 hover-lift">
                            <Rocket className="w-12 h-12 text-accent mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Empowering businesses to thrive in the digital age through innovative technology,
                                intelligent automation, and strategic digital marketing. We exist to help ambitious
                                businesses leverage technology as a growth catalyst.
                            </p>
                        </Card>

                        <Card className="p-8 hover-lift">
                            <Award className="w-12 h-12 text-accent mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the leading digital agency recognized for transforming businesses through
                                cutting-edge technology and exceptional results. We envision a future where every
                                business has access to enterprise-grade digital solutions that drive growth.
                            </p>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <Card key={index} className="p-6 hover-lift hover:shadow-xl transition-all duration-300">
                                    <Icon className="w-10 h-10 text-accent mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Our Services</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Comprehensive Digital Solutions That <br /><span className="text-gradient-primary">Drive Growth</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            From your initial online presence to advanced automation and market domination,
                            we're your partner at every stage of digital growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <Card key={index} className="p-8 hover-lift hover:shadow-2xl transition-all duration-500 group">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="text-sm text-primary font-medium">
                                                Technologies: {service.technologies}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="group bg-accent text-black hover:bg-accent/90"
                            asChild
                        >
                            <Link to="/services" target="_blank">
                                View All Services
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-muted/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">How We Work</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Proven <span className="text-gradient-primary">Process</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A battle-tested methodology that ensures every project delivers maximum results with minimal hassle
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((phase, index) => (
                            <Card key={index} className="p-6 hover-lift relative overflow-hidden">
                                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                                <p className="text-sm text-primary mb-4">{phase.duration}</p>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {phase.description}
                                </p>
                                <div className="space-y-2">
                                    {phase.deliverables.map((deliverable, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span>{deliverable}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>



            {/* Why Choose Us Section */}
            <section className="py-20 bg-muted/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Why Nexin</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why Growing Businesses <br /> <span className="text-gradient-primary">Choose Us</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="p-6 hover-lift">
                            <Zap className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">Full-Stack Expertise</h3>
                            <p className="text-muted-foreground text-sm">
                                Web development, design, automation, and SEO under one roof. No more juggling multiple vendors.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Bot className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">AI-First Approach</h3>
                            <p className="text-muted-foreground text-sm">
                                Leverage cutting-edge AI automation that gives you capabilities traditional agencies can't provide.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Target className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">Obsessed with Results</h3>
                            <p className="text-muted-foreground text-sm">
                                Every project tracked with concrete metrics: leads generated, conversion improvements, revenue growth.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Heart className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
                            <p className="text-muted-foreground text-sm">
                                Always know what we're working on and how it's performing. No jargon, no surprises.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">Battle-Tested Process</h3>
                            <p className="text-muted-foreground text-sm">
                                Refined through hundreds of successful projects. We know what works and how to deliver.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Award className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold mb-3">90-Day Guarantee</h3>
                            <p className="text-muted-foreground text-sm">
                                If you don't see measurable improvement within 90 days, we'll work for free until you do.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className=" py-20 relative overflow-hidden">
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

            {/* Footer */}
            <Footer />
        </div>
    )
}