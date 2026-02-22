import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Target } from "lucide-react"

export function AwardsSection() {
  const awards = [
    {
      icon: Award,
      title: "Webby Awards",
      year: "2024",
      category: "Best UI Design",
      description: "Best User Interface Design for E-commerce Platform"
    },
    {
      icon: Trophy,
      title: "Awwwards",
      year: "2024",
      category: "Site of the Day",
      description: "Featured portfolio website with innovative interactions"
    },
    {
      icon: Star,
      title: "CSS Design Awards",
      year: "2023",
      category: "Innovation Award",
      description: "Revolutionary approach to mobile-first design"
    },
    {
      icon: Target,
      title: "UX Design Awards",
      year: "2023",
      category: "Best UX Strategy",
      description: "Outstanding user experience design for fintech app"
    }
  ]

  const recognitions = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Wired", logo: "W" },
    { name: "Fast Company", logo: "FC" },
    { name: "Design Milk", logo: "DM" },
    { name: "The Verge", logo: "TV" },
    { name: "Smashing Mag", logo: "SM" }
  ]

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div data-parallax className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-primary/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Recognition</Badge>
          
          <h2 className="font-display text-display-lg font-bold mb-6">
            Awards &
            <span className="text-gradient-primary block">Recognition</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our work has been recognized by leading industry publications 
            and awarded at prestigious design competitions worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div data-animate-cards className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              data-card
              className="text-center group hover-lift transition-all duration-300 hover:scale-110"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <award.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {award.title}
              </h3>
              
              <Badge variant="outline" className="mb-3">
                {award.year} - {award.category}
              </Badge>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="text-center">
          <h3 className="font-display text-2xl font-semibold mb-8">
            As Featured In
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8" data-animate-cards>
            {recognitions.map((publication, index) => (
              <div 
                key={index}
                data-card
                className="flex items-center justify-center w-24 h-16 bg-card rounded-lg hover:bg-muted/50 transition-colors duration-300 group cursor-pointer hover:scale-110"
              >
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {publication.logo}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Our innovative approach to digital design has caught the attention of major 
            tech publications and design communities around the world.
          </p>
        </div>

        /* Stats Bar */
        <div data-animate-cards className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-card className="group">
            <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">25+</div>
            <div className="text-muted-foreground">Industry Awards</div>
          </div>
          <div data-card className="group">
            <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-muted-foreground">Features</div>
          </div>
          <div data-card className="group">
            <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-muted-foreground">Speaking Events</div>
          </div>
          <div data-card className="group">
            <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">3x</div>
            <div className="text-muted-foreground">Agency of the Year</div>
          </div>
        </div>
      </div>
    </section>
  )
}