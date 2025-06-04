// src/components/TestimonialsSection.jsx

export default function TestimonialsSection() {
    return (
        <section className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                JN
                            </div>
                            <div>
                                <h4 className="font-semibold">John Nelson</h4>
                                <p className="text-sm text-gray-400">HR Director at Offshore Energy Ltd.</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic">
                            "Since implementing RIGREADY, our time-to-hire has reduced by 40%. The certification tracking feature alone has saved us countless hours of manual verification."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                AM
                            </div>
                            <div>
                                <h4 className="font-semibold">Amina Musa</h4>
                                <p className="text-sm text-gray-400">Drilling Engineer & Job Seeker</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic">
                            "The mobile app made it possible for me to apply while working offshore with limited internet. I landed my dream job thanks to RIGREADY's smart matching system."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }