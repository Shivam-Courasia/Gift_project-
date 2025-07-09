"use client"

import { useState, useEffect } from "react"
import { Gift, Heart, Sparkles } from "lucide-react"

interface GiftLoaderProps {
  onLoadingComplete: () => void
}

export default function GiftLoader({ onLoadingComplete }: GiftLoaderProps) {
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Ensure this component only renders on client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < 4) {
        setStage(stage + 1)
      } else {
        onLoadingComplete()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [stage, onLoadingComplete])

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => clearInterval(progressTimer)
  }, [])

  // Don't render anything until client-side
  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Loading...
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${(i * 0.1) % 2}s`,
              animationDuration: `${2 + (i % 2)}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-pink-400 opacity-60" />
          </div>
        ))}
      </div>

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center">
        {/* Gift Box Animation */}
        <div className="relative mb-8">
          {/* Gift Box Base */}
          <div
            className={`w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-2xl transition-all duration-1000 ${
              stage >= 2 ? "transform -translate-y-4 scale-110" : ""
            } ${stage >= 3 ? "opacity-0" : ""}`}
          >
            {/* Gift Box Ribbon Vertical */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 transition-all duration-1000 ${
                stage >= 2 ? "animate-pulse" : ""
              }`}
            />
            {/* Gift Box Ribbon Horizontal */}
            <div
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-4 bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-1000 ${
                stage >= 2 ? "animate-pulse" : ""
              }`}
            />
            {/* Gift Box Bow */}
            <div
              className={`absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                stage >= 2 ? "animate-bounce" : ""
              } ${stage >= 3 ? "opacity-0 scale-0" : ""}`}
            >
              <div className="w-8 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full relative">
                <div className="absolute -left-3 top-1 w-6 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full transform -rotate-45" />
                <div className="absolute -right-3 top-1 w-6 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full transform rotate-45" />
              </div>
            </div>
          </div>

          {/* Gift Box Lid */}
          <div
            className={`absolute -top-2 left-0 w-32 h-8 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg shadow-lg transition-all duration-1000 ${
              stage >= 2 ? "transform -translate-y-8 rotate-12 scale-105" : ""
            } ${stage >= 3 ? "opacity-0 -translate-y-16" : ""}`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-full bg-gradient-to-b from-yellow-300 to-yellow-500" />
          </div>

          {/* Hearts Flying Out */}
          {stage >= 2 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute w-6 h-6 text-pink-500 animate-ping fill-current`}
                  style={{
                    left: `${50 + Math.cos((i * Math.PI) / 4) * 60}%`,
                    top: `${50 + Math.sin((i * Math.PI) / 4) * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          )}

          {/* Gift Content Reveal */}
          {stage >= 3 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-bounce">
                <Gift className="w-16 h-16 text-pink-600 animate-spin" style={{ animationDuration: "3s" }} />
              </div>
            </div>
          )}
        </div>

        {/* Loading Text */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2 animate-pulse">
            {stage === 0 && "Preparing your gifts..."}
            {stage === 1 && "Opening the magic box..."}
            {stage === 2 && "Spreading love & joy..."}
            {stage === 3 && "Almost ready..."}
            {stage >= 4 && "Welcome to GiftLove!"}
          </h1>
          <p className="text-gray-600 animate-fade-in">
            {stage <= 1 && "✨ Creating magical moments"}
            {stage === 2 && "💖 Filling with love"}
            {stage === 3 && "🎁 Ready to surprise"}
            {stage >= 4 && "🌟 Let's spread happiness"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-3 bg-white/30 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-4 text-center">
          <span className="text-sm font-semibold text-gray-700">{progress}%</span>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            >
              <div className="text-2xl opacity-60">{["🎁", "💝", "🎀", "💖", "✨", "🌟"][i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
