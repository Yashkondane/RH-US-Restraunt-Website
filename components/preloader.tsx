'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 150)

    // Hide preloader after loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700"
        >
          <div className="text-center">
            {/* Logo/Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2 drop-shadow-sm">
                Restaurant
              </h1>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="w-16 h-[2px] bg-gray-900" />
                <p className="text-gray-900 tracking-[0.3em] uppercase text-xs font-bold">
                  Premium Dining
                </p>
                <span className="w-16 h-[2px] bg-gray-900" />
              </div>
            </motion.div>

            {/* Minimalist Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center items-center mb-8"
            >
              <div className="relative w-20 h-20">
                {/* Outer spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 border-4 border-transparent border-t-gray-900 border-r-gray-900 rounded-full"
                />
                {/* Inner spinning ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-2 border-4 border-transparent border-b-black border-l-black rounded-full"
                />
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 bg-gray-900 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-900/70 text-sm tracking-widest uppercase font-light mb-8"
            >
              Loading Excellence
            </motion.p>

            {/* Elegant Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-80 max-w-full mx-auto px-6"
            >
              <div className="h-[2px] bg-gray-900/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gray-900 rounded-full relative"
                >
                  {/* Glow effect */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
