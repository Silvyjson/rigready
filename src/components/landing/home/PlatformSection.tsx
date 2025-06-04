// src/components/PlatformSection.jsx

export default function PlatformSection() {
    return (
        <section id="platform" className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Platform Overview</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <div className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">All-in-One Ecosystem</h3>
                            <p className="text-gray-300 mb-4">
                                Our platform combines recruitment, certification tracking, and workforce analytics into a single intuitive interface.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Unified dashboard for employers and candidates
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Seamless integration with LinkedIn, RigZone, Indeed
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Cross-platform data synchronization
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Compliance Management</h3>
                            <p className="text-gray-300 mb-4">
                                Ensure all regulatory requirements are met with automated verification and alerts.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Automated certification expiration alerts
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Direct validation with issuing authorities
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Multi-jurisdiction compliance support
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://picsum.photos/id/1073/600/400"
                            alt="Platform Dashboard"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
  }