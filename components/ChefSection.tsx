'use client'

import React from 'react'
import Image from 'next/image'

const chefs = [
    { name: 'John Smith', role: 'Head Chef', image: '/happy-male-chef-cook-cooking-food-EMJ8G9_cropped_processed_by_imagy.jpg' },
    { name: 'Maria Garcia', role: 'Sous Chef', image: '/6b21cf12159515.562582531decc_cropped_processed_by_imagy.jpg' },
    { name: 'David Lee', role: 'Grill Master', image: '/f52626_8d1feac2d2bc4e059a1f7af238dfec79~mv2_cropped_processed_by_imagy.jpg' },
    { name: 'Sarah Johnson', role: 'Pastry Chef', image: '/OIP (4)_cropped_processed_by_imagy.jpg' },
]

export default function ChefSection() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                        <p className="text-orange-600 tracking-[0.2em] uppercase text-xs font-bold">
                            Our Team
                        </p>
                        <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900">
                        Meet Our Expert Chefs
                    </h2>
                </div>

                {/* Chefs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {chefs.map((chef, i) => (
                        <div key={i} className="text-center group">
                            {/* Image */}
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                                <Image
                                    src={chef.image}
                                    alt={chef.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Name & Role */}
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{chef.name}</h3>
                            <p className="text-orange-600 text-sm uppercase tracking-wide">{chef.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
