import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import nexonLogo from "@/assets/nexon-logo-new.png"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("INITIALIZING")

  useEffect(() => {
    const duration = 3500 // 3.5 seconds total loading time
    const interval = 50 // Update every 50ms

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + (100 / (duration / interval)), 100)
        
        // Update loading text based on progress
        if (newProgress < 30) {
          setLoadingText("INITIALIZING")
        } else if (newProgress < 60) {
          setLoadingText("LOADING ASSETS")
        } else if (newProgress < 90) {
          setLoadingText("PREPARING EXPERIENCE")
        } else {
          setLoadingText("ALMOST READY")
        }
        
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500) // Small delay before hiding
        }
        
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* 3D Character Background */}
        <div className="absolute inset-0">
          <div className="loading-3d-bg">
            <iframe 
              src='https://my.spline.design/tvatimedoor-VR2Sm8agyuuoln8bMCgbHByZ/' 
              width='100%' 
              height='100%'
              className="opacity-30 scale-125"
              loading="eager"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* Loading Content */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <img src={nexonLogo} alt="NEXIN" className="h-20 md:h-24 w-auto mx-auto" />
          </motion.div>

          {/* Progress Container */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            {/* Progress Bar */}
            <div className="relative mb-6">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              {/* Progress Percentage */}
              <div className="flex justify-between items-center mt-3">
                <motion.span
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/70 text-sm font-mono tracking-wide"
                >
                  {loadingText}
                </motion.span>
                <span className="text-white font-mono text-sm">
                  {Math.floor(progress)}%
                </span>
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-white/60 text-lg font-mono mt-8 tracking-wide"
          >
            TRANSFORMING IDEAS INTO REALITY
          </motion.p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </motion.div>
    </AnimatePresence>
  )
}