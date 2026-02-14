'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">

                            <span className="text-2xl font-bold text-white tracking-tight">
                                BURGER<span className="text-orange-500">WINGS</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Serving the best authentic American burgers and crispy wings in town.
                            Fresh ingredients, unforgettable taste, and a warm atmosphere.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors group">
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors group">
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors group">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Menu', 'Chefs', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Location</p>
                                    <p className="text-gray-400 text-sm">123 Food Street, Culinary District, NY 10001</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Phone</p>
                                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Email</p>
                                    <p className="text-gray-400 text-sm">hello@burgerwings.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
                            Opening Hours
                        </h3>
                        <div className="bg-[#252525] p-6 rounded-xl border border-white/5">
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Mon - Fri</span>
                                    <span className="text-orange-500 font-bold">11AM - 10PM</span>
                                </li>
                                <li className="flex justify-between items-center text-sm border-t border-white/10 pt-4">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-orange-500 font-bold">10AM - 11PM</span>
                                </li>
                                <li className="flex justify-between items-center text-sm border-t border-white/10 pt-4">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-orange-500 font-bold">10AM - 9PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} <span className="text-white">Burger & Wings</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
