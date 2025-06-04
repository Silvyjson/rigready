// src/pages/AboutPage.jsx

import Header from "../../components/landing/home/Header";
import Footer from "../../components/landing/home/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Revolutionizing Oil & Gas Recruitment</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
                        RIGREADY is a cutting-edge recruitment platform built exclusively for the oil and gas industry—offshore and upstream. We connect companies with certified, experienced professionals using smart matching, compliance-first tools, and automation designed for rig environments.
                    </p>
                    <a
                        href="#learn-more"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="learn-more" className="py-16 px-4 bg-gray-800 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Our Mission */}
                        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">🚀 Our Mission</h2>
                            <p className="text-gray-300">
                                To simplify and modernize the hiring process for oil and gas companies by offering a platform that understands the complexity of offshore roles, global compliance, and critical certifications.
                            </p>
                        </div>

                        {/* Our Vision */}
                        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">🌍 Our Vision</h2>
                            <p className="text-gray-300">
                                To become the global standard for oil and gas workforce recruitment—empowering companies to hire smarter and professionals to advance faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why RIGREADY */}
            <section className="py-16 px-4 bg-gray-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">💡 Why RIGREADY?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Industry-Specific Design */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-orange-500/10 transition-shadow">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">🔧</div>
                            <h3 className="text-xl font-semibold mb-3">Industry-Specific Design</h3>
                            <p className="text-gray-400">
                                Built from the ground up for offshore, upstream, and energy-focused hiring needs.
                            </p>
                        </div>

                        {/* AI-Powered Matching */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-orange-500/10 transition-shadow">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">🤖</div>
                            <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
                            <p className="text-gray-400">
                                Instantly connect with certified talent based on role, rotation, and readiness.
                            </p>
                        </div>

                        {/* Global Compliance Engine */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-orange-500/10 transition-shadow">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">🔐</div>
                            <h3 className="text-xl font-semibold mb-3">Global Compliance Engine</h3>
                            <p className="text-gray-400">
                                Automatically track and verify BOSIET, HUET, FOET, medicals, and regional permits.
                            </p>
                        </div>

                        {/* Seamless Integration */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-orange-500/10 transition-shadow">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">🔗</div>
                            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                            <p className="text-gray-400">
                                Post once, publish everywhere — LinkedIn, RigZone, Indeed, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-16 px-4 bg-gray-800 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">👷 Who We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
                            <span className="block w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">🏢</span>
                            <h3 className="font-semibold mb-2">Major Operators</h3>
                            <p className="text-gray-400">For large-scale offshore operations and crew planning.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
                            <span className="block w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">👷</span>
                            <h3 className="font-semibold mb-2">Service Providers</h3>
                            <p className="text-gray-400">Contractors and support companies needing skilled labor fast.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
                            <span className="block w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">🧑‍💼</span>
                            <h3 className="font-semibold mb-2">HR Teams</h3>
                            <p className="text-gray-400">Efficient hiring workflows and team collaboration tools.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
                            <span className="block w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">🛰️</span>
                            <h3 className="font-semibold mb-2">Qualified Professionals</h3>
                            <p className="text-gray-400">Engineers, drillers, HSE officers, and remote workers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Security */}
            <section className="py-16 px-4 bg-gray-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">🔐 Built on Trust & Security</h2>
                    <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                        <p className="text-gray-300 mb-4">
                            RIGREADY is committed to protecting sensitive data and maintaining regulatory compliance across jurisdictions.
                        </p>
                        <p className="text-gray-300">
                            Our platform uses cloud-native security, end-to-end encryption, and verified pipelines to ensure trust and transparency in every interaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Where We Work */}
            <section className="py-16 px-4 bg-gray-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">📍 Where We Work</h2>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <p className="text-gray-300 mb-6">
                            RIGREADY supports operations and candidates across Africa, the Middle East, Europe, Asia, and the Americas—wherever rigs rise and talent is needed.
                        </p>
                        <img
                            src="https://picsum.photos/id/1072/800/200"
                            alt="Global Operations Map"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Join the Revolution */}
            <section className="py-16 px-4 bg-gray-800 text-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">🤝 Join the Revolution</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you're hiring a crew for your next rig or searching for your next opportunity, RIGREADY is your all-in-one recruitment partner.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/signup/choose"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors"
                        >
                            ➕ Sign Up Now
                        </a>
                        <a
                            href="/contact"
                            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md transition-colors"
                        >
                            📨 Contact Sales
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}