// src/pages/employer/ApplicantTracking.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

export default function ApplicantTracking() {
    const [activeStage, setActiveStage] = useState("applied");
    const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

    // Mock Data
    const stages = ["applied", "shortlisted", "interviewing", "offer-sent", "hired", "rejected"];
    const initialCandidates = [
        {
            id: 1,
            name: "John Doe",
            job: "Drilling Engineer",
            matchScore: 87,
            certs: { BOSIET: true, HUET: false, FOET: true, NEBOSH: false, "Medical Fitness": false, IWCF: false, OPITO: false },
            stage: "applied",
            daysInStage: 2,
        },
        {
            id: 2,
            name: "Amina Musa",
            job: "HSE Officer",
            matchScore: 93,
            certs: { BOSIET: false, HUET: false, FOET: false, NEBOSH: true, "Medical Fitness": true, IWCF: false, OPITO: false },
            stage: "shortlisted",
            daysInStage: 5,
        },
        {
            id: 3,
            name: "Mark Lee",
            job: "Rig Supervisor",
            matchScore: 78,
            certs: { BOSIET: false, HUET: false, FOET: false, NEBOSH: false, "Medical Fitness": false, IWCF: false, OPITO: true },
            stage: "interviewing",
            daysInStage: 3,
        },
        {
            id: 4,
            name: "Abdul Rahman",
            job: "Petroleum Engineer",
            matchScore: 89,
            certs: { BOSIET: true, HUET: true, FOET: false, NEBOSH: false, "Medical Fitness": false, IWCF: false, OPITO: false },
            stage: "offer-sent",
            daysInStage: 1,
        },
    ];

    const [candidates, setCandidates] = useState(initialCandidates);

    interface ToggleSelect {
        (id: number): void;
    }

    const toggleSelect: ToggleSelect = (id) => {
        setSelectedCandidates((prev) =>
            prev.includes(id)
                ? prev.filter((cid) => cid !== id)
                : [...prev, id]
        );
    };

    interface MoveCandidates {
        (newStage: string): void;
    }

    const moveCandidates: MoveCandidates = (newStage) => {
        setCandidates((prev) =>
            prev.map((c) =>
                selectedCandidates.includes(c.id)
                    ? { ...c, stage: newStage }
                    : c
            )
        );
    };

    const openDetails = (candidate: Candidate) => {
        setSelectedCandidate(candidate);
        setShowDetails(true);
    };

    const closeDetails = () => {
        setShowDetails(false);
    };

    const filteredByStage = (stage: string) =>
        candidates.filter((c) => c.stage === stage);

    const getStageColor = (stage: string) => {
        switch (stage) {
            case "applied":
                return "bg-yellow-900 text-yellow-200";
            case "shortlisted":
                return "bg-blue-900 text-blue-200";
            case "interviewing":
                return "bg-orange-900 text-orange-200";
            case "offer-sent":
                return "bg-green-900 text-green-200";
            case "hired":
                return "bg-purple-900 text-purple-200";
            case "rejected":
                return "bg-red-900 text-red-200";
            default:
                return "";
        }
    };

    // Candidate type for type safety
    interface Candidate {
        id: number;
        name: string;
        job: string;
        matchScore: number;
        certs: Record<string, boolean>;
        stage: string;
        daysInStage: number;
    }

    return (
        <EmployerLayout title="Track Applicants">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
                {/* Top Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="relative w-full md:w-1/2 lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-2 top-1.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select
                            onChange={(e) => setActiveStage(e.target.value)}
                            value={activeStage}
                            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm"
                        >
                            <option value="">All Stages</option>
                            <option value="applied">Applied</option>
                            <option value="shortlisted">Shortlisted</option>
                            <option value="interviewing">Interviewing</option>
                            <option value="offer-sent">Offer Sent</option>
                            <option value="hired">Hired</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Certification Status</option>
                            <option>Valid</option>
                            <option>Missing</option>
                            <option>Expired</option>
                        </select>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm">
                            📥 Export Shortlist
                        </button>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedCandidates.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-800 rounded-lg shadow flex items-center justify-between">
                        <span className="text-sm">{selectedCandidates.length} candidates selected</span>
                        <div className="space-x-2">
                            <button
                                onClick={() => moveCandidates("shortlisted")}
                                className="text-xs px-3 py-1 bg-blue-900 text-blue-200 rounded hover:bg-blue-800">
                                ➡ Move to Shortlisted
                            </button>
                            <button
                                onClick={() => moveCandidates("rejected")}
                                className="text-xs px-3 py-1 bg-red-900 text-red-200 rounded hover:bg-red-800">
                                🗑 Reject
                            </button>
                            <button
                                onClick={() => moveCandidates("hired")}
                                className="text-xs px-3 py-1 bg-green-900 text-green-200 rounded hover:bg-green-800">
                                ✔ Hire
                            </button>
                        </div>
                    </div>
                )}

                {/* Pipeline Board */}
                <div className="grid grid-cols-1 gap-4">
                    {stages.map((stage) => (
                        <div key={stage} className={`p-4 rounded-lg shadow ${getStageColor(stage)} h-fit`}>
                            <h3 className="font-semibold capitalize mb-4">
                                {stage.replace("-", " ")}
                            </h3>
                            <div className="space-y-3">
                                {filteredByStage(stage).map((candidate) => (
                                    <div
                                        key={candidate.id}
                                        className="bg-gray-700 p-4 rounded shadow flex justify-between items-center cursor-pointer hover:bg-gray-600 transition-colors"
                                        onClick={() => openDetails(candidate)}
                                    >
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCandidates.includes(candidate.id)}
                                                    onChange={() => toggleSelect(candidate.id)}
                                                    className="mr-2"
                                                />
                                                <strong>{candidate.name}</strong>
                                            </div>
                                            <p className="text-sm text-gray-400">{candidate.job}</p>
                                            <p className="text-xs mt-1">Match Score: {candidate.matchScore}%</p>
                                            <div className="flex gap-1 mt-2">
                                                {Object.entries(candidate.certs).map(([cert, valid]) => (
                                                    <span
                                                        key={cert}
                                                        className={`inline-block text-xs px-2 py-1 rounded ${valid ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"
                                                            }`}
                                                    >
                                                        {valid ? "✔" : "✖"} {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-xs text-gray-500">
                                                {candidate.daysInStage} day{candidate.daysInStage > 1 ? "s" : ""}
                                            </span>
                                            <button className="text-xs mt-1 text-orange-500 hover:underline">➡ View</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide-out Panel – Candidate Details */}
                {showDetails && selectedCandidate && (
                    <div className="fixed inset-y-0 right-0 w-full sm:w-1/2 bg-gray-800 shadow-lg z-50 transform transition-transform translate-x-0 animate-slideInFromRight">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold">{selectedCandidate.name}</h2>
                                <button onClick={closeDetails} className="text-gray-400 hover:text-white">
                                    &times;
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{selectedCandidate.job}</p>
                            <p className="text-sm mb-4">
                                Match Score:{" "}
                                <span className="text-green-400 font-medium">{selectedCandidate.matchScore}%</span>
                            </p>
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Certifications</h3>
                                <ul className="space-y-2">
                                    {Object.entries(selectedCandidate.certs).map(([cert, valid]) => (
                                        <li key={cert} className="flex items-center">
                                            <span className={`mr-2 ${valid ? "text-green-400" : "text-red-400"}`}>
                                                {valid ? "✅" : "❌"}
                                            </span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Profile Summary</h3>
                                <p className="text-sm text-gray-300">
                                    Drilling engineer with 8 years of experience in offshore operations.
                                </p>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Internal Notes</h3>
                                <textarea
                                    rows={4}
                                    placeholder="Add internal review notes here..."
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-sm"
                                ></textarea>
                            </div>
                            <div className="mt-6 flex space-x-3">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                                    📨 Email
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                                    📞 Call
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                                    📅 Schedule Interview
                                </button>
                            </div>
                        </div>
          </div>
        )}
        </div>
    </EmployerLayout >
  );
}