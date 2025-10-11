import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: "NEXIN transformed our entire digital presence. Their attention to detail and innovative approach resulted in a 150% increase in user engagement. Simply outstanding work.",
      rating: 5,
      project: "SaaS Platform Redesign"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Luxe Fashion",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "Working with NEXIN was a game-changer. They didn't just deliver a website; they created an experience that perfectly captures our brand essence. Our sales increased by 200%.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Head of Design",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The level of creativity and technical expertise at NEXIN is unmatched. They took our complex requirements and turned them into an elegant, user-friendly solution.",
      rating: 5,
      project: "Mobile App Design"
    },
    {
      id: 4,
      name: "David Park",
      role: "CMO",
      company: "FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "NEXIN delivered beyond our expectations. Their strategic approach to UX design helped us achieve a 40% reduction in customer support tickets while improving user satisfaction.",
      rating: 5,
      project: "Fintech Dashboard"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "From concept to launch, NEXIN was an incredible partner. Their iterative approach and constant communication made the entire process smooth and enjoyable.",
      rating: 5,
      project: "MVP Development"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Creative Director",
      company: "Brand Studio",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      content: "NEXIN doesn't just follow trends; they set them. Their innovative design solutions helped us win three industry awards this year. Truly exceptional work.",
      rating: 5,
      project: "Brand Identity System"
    }
  ]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div data-parallax className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Client Love</Badge>
          
          <h2 className="font-display text-display-lg font-bold mb-6">
            What Our Clients 
            <span className="text-gradient-primary block">Say About Us</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and 
            innovative companies say about working with NEXIN.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div data-animate-cards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              data-card 
              className="hover-lift hover:shadow-xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-8 text-base">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.project}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div data-animate-cards className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div data-card className="group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div data-card className="group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div data-card className="group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div data-card className="group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Repeat Business</div>
          </div>
        </div>
      </div>
    </section>
  )
}