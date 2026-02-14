'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    const quickLinks = [
        { label: 'About Company', href: '#' },
        { label: 'Menu', href: '#' },
        { label: 'Menu Fastfood', href: '#' },
        { label: 'Menu Seafood', href: '#' },
        { label: 'Gallery', href: '#' },
    ]

    const productsCol1 = [
        { label: 'Bread', href: '#' },
        { label: 'Chicken', href: '#' },
        { label: 'Burger', href: '#' },
        { label: 'Pizza', href: '#' },
        { label: 'Seafoods', href: '#' },
    ]

    const productsCol2 = [
        { label: 'Submarine Sandwich', href: '#' },
        { label: 'Chicken Biryani', href: '#' },
        { label: 'Pasta Fettucine', href: '#' },
        { label: 'Shawanna-roll', href: '#' },
        { label: 'Norwegian Lobster', href: '#' },
    ]

    return (
        <footer className="relative w-full bg-[#f5ebe0] text-gray-700 overflow-hidden">
            {/* Main footer content */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Logo & About */}
                    <div className="lg:col-span-3">
                        <div className="bg-orange-600 inline-block px-6 py-3 mb-6 rounded-sm">
                            <Image
                                src="/images/Logo.svg"
                                alt="Restaurant Logo"
                                width={80}
                                height={40}
                                className="brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Sit amet consectetur adipis elitsue risus mauris adipis
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products - Column 1 */}
                    <div className="lg:col-span-2">
                        <h3 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Products</h3>
                        <ul className="space-y-3">
                            {productsCol1.map((product, i) => (
                                <li key={i}>
                                    <Link
                                        href={product.href}
                                        className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                                    >
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products - Column 2 (continuation) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-gray-900 font-bold text-base mb-5 tracking-wide opacity-0 pointer-events-none">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {productsCol2.map((product, i) => (
                                <li key={i}>
                                    <Link
                                        href={product.href}
                                        className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                                    >
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Call for order:</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                <a href="tel:+12586589" className="text-gray-900 font-bold text-lg hover:text-orange-600 transition-colors">
                                    +1 2586 5892
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                <a href="mailto:hello@example.com" className="text-gray-600 text-sm hover:text-orange-600 transition-colors">
                                    hello@example.com
                                </a>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-gray-900 font-bold text-sm mb-2">Location:</h4>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        119 Tanglewood Lane<br />
                                        Gulfport, MS 39503
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300/50">
                <div className="container mx-auto px-6 lg:px-12 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <p className="text-gray-600 text-sm">
                            © 2024 American Burger & Wings. All Rights Reserved
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Footer links */}
                        <div className="flex items-center gap-5">
                            <Link href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                                FAQ
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
