// src/pages/ChooseRolePage.jsx

import AuthHeader from "../../components/auth/AuthHeader";
import { Link } from "react-router-dom";

export default function ChooseRolePage() {
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

                <h2 className="text-2xl font-bold text-white text-center mb-8">Are you a...</h2>

                <div className="grid grid-cols-1 gap-6">
                    {/* Candidate Card */}
                    <button
                        onClick={() => (window.location.href = "/signup/candidate")}
                        className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl shadow-lg p-6 text-left flex items-center space-x-4"
                    >
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            C
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-500">Job Seeker</h3>
                            <p className="text-gray-300">Looking for offshore or upstream opportunities?</p>
                        </div>
                    </button>

                    {/* Employer Card */}
                    <button
                        onClick={() => (window.location.href = "/signup/employer")}
                        className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl shadow-lg p-6 text-left flex items-center space-x-4"
                    >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            E
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-400">Hiring Manager</h3>
                            <p className="text-gray-300">Post jobs and find skilled oil & gas professionals.</p>
                        </div>
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-orange-500 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}