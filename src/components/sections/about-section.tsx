import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, TrendingUp } from "lucide-react"
import teamPhoto from "@/assets/team-photo.jpg"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [counts, setCounts] = useState({
    clients: 0,
    awards: 0,
    projects: 0,
    satisfaction: 0
  })

  const stats = [
    { icon: Users, key: "clients", value: 50, label: "Happy Clients", suffix: "+" },
    { icon: Award, key: "awards", value: 15, label: "Awards Won", suffix: "+" },
    { icon: Target, key: "projects", value: 80, label: "Projects Delivered", suffix: "+" },
    { icon: TrendingUp, key: "satisfaction", value: 95, label: "Client Satisfaction", suffix: "%" },
  ]

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)
        
        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts(prev => ({ ...prev, [stat.key]: end }))
            clearInterval(counter)
          } else {
            setCounts(prev => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div data-parallax className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={teamPhoto} 
                alt="Our creative team"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">About NEXIN</Badge>
              
              <h2 className="font-display text-display-lg font-bold mb-6">
                Where Innovation Meets
                <span className="text-gradient-primary block">EXECUTION</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">             
              We're not your typical web development agency. We're digital strategists, technology innovators, 
              and growth partners who help ambitious businesses transform their online presence and dominate 
              their markets through intelligent design, powerful automation, and data-driven SEO strategies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We knew there had to be a better way. By combining modern web development practices, user-centered 
                design principles, intelligent automation, and proven SEO strategies.
              </p>
            </div>
            
            {/* Animated Stats Grid */}
            <div data-animate-cards className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} data-card className="hover-lift hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary animate-counter">
                      {counts[stat.key]}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-purple rounded-[10px] p-2">
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground">Transform bold ideas into extraordinary digital experiences.</p>
              </div>
              <div className="border-2 border-purple rounded-[10px] p-2">
                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-muted-foreground">Shape the future of digital design through innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}