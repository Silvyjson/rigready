// src/components/FeaturesSection.jsx
export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Employer Portal */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Employer Portal</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Industry-specific job posting templates
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Certification compliance tracking (BOSIET, HUET, FOET)
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Crew rotation scheduling tools
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Real-time analytics dashboard
                            </li>
                        </ul>
                    </div>
                    {/* Candidate Portal */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Candidate Portal</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Smart AI-powered job matching
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Profile management with certifications
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Video interviews for low-bandwidth areas
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                Mobile-friendly application process
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }