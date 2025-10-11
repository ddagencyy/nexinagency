export function QuoteSection() {
  const quote = "YOUR DIGITAL SUCCESS STARTS HERE - WE TURN VISIONS INTO PROFITABLE REALITIES"

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-purple-500/5 overflow-hidden relative">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/30 morphing-shape blur-3xl floating-element"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/25 morphing-shape blur-4xl floating-element" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 morphing-shape blur-2xl floating-element" style={{ animationDelay: "6s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-500/15 morphing-shape blur-3xl floating-element" style={{ animationDelay: "9s" }}></div>
      </div>
      
      {/* Enhanced Horizontal Scrolling Quote */}
      <div className="relative z-10 overflow-hidden whitespace-nowrap">
        <div className="animate-quote-continuous">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-purple-400 leading-tight tracking-tighter inline-block px-8">
            {quote} • {quote} • {quote} •
          </h2>
        </div>
      </div>
        
      {/* Decorative Elements */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>
    </section>
  )
}