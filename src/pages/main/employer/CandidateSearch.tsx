// src/pages/employer/CandidateSearch.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface Candidate {
    id: number;
    name: string;
    job: string;
    matchScore: number;
    certs: string[];
    tags: string[];
    location: string;
    experience: number;
    rotation: string[];
    available: string;
    languages: string[];
    medical: boolean;
}

interface Filters {
    location: string;
    certifications: string[];
    experienceMin: number;
    experienceMax: number;
    category: string;
    availability: string;
    rotationExperience: string[];
    languageSkills: string[];
    medicalFit: string;
}

export default function CandidateSearch() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filters, setFilters] = useState<Filters>({
        location: "",
        certifications: [],
        experienceMin: 0,
        experienceMax: 30,
        category: "",
        availability: "",
        rotationExperience: [],
        languageSkills: [],
        medicalFit: "",
    });

    const [candidates] = useState<Candidate[]>([
        {
            id: 1,
            name: "John Doe",
            job: "Drilling Engineer",
            matchScore: 92,
            certs: ["BOSIET", "FOET"],
            tags: ["Offshore-ready", "Medically Cleared"],
            location: "Nigeria",
            experience: 8,
            rotation: ["14/14", "21/21"],
            available: "Immediate",
            languages: ["English", "French"],
            medical: true,
        },
        {
            id: 2,
            name: "Amina Musa",
            job: "HSE Officer",
            matchScore: 87,
            certs: ["NEBOSH", "HUET"],
            tags: ["Onshore", "Pending Medical"],
            location: "UAE",
            experience: 5,
            rotation: ["14/14"],
            available: "14 Days",
            languages: ["Arabic", "English"],
            medical: false,
        },
        {
            id: 3,
            name: "Mark Lee",
            job: "Rig Supervisor",
            matchScore: 78,
            certs: ["IWCF", "OPITO"],
            tags: ["Rotation Veteran", "Medical Required"],
            location: "Gulf of Mexico",
            experience: 12,
            rotation: ["21/21"],
            available: "1 Month",
            languages: ["Spanish", "English"],
            medical: false,
        },
    ]);

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [selectedProfile, setSelectedProfile] = useState<Candidate | null>(null);

    const certificationOptions = ["BOSIET", "HUET", "FOET", "IWCF", "NEBOSH", "OPITO"];
    const jobCategories = ["Drilling", "HSE", "Operations", "Engineering", "Welding", "Maintenance"];
    const rotationPatterns = ["14/14", "21/21", "30/30"];
    const languageOptions = ["English", "Arabic", "French", "Spanish", "Portuguese"];

    // Update applyFilters to include all filter logic
    const applyFilters = (candidate: Candidate) => {
        const certMatch = filters.certifications.every((cert) =>
            candidate.certs.includes(cert)
        );
        const expRange =
            candidate.experience >= filters.experienceMin &&
            candidate.experience <= filters.experienceMax;
        const locMatch = filters.location
            ? candidate.location.toLowerCase().includes(filters.location.toLowerCase())
            : true;
        const catMatch = filters.category ? candidate.job === filters.category : true;
        const availMatch = filters.availability
            ? candidate.available.toLowerCase().includes(filters.availability.toLowerCase())
            : true;
        const rotationMatch = filters.rotationExperience.length > 0
            ? filters.rotationExperience.every((rot) => candidate.rotation.includes(rot))
            : true;
        const langMatch = filters.languageSkills.length > 0
            ? filters.languageSkills.every((lang) => candidate.languages.includes(lang))
            : true;
        const medMatch = filters.medicalFit === "cleared"
            ? candidate.medical === true
            : filters.medicalFit === "pending"
            ? candidate.medical === false
            : true;
        // Search query match (name, certs, tags, location, job)
        const query = searchQuery.trim().toLowerCase();
        const queryMatch = !query ||
            candidate.name.toLowerCase().includes(query) ||
            candidate.certs.some((c) => c.toLowerCase().includes(query)) ||
            candidate.tags.some((t) => t.toLowerCase().includes(query)) ||
            candidate.location.toLowerCase().includes(query) ||
            candidate.job.toLowerCase().includes(query);
        return (
            certMatch &&
            expRange &&
            locMatch &&
            catMatch &&
            availMatch &&
            rotationMatch &&
            langMatch &&
            medMatch &&
            queryMatch
        );
    };

    const filteredCandidates = candidates.filter(applyFilters);

    const toggleCertFilter = (cert: string) => {
        setFilters((prev) => ({
            ...prev,
            certifications: prev.certifications.includes(cert)
                ? prev.certifications.filter((c) => c !== cert)
                : [...prev.certifications, cert],
        }));
    };

    const toggleRotation = (pattern: string) => {
        setFilters((prev) => ({
            ...prev,
            rotationExperience: prev.rotationExperience.includes(pattern)
                ? prev.rotationExperience.filter((r) => r !== pattern)
                : [...prev.rotationExperience, pattern],
        }));
    };

    const openProfile = (candidate: Candidate) => {
        setSelectedProfile(candidate);
    };

    const closeProfile = () => {
        setSelectedProfile(null);
    };

    return (
        <EmployerLayout title="Search Candidates">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
                {/* Top Search Bar */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="🔍 Search by name, skill, cert or location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                setFilters({
                                    location: "",
                                    certifications: [],
                                    experienceMin: 0,
                                    experienceMax: 30,
                                    category: "",
                                    availability: "",
                                    rotationExperience: [],
                                    languageSkills: [],
                                    medicalFit: "",
                                })
                            }
                            className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md transition-colors"
                        >
                            ❌ Clear All
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                            💾 Save Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Filters Panel */}
                    <div className="lg:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24 h-fit">
                        <h3 className="font-semibold mb-4">Advanced Filters</h3>

                        {/* Location */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Location</label>
                            <input
                                type="text"
                                placeholder="Country or region"
                                value={filters.location}
                                onChange={(e) =>
                                    setFilters({ ...filters, location: e.target.value })
                                }
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            />
                        </div>

                        {/* Certifications */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Certifications</label>
                            <div className="space-y-1">
                                {certificationOptions.map((cert) => (
                                    <label key={cert} className="flex items-center text-sm">
                                        <input
                                            type="checkbox"
                                            checked={filters.certifications.includes(cert)}
                                            onChange={() => toggleCertFilter(cert)}
                                            className="mr-2"
                                        />
                                        {cert}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Experience Range */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Experience</label>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>{filters.experienceMin} yrs</span>
                                <span>{filters.experienceMax} yrs</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="30"
                                value={filters.experienceMax}
                                onChange={(e) =>
                                    setFilters({ ...filters, experienceMax: parseInt(e.target.value) })
                                }
                                className="w-full accent-orange-500"
                            />
                        </div>

                        {/* Job Category */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Job Category</label>
                            <select
                                value={filters.category}
                                onChange={(e) =>
                                    setFilters({ ...filters, category: e.target.value })
                                }
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            >
                                <option value="">All Categories</option>
                                {jobCategories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Availability */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Availability</label>
                            <select
                                value={filters.availability}
                                onChange={(e) =>
                                    setFilters({ ...filters, availability: e.target.value })
                                }
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            >
                                <option value="">Any</option>
                                <option value="immediate">Immediate</option>
                                <option value="14 days">14 Days</option>
                                <option value="1 month">1 Month</option>
                            </select>
                        </div>

                        {/* Rotation Patterns */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Rotation Experience</label>
                            <div className="space-y-1">
                                {rotationPatterns.map((pattern) => (
                                    <label key={pattern} className="flex items-center text-sm">
                                        <input
                                            type="checkbox"
                                            checked={filters.rotationExperience.includes(pattern)}
                                            onChange={() => toggleRotation(pattern)}
                                            className="mr-2"
                                        />
                                        {pattern}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Language Skills */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Language Skills</label>
                            <select
                                multiple
                                value={filters.languageSkills}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        languageSkills: Array.from(
                                            e.target.selectedOptions,
                                            (option) => option.value
                                        ),
                                    })
                                }
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            >
                                {languageOptions.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Medical Fitness */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Medical Fitness</label>
                            <select
                                value={filters.medicalFit}
                                onChange={(e) =>
                                    setFilters({ ...filters, medicalFit: e.target.value })
                                }
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            >
                                <option value="">All</option>
                                <option value="cleared">Cleared</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        {/* Reset Button */}
                        <div className="mt-6">
                            <button
                                onClick={() =>
                                    setFilters({
                                        location: "",
                                        certifications: [],
                                        experienceMin: 0,
                                        experienceMax: 30,
                                        category: "",
                                        availability: "",
                                        rotationExperience: [],
                                        languageSkills: [],
                                        medicalFit: "",
                                    })
                                }
                                className="w-full bg-red-900 hover:bg-red-800 text-red-400 py-2 px-4 rounded-md transition-colors"
                            >
                                🧹 Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Right Results Panel */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Sort Options */}
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-400">
                                Showing {filteredCandidates.length} results
                            </div>
                            <div className="inline-flex rounded-md bg-gray-800 p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`px-3 py-1 rounded ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-gray-400"
                                        }`}
                                >
                                    📆 Grid View
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`px-3 py-1 rounded ${viewMode === "list" ? "bg-orange-500 text-white" : "text-gray-400"
                                        }`}
                                >
                                    📋 List View
                                </button>
                            </div>
                        </div>

                        {/* Candidate Cards */}
                        {filteredCandidates.length > 0 ? (
                            <>
                                {viewMode === "grid" ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredCandidates.map((candidate) => (
                                            <CandidateCard
                                                key={candidate.id}
                                                candidate={candidate}
                                                onOpen={() => openProfile(candidate)}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                                        <thead className="bg-gray-900">
                                            <tr>
                                                <th className="p-3 text-left">Name</th>
                                                <th className="p-3 text-left">Role</th>
                                                <th className="p-3 text-left">Match Score</th>
                                                <th className="p-3 text-left">Location</th>
                                                <th className="p-3 text-left">Experience</th>
                                                <th className="p-3 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-700">
                                            {filteredCandidates.map((candidate) => (
                                                <tr key={candidate.id} className="hover:bg-gray-700">
                                                    <td className="p-3 font-medium">{candidate.name}</td>
                                                    <td className="p-3">{candidate.job}</td>
                                                    <td className="p-3">
                                                        <div className="flex items-center">
                                                            <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                                                                <div
                                                                    className="h-full bg-green-500 rounded-full"
                                                                    style={{ width: `${candidate.matchScore}%` }}
                                                                ></div>
                                                            </div>
                                                            <span>{candidate.matchScore}%</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-3">{candidate.location}</td>
                                                    <td className="p-3">{candidate.experience} years</td>
                                                    <td className="p-3 text-right">
                                                        <button
                                                            onClick={() => openProfile(candidate)}
                                                            className="text-orange-500 hover:underline text-sm"
                                                        >
                                                            View Profile
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12 bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-300 mb-2">
                                    No candidates found
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Try adjusting your filters or clearing some selections.
                                </p>
                                <button
                                    onClick={() => setFilters({ ...filters, location: "", certifications: [] })}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm"
                                >
                                    🔍 Widen Search
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <button className="mx-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
                                Previous
                            </button>
                            <button className="mx-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md">
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slideout Profile Viewer */}
                {selectedProfile && (
                    <div className="fixed inset-y-0 right-0 w-full sm:w-1/2 bg-gray-800 shadow-lg z-50 transform transition-transform translate-x-0 animate-slideInFromRight">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">{selectedProfile.name}</h2>
                                <button onClick={closeProfile} className="text-gray-400 hover:text-white">
                                    &times;
                                </button>
                            </div>
                            <p className="text-gray-400 mb-4">{selectedProfile.job}</p>
                            <div className="mb-4">
                                <strong>Certifications:</strong>
                                <ul className="mt-2 space-y-1">
                                    {selectedProfile.certs.map((cert, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="inline-block w-4 h-4 mr-2 text-green-500">✔</span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-4">
                                <strong>Tags:</strong>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedProfile.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 text-orange-400 text-xs px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <strong>Location:</strong> {selectedProfile.location}
                            </div>
                            <div className="mb-4">
                                <strong>Years of Experience:</strong> {selectedProfile.experience}
                            </div>
                            <div className="mb-4">
                                <strong>Rotation Pattern:</strong>{" "}
                                {selectedProfile.rotation.join(", ")}
                            </div>
                            <div className="mb-4">
                                <strong>Languages:</strong> {selectedProfile.languages.join(", ")}
                            </div>
                            <div className="mb-6">
                                <strong>Medical Status:</strong>{" "}
                                <span
                                    className={
                                        selectedProfile.medical
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                >
                                    {selectedProfile.medical ? "Cleared" : "Pending"}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex-1">
                                    ➕ Add to Shortlist
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex-1">
                                    💬 Message
                                </button>
                                <button className="bg-green-900 hover:bg-green-800 text-green-300 px-4 py-2 rounded-md flex-1">
                                    📅 Schedule Interview
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </EmployerLayout>
    );
}

// Reusable Candidate Card Component
interface CandidateCardProps {
    candidate: Candidate;
    onOpen: () => void;
}

const CandidateCard = ({ candidate, onOpen }: CandidateCardProps) => {
    return (
        <div
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 cursor-pointer"
            onClick={onOpen}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{candidate.name}</h3>
                <span className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded">
                    {candidate.matchScore}% Match
                </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">{candidate.job}</p>
            <div className="flex flex-wrap gap-1 mb-2">
                {candidate.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded ${tag.includes("ready")
                                ? "bg-blue-900 text-blue-300"
                                : "bg-orange-900 text-orange-300"
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                {candidate.certs.map((cert, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded">
                        {cert}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-end">
                <button className="text-orange-500 hover:underline text-sm">View →</button>
            </div>
        </div>
    );
};