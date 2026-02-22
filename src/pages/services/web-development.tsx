import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Code, Shield, Rocket, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ThreeCharacter } from "@/components/three-character"

export default function WebDevelopmentUK() {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <Navigation variant="page" />

      {/* ================= HERO SECTION ================= */}
      <header className="pt-24 pb-24 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />

        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30">
          <ThreeCharacter />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-6 mt-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
            UK Web Development Company
          </Badge>


          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Professional Web Development
            <span className="block text-gradient-primary">
              Services in the UK
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
            We design and develop high-performance, SEO-friendly websites and
            custom web applications for UK businesses. From London startups to
            established companies across Manchester, Birmingham, and beyond —
            our solutions are built to scale, convert, and perform.
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-10 py-6 text-lg"
            asChild
          >
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start website Project
            </a>
          </Button>

        </div>
      </header>

      {/* ================= INTRO ================= */}
      {/* <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trusted Web Development Experts for UK Businesses
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            hello
          </p>
        </div>
      </section> */}

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            Our Web Development Services
          </h2>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            We offer end-to-end web development solutions tailored for UK
            businesses — from strategy and design to development, launch, and
            long-term support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Website Development",
                price: "From $600",
                desc: "Professionally designed business websites focused on credibility, lead generation, speed optimisation, and search engine visibility.",
              },
              {
                title: "E-Commerce Website Development",
                price: "From $800",
                desc: "Scalable e-commerce platforms with secure payments, product management, optimised checkout flows, and conversion tracking.",
              },
              {
                title: "Custom Web Application Development",
                price: "From $1500",
                desc: "Advanced web applications including dashboards, portals, SaaS platforms, booking systems, and internal tools.",
              },
              {
                title: "Website Redesign & Modernisation",
                price: "From $800",
                desc: "Complete website redesigns focused on UX improvement, performance optimisation, mobile responsiveness, and technical SEO.",
              },
              {
                title: "Landing Page Development",
                price: "$150 per page",
                desc: "High-converting landing pages for paid advertising, lead funnels, product launches, and marketing campaigns.",
              },
              {
                title: "SEO-Ready Website Builds",
                price: "Included",
                desc: "All websites are built with clean structure, fast load times, schema-ready markup, and on-page SEO best practices.",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="hover-lift hover:shadow-xl transition-all duration-500"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    {service.desc}
                  </p>
                  <div className="font-bold text-primary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            Why UK Businesses Choose Us
          </h2>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            We are more than just developers. We act as a long-term digital
            partner, delivering reliable, secure, and performance-driven web
            solutions for UK companies.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Code,
                title: "Clean & Scalable Code",
                desc: "We follow industry-standard coding practices to ensure maintainability, scalability, and long-term stability.",
              },
              {
                icon: Rocket,
                title: "Performance-First Development",
                desc: "Fast loading times, optimised assets, and Core Web Vitals-focused builds for better rankings and conversions.",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                desc: "SSL, secure authentication, data protection, and best-practice security built into every project.",
              },
              {
                icon: Globe,
                title: "UK Market Expertise",
                desc: "We understand UK customers, industries, compliance expectations, and local search behaviour.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <item.icon className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Proven Web Development Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Discovery & Business Analysis",
              "UX/UI Design & Prototyping",
              "Custom Development",
              "Testing & Quality Assurance",
              "Launch & Deployment",
              "Ongoing Support & Optimisation",
            ].map((step, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Step {i + 1}: {step}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Each stage is carefully planned and executed to ensure
                      quality, performance, and alignment with your business
                      goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-black " />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build a High-Performing Website
            <span className="block text-gradient-primary">
              for Your UK Business
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Your website is your most important digital asset. As a professional
            UK web development agency, we create secure, fast, and scalable
            websites that support business growth, improve search visibility,
            and deliver exceptional user experiences. Every project is built
            using modern frameworks, clean code, and best-practice SEO
            foundations.
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-10 py-6 text-lg"
            asChild
          >
            <a
              href="https://calendly.com/muteebcheema243/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Website Consultation
            </a>
          </Button>


          <div className="mt-10 flex justify-center gap-6 text-white/80 text-sm">
            <span>✔ Free Consultation</span>
            <span>✔ UK-Focused Expertise</span>
            <span>✔ No Obligation</span>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </main>
  )
}
