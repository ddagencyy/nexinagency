import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { href: "/projects", label: "PORTFOLIO" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact-form", label: "GET QUOTE" }
  ]

  const handleNavClick = (href: string) => {
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
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full bg-background/95 backdrop-blur-lg border-l border-border/20"
      >
        <div className="flex flex-col h-full pt-16">
          <div className="flex-1 space-y-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left font-mono text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 py-4 relative overflow-hidden group card-click hover-glow-primary"
              >
                <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="border-t border-border/20 pt-8">
          <Button 
            className="w-full font-mono text-lg py-6 relative overflow-hidden group card-click"
            onClick={() => handleNavClick('#contact-form')}
          >
              <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">BECOME A CLIENT</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}