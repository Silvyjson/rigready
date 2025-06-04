// src/components/MobileAppSection.jsx

export default function MobileAppSection() {
    return (
        <section className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mobile Experience</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://picsum.photos/id/1074/600/400"
                            alt="Mobile App Interface"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Stay Connected Anywhere</h3>
                            <p className="text-gray-300">
                                RIGREADY's mobile app is designed for field operatives and remote workers, providing full functionality even in low-connectivity environments.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Offline application mode for remote locations
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Push notifications for job matches and interview reminders
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    QR code login for quick access on shared devices
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-5 h-5 mr-2 text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Document upload for certifications and fitness records
                                </li>
                            </ul>
                            <div className="pt-4">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg">
                                    Download the App
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }