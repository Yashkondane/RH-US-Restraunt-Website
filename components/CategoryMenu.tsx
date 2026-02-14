'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const categories = [
    { name: 'Pizza', icon: '/download (8).png' },
    { name: 'Burger', icon: '/download (9).png' },
    { name: 'Bread', icon: '/download (10).png' },
    { name: 'Seafoods', icon: '/download (11).png' },
    { name: 'Coffe', icon: '/download (12).png' },
    { name: 'Chicken', icon: '/download (14).png' },
]

export default function CategoryMenu() {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images (14).jpeg"
                    alt="Food Background Pattern"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                {/* Orange overlay */}
                <div className="absolute inset-0 bg-orange-600/85" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-12 h-[2px] bg-white" />
                        <p className="text-white tracking-[0.15em] uppercase text-xs font-bold">
                            OUR POPULAR FOOD
                        </p>
                        <span className="w-12 h-[2px] bg-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
                        Best Category Foods Menu
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-xl p-6 flex items-center justify-between cursor-pointer hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Icon & Name */}
                            <div className="flex items-center gap-4">
                                {/* Icon - Increased Size */}
                                <div className="relative w-28 h-28 flex-shrink-0">
                                    <Image
                                        src={cat.icon}
                                        alt={cat.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    {cat.name}
                                </h3>
                            </div>

                            {/* Arrow Icon */}
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-10">
                    <p className="text-white text-sm mb-3">
                        Need any Special Food or Any Birthday Cake?{' '}
                        <a href="#" className="underline font-semibold hover:text-orange-200 transition-colors">
                            Order Now
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
