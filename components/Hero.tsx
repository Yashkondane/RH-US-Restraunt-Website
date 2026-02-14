'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const slides = [
    {
        title: 'BURGER',
        subtitle: 'AMERICAN',
        tagline: 'Welcome to Our Restaurant',
        description: 'Experience the authentic taste of America with our juicy, flame-grilled burgers. Made fresh daily with premium beef and the finest ingredients.',
        image: '/a2ca70f6-5f03-4ad9-8466-86dd16c3ce79.png',
        badge: 'Best Burgers',
    },
    {
        title: 'WINGS',
        subtitle: 'CRISPY',
        tagline: 'Welcome to Our Restaurant',
        description: 'Savor our perfectly crispy wings with a variety of bold sauces. Each wing is cooked to golden perfection with unbeatable flavor.',
        image: '/2cdd9d24-2121-4ab6-9caf-0b015e7686c3.png',
        badge: 'Best Wings',
    },
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 8000) // Slower transition - 8 seconds per slide

        return () => clearInterval(timer)
    }, [])

    const slide = slides[currentSlide]

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Images - All rendered with opacity control (no flash) */}
            {slides.map((s, index) => (
                <div
                    key={index}
                    className="absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out"
                    style={{ opacity: currentSlide === index ? 1 : 0 }}
                >
                    <Image
                        src={s.image}
                        alt={`${s.title} Background`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                <div className="max-w-3xl">

                    {/* Text Content */}
                    <div className="text-white space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-orange-500" />
                            <p className="text-orange-500 tracking-[0.2em] uppercase text-sm font-bold">
                                {slide.tagline}
                            </p>
                        </div>

                        <div className="relative">
                            <h1
                                key={`title-${currentSlide}`}
                                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] animate-textFade"
                            >
                                {slide.subtitle}<br />
                                <span className="text-orange-500">{slide.title}</span>
                            </h1>
                        </div>

                        <div className="relative">
                            <p
                                key={`desc-${currentSlide}`}
                                className="text-gray-200 text-lg leading-relaxed max-w-2xl animate-textFadeDelay"
                            >
                                {slide.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                Order Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all">
                                View Menu
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-10 right-10 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-orange-600 w-8'
                            : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes textFade {
                    0% { 
                        opacity: 0; 
                        transform: translateY(10px);
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                @keyframes textFadeDelay {
                    0% { 
                        opacity: 0; 
                        transform: translateY(10px);
                    }
                    30% { 
                        opacity: 0; 
                        transform: translateY(10px);
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                .animate-textFade {
                    animation: textFade 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .animate-textFadeDelay {
                    animation: textFadeDelay 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </section>
    )
}
