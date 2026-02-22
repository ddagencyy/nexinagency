import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export const WhyChooseNexin = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-4">Advantages of Nexin</Badge>

                <h2 className="font-display text-display-lg font-bold mb-6">
                    Why Choose
                    <span className="text-gradient-primary"> Nexin</span>
                </h2>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          At Nexin, we combine cutting-edge technology with creative design to deliver digital solutions that drive results. 
          Our team focuses on innovation, quality, and efficiency to ensure your business thrives in a competitive online world.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our experienced professionals bring creativity and technical expertise to every project.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailored Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We provide custom solutions designed to meet your unique business needs.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our solutions help businesses grow, improve efficiency, and stand out in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
