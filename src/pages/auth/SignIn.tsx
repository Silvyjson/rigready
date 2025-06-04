// src/pages/SignInPage.jsx

import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";

export default function SignInPage() {
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

                <AuthCard title="Sign In">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                        >
                            Sign In
                        </button>
                        <div className="mt-2 text-right">
                            <a href="/forgot-password" className="text-xs text-orange-400 hover:underline font-medium">Forgot Password?</a>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Don't have an account?{" "}
                            <a href="/signup/choose" className="text-orange-500 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </AuthCard>
            </div>
        </div>
    );
}