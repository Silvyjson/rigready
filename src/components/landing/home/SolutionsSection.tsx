// src/components/SolutionsSection.jsx

export default function SolutionsSection() {
    return (
        <section id="solutions" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Industry-Specific Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Certification Tracking */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="h-48 bg-gray-700 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
                                    fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="opacity-70">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Certification Tracking</h3>
                            <p className="text-gray-300">
                                Automate verification of critical safety certifications like BOSIET, HUET, and FOET with real-time alerts for expirations.
                            </p>
                        </div>
                    </div>
                    {/* Rotation Scheduling */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="h-48 bg-gray-700 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
                                    fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="opacity-70">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Rotation Scheduling</h3>
                            <p className="text-gray-300">
                                Manage complex offshore work rotations including 14/14, 21/21 patterns with integrated logistics coordination.
                            </p>
                        </div>
                    </div>
                    {/* Analytics Insights */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <div className="h-48 bg-gray-700 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
                                    fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="opacity-70">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
                            <p className="text-gray-300">
                                Track hiring trends, role demand, salary benchmarks, and workforce dynamics across global oil and gas operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }