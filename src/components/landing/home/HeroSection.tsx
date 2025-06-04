// src/components/HeroSection.jsx
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section id="home" className="py-16 md:py-24 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Revolutionizing Oil & Gas Recruitment
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-300">
                            Connecting skilled professionals with offshore and upstream opportunities through intelligent matching and compliance-focused tools.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/signup/choose" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg">
                                Get Started
                            </Link>
                            <Link to="/about" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <img
                            src="https://picsum.photos/id/1072/600/400"
                            alt="Oil Rig Workers"
                            className="rounded-lg shadow-xl w-full object-cover h-[300px] md:h-[400px] transform rotate-1 transition-transform hover:rotate-0 duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
  }