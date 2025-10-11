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
      description: "Transform user experiences into conversion machines with data-driven design that sells.",
      features: ["Conversion Optimization", "User Psychology", "A/B Testing", "Revenue-Focused Design"],
      gradient: "from-purple-500 to-pink-500",
      roi: "Average 150% conversion increase"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "High-performance mobile apps that generate revenue and engage users daily.",
      features: ["Native iOS/Android", "React Native", "App Store Launch", "Growth Analytics"],
      gradient: "from-blue-500 to-cyan-500",
      roi: "Apps averaging 4.8+ star ratings"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Lightning-fast websites that rank #1 on Google and convert visitors into customers.",
      features: ["SEO Optimized", "Page Speed 95+", "Lead Generation", "Analytics Setup"],
      gradient: "from-green-500 to-emerald-500",
      roi: "Average 200% organic traffic boost"
    },
    {
      icon: Zap,
      title: "Brand Identity",
      description: "Memorable brands that command premium pricing and customer loyalty.",
      features: ["Strategic Positioning", "Visual Identity", "Brand Guidelines", "Market Research"],
      gradient: "from-orange-500 to-red-500",
      roi: "Brands seeing 40% price premium"
    },
    {
      icon: Film,
      title: "Digital Marketing",
      description: "Data-driven campaigns that generate qualified leads and maximize ROI.",
      features: ["PPC Advertising", "Social Media", "Content Strategy", "Conversion Tracking"],
      gradient: "from-violet-500 to-purple-500",
      roi: "Average 300% ROAS achieved"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Complete online stores that sell 24/7 and scale your revenue automatically.",
      features: ["Shopify/WooCommerce", "Payment Processing", "Inventory Automation", "Sales Optimization"],
      gradient: "from-teal-500 to-blue-500",
      roi: "Average 180% revenue increase"
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
            Services That Actually
            <span className="text-gradient-primary block">Grow Your Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We don't just build pretty websites. We create digital assets that generate leads, 
            increase sales, and deliver measurable ROI for your business.
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
                
                <div 
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="flex items-center text-primary font-medium group-hover:text-accent transition-colors cursor-pointer"
                >
                  <span className="text-sm">Get Quote</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden">
            {/* 3D Background Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 morphing-shape blur-xl floating-element"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 morphing-shape blur-2xl floating-element" style={{ animationDelay: "3s" }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to 10X Your Revenue?</h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Don't let competitors steal your customers. Get a free consultation and discover 
                how our proven strategies can transform your business.
              </p>
              <Badge 
                variant="outline" 
                className="text-base px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Get Free Strategy Session
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}