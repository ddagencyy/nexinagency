import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Footer } from "@/components/sections/footer"
import { ThreeCharacter } from "@/components/three-character"
import { Navigation } from "@/components/navigation"
import projectRestaurant from "@/assets/project-restaurant.png"
import projectEstate from "@/assets/project-estate.png"
import projectDental from "@/assets/project-dental.png"
import projectAsos from "@/assets/project-asos.png"
import projectAnthropologie from "@/assets/project-anthropologie.png"

export default function AllProjects() {
  const navigate = useNavigate()
  
  const projects = [
    {
      id: 1,
      title: "Your Taste Restaurant",
      category: "Restaurant Website",
      description: "Modern restaurant website with elegant design, showcasing menu items, chef specialties, and enabling online table reservations with real-time availability.",
      image: projectRestaurant,
      tags: ["UI/UX Design", "Restaurant", "Booking", "Responsive"],
      stats: { conversion: "+180%", performance: "98/100", satisfaction: "4.9/5" },
      year: "2024",
      client: "Your Taste Restaurant",
      duration: "2 months",
      url: "https://ddagencyy.github.io/Restaurent-site/"
    },
    {
      id: 2,
      title: "eStateX Real Estate",
      category: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, advanced search filters, virtual tours, and seamless inquiry system for property seekers.",
      image: projectEstate,
      tags: ["Web Design", "Real Estate", "Property Search", "Interactive"],
      stats: { listings: "500+", users: "10k+", satisfaction: "4.8/5" },
      year: "2024",
      client: "eStateX Agency",
      duration: "4 months",
      url: "https://ahmedelsewailky.github.io/estateX/"
    },
    {
      id: 3,
      title: "Dento Dental Clinic",
      category: "Healthcare Website",
      description: "Professional dental clinic website with appointment booking system, service showcases, patient information, and dental care tips.",
      image: projectDental,
      tags: ["Healthcare", "Booking", "Medical", "Responsive"],
      stats: { appointments: "+250%", performance: "97/100", retention: "90%" },
      year: "2024",
      client: "Dento Dental Clinic",
      duration: "3 months",
      url: "https://ddagencyy.github.io/dental-project/"
    },
    {
      id: 4,
      title: "ASOS Fashion Store",
      category: "E-commerce Platform",
      description: "Large-scale fashion e-commerce platform with extensive product catalog, size guides, customer reviews, and seamless shopping experience across devices.",
      image: projectAsos,
      tags: ["E-commerce", "Fashion", "Retail", "Mobile-First"],
      stats: { products: "50k+", sales: "+300%", rating: "4.7/5" },
      year: "2024",
      client: "ASOS",
      duration: "6 months",
      url: "https://www.asos.com/"
    },
    {
      id: 5,
      title: "Anthropologie Lifestyle",
      category: "Lifestyle E-commerce",
      description: "Premium lifestyle and home decor e-commerce site with curated collections, immersive product photography, and personalized shopping recommendations.",
      image: projectAnthropologie,
      tags: ["E-commerce", "Lifestyle", "Home Decor", "Premium"],
      stats: { collections: "200+", engagement: "8min avg", conversion: "+160%" },
      year: "2024",
      client: "Anthropologie",
      duration: "5 months",
      url: "https://www.anthropologie.com/"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Unified Navigation */}
      <Navigation variant="page" />

      {/* Enhanced Header Section with 3D Tech Background */}
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
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 morphing-shape blur-2xl floating-element z-30" style={{ animationDelay: "6s" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
              Portfolio
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
              ALL <span className="text-gradient-primary">PROJECTS</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our complete collection of award-winning projects that have transformed 
              businesses and delighted millions of users worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-md mx-auto mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">80+</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/70">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-white/70">Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover-lift hover:shadow-2xl transition-all duration-700 overflow-hidden border-0 hover:scale-105 animate-fade-in relative cursor-pointer hover-glow-primary border-glow"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  background: `linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)`
                }}
                onClick={() => window.open(project.url, '_blank')}
                id={`card-${project.id}`}
              >
                  <div className="relative overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x blur-sm"></div>
                    <div className="absolute inset-[2px] bg-background rounded-lg"></div>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 relative z-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Project Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.client}
                    </div>
                    <div>{project.duration}</div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                    {Object.entries(project.stats).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="animate-fade-in">
        <TestimonialsSection />
      </div>


      {/* Enhanced Footer */}
      <Footer />
    </div>
  )
}