import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  Palette,
  Smartphone,
  Globe,
  Zap,
  Film,
  ShoppingBag,
  ArrowRight
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create exceptional user experiences with our professional UI/UX design services. We combine aesthetic excellence with user psychology to design interfaces that engage visitors and drive conversions. From wireframing to prototyping, we ensure every pixel serves a purpose.",
      features: ["User testing & optimization", "Wireframes & interactive prototypes", "Mobile app design", "Dashboard & SaaS interfaces", "Design system creation"],
      gradient: "from-purple-500 to-pink-500",
      roi: "Average 150% conversion increase",
      link: "/services/ui-uxdesign"
    },
    {
      icon: Globe,
      title: "Web Development & Design",
      description: "Build a powerful online presence with custom websites that are fast, secure, and optimized for conversions. Our expert web developers create responsive websites using modern technologies like React, Next.js, and Node.js to ensure your site performs flawlessly on every device.",
      features: ["Mobile-responsive design", "Lightning-fast page speeds", "SEO-optimized code", "Secure & scalable architecture", "E-commerce integration", "Custom web applications"],
      gradient: "from-green-500 to-emerald-500",
      roi: "Average 200% organic traffic boost",
      link: "/services/web-development"
    },
    {
      icon: Zap,
      title: "AI Automation & Integration",
      description: "Stop wasting time on repetitive tasks. Our AI automation services help businesses streamline operations, improve customer service, and reduce costs. From AI chatbots that handle customer inquiries 24/7 to workflow automation that eliminates manual data entry, we build intelligent systems that work for you.",
      features: ["Customer service automation", "Email automation", "Lead qualification systems", "Data processing automation", "Workflow optimization", "CRM integration"],
      gradient: "from-orange-500 to-red-500",
      roi: "Brands seeing 40% price premium",
      link: "/services/ai-automation"

    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div data-parallax className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Revenue-Generating Services
          </Badge>

          <h2 className="font-display text-display-lg font-bold mb-6">
            Powerful Digital Solutions That
            <span className="text-gradient-primary block">Grow Your Business</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Whether you need a high-converting website, intelligent automation to save time, or want to dominate local search results, Nexin Agency delivers complete digital solutions tailored to your business goals. Our expertise spans web development, UI/UX design, AI automation, and local SEO—everything you need to succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div data-animate-cards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-card
              className="hover-lift group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 relative overflow-hidden"
            >
              {/* 3D Background Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity morphing-shape floating-element"></div>

              <CardHeader className="space-y-4 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>

                  {/* ROI Badge */}
                  <Badge variant="secondary" className="mt-3 text-xs bg-accent/10 text-accent border-accent/20">
                    {service.roi}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="outline"
                      className="text-xs group-hover:border-primary/50 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Link
                  to={service.link} target="_blank"
                  className="flex items-center text-primary font-medium group-hover:text-accent transition-colors"
                >
                  <span className="text-sm">Get Quote</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>


              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}