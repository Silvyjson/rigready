// src/components/SecuritySection.jsx

export default function SecuritySection() {
    return (
        <section className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Security & Compliance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        {/* Data Protection */}
                        <div className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    End-to-end encryption for sensitive personnel data
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Multi-factor authentication for secure access
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Role-based access control for different user types
                                </li>
                            </ul>
                        </div>
                        {/* Regulatory Compliance */}
                        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    GDPR-compliant data handling practices
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    NITDA compliance for Nigerian operations
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Secure storage of medical and license data
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div>
                        <img
                            src="https://picsum.photos/id/1079/600/400"
                            alt="Security Illustration"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
  }