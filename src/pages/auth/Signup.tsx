// src/pages/SignUpPage.jsx

import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";

export default function SignUpPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center px-4">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5 bg-repeat bg-center"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'10\' fill=\'none\' stroke=\'%23FF6B35\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                }}
            ></div>

            <div className="relative z-10 w-full max-w-md mx-auto">
                <AuthHeader />

                <AuthCard title="Create Account">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 shadow-sm"
                                autoComplete="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 shadow-sm"
                                autoComplete="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 shadow-sm"
                                autoComplete="new-password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-200 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 shadow-sm"
                                autoComplete="new-password"
                            />
                        </div>
                    
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg text-lg tracking-wide mt-2"
                        >
                            Create Account
                        </button>
                        <div className="text-xs text-gray-400 text-center mt-2">
                            By signing up, you agree to our
                            <a href="#" className="text-orange-400 hover:underline ml-1">Terms &amp; Conditions</a>.
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-base text-gray-300">
                            Already have an account?{' '}
                            <a href="/signin" className="text-orange-400 hover:underline font-semibold">
                                Sign In
                            </a>
                        </p>
                    </div>
                </AuthCard>
            </div>
        </div>
    );
}