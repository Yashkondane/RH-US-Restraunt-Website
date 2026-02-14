'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Food Blogger',
            rating: 5,
            text: 'Absolutely incredible burgers! The blend of spices and fresh ingredients makes every bite unforgettable. This is my go-to spot for American classics.',
            avatar: '/images/chef-1.jpg',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Regular Customer',
            rating: 5,
            text: 'The wings are perfection - crispy on the outside, juicy inside. The staff is incredibly friendly and the atmosphere is cozy and welcoming.',
            avatar: '/images/chef-2.jpg',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Food Critic',
            rating: 5,
            text: 'A true gem! The attention to detail in every dish shows the passion behind this restaurant. The flavors are authentic and absolutely delicious.',
            avatar: '/images/chef-3.jpg',
        },
        {
            id: 4,
            name: 'James Wilson',
            role: 'Local Resident',
            rating: 5,
            text: 'Best comfort food in town! From the burgers to the sides, everything is made with quality ingredients. Highly recommended!',
            avatar: '/images/chef-4.jpg',
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Family Diner',
            rating: 5,
            text: 'My family and I love this place! The portions are generous, prices are fair, and the service is top-notch. Our weekly tradition!',
            avatar: '/images/chef-5.jpg',
        },
        {
            id: 6,
            name: 'David Park',
            role: 'Wing Enthusiast',
            rating: 5,
            text: 'As someone who has tried wings everywhere, these are hands down the BEST. The sauces are incredible and the meat falls off the bone!',
            avatar: '/images/chef-6.jpg',
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1)
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [testimonials.length])

    const goToPrevious = () => {
        setDirection(-1)
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToNext = () => {
        setDirection(1)
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const visible = [
        testimonials[activeIndex % testimonials.length],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
    ]

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
            scale: 0.95
        })
    }

    return (
        <section className="relative w-full py-24 bg-[#1a1a1a] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                {/* Pizza */}
                <svg className="absolute top-10 left-10 w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <circle cx="9" cy="9" r="1.5" />
                    <circle cx="15" cy="9" r="1.5" />
                    <circle cx="12" cy="13" r="1.5" />
                </svg>
                {/* Burger */}
                <svg className="absolute top-32 right-20 w-20 h-20 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="11" width="18" height="2" rx="1" />
                    <path d="M4 8h16c.55 0 1-.45 1-1 0-3.31-2.69-6-6-6H9C5.69 1 3 3.69 3 7c0 .55.45 1 1 1z" />
                    <rect x="3" y="17" width="18" height="2" rx="1" />
                    <circle cx="8" cy="14" r="1" />
                    <circle cx="16" cy="14" r="1" />
                </svg>
                {/* Fork & Knife */}
                <svg className="absolute bottom-20 left-32 w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2v20M10 2v8a2 2 0 0 1-2 2H6M18 2v8a2 2 0 0 0 2 2h-2v10" />
                </svg>
            </div>

            {/* Header */}
            <div className="text-center mb-14 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                    <p className="text-orange-500 tracking-[0.2em] uppercase text-xs font-bold">
                        Testimonials
                    </p>
                    <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
                    What Our Customers Say
                </h2>
            </div>

            {/* Testimonials Grid with Navigation */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Testimonials Cards */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 }
                            }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {visible.map((t, cardIndex) => (
                                <div
                                    key={`${activeIndex}-${cardIndex}`}
                                    className={`flex flex-col items-center text-center p-8 pt-12 rounded-lg relative transition-all duration-300
                                        ${cardIndex === 1
                                            ? 'bg-[#2a2020] border-2 border-orange-500/40 shadow-xl shadow-orange-900/20 md:scale-[1.05]'
                                            : 'bg-[#222222] border border-white/[0.08] hover:border-white/15 hover:bg-[#252525]'
                                        }`}
                                >
                                    {/* Quote mark */}
                                    <div className="absolute top-6 left-6 text-orange-500/20 text-5xl font-serif leading-none">"</div>

                                    {/* Avatar */}
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-5 border-3 border-orange-500/40 shadow-lg">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-orange-500 drop-shadow-sm"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-5 italic min-h-[4rem]">
                                        {t.text}
                                    </p>

                                    {/* Name & Role */}
                                    <h4 className="text-white font-semibold text-base mb-1">{t.name}</h4>
                                    <p className="text-orange-500 text-xs uppercase tracking-wider font-medium">{t.role}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'bg-orange-500 w-10 shadow-lg shadow-orange-500/50'
                                : 'w-2.5 bg-white/25 hover:bg-white/50'
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}
