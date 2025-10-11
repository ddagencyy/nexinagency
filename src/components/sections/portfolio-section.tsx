import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import projectRestaurant from "@/assets/project-restaurant.png"
import projectEstate from "@/assets/project-estate.png"
import projectDental from "@/assets/project-dental.png"
import projectAsos from "@/assets/project-asos.png"
import projectAnthropologie from "@/assets/project-anthropologie.png"

export function PortfolioSection() {
  const navigate = useNavigate()
  const projects = [
    {
      id: 1,
      title: "Your Taste Restaurant",
      category: "Restaurant Website",
      description: "Modern restaurant website with elegant design, showcasing menu items and enabling table reservations.",
      image: projectRestaurant,
      tags: ["UI/UX Design", "Restaurant", "Booking"],
      stats: { conversion: "+180%", performance: "98/100", satisfaction: "4.9/5" },
      url: "https://ddagencyy.github.io/Restaurent-site/"
    },
    {
      id: 2,
      title: "eStateX Real Estate",
      category: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, advanced search filters, and virtual tours.",
      image: projectEstate,
      tags: ["Web Design", "Real Estate", "Property Search"],
      stats: { listings: "500+", users: "10k+", satisfaction: "4.8/5" },
      url: "https://ahmedelsewailky.github.io/estateX/"
    },
    {
      id: 3,
      title: "Dento Dental Clinic",
      category: "Healthcare Website",
      description: "Professional dental clinic website with appointment booking, service showcases, and patient information.",
      image: projectDental,
      tags: ["Healthcare", "Booking", "Medical"],
      stats: { appointments: "+250%", performance: "97/100", retention: "90%" },
      url: "https://ddagencyy.github.io/dental-project/"
    },
    {
      id: 4,
      title: "ASOS Fashion Store",
      category: "E-commerce Platform",
      description: "Large-scale fashion e-commerce platform with extensive product catalog and seamless shopping experience.",
      image: projectAsos,
      tags: ["E-commerce", "Fashion", "Retail"],
      stats: { products: "50k+", sales: "+300%", rating: "4.7/5" },
      url: "https://www.asos.com/"
    },
    // {
    //   id: 5,
    //   title: "Anthropologie Lifestyle",
    //   category: "Lifestyle E-commerce",
    //   description: "Premium lifestyle and home decor e-commerce site with curated collections and immersive shopping experience.",
    //   image: projectAnthropologie,
    //   tags: ["E-commerce", "Lifestyle", "Home Decor"],
    //   stats: { collections: "200+", engagement: "8min avg", conversion: "+160%" },
    //   url: "https://www.anthropologie.com/"
    // }
  ]

  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div data-parallax className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Work</Badge>
          
          <h2 className="font-display text-display-lg font-bold mb-6">
            Featured 
            <span className="text-gradient-primary block">Projects</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our award-winning projects that have transformed businesses 
            and delighted millions of users worldwide.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/20">
                  {featuredProject.category}
                </Badge>
                
                <h3 className="font-display text-3xl font-bold mb-4">
                  {featuredProject.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(featuredProject.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-fit group"
                  onClick={() => window.open(featuredProject.url, '_blank')}
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div data-animate-cards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.id} 
              data-card 
              className="group hover-lift hover:shadow-xl transition-all duration-700 overflow-hidden border-0 hover:scale-105 cursor-pointer hover-glow-primary border-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(project.url, '_blank')}
              id={`home-card-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
                <Badge variant="secondary" className="absolute top-4 left-4">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden card-click hover-glow-primary"
            onClick={() => {
              navigate('/projects')
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }, 50)
            }}
          >
            <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
