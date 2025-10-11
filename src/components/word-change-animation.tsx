import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WordChangeAnimationProps {
  words: string[]
  className?: string
  interval?: number
}

export function WordChangeAnimation({ words, className = "", interval = 2000 }: WordChangeAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}