'use client'

import React from 'react'
import Image from 'next/image'
import { Play, CheckCircle2 } from 'lucide-react'

export default function VideoSection() {
    return (
        <section className="relative py-20 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Decorative Element + Team Image */}
                    <div className="relative">
                        {/* Decorative Orange Swoosh */}
                        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block">
                            <svg viewBox="0 0 300 300" className="w-full h-full">
                                <path
                                    d="M 50 150 Q 100 50, 200 100 T 250 200 Q 200 250, 100 200 T 50 150"
                                    fill="none"
                                    stroke="#EA580C"
                                    strokeWidth="3"
                                    className="opacity-60"
                                />
                            </svg>
                        </div>

                        {/* Team Photo */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="relative h-[400px] md:h-[500px]">
                                <Image
                                    src="/our-team-03.jpg"
                                    alt="Our Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 rounded-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Blur Elements */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6">
                        {/* Tagline */}
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-orange-500" />
                            <p className="text-orange-500 tracking-[0.15em] uppercase text-xs font-bold">
                                WATCH VIDEOS
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
                            How Can We Made Foods For Customers
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed text-base">
                            At every corner we are putting our utmost time, resources, passion, and our standard in every dish, juice & other cuisines that you will try much.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3 group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600/20 flex items-center justify-center mt-0.5 group-hover:bg-orange-600 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-gray-200 font-medium">
                                    Bees Play on Home-Like Foods
                                </p>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600/20 flex items-center justify-center mt-0.5 group-hover:bg-orange-600 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-gray-200 font-medium">
                                    Last Cost & Dish Orders
                                </p>
                            </div>
                        </div>

                        {/* Watch More Button */}
                        <div className="pt-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
                                Watch More
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
