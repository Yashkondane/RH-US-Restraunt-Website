'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-orange-50/30">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-6">
                        {/* Tagline */}
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-orange-500" />
                            <p className="text-orange-600 tracking-[0.15em] uppercase text-xs font-bold">
                                ABOUT CUISINE
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 leading-tight">
                            The Best Tasty & Delicious Food and Chef Based on American Cuisine
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-base">
                            We pride ourselves on serving the most authentic American flavors with premium ingredients. Our experienced chefs craft each dish with passion and precision, ensuring every bite is a memorable experience. From juicy burgers to crispy wings, we bring you the taste of America.
                        </p>

                        {/* Learn More Button */}
                        <div className="pt-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
                                Learn More
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right: Images Grid */}
                    <div className="relative max-w-lg mx-auto lg:mx-0">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Image 1 */}
                            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-[340px] md:h-[430px]">
                                    <Image
                                        src="/img1-about-home-restaurant-300x430.jpg"
                                        alt="Delicious Food Platter"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Image 2 */}
                            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 mt-8">
                                <div className="relative h-[340px] md:h-[430px]">
                                    <Image
                                        src="/img2-about-home-restaurant-300x430.jpg"
                                        alt="Fresh Ingredients"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
