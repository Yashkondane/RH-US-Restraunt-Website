'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const menuItems = [
    {
        name: 'Delicious Vegetables Italian',
        description: 'Quis ipsum sed et proin sit aliquet',
        price: 123.00,
        image: '/product-07-300x300.png',
        rating: 5,
        reviews: 1
    },
    {
        name: 'Cheese Burger Onion',
        description: 'Quis ipsum sed et proin sit aliquet',
        price: 73.00,
        oldPrice: 90.00,
        image: '/product-04-300x298.png',
        rating: 5,
        reviews: 1
    },
    {
        name: 'Board Pita Chicken',
        description: 'Quis ipsum sed et proin sit aliquet',
        price: 85.00,
        image: '/product-01-300x294.png',
        rating: 5,
        reviews: 1
    },
    {
        name: 'Baked Chicken Wings',
        description: 'Quis ipsum sed et proin sit aliquet',
        price: 37.50,
        oldPrice: 50.00,
        image: '/product-03-300x285.png',
        rating: 5,
        reviews: 1
    }
]

export default function BestMenu() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-orange-50/30 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg width="40" height="12" viewBox="0 0 40 12" className="text-orange-500">
                            <path d="M0 6 L40 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                        <p className="text-orange-600 tracking-[0.15em] uppercase text-xs font-bold">
                            BEST FOOD MENU
                        </p>
                        <svg width="40" height="12" viewBox="0 0 40 12" className="text-orange-500">
                            <path d="M0 6 L40 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900">
                        Choose Your Best Menus
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Decorative Image */}
                    <div className="relative hidden lg:block group">
                        <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/decor-left-best-menu-restaurant.jpg"
                                alt="Best Menu Showcase"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-600/20 rounded-full blur-2xl" />
                    </div>

                    {/* Right: Menu Items */}
                    <div className="space-y-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="group flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                {/* Item Image */}
                                <div className="relative w-28 h-28 flex-shrink-0 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Item Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-baseline gap-2 flex-shrink-0">
                                            <span className="text-xl font-bold text-orange-600">
                                                ${item.price.toFixed(2)}
                                            </span>
                                            {item.oldPrice && (
                                                <span className="text-sm text-gray-400 line-through">
                                                    ${item.oldPrice.toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-3">
                                        {item.description}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-orange-500 text-orange-500"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            ({item.reviews} {item.reviews === 1 ? 'Review' : 'Reviews'})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
