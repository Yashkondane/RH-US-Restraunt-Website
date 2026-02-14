'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calendar, Users, Clock, Mail, User, ChevronDown } from 'lucide-react'

export default function ReservationSection() {
    const [persons, setPersons] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [showPersonsDropdown, setShowPersonsDropdown] = useState(false)
    const [showTimeDropdown, setShowTimeDropdown] = useState(false)

    const personOptions = ['1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons', '6+ Persons']
    const timeOptions = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ persons, time, date, name, email })
        alert('Reservation request submitted!')
    }

    return (
        <section id="reservation" className="relative w-full py-20 bg-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg-form-home-restaurant-600x696.jpg"
                    alt="Restaurant background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Form */}
                    <div>
                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] border-t-2 border-dashed border-orange-500" />
                                <p className="text-orange-600 tracking-[0.2em] uppercase text-xs font-bold">
                                    Book A Table
                                </p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
                                Make a Reservation
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Reserve your table in advance and enjoy our delicious American burgers and wings in a cozy atmosphere.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Persons Dropdown */}
                            <div className="relative border-b-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 transition-colors pb-1">
                                <button
                                    type="button"
                                    onClick={() => { setShowPersonsDropdown(!showPersonsDropdown); setShowTimeDropdown(false) }}
                                    className="w-full py-4 pr-12 bg-transparent text-left font-medium text-[15px] focus:outline-none flex items-center justify-between"
                                >
                                    <span className={persons ? 'text-gray-800' : 'text-gray-400'}>{persons || 'Persons'}</span>
                                    <div className="flex items-center gap-2">
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showPersonsDropdown ? 'rotate-180' : ''}`} />
                                        <Users className="w-5 h-5 text-gray-400" />
                                    </div>
                                </button>
                                {showPersonsDropdown && (
                                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 max-h-52 overflow-y-auto">
                                        {personOptions.map((opt) => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => { setPersons(opt); setShowPersonsDropdown(false) }}
                                                className="w-full text-left px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Date Input */}
                            <div className="relative border-b-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 transition-colors pb-1">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full py-4 pr-12 bg-transparent font-medium text-[15px] text-gray-800 focus:outline-none placeholder:text-gray-400"
                                    placeholder="Date"
                                />
                                <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Time Dropdown */}
                            <div className="relative border-b-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 transition-colors pb-1">
                                <button
                                    type="button"
                                    onClick={() => { setShowTimeDropdown(!showTimeDropdown); setShowPersonsDropdown(false) }}
                                    className="w-full py-4 pr-12 bg-transparent text-left font-medium text-[15px] focus:outline-none flex items-center justify-between"
                                >
                                    <span className={time ? 'text-gray-800' : 'text-gray-400'}>{time || 'Time'}</span>
                                    <div className="flex items-center gap-2">
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showTimeDropdown ? 'rotate-180' : ''}`} />
                                        <Clock className="w-5 h-5 text-gray-400" />
                                    </div>
                                </button>
                                {showTimeDropdown && (
                                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 max-h-52 overflow-y-auto">
                                        {timeOptions.map((opt) => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => { setTime(opt); setShowTimeDropdown(false) }}
                                                className="w-full text-left px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Name Input */}
                            <div className="relative border-b-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 transition-colors pb-1">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-4 pr-12 bg-transparent font-medium text-[15px] text-gray-800 focus:outline-none placeholder:text-gray-400"
                                    placeholder="Name"
                                    required
                                />
                                <User className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Email Input */}
                            <div className="relative border-b-2 border-gray-200 hover:border-orange-300 focus-within:border-orange-500 transition-colors pb-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-4 pr-12 bg-transparent font-medium text-[15px] text-gray-800 focus:outline-none placeholder:text-gray-400"
                                    placeholder="Email"
                                    required
                                />
                                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-8 rounded-sm uppercase tracking-widest font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                    {/* Right: Image/Decoration */}
                    <div className="relative hidden lg:block">
                        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/bg-form-home-restaurant-600x696.jpg"
                                alt="Restaurant interior"
                                fill
                                className="object-cover"
                            />
                            {/* Orange overlay accent */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent" />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white px-8 py-6 rounded-lg shadow-2xl">
                            <p className="text-sm uppercase tracking-wider mb-1">Reserve Now</p>
                            <p className="text-2xl font-bold">+1 2586 5892</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
