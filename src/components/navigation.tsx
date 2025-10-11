import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { useNavigate, useLocation } from "react-router-dom"
import nexonLogo from "@/assets/nexon-logo-new.png"

interface NavigationProps {
  variant?: "hero" | "page"
}

export function Navigation({ variant = "hero" }: NavigationProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Internal navigation within current page
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/')
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // External page navigation
      navigate(href)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }
  }

  const navItems = [
    { href: "/projects", label: "PORTFOLIO" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact-form", label: "GET QUOTE" }
  ]

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 py-2 px-4 w-full max-w-2xl">
      <div className="w-full">
        <div className={`glass rounded-lg px-4 py-2 flex items-center justify-between backdrop-blur-md transition-all duration-300 ${
          isScrolled || variant === "page" 
            ? "bg-background/20 border-border/20" 
            : "bg-background/10 border-border/10"
        }`}>
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center font-mono text-lg font-semibold text-white tracking-wide hover:text-purple-400 transition-colors"
          >
            <img src={nexonLogo} alt="NEXIN" className="h-8 w-auto" />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-white/70">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="relative px-4 py-3 rounded-lg transition-all duration-500 hover:text-purple-400 hover:scale-105 group"
              >
                <span className="relative z-10 font-semibold transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-300 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="hidden md:flex border-purple-400/30 text-white hover:text-purple-400 hover:border-purple-400 font-mono text-xs px-4 py-2 h-9 transition-all duration-500 hover:scale-105 group"
              onClick={() => handleNavigation('#contact-form')}
            >
              <span className="relative z-10 font-semibold transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-300 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">Become a Client</span>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}