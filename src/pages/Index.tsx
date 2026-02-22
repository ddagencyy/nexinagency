import { HeroSection } from "@/components/sections/hero-section"
import { QuoteSection } from "@/components/sections/quote-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProjectFormSection } from "@/components/sections/project-form-section"
import { WhyChooseNexin } from "@/components/sections/WhyChooseNexin-section"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { Footer } from "@/components/sections/footer"


import { useScrollAnimations } from "@/hooks/useScrollAnimations"

const Index = () => {
  const containerRef = useScrollAnimations();

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      {/* Global 3D Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Enhanced 3D Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 morphing-shape blur-3xl floating-element"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/20 morphing-shape blur-3xl floating-element" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 morphing-shape blur-2xl floating-element" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-primary/15 morphing-shape blur-3xl floating-element" style={{ animationDelay: "5s" }}></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-accent/15 morphing-shape blur-2xl floating-element" style={{ animationDelay: "7s" }}></div>
      </div>


      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Quote Section */}
        <QuoteSection />
        

        {/* About Section */}
        <div data-animate>
          <AboutSection />
        </div>
        
        {/* Services Section */}
        <div data-animate>
          <ServicesSection />
        </div>

        {/* Why Choose Us Section */}
        
          <WhyChooseNexin />
        

        
        {/* Portfolio Section */}
        <div data-animate>
          <PortfolioSection />
        </div>
        
        {/* Testimonials Section */}
        <div data-animate>
          <TestimonialsSection />
        </div>
        
        {/* process Section */}
        <div data-animate>
          <ProcessSection />
        </div>

        {/* FAQS Section */}
        <div data-animate>
          <FAQSection />
        </div>

        {/* Project Form Section */}
        {/* <div data-animate>
          <ProjectFormSection />
        </div> */}
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Index