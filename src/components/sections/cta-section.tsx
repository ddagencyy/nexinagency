import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Parallax */}
      <div data-parallax className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-3d"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-3d" style={{ animationDelay: "3s" }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Start?
        </Badge>
        
        <h2 className="font-display text-display-lg md:text-hero font-bold text-white mb-6">
          Let's Create Something
          <span className="block text-accent">Extraordinary Together</span>
        </h2>
        
        <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          Ready to transform your digital presence? Our team of creative experts 
          is here to bring your vision to life with award-winning design and 
          cutting-edge technology.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 hover:shadow-glow transition-all duration-300 group"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 group"
          >
            View Our Process
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Free Strategy Session</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>No Long-term Contracts</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}