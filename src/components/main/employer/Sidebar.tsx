// src/components/shared/Sidebar.jsx

import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-74 bg-gray-800 min-h-screen p-6 hidden md:block overflow-y-auto fixed left-0 top-0 h-screen z-40">
            <div className="mb-8 flex flex-col items-start space-x-2">
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
                    <h2 className="text-lg font-bold text-orange-500">RIGREADY</h2>
                </div>
                <p className="text-xs ml-10 text-gray-400 self-start">Employer Portal</p>
            </div>

            <nav className="space-y-2">
                <Link to="/employer/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    🏠 Dashboard
                </Link>
                <Link to="/employer/post-job" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    ➕ Post New Job
                </Link>
                <Link to="/employer/manage-jobs" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    📋 Manage Jobs
                </Link>
                <Link to="/employer/applicants" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    👥 Track Applications
                </Link>
                <Link to="/employer/candidates" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    🔍 Candidate Search
                </Link>
                <Link to="/employer/scheduler" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    🗓️ Interview Scheduler
                </Link>
                <Link to="/employer/rotation" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    ⚙️ Rotation Manager
                </Link>
                <Link to="/employer/analytics" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    📊 Analytics
                </Link>
                <Link to="/employer/compliance" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    ✅ Compliance Tracking
                </Link>
                <Link to="/employer/team" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    👥 Team & Access
                </Link>
                <Link to="/employer/settings" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                    ⚙️ Settings
                </Link>
            </nav>

            <div className="mt-auto pt-8 text-xs text-gray-500">
                <p>Logged in as:</p>
                <p className="font-semibold">John Nelson</p>
                <p className="text-orange-500 mt-2">Shell Offshore Ltd.</p>
            </div>
        </aside>
    );
}