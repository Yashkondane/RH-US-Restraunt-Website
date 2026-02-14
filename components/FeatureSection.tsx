'use client'

import React from 'react'
import { Flame, Award, Users } from 'lucide-react'

const features = [
    {
        icon: Flame,
        title: 'Fresh Ingredients',
        description: 'We use only the freshest, premium quality ingredients sourced daily from trusted suppliers.',
    },
    {
        icon: Award,
        title: 'Award Winning',
        description: 'Recognized for our exceptional taste and quality, winning multiple local food awards.',
    },
    {
        icon: Users,
        title: 'Family Friendly',
        description: 'A warm, welcoming atmosphere perfect for families, friends, and celebrations.',
    },
]

export default function FeatureSection() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group text-center p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                                <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-orange-50 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
