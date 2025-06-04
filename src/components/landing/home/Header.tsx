// src/components/Header.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Helper to handle section navigation
    const handleSectionNav = (hash: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate(`/#${hash.replace('#', '')}`);
        } else {
            const el = document.getElementById(hash.replace("#", ""));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.hash = hash;
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="bg-gray-800 shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF6B35"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <h1 className="text-xl md:text-2xl font-bold text-orange-500">RIGREADY</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 text-white">
                        <a href="#home" onClick={handleSectionNav("#home")} className="hover:text-orange-500 transition-colors">Home</a>
                        <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
                        <a href="#features" onClick={handleSectionNav("#features")} className="hover:text-orange-500 transition-colors">Features</a>
                        <a href="#platform" onClick={handleSectionNav("#platform")} className="hover:text-orange-500 transition-colors">Platform</a>
                        <a href="#solutions" onClick={handleSectionNav("#solutions")} className="hover:text-orange-500 transition-colors">Solutions</a>
                        <a href="#contact" onClick={handleSectionNav("#contact")} className="hover:text-orange-500 transition-colors">Contact</a>
                    </nav>

                    {/* Sign In / Sign Up Buttons & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link to="/signup/choose" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors hidden md:block">
                            Sign Up
                        </Link>
                        <Link to="/signin" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md font-medium transition-colors hidden md:block">
                            Sign In
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden focus:outline-none text-orange-500"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {mobileMenuOpen ? (
                                    // Close Icon (X)
                                    <path d="M18 6L6 18M6 6l12 12" />
                                ) : (
                                    // Hamburger Icon
                                    <path d="M3 12h18M3 6h18M3 18h18" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <nav className="md:hidden bg-gray-800 p-4 shadow-lg animate-fadeIn text-white">
                        <ul className="space-y-4 text-center">
                            <li>
                                <a href="#home" onClick={handleSectionNav("#home")} className="block hover:text-orange-500 transition-colors">Home</a>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-orange-500 transition-colors">About</Link>
                            </li>
                            <li>
                                <a href="#features" onClick={handleSectionNav("#features")} className="block hover:text-orange-500 transition-colors">Features</a>
                            </li>
                            <li>
                                <a href="#platform" onClick={handleSectionNav("#platform")} className="block hover:text-orange-500 transition-colors">Platform</a>
                            </li>
                            <li>
                                <a href="#solutions" onClick={handleSectionNav("#solutions")} className="block hover:text-orange-500 transition-colors">Solutions</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleSectionNav("#contact")} className="block hover:text-orange-500 transition-colors">Contact</a>
                            </li>
                            <li className="pt-2">
                                <Link to="/signup/choose" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors block text-center">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin" className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md font-medium transition-colors block text-center">
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
}