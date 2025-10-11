import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WordChangeAnimation } from "@/components/word-change-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized 3D Spline Background */}
      <div className="spline-3d animate-bg-shift">
        <iframe 
          src='https://my.spline.design/tvatimedoor-VR2Sm8agyuuoln8bMCgbHByZ/' 
          width='100%' 
          height='100%'
          className="animate-pulse-3d"
          loading="lazy"
          style={{ willChange: 'transform' }}
        />
      </div>
      
      {/* Gradient Overlay for Content Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/60 z-10"></div>
      
      {/* Enhanced 3D Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/30 morphing-shape blur-3xl floating-element z-30"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/30 morphing-shape blur-3xl floating-element z-30" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 morphing-shape blur-2xl floating-element z-30" style={{ animationDelay: "6s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-primary/20 morphing-shape blur-3xl floating-element z-30" style={{ animationDelay: "9s" }}></div>
      
      {/* Unified Navigation */}
      <Navigation variant="hero" />
      
      {/* Main Content with Better Spacing */}
      <div className="relative z-40 text-center px-4 md:px-6 max-w-7xl mx-auto mt-12 md:mt-24">
        <div className="overflow-hidden mb-6 md:mb-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-tight">
            TRANSFORMING IDEAS INTO{" "}
            <WordChangeAnimation 
              words={["REALITY", "SUCCESS", "INNOVATION", "GROWTH"]}
              className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
              interval={3000}
            />
          </h1>
        </div>
        
        <div className="overflow-hidden mb-8 md:mb-12">
          <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in font-mono" style={{ animationDelay: "0.5s" }}>
            WE CREATE HIGH-CONVERTING WEBSITES, APPS & DIGITAL EXPERIENCES THAT 
            GENERATE LEADS, BOOST SALES & SCALE YOUR BUSINESS TO NEW HEIGHTS.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: "1s" }}>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-white text-primary hover:bg-white/95 hover:shadow-xl hover:shadow-white/25 hover:scale-105 text-sm md:text-base px-5 md:px-6 py-2 md:py-3 transition-all duration-300 group font-mono tracking-wide relative overflow-hidden"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">START PROJECT</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/15 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 hover:scale-105 text-sm md:text-base px-5 md:px-6 py-2 md:py-3 group font-mono tracking-wide transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
            <Play className="mr-2 w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            <span className="relative z-10">WATCH REEL</span>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}