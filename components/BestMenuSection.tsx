'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const menuItems = [
    {
        name: 'Classic Burger',
        price: '$12.99',
        description: 'Juicy beef patty, lettuce, tomato, onion, pickles, special sauce',
        image: '/images/menu-item-1.jpg',
        rating: 5,
        popular: true,
    },
    {
        name: 'BBQ Wings',
        price: '$14.99',
        description: 'Crispy wings tossed in our signature BBQ sauce',
        image: '/images/menu-item-2.jpg',
        rating: 5,
        popular: true,
    },
    {
        name: 'Double Cheese Burger',
        price: '$15.99',
        description: 'Two beef patties, double cheese, bacon, special sauce',
        image: '/images/menu-item-3.jpg',
        rating: 5,
        popular: false,
    },
    {
        name: 'Buffalo Wings',
        price: '$13.99',
        description: 'Spicy buffalo wings with blue cheese dip',
        image: '/images/menu-item-4.jpg',
        rating: 5,
        popular: false,
    },
]

export default function BestMenuSection() {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                        <p className="text-orange-600 tracking-[0.2em] uppercase text-xs font-bold">
                            Best Sellers
                        </p>
                        <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900">
                        Our Most Loved Dishes
                    </h2>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {item.popular && (
                                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        Popular
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Rating */}
                                <div className="flex gap-1 mb-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                                    ))}
                                </div>

                                {/* Title & Price */}
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-orange-600 font-bold text-lg">{item.price}</p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Order Button */}
                                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
