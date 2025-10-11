import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Rocket, 
  Sparkles, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react"
import { toast } from "sonner"

export function ProjectFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
    goals: [] as string[]
  })

  const services = [
    "UI/UX Design",
    "Web Development", 
    "Mobile App",
    "E-commerce",
    "Branding",
    "SEO & Marketing"
  ]

  const goals = [
    "Increase Sales",
    "Generate Leads", 
    "Build Brand Awareness",
    "Improve User Experience",
    "Launch New Product",
    "Modernize Existing Platform"
  ]

  const budgetRanges = [
    "$1K - $3K",
    "$3K - $5K", 
    "$5K - $10K",
    "$10K+"
  ]

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append("access_key", "358e1cc8-fb91-4b19-bf9e-f51021f17d6f") // Get from https://web3forms.com
      formDataToSend.append("subject", "New Project Inquiry")
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("company", formData.company)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("project_type", formData.projectType)
      formDataToSend.append("budget", formData.budget)
      formDataToSend.append("timeline", formData.timeline)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("services", formData.services.join(', '))
      formDataToSend.append("goals", formData.goals.join(', '))
      formDataToSend.append("message", `
Project Inquiry Details:
------------------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Services Needed: ${formData.services.join(', ')}
Goals: ${formData.goals.join(', ')}

Description:
${formData.description}
      `)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Project inquiry submitted! We'll contact you within 24 hours.")
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          services: [],
          goals: []
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 morphing-shape blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/20 morphing-shape blur-3xl floating-element" style={{ animationDelay: "5s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/15 morphing-shape blur-2xl floating-element" style={{ animationDelay: "8s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/25 morphing-shape blur-xl floating-element" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            <Rocket className="w-4 h-4 mr-2" />
            Get Your Project Started
          </Badge>
          
          <h2 className="font-display text-display-lg font-bold mb-6">
            Ready to Transform Your
            <span className="text-gradient-primary block">Business Vision?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and get a personalized proposal with timeline and investment details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
            <CardHeader className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl animate-fade-in" style={{ animationDelay: "0.6s" }}>Project Details</CardTitle>
                  <CardDescription className="animate-fade-in" style={{ animationDelay: "0.8s" }}>Let's bring your vision to life</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="animate-fade-in" style={{ animationDelay: "1s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Services Needed */}
                <div className="space-y-3">
                  <Label>Services Needed *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-sm font-medium">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Goals */}
                <div className="space-y-3">
                  <Label>Project Goals</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {goals.map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox 
                          id={goal}
                          checked={formData.goals.includes(goal)}
                          onCheckedChange={() => handleGoalToggle(goal)}
                        />
                        <Label htmlFor={goal} className="text-sm font-medium">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Timeline</Label>
                    <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush Job)</SelectItem>
                        <SelectItem value="1-2months">1-2 Months</SelectItem>
                        <SelectItem value="3-4months">3-4 Months</SelectItem>
                        <SelectItem value="6months">6+ Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea 
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "1.2s" }}>
                  Get My Custom Proposal
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-primary text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Why Choose NEXIN?</h3>
                    <p className="text-white/80">Your success is our priority</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Custom strategy for your industry",
                    "Proven track record of ROI",
                    "24/7 support and maintenance",
                    "Advanced analytics and reporting",
                    "Mobile-first responsive design",
                    "SEO optimized from launch"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Fast Track Process</h3>
                    <p className="text-muted-foreground">Get started in 48 hours</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Form", desc: "Tell us about your project" },
                    { step: "2", title: "Strategy Call", desc: "30-min consultation call" },
                    { step: "3", title: "Custom Proposal", desc: "Detailed plan & timeline" },
                    { step: "4", title: "Project Kickoff", desc: "Start building your vision" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-6 bg-card/50 rounded-xl border">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "NEXIN transformed our business with a website that <strong>increased our leads by 300%</strong> in just 3 months!"
              </p>
              <p className="text-xs text-muted-foreground mt-2">- Sarah Johnson, CEO TechFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}