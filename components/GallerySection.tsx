'use client'

import React from 'react'
import Image from 'next/image'

const row1Images = [
    '/images/bg-form-home-restaurant-600x696.jpg',
    '/images/feature-1.jpg',
    '/images/hours-img.jpg',
    '/images/chef-1.jpg',
    '/images/menu-featured.jpg',
    '/images/feature-2.jpg',
]

const row2Images = [
    '/images/chef-4.jpg',
    '/images/category-bg.jpg',
    '/images/chef-2.jpg',
    '/images/chef-5.jpg',
    '/images/chef-6.jpg',
    '/images/feature-1.jpg',
]

export default function GallerySection() {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            {/* Header */}
            <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                    <p className="text-orange-600 tracking-[0.2em] uppercase text-xs font-bold">Gallery</p>
                    <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900">
                    Our Food Gallery
                </h2>
            </div>

            {/* Row 1: Scrolls LEFT (images move right → left) */}
            <div className="overflow-hidden mb-5 group">
                <div className="flex gap-5 animate-marquee-left group-hover:pause">
                    {/* Render 3 times for seamless loop */}
                    {[...row1Images, ...row1Images, ...row1Images].map((src, i) => (
                        <div
                            key={`row1-${i}`}
                            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                            style={{ width: 320, height: 220 }}
                        >
                            <Image
                                src={src}
                                alt={`Food gallery ${i + 1}`}
                                fill
                                sizes="320px"
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Scrolls RIGHT (images move left → right) */}
            <div className="overflow-hidden group">
                <div className="flex gap-5 animate-marquee-right group-hover:pause">
                    {/* Render 3 times for seamless loop */}
                    {[...row2Images, ...row2Images, ...row2Images].map((src, i) => (
                        <div
                            key={`row2-${i}`}
                            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                            style={{ width: 320, height: 220 }}
                        >
                            <Image
                                src={src}
                                alt={`Food gallery ${i + 1}`}
                                fill
                                sizes="320px"
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(calc(-100% / 3)); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 25s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right 25s linear infinite;
                }
                .pause {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
