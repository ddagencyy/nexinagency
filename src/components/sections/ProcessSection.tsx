import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business, goals, target audience, and competitors. Through in-depth research and analysis, we develop a customized strategy designed to achieve your specific objectives.",
      points: [
        "Kick-off meeting & goal setting",
        "Market & competitor analysis",
        "Target audience research",
        "Technical audit (if existing site)",
        "Strategy document creation",
      ],
    },
    {
      title: "Design & Development",
      description:
        "Our designers and developers work together to bring your vision to life. You'll see regular updates and have opportunities to provide feedback throughout the process, ensuring the final product exceeds expectations.",
      points: [
        "Wireframes & mockups",
        "Design approval process",
        "Development in staging environment",
        "Quality assurance testing",
        "Client review & revisions",
      ],
    },
    {
      title: "Launch & Optimization",
      description:
        "We don't just launch and disappear. Every project includes post-launch optimization to ensure everything works perfectly. We monitor performance, fix any issues, and make improvements based on real user data.",
      points: [
        "Final testing & QA",
        "SEO optimization",
        "Performance optimization",
        "Training & documentation",
        "Go-live celebration!",
      ],
    },
    {
      title: "Growth & Support",
      description:
        "Your success is our success. We provide ongoing support, monitoring, and optimization to ensure you continue getting results. Whether it's monthly SEO work, content updates, or technical support, we're here for you.",
      points: [
        "Ongoing maintenance",
        "Performance monitoring",
        "Monthly reports",
        "Continuous optimization",
        "Priority support access",
      ],
    },
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-4">Our Process</Badge>
          
          <h2 className="font-display text-display-lg font-bold mb-6">
            4-Step Process for 
            <span className="text-gradient-primary block">Digital Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a battle-tested methodology that ensures every project delivers maximum results with minimal hassle for you.
          </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>

              <ul className="space-y-2">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
