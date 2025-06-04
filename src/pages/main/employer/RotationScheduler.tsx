// src/pages/employer/RotationScheduler.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface Rotation {
    id: number;
    candidate: string;
    rig: string;
    pattern: string;
    startDate: string;
    endDate: string;
    status: "on-duty" | "off-duty" | "in-transit" | "unavailable";
}

interface AssignRotationModalProps {
    onClose: () => void;
    onSubmit: (data: {
        candidate: string;
        rig: string;
        pattern: string;
        startDate: string;
        endDate: string;
    }) => void;
}

export default function RotationScheduler() {
    const [viewMode, setViewMode] = useState<"candidate" | "project">("candidate");
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState<Rotation | null>(null);

    // Sample Data
    const rotations: Rotation[] = [
        {
            id: 1,
            candidate: "John Doe",
            rig: "Nigeria Offshore Rig A",
            pattern: "14/14",
            startDate: "2025-04-01",
            endDate: "2025-04-14",
            status: "on-duty",
        },
        {
            id: 2,
            candidate: "Amina Musa",
            rig: "Gulf of Mexico Rig B",
            pattern: "21/21",
            startDate: "2025-04-15",
            endDate: "2025-05-05",
            status: "off-duty",
        },
        {
            id: 3,
            candidate: "Mark Lee",
            rig: "Texas Onshore Site",
            pattern: "custom",
            startDate: "2025-04-10",
            endDate: "2025-04-20",
            status: "in-transit",
        },
    ];

    const rigs = ["Rig A – Nigeria", "Rig B – Gulf of Mexico", "Onshore Site – Texas"];

    const getStatusColor = (status: Rotation["status"]): string => {
        switch (status) {
            case "on-duty": return "bg-green-600 text-white";
            case "off-duty": return "bg-blue-600 text-white";
            case "in-transit": return "bg-orange-500 text-white";
            case "unavailable": return "bg-gray-500 text-white";
            default: return "bg-gray-500 text-white";
        }
    };

    const getRotationStatus = (status: Rotation["status"]): string => {
        switch (status) {
            case "on-duty": return "🟢 On Duty";
            case "off-duty": return "🔵 Off Duty";
            case "in-transit": return "🟠 In Transit";
            case "unavailable": return "⚪ Unavailable";
            default: return status;
        }
    };

    return (
        <EmployerLayout title="Rotation & Deployment">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
                {/* Top Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search by name or job..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-2 top-1.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Rotation Type</option>
                            <option value="14/14">14/14</option>
                            <option value="21/21">21/21</option>
                            <option value="custom">Custom</option>
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Rig / Project</option>
                            {rigs.map((rig, i) => (
                                <option key={i} value={rig}>
                                    {rig}
                                </option>
                            ))}
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Status</option>
                            <option value="assigned">Assigned</option>
                            <option value="unassigned">Unassigned</option>
                            <option value="in-transit">In Transit</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm">
                            ➕ New Assignment
                        </button>
                    </div>
                </div>

                {/* View Toggle */}
                <div className="mb-6 flex justify-end">
                    <div className="inline-flex rounded-md bg-gray-800 p-1 space-x-1">
                        <button
                            onClick={() => setViewMode("candidate")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "candidate" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            🧑 Candidate View
                        </button>
                        <button
                            onClick={() => setViewMode("project")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "project" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            🏗️ Project View
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-gray-400">
                                <th className="p-3 text-left">{viewMode === "candidate" ? "Candidate" : "Project"}</th>
                                <th className="p-3 text-center">April 2025</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {rotations.map((rotation) => (
                                <tr key={rotation.id} className="hover:bg-gray-700 cursor-pointer">
                                    <td className="p-3 font-medium">
                                        {rotation.candidate}
                                        <br />
                                        <span className="text-xs text-gray-400">{rotation.rig}</span>
                                    </td>
                                    <td className="p-3">
                                        <div className="relative h-10 flex">
                                            <div
                                                className={`absolute h-full ${getStatusColor(rotation.status)} rounded`}
                                                style={{
                                                    left: `${getLeftOffset(rotation.startDate)}%`,
                                                    width: `${getWidth(rotation.startDate, rotation.endDate)}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Upcoming Rotations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-4">Upcoming Assignments</h3>
                        <div className="space-y-4">
                            {rotations.map((rotation) => (
                                <div
                                    key={rotation.id}
                                    className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition-colors"
                                    onClick={() => {
                                        setSelectedCandidate(rotation);
                                        setShowAssignModal(true);
                                    }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold">{rotation.candidate}</h4>
                                            <p className="text-sm text-gray-400">{rotation.rig}</p>
                                        </div>
                                        <span className={`inline-block text-xs px-2 py-1 rounded ${getStatusColor(rotation.status)}`}>
                                            {getRotationStatus(rotation.status)}
                                        </span>
                                    </div>
                                    <div className="mt-2 text-sm">
                                        <strong>Rotation:</strong> {rotation.pattern} •{" "}
                                        <strong>Dates:</strong> {rotation.startDate} – {rotation.endDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Readiness Checklist Sidebar */}
                    <div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
                            <h3 className="font-semibold mb-4">Deployment Readiness</h3>
                            {selectedCandidate ? (
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-green-500">✔</span>
                                        <p>BOSIET Certification – Valid Until 2026</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-green-500">✔</span>
                                        <p>HUET Certification – Valid Until 2026</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-green-500">✔</span>
                                        <p>Medical Clearance – Valid</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-red-500">❌</span>
                                        <p>Accommodation Confirmation – Pending</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-orange-500">⚠️</span>
                                        <p>Travel Arranged: Flight on April 1</p>
                                    </li>
                                </ul>
                            ) : (
                                <p className="text-gray-400 italic">Select a candidate to check readiness.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Export Section */}
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md">
                            📥 Export Plan
                        </button>
                        <button className="ml-2 bg-blue-700 hover:bg-blue-600 text-blue-200 px-4 py-2 rounded-md">
                            🔄 Sync with HRIS
                        </button>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Need help?</p>
                        <button className="text-orange-500 hover:underline text-sm">Contact Support</button>
                    </div>
                </div>

                {/* Assignment Modal */}
                {showAssignModal && (
                    <AssignRotationModal
                        onClose={() => setShowAssignModal(false)}
                        onSubmit={(data) => console.log("Assigned:", data)}
                    />
                )}
            </div>
        </EmployerLayout>
    );
}

// Helper functions for Gantt chart
function getLeftOffset(startDate: string): number {
    const date = new Date(startDate).getDate();
    return Math.max(0, date - 1) * 3; // Simulated offset
}

function getWidth(startDate: string, endDate: string): number {
    const start = new Date(startDate).getDate();
    const end = new Date(endDate).getDate();
    return Math.max(0, end - start) * 3;
}

const AssignRotationModal = ({ onClose, onSubmit }: AssignRotationModalProps) => {
    const [form, setForm] = useState({
        candidate: "",
        rig: "",
        pattern: "14/14",
        startDate: "",
        endDate: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
        onClose();
    };

    const rigs = ["Rig A – Nigeria", "Rig B – Gulf of Mexico", "Onshore Site – Texas"];
    const patterns = ["14/14", "21/21", "Custom"];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Assign to Rotation</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Candidate</label>
                        <select
                            name="candidate"
                            value={form.candidate}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            required
                        >
                            <option value="">Select Candidate</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Amina Musa">Amina Musa</option>
                            <option value="Mark Lee">Mark Lee</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Rig / Project</label>
                        <select
                            name="rig"
                            value={form.rig}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            required
                        >
                            <option value="">Select Rig</option>
                            {rigs.map((rig) => (
                                <option key={rig} value={rig}>{rig}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Rotation Pattern</label>
                        <select
                            name="pattern"
                            value={form.pattern}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            {patterns.map((pattern) => (
                                <option key={pattern} value={pattern}>{pattern}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={form.startDate}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            value={form.endDate}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mt-4"
                    >
                        Assign Rotation
                    </button>
                </form>
            </div>
        </div>
    );
};