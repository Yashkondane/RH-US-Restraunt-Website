'use client'

import React from 'react'
import { Clock, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const hours = [
    { day: 'Monday - Friday', time: '11:00 AM - 10:00 PM', isToday: false },
    { day: 'Saturday', time: '10:00 AM - 11:00 PM', isToday: false },
    { day: 'Sunday', time: '10:00 AM - 9:00 PM', isToday: false },
]

export default function WorkingHoursSection() {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Info Card Overlay */}
                    <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                            src="/images/hours-img.jpg"
                            alt="Restaurant interior"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Contact Info Card Overlay */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us Today</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-sm">
                                        123 Food Street, Culinary District<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm font-semibold">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hours */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-[2px] bg-orange-500" />
                            <p className="text-orange-600 tracking-[0.2em] uppercase text-xs font-bold">
                                Opening Hours
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                            We're Open Daily
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                            Visit us any day of the week and experience our delicious burgers and wings.
                            We're here to serve you with fresh, quality food every single day.
                        </p>

                        <div className="space-y-4">
                            {hours.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 group-hover:bg-orange-600 flex items-center justify-center transition-colors">
                                            <Clock className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-lg">{item.day}</span>
                                    </div>
                                    <span className="text-orange-600 font-bold text-lg">{item.time}</span>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <p className="text-gray-700 mb-4 font-medium">
                                Have questions or want to make a reservation?
                            </p>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
