// src/pages/EmailVerifiedPage.jsx

import AuthHeader from "../../components/auth/AuthHeader";
import { Link } from "react-router-dom";

export default function EmailVerifiedPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center px-4">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5 bg-repeat bg-center"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'10\' fill=\'none\' stroke=\'%23FF6B35\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                }}
            ></div>

            <div className="relative z-10 w-full max-w-md mx-auto text-center">
                <AuthHeader />

                <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-green-400 mb-4">Email Verified Successfully!</h2>
                    <p className="text-gray-300 mb-6">
                        Your email has been confirmed. You're all set to start using RIGREADY to find offshore and upstream opportunities.
                    </p>

                    <button
                        onClick={() => (window.location.href = "/signin")}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        Continue to Sign In
                    </button>
                </div>

                {/* Optional Illustration or Info Box */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Need help?{" "}
                        <Link to="/contact" className="text-orange-500 hover:underline">
                            Contact Support
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}