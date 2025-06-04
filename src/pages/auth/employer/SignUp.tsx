// src/pages/EmployerSignUpPage.jsx

import AuthHeader from "../../../components/auth/AuthHeader";
import { Link } from "react-router-dom";

export default function EmployerSignUpPage() {
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

                <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-8 w-full">
                    <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">Register Your Company</h2>
                    <p className="text-sm text-gray-400 text-center mb-6">
                        Fill in your company details to start posting jobs and finding talent.
                    </p>

                    <form className="space-y-4">
                        {/* Company Name */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                placeholder="e.g., Shell Offshore Ltd."
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Contact Person */}
                        <div>
                            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-300 mb-1">
                                Contact Person
                            </label>
                            <input
                                type="text"
                                id="contactPerson"
                                placeholder="e.g., Jane Smith"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="employerEmail" className="block text-sm font-medium text-gray-300 mb-1">
                                Business Email
                            </label>
                            <input
                                type="email"
                                id="employerEmail"
                                placeholder="hr@company.com"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Industry Type */}
                        <div>
                            <label htmlFor="industryType" className="block text-sm font-medium text-gray-300 mb-1">
                                Industry Type
                            </label>
                            <select
                                id="industryType"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">Select industry</option>
                                <option>Upstream Exploration</option>
                                <option>Offshore Drilling</option>
                                <option>Refining & Processing</option>
                                <option>Oilfield Services</option>
                                <option>Engineering Contractor</option>
                                <option>Logistics & Support</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                Create Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="••••••••"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors mt-2"
                        >
                            Continue
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link to="/signin" className="text-orange-500 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}