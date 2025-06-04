// src/pages/employer/ManageJobs.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

export default function ManageJobs() {
    const [viewMode, setViewMode] = useState("table"); // table | card
    const [selectedJobs, setSelectedJobs] = useState<number[]>([]);
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Drilling Engineer",
            location: "Offshore – Nigeria",
            type: "Rotation",
            applicants: 15,
            status: "open",
        },
        {
            id: 2,
            title: "HSE Officer",
            location: "Onshore – Texas",
            type: "Full-time",
            applicants: 8,
            status: "closed",
        },
        {
            id: 3,
            title: "Petroleum Engineer",
            location: "Offshore – Gulf of Mexico",
            type: "Contract",
            applicants: 4,
            status: "draft",
        },
    ]);


    const toggleSelectJob = (id: number) => {
        setSelectedJobs((prev: number[]) =>
            prev.includes(id)
                ? prev.filter((jobId) => jobId !== id)
                : [...prev, id]
        );
    };

    const handleArchive = () => {
        setJobs((prev) =>
            prev.map((job) =>
                selectedJobs.includes(job.id)
                    ? { ...job, status: "archived" }
                    : job
            )
        );
        setSelectedJobs([]);
    };

    interface StatusBadgeClassMap {
        [key: string]: string;
    }

    type JobStatus = "open" | "closed" | "draft" | "archived" | string;

    const statusBadgeClass = (status: JobStatus): string => {
        const classes: StatusBadgeClassMap = {
            open: "bg-green-900 text-green-300",
            closed: "bg-red-900 text-red-300",
            draft: "bg-gray-700 text-gray-300",
            archived: "bg-gray-500 text-gray-200",
        };
        return classes[status] || "bg-orange-900 text-orange-300";
    };

    const filteredJobs = jobs; // Add filters later if needed

    return (
        <EmployerLayout title="Manage Jobs">
            <div className="container mx-auto px-6 py-6 max-w-6xl">
                {/* Top Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="w-full sm:w-1/3 relative">
                        <input
                            type="text"
                            placeholder="Search by job title or reference ID"
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-2 top-1.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Job Status</option>
                            <option value="open">Open</option>
                            <option value="draft">Draft</option>
                            <option value="closed">Closed</option>
                            <option value="archived">Archived</option>
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Location</option>
                            <option value="offshore">Offshore</option>
                            <option value="onshore">Onshore</option>
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Employment Type</option>
                            <option value="rotation">Rotation</option>
                            <option value="full-time">Full-Time</option>
                            <option value="contract">Contract</option>
                        </select>
                        <button
                            onClick={() => window.location.href = "/employer/post-job"}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                        >
                            ➕ New Job Post
                        </button>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedJobs.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-800 rounded-lg shadow flex items-center justify-between">
                        <div className="text-sm text-gray-300">
                            {selectedJobs.length} job(s) selected
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={handleArchive}
                                className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-1 rounded text-sm"
                            >
                                🗑 Archive
                            </button>
                            <button className="border border-blue-600 text-blue-400 hover:bg-blue-900 px-4 py-1 rounded text-sm">
                                📄 Duplicate
                            </button>
                            <button className="border border-red-600 text-red-400 hover:bg-red-900 px-4 py-1 rounded text-sm">
                                ❌ Close Posting
                            </button>
                        </div>
                    </div>
                )}

                {/* View Toggle */}
                <div className="mb-6 flex justify-end">
                    <div className="inline-flex rounded-md bg-gray-800 p-1 space-x-1">
                        <button
                            onClick={() => setViewMode("table")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "table" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            📋 Table View
                        </button>
                        <button
                            onClick={() => setViewMode("card")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "card" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            🧱 Card View
                        </button>
                    </div>
                </div>

                {/* Table View */}
                {viewMode === "table" && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                            <thead className="bg-gray-900">
                                <tr>
                                    <th className="p-3 text-left">#</th>
                                    <th className="p-3 text-left">Job Title</th>
                                    <th className="p-3 text-left">Location</th>
                                    <th className="p-3 text-left">Type</th>
                                    <th className="p-3 text-left">Applicants</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {filteredJobs.map((job) => (
                                    <tr key={job.id} className="hover:bg-gray-750 transition-colors">
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedJobs.includes(job.id)}
                                                onChange={() => toggleSelectJob(job.id)}
                                                className="form-checkbox h-4 w-4 text-orange-500"
                                            />
                                        </td>
                                        <td className="p-3 font-medium">{job.title}</td>
                                        <td className="p-3 text-gray-400">{job.location}</td>
                                        <td className="p-3 text-gray-400">{job.type}</td>
                                        <td className="p-3">{job.applicants}</td>
                                        <td className="p-3">
                                            <span
                                                className={`inline-block px-2 py-1 rounded text-xs ${statusBadgeClass(job.status)}`}
                                            >
                                                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="p-3 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="text-gray-400 hover:text-orange-500">👁</button>
                                                <button className="text-gray-400 hover:text-blue-400">✏</button>
                                                <button className="text-gray-400 hover:text-yellow-400">📤</button>
                                                <button className="text-gray-400 hover:text-red-400">🗑</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Card View */}
                {viewMode === "card" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-750 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold">{job.title}</h3>
                                    <span
                                        className={`inline-block px-2 py-1 rounded text-xs ${statusBadgeClass(job.status)}`}
                                    >
                                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{job.location}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                                        {job.type}
                                    </span>
                                    <span className="bg-orange-900 text-orange-300 text-xs px-2 py-1 rounded">
                                        Applicants: {job.applicants}
                                    </span>
                                </div>
                                <div className="flex justify-between mt-4 pt-2 border-t border-gray-700">
                                    <button className="text-orange-500 hover:underline text-sm">Edit</button>
                                    <button className="text-gray-400 hover:text-red-400 text-sm">Archive</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination / Infinite Scroll */}
                <div className="mt-6 flex justify-center">
                    <button className="mx-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">Previous</button>
                    <button className="mx-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md">Next</button>
                </div>
            </div>
        </EmployerLayout>
    );
}