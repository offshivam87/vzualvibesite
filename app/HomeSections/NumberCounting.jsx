import React from 'react'
import { NumberTicker } from '@/components/ui/number-ticker'

const stats = [
    { value: 500, suffix: "+", label: "Videos Edited" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 3, suffix: "+", label: "Years of Experience" }
]

const NumberCounting = () => {
    return (
        <section className="w-full py-20 bg-transparent flex justify-center items-center">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-4">
                            <div className="flex items-center justify-center text-5xl md:text-6xl font-light text-amber-400  tracking-tight">
                                <NumberTicker
                                    value={stat.value}
                                    className="text-amber-400 font-bold"
                                />
                                {stat.suffix && <span className="-ml-1">{stat.suffix}</span>}
                            </div>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NumberCounting