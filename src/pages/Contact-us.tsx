import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { ThreeCharacter } from "@/components/three-character"
import { toast } from "sonner"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Calendar,
    CheckCircle2,
    Sparkles
} from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const formDataToSend = new FormData()
            formDataToSend.append("access_key", "358e1cc8-fb91-4b19-bf9e-f51021f17d6f")
            formDataToSend.append("subject", "New Contact Form Submission - Nexin Agency")
            formDataToSend.append("name", formData.name)
            formDataToSend.append("email", formData.email)
            formDataToSend.append("phone", formData.phone)
            formDataToSend.append("company", formData.company)
            formDataToSend.append("service", formData.service)
            formDataToSend.append("budget", formData.budget)
            formDataToSend.append("message", formData.message)

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            })

            const data = await response.json()

            if (data.success) {
                toast.success("Message sent successfully! We'll respond within 24 hours.")

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    budget: '',
                    message: ''
                })
            } else {
                toast.error("Failed to send message. Please try again.")
            }
        } catch (error) {
            console.error('Form submission error:', error)
            toast.error("Failed to send message. Please try again.")
        }
    }

    const handleChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            value: "muteebcheema243@gmail.com",
            link: "mailto:muteebcheema243@gmail.com"
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+923196433765",
            link: "tel:+923196433765"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Remote & On-site",
            link: null
        },
        {
            icon: Clock,
            title: "Response Time",
            value: "Within 24 hours",
            link: null
        }
    ]

    return (
        <div className="min-h-screen bg-background text-foreground dark">
            {/* Navigation */}
            <Navigation variant="page" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 opacity-20">
                        <ThreeCharacter />
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 morphing-shape blur-3xl floating-element"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 morphing-shape blur-3xl floating-element" style={{ animationDelay: "3s" }}></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center animate-fade-in">
                        <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
                            Get In Touch
                        </Badge>
                        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                            LET'S BUILD SOMETHING <br />
                            <span className="text-gradient-primary"> AMAZING</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Ready to grow your business? Get a free consultation and custom quote in 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <Card className="p-8 hover-lift">
                            <div className="flex items-center gap-3 mb-6">
                                {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div> */}
                                <div>
                                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name *</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => handleChange('company', e.target.value)}
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service Interested In</Label>
                                    <Select onValueChange={(value) => handleChange('service', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web-development">Web Development</SelectItem>
                                            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                            <SelectItem value="ai-automation">AI Automation</SelectItem>
                                            <SelectItem value="local-seo">Local SEO</SelectItem>
                                            <SelectItem value="e-commerce">E-Commerce</SelectItem>
                                            <SelectItem value="mobile-app">Mobile App Design</SelectItem>
                                            <SelectItem value="full-package">Complete Package</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="budget">Budget Range</Label>
                                    <Select onValueChange={(value) => handleChange('budget', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="under-5k">Under $1500</SelectItem>
                                            <SelectItem value="5k-10k">$1500 - $5000</SelectItem>
                                            <SelectItem value="10k-25k">$5000 - $10000</SelectItem>
                                            <SelectItem value="not-sure">Not Sure</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell Us About Your Project *</Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => handleChange('message', e.target.value)}
                                        placeholder="Describe your project, goals, and timeline..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    className="w-full group"
                                    size="lg"
                                >
                                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </Button>
                            </div>
                        </Card>

                        {/* Contact Info & Quick Links */}
                        <div className="space-y-6">

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <Card key={index} className="p-6 hover-lift">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-primary/10 rounded-lg">
                                                    <Icon className="w-6 h-6 text-accent" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                                                    {info.link ? (
                                                        <a
                                                            href={info.link}
                                                            className="text-lg font-semibold hover:text-primary transition-colors"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-lg font-semibold">{info.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })}
                            </div>

                            {/* Quick Book Calendar */}
                            <Card className="p-6 bg-primary/5 border-primary/20">
                                <Calendar className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Prefer to talk? Book a free 30-minute consultation call at a time that works for you.
                                </p>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => window.open('https://calendly.com/muteebcheema243/30min', '_blank')}
                                >
                                    Book Free Call
                                </Button>
                            </Card>

                            {/* What Happens Next */}
                            <Card className="p-6">
                                <h3 className="text-lg font-bold mb-4">What Happens Next?</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">We review your message</p>
                                            <p className="text-sm text-muted-foreground">Usually within 2 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Quick intro call</p>
                                            <p className="text-sm text-muted-foreground">15-30 minutes to understand your needs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Custom proposal</p>
                                            <p className="text-sm text-muted-foreground">Detailed plan and transparent pricing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Let's get started!</p>
                                            <p className="text-sm text-muted-foreground">Most projects start within 1 week</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}