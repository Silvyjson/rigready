// src/pages/employer/Dashboard.jsx

import React from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Types
type StatCardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
    link: string;
};

type JobPipeline = {
    title: string;
    applicants: number;
    shortlisted: number;
    targetApplicants: number;
    status: 'active' | 'closed';
};

type ActivityItemProps = {
    icon: React.ReactNode;
    text: string;
    time: string;
};

type ComplianceAlertProps = {
    icon: React.ReactNode;
    message: string;
};

// Components
const StatCard = ({ title, value, icon, link }: StatCardProps) => (
    <a href={link} className="block hover:shadow-lg transition-shadow">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:bg-gray-750">
            <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
            </div>
        </div>
    </a>
);

const JobPipelineCard = ({ job }: { job: JobPipeline }) => (
    <div className="bg-gray-800 rounded-lg p-4 mb-3 shadow hover:bg-gray-750">
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold">{job.title}</h4>
            <span
                className={`px-2 py-1 text-xs rounded ${job.status === "active"
                        ? "bg-green-900 text-green-300"
                        : "bg-gray-700 text-gray-300"
                    }`}
            >
                {job.status === "active" ? "Active" : "Closed"}
            </span>
        </div>
        <div className="mb-3">
            <div className="flex justify-between text-sm text-gray-400">
                <span>Applicants</span>
                <span>{job.applicants}</span>
            </div>
            <div className="mt-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-orange-500"
                    style={{ width: `${(job.applicants / job.targetApplicants) * 100}%` }}
                ></div>
            </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
            <span>Shortlisted</span>
            <span>{job.shortlisted}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm">
            View Applicants
        </button>
    </div>
);

const ActivityItem = ({ icon, text, time }: ActivityItemProps) => (
    <div className="flex items-start mb-3">
        <div className="mr-3 text-orange-500">{icon}</div>
        <div>
            <p className="text-sm">{text}</p>
            <p className="text-xs text-gray-500">{time}</p>
        </div>
    </div>
);

const ComplianceAlert = ({ icon, message }: ComplianceAlertProps) => (
    <div className="flex items-start bg-red-950 border border-red-800 p-3 rounded mb-3">
        <div className="mr-3 text-red-500">{icon}</div>
        <p className="text-sm text-red-400">{message}</p>
    </div>
);

const HiringTrendGraph = () => (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-4">Hiring Trends</h3>
        <div className="relative h-40 mb-4">
            {/* Mocked Graph */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {[15, 30, 25, 40, 35, 50].map((height, i) => (
                    <div key={i} className="w-8 bg-orange-500" style={{ height: `${height}px` }}></div>
                ))}
            </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
        </div>
        <div className="mt-4 flex space-x-2">
            <button className="text-xs px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">Applications</button>
            <button className="text-xs px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">Jobs Filled</button>
            <button className="text-xs px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">Cert Issues</button>
        </div>
    </div>
);

// New Component - Match Score Distribution (Pie Chart Mockup)
const MatchScoreChart = () => (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-4">AI Match Scores</h3>
        <div className="flex justify-center items-center h-40 mb-4">
            {/* Pie chart simulation using divs */}
            <div className="relative w-40 h-40">
                <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-conic from-orange-500 to-gray-800 h-full w-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                    87%
                </div>
            </div>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
            <div className="flex justify-between">
                <span>Excellent Matches (90%+)</span>
                <span>12</span>
            </div>
            <div className="flex justify-between">
                <span>Good Matches (70–89%)</span>
                <span>24</span>
            </div>
            <div className="flex justify-between">
                <span>Fair Matches (50–69%)</span>
                <span>10</span>
            </div>
        </div>
    </div>
);

export default function Dashboard() {
    const stats = [
        { title: "Open Jobs", value: "12", icon: "👷", link: "/employer/manage-jobs" },
        { title: "Total Applicants", value: "24", icon: "👥", link: "/employer/applicants" },
        { title: "Avg. Time to Hire", value: "14 days", icon: "⏱️", link: "/employer/analytics" },
        { title: "Positions Filled", value: "3", icon: "📈", link: "/employer/analytics" }
    ];

    const jobs: JobPipeline[] = [
        { title: "Drilling Engineer", applicants: 15, shortlisted: 5, targetApplicants: 20, status: "active" },
        { title: "HSE Officer", applicants: 8, shortlisted: 2, targetApplicants: 10, status: "closed" }
    ];

    return (
        <EmployerLayout title="Employer Dashboard">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            {/* Pipeline + Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Left Column - Pipeline Overview */}
                <div className="space-y-6">
                    <HiringTrendGraph />
                    <MatchScoreChart />
                </div>


                {/* Right Column - Analytics Widgets */}
                <div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                        <h2 className="text-xl font-bold mb-4">Job Pipeline Overview</h2>
                        {jobs.map((job, index) => (
                            <JobPipelineCard key={index} job={job} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity + Compliance Alerts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <ActivityItem
                        icon="📥"
                        text="New applicant for Drilling Engineer"
                        time="2 hours ago"
                    />
                    <ActivityItem
                        icon="⚠️"
                        text="HUET certificate expired – John Doe"
                        time="5 hours ago"
                    />
                    <ActivityItem
                        icon="📅"
                        text="Interview scheduled for HSE Officer"
                        time="Yesterday"
                    />
                </div>

                {/* Compliance Alerts */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Compliance Alerts 🚨</h3>
                    <ComplianceAlert
                        icon="⛔"
                        message="John Smith’s BOSIET certification expires in 10 days."
                    />
                    <ComplianceAlert
                        icon="⛔"
                        message="Amina Musa is missing medical fitness clearance."
                    />
                    <a href="/employer/compliance" className="text-orange-500 text-sm hover:underline block mt-2">
                        → View all compliance issues
                    </a>
                </div>
            </div>
        </EmployerLayout>
    );
}