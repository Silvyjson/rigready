// src/pages/EmailSentPage.jsx

import AuthHeader from "../../components/auth/AuthHeader";

export default function EmailSentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center px-4">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5 bg-repeat bg-center"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'10\' fill=\'none\' stroke=\'%23FF6B35\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                }}
            ></div>

            <div className="relative z-10 w-full max-w-md mx-auto">
                <AuthHeader />

                <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full text-center">
                    <div className="flex justify-center mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF6B35"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-4"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-orange-500 mb-4">Check Your Inbox</h2>
                    <p className="text-gray-300 mb-8">
                        We’ve sent a password reset link to your email address. Please check your inbox (and spam/junk folder) and click the link to continue.
                    </p>

                    <button
                        onClick={() => window.location.href = "/signin"}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        Back to Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}