'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Search, ChevronDown } from 'lucide-react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="bg-orange-600 px-6 py-3 rounded-sm">
                            <Image
                                src="/Logo.svg"
                                alt="Restaurant Logo"
                                width={70}
                                height={35}
                            />
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {[
                            { label: 'Home', dropdown: true },
                            { label: 'Menu', dropdown: true },
                            { label: 'About', dropdown: false },
                            { label: 'Shop', dropdown: true },
                            { label: 'Blog', dropdown: true },
                            { label: 'Pages', dropdown: true },
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <Link
                                    href="#"
                                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'
                                        }`}
                                >
                                    {item.label}
                                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Right side: Phone, Search, CTA */}
                    <div className="flex items-center gap-6">
                        {/* Phone */}
                        <div className="hidden md:flex items-center gap-2">
                            <Phone className={`w-4 h-4 ${scrolled ? 'text-orange-600' : 'text-white'}`} />
                            <a
                                href="tel:+12586589"
                                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                                    }`}
                            >
                                +1 2586 5892
                            </a>
                        </div>

                        {/* Search Icon */}
                        <button
                            className={`hidden md:block transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'
                                }`}
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="#reservation"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book A Table
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}
