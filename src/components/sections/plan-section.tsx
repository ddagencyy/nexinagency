import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

export function ServicePackages() {
  const packages = [
    {
      name: "Digital Starter",
      badge: "Starter",
      price: "$4,997",
      monthly: "+ $497/month",
      description: "Perfect for new businesses",
      features: [
        "Professional 5-page website",
        "AI chatbot integration",
        "3 months local SEO",
        "Google Business setup",
        "Monthly reports",
      ],
    },
    {
      name: "Growth Accelerator",
      badge: "Growth",
      popular: true,
      price: "$9,997",
      monthly: "+ $997/month",
      description: "For growing businesses",
      features: [
        "Everything in Starter, plus:",
        "Custom 10+ page website",
        "Advanced UI/UX design",
        "3 workflow automations",
        "6 months SEO campaign",
        "Priority support",
      ],
    },
    {
      name: "Enterprise Dominance",
      badge: "Enterprise",
      price: "$24,997",
      monthly: "+ $2,497/month",
      description: "For market leaders",
      features: [
        "Everything in Growth, plus:",
        "Custom web application",
        "Full AI automation suite",
        "12-month SEO domination",
        "Dedicated account manager",
        "24/7 priority support",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Popular Packages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Save More with{" "}
            <span className="text-gradient-primary">
              Complete Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combine services and save up to 30%. Everything you need in one package.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 relative overflow-hidden hover-lift ${
                pkg.popular ? "border-2 border-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                  POPULAR
                </div>
              )}

              <Badge
                variant="secondary"
                className={`mb-4 ${
                  pkg.popular ? "bg-primary text-white" : ""
                }`}
              >
                {pkg.badge}
              </Badge>

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {pkg.description}
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                <div className="text-sm text-muted-foreground">
                  {pkg.monthly}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-accent text-black hover:bg-accent/90" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
