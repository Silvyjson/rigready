import { useState, useEffect } from "react";

export default function Header({ title = "Employer Dashboard" }) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const today = new Date().toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    return (
        <header className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center border-b border-gray-700">
            {/* Left: Title and subtitle */}
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-orange-500">{title}</h1>
                <p className="text-sm text-gray-400">Welcome back! Here's your overview</p>
            </div>

            {/* Right: Actions & User Menu */}
            <div className="flex items-center space-x-4">
                {/* Time Display */}
                <div className="text-right hidden md:block">
                    <p className="text-sm text-gray-500">{today}</p>
                    <p className="font-mono text-md text-gray-300">{currentTime}</p>
                </div>

                {/* Notifications Button */}
                <div className="relative">
                    <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-300"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg z-50 p-4 text-sm">
                            <p className="font-semibold text-orange-500 mb-2">Notifications</p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2 text-orange-500">🔔</span> New applications for Drilling Engineer
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-orange-500">⚠️</span> Certification about to expire
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-orange-500">📅</span> Interview scheduled for tomorrow
                                </li>
                            </ul>
                            <hr className="my-2 border-gray-700" />
                            <button
                                className="text-orange-500 text-xs hover:underline"
                                onClick={() => setShowNotifications(false)}
                            >
                                Mark all as read
                            </button>
                        </div>
                    )}
                </div>

                {/* Profile Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-medium transition-colors"
                    >
                        JN
                    </button>

                    {/* Profile Dropdown */}
                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg z-50">
                            <ul>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors"
                                    onClick={() => setShowProfileMenu(false)}
                                >
                                    Profile
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors"
                                    onClick={() => setShowProfileMenu(false)}
                                >
                                    Settings
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-red-400 transition-colors"
                                    onClick={() => setShowProfileMenu(false)}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}