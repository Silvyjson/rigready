// src/components/PricingSection.jsx

export default function PricingSection() {
    return (
        <section id="pricing" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="bg-gray-900 p-6">
                            <h3 className="text-xl font-semibold mb-2">Starter</h3>
                            <p className="text-gray-400 mb-4">For small contractors & individual consultants</p>
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-orange-500">$49</span>
                                <span className="text-gray-400">/month</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Up to 5 job postings
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Basic candidate search
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Limited analytics reports
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Email support only
                                </li>
                            </ul>
                            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow transform scale-105">
                        <div className="bg-gray-900 p-6">
                            <h3 className="text-xl font-semibold mb-2">Professional</h3>
                            <p className="text-gray-400 mb-4">For mid-sized operators & service companies</p>
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-orange-500">$149</span>
                                <span className="text-gray-400">/month</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Unlimited job postings
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Advanced candidate matching
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Full analytics suite
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Priority email & phone support
                                </li>
                            </ul>
                            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="bg-gray-900 p-6">
                            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                            <p className="text-gray-400 mb-4">For major operators & global service providers</p>
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-orange-500">Custom</span>
                                <span className="text-gray-400">/contact sales</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Custom integrations & API access
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Dedicated account manager
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Advanced security & compliance tools
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    On-site training & implementation
                                </li>
                            </ul>
                            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }