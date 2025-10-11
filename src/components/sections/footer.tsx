import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Dribbble,
  Send
} from "lucide-react"
import { toast } from "sonner"
import nexonLogo from "@/assets/nexon-logo-new.png"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)
    
    try {
      const formData = new FormData()
      formData.append("access_key", "358e1cc8-fb91-4b19-bf9e-f51021f17d6f") // Get from https://web3forms.com
      formData.append("subject", "Newsletter Subscription")
      formData.append("email", email)
      formData.append("message", `New newsletter subscription from: ${email}`)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Successfully subscribed to our newsletter!")
        setEmail("")
      } else {
        toast.error("Failed to subscribe. Please try again.")
      }
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error("Failed to subscribe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Section 1: Logo, Info & Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={nexonLogo} alt="NEXIN" className="h-10 w-auto" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm">
              Digital innovation that transforms visions into reality.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Section 2: Company Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Info@nexin.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Section 3: Email Subscription */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-white">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground flex-1"
                required
              />
              <Button 
                type="submit"
                size="sm"
                disabled={isLoading}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NEXIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}