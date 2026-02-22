import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { ThreeCharacter } from "@/components/three-character"
// import { useNavigate } from "react-router-dom" // Uncomment when using in your project
import {
  Code,
  Palette,
  Bot,
  Search,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Shield,
  Rocket,
  Sparkles,
  Users,
  Globe,
  Smartphone,
  ShoppingCart,
  BarChart,
  Mail,
  MessageSquare,
  Database,
  Star,
  Award,
  Heart
} from "lucide-react"

export default function ServicesPage() {
  // const navigate = useNavigate() // Uncomment when using in your project

  const mainServices = [
    {
      icon: Code,
      title: "Web Development",
      tagline: "Fast, Secure & Beautiful Websites",
      description: "Build a powerful online presence with custom websites that load fast, look stunning, and convert visitors into customers. Our expert developers use modern technology to create websites that work perfectly on every device.",
      features: [
        "Mobile-responsive design",
        "Lightning-fast page speeds",
        "SEO-optimized from the start",
        "Secure & reliable",
        "Easy content updates",
        "E-commerce ready"
      ],
      stats: { speed: "3x Faster", conversion: "+85%", uptime: "99.9%" },
      pricing: "Starting at $600",
      color: "from-blue-500 to-cyan-500",
      link: "/services/web-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      tagline: "Design That Users Love",
      description: "Create beautiful interfaces that are easy to use and drive results. Our designers combine art and psychology to build digital experiences that keep users engaged and help your business grow.",
      features: [
        "User-centered design",
        "Mobile & desktop layouts",
        "Interactive prototypes",
        "Brand consistency",
        "Conversion-focused",
        "User testing included"
      ],
      stats: { satisfaction: "95%", engagement: "+120%", tasks: "50% Faster" },
      pricing: "Starting at $800",
      color: "from-purple-500 to-pink-500",
      link: "/services/ui-uxdesign"
    },
    {
      icon: Bot,
      title: "AI Automation",
      tagline: "Save 20+ Hours Every Week",
      description: "Stop wasting time on repetitive tasks. Our AI systems handle customer questions 24/7, automate data entry, send follow-up emails, and take care of boring work so your team can focus on growing your business.",
      features: [
        "24/7 AI chatbots",
        "Email automation",
        "Workflow optimization",
        "Lead qualification",
        "Data processing",
        "CRM integration"
      ],
      stats: { timeSaved: "20+ hrs/week", accuracy: "99%", roi: "6 months" },
      pricing: "Starting at $400",
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-automation"
    },
    {
      icon: Search,
      title: "Local SEO",
      tagline: "Rank #1 on Google Maps",
      description: "Get found by customers searching for your services right now. We help local businesses dominate Google search results, rank #1 on Google Maps, and get more phone calls from people ready to buy.",
      features: [
        "Google Maps optimization",
        "Google Business Profile setup",
        "Review management",
        "Local content creation",
        "Directory listings",
        "Monthly reporting"
      ],
      stats: { ranking: "Top 3 in 90 days", leads: "+200%", calls: "+300%" },
      pricing: "Starting at $297/month",
      color: "from-orange-500 to-red-500",
      link: "/services/web-development"
    }
  ]

  const additionalServices = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      description: "Sell online with powerful stores that convert browsers into buyers.",
      price: "$800+"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Beautiful iOS and Android app designs that users love.",
      price: "$1000+"
    },
    {
      icon: Globe,
      title: "Website Redesign",
      description: "Modernize your outdated website and boost conversions.",
      price: "$800+"
    },
    {
      icon: BarChart,
      title: "Analytics & Tracking",
      description: "Understand your visitors and make data-driven decisions.",
      price: "$300/mo"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive sales.",
      price: "$300/mo"
    },
    {
      icon: Database,
      title: "Custom Web Apps",
      description: "Tailored software solutions for your unique business needs.",
      price: "$1500+"
    }
  ]

  const whyChoose = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Most projects completed in 4-8 weeks. We move quickly without sacrificing quality."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "90-day results guarantee. If you're not happy, we'll work until you are."
    },
    {
      icon: Heart,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. You know exactly what you're paying for."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Friendly team that responds fast and actually cares about your success."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "We measure success by your business outcomes, not just deliverables."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "200+ successful projects with 95% client satisfaction rate."
    }
  ]

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We listen to your goals, challenges, and vision. Free 30-minute consultation."
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "We create a detailed plan and show you exactly what we'll build."
    },
    {
      step: "3",
      title: "Design & Development",
      description: "We build your solution with regular updates so you see progress."
    },
    {
      step: "4",
      title: "Launch & Growth",
      description: "We launch your project and keep optimizing to improve results."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <Navigation variant="page" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30">
            <ThreeCharacter />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/30 morphing-shape blur-3xl floating-element z-30"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/30 morphing-shape blur-3xl floating-element z-30" style={{ animationDelay: "3s" }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 mt-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
              Our Services
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
              DIGITAL SOLUTIONS<br />
              THAT <span className="text-gradient-primary">DRIVE GROWTH</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From stunning websites to intelligent automation and top Google rankings,
              we provide everything your business needs to succeed online.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                size="lg"
                className="group bg-accent text-black hover:bg-accent/90"
                asChild
              >
                <Link to="/projects">
                  Explore Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple text-white hover:bg-purple hover:text-purple"
                asChild
              >
                <Link to="/contact">
                  Get Free Quote
                </Link>
              </Button>

            </div>


            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <div>
                <div className="text-3xl font-bold text-white">80+</div>
                <div className="text-sm text-white/70">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3.5x</div>
                <div className="text-sm text-white/70">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to <br /><span className="text-gradient-primary">Dominate Online</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose individual services or combine them for maximum impact. All designed to work together seamlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover-lift hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => window.location.href = service.link} // Or use navigate(service.link) when uncommented
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg mb-6">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Starting at</div>
                        <div className="text-2xl font-bold">{service.pricing}</div>
                      </div>
                      <Button className="group bg-accent ">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">More Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Something <span className="text-gradient-primary">Specific?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer specialized services to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 hover-lift group cursor-pointer">
                  <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-primary font-semibold">{service.price}</div>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see what you need?</p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact" target="-blank">
                Request Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Nexin</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Businesses  <span className="text-gradient-primary">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6 hover-lift">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple 4-Step <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From first call to launch, we make it easy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="p-6 hover-lift text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Work With <span className="text-gradient-primary">All Industries</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Healthcare", "Legal Services", "Home Services", "E-Commerce",
              "SaaS & Tech", "Restaurants", "Real Estate", "Fitness",
              "Education", "Finance", "Automotive", "Professional Services"
            ].map((industry, index) => (
              <Card key={index} className="p-4 text-center hover-lift cursor-pointer">
                <p className="font-medium">{industry}</p>
              </Card>
            ))}
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