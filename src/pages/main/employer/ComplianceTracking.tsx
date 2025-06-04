// src/pages/employer/ComplianceTracking.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface Candidate {
    id: number;
    name: string;
    job: string;
    certs: Record<string, string>;
    jurisdiction: string;
    status: "compliant" | "incomplete";
}

interface Filters {
    certType: string;
    status: string;
    jurisdiction: string;
    role: string;
}

export default function ComplianceTracking() {
    const [filters, setFilters] = useState<Filters>({
        certType: "",
        status: "",
        jurisdiction: "",
        role: "",
    });

    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
    const [showSlideout, setShowSlideout] = useState(false);

    // Sample Data
    const candidates: Candidate[] = [
        {
            id: 1,
            name: "John Doe",
            job: "HSE Lead",
            certs: {
                BOSIET: "valid",
                HUET: "valid",
                FOET: "expired",
                Medical: "valid",
                WorkPermit: "pending",
            },
            jurisdiction: "Nigeria",
            status: "incomplete",
        },
        {
            id: 2,
            name: "Amina Musa",
            job: "Drilling Engineer",
            certs: {
                BOSIET: "valid",
                HUET: "expiring",
                FOET: "valid",
                Medical: "pending",
                WorkPermit: "missing",
            },
            jurisdiction: "Gulf of Mexico",
            status: "incomplete",
        },
        {
            id: 3,
            name: "Mark Lee",
            job: "Rig Supervisor",
            certs: {
                BOSIET: "valid",
                HUET: "valid",
                FOET: "valid",
                Medical: "valid",
                WorkPermit: "valid",
            },
            jurisdiction: "Texas",
            status: "compliant",
        },
    ];

    const certificationTypes = ["BOSIET", "HUET", "FOET", "IWCF", "NEBOSH", "Medical"];
    const jurisdictions = ["Nigeria", "Gulf of Mexico", "Texas", "UK", "Australia"];

    type CertStatus = "valid" | "expiring" | "expired" | "missing" | "pending" | string;


    const getCertStatusColor = (status: CertStatus): string => {
        switch (status) {
            case "valid": return "text-green-500";
            case "expiring": return "text-yellow-500";
            case "expired": return "text-red-500";
            case "missing": return "text-gray-400";
            case "pending": return "text-orange-500";
            default: return "";
        }
    };

    interface RowBgProps {
        status: "compliant" | "incomplete";
    }

    const getRowBg = (status: RowBgProps["status"]): string => {
        return status === "compliant" ? "bg-green-900 bg-opacity-20" : "bg-red-900 bg-opacity-10 hover:bg-opacity-20";
    };

    const filteredCandidates = candidates.filter((c) => {
        if (filters.certType && !(filters.certType in c.certs)) return false;
        if (filters.status && c.status !== filters.status) return false;
        if (filters.jurisdiction && c.jurisdiction !== filters.jurisdiction) return false;
        if (filters.role && !c.job.toLowerCase().includes(filters.role.toLowerCase())) return false;
        return true;
    });

    const openDetails = (candidate: Candidate) => {
        setSelectedCandidate(candidate);
        setShowSlideout(true);
    };

    const closeDetails = () => {
        setShowSlideout(false);
        setSelectedCandidate(null);
    };

    return (
        <EmployerLayout title="Compliance & Certification">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
                {/* Top Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search by candidate, job, or cert..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-2 top-1.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select
                            value={filters.certType}
                            onChange={(e) =>
                                setFilters({ ...filters, certType: e.target.value })
                            }
                            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm"
                        >
                            <option value="">All Cert Types</option>
                            {certificationTypes.map((cert) => (
                                <option key={cert} value={cert}>
                                    {cert}
                                </option>
                            ))}
                        </select>
                        <select
                            value={filters.status}
                            onChange={(e) =>
                                setFilters({ ...filters, status: e.target.value })
                            }
                            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm"
                        >
                            <option value="">All Status</option>
                            <option value="valid">✅ Valid</option>
                            <option value="expiring">⏳ Expiring</option>
                            <option value="expired">❌ Expired</option>
                            <option value="missing">🚫 Missing</option>
                        </select>
                        <select
                            value={filters.jurisdiction}
                            onChange={(e) =>
                                setFilters({ ...filters, jurisdiction: e.target.value })
                            }
                            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm"
                        >
                            <option value="">Jurisdiction</option>
                            {jurisdictions.map((j) => (
                                <option key={j} value={j}>
                                    {j}
                                </option>
                            ))}
                        </select>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm">
                            📥 Export Report
                        </button>
                    </div>
                </div>

                {/* Alert Panel */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-red-900 p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-red-400">🚨 Certificates Expiring This Week</h3>
                        <p className="mt-2 text-xl font-bold">5</p>
                    </div>
                    <div className="bg-yellow-900 p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-yellow-400">🔁 Uploads Awaiting Verification</h3>
                        <p className="mt-2 text-xl font-bold">2</p>
                    </div>
                    <div className="bg-blue-900 p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-blue-400">🟥 Urgent Compliance Issues</h3>
                        <p className="mt-2 text-xl font-bold">John Doe missing Medical Certification</p>
                    </div>
                </div>

                {/* Table View */}
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                        <thead className="bg-gray-900">
                            <tr>
                                <th className="p-3 text-left">#</th>
                                <th className="p-3 text-left">Candidate</th>
                                <th className="p-3 text-left">Job Title</th>
                                <th className="p-3 text-center">BOSIET</th>
                                <th className="p-3 text-center">HUET</th>
                                <th className="p-3 text-center">FOET</th>
                                <th className="p-3 text-center">Medical</th>
                                <th className="p-3 text-center">Work Permit</th>
                                <th className="p-3 text-center">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {filteredCandidates.length > 0 ? (
                                filteredCandidates.map((c) => (
                                    <tr
                                        key={c.id}
                                        className={`hover:bg-gray-700 cursor-pointer ${getRowBg(c.status)}`}
                                        onClick={() => openDetails(c)}
                                    >
                                        <td className="p-3">{c.id}</td>
                                        <td className="p-3 font-medium">{c.name}</td>
                                        <td className="p-3 text-gray-400">{c.job}</td>
                                        <td className={`p-3 text-center ${getCertStatusColor(c.certs.BOSIET)}`}>
                                            {c.certs.BOSIET === "valid" ? "✅" : c.certs.BOSIET === "expiring" ? "⏳" : c.certs.BOSIET === "expired" ? "❌" : c.certs.BOSIET === "missing" ? "🚫" : "⏳"}
                                        </td>
                                        <td className={`p-3 text-center ${getCertStatusColor(c.certs.HUET)}`}>
                                            {c.certs.HUET === "valid" ? "✅" : c.certs.HUET === "expiring" ? "⏳" : c.certs.HUET === "expired" ? "❌" : c.certs.HUET === "missing" ? "🚫" : "⏳"}
                                        </td>
                                        <td className={`p-3 text-center ${getCertStatusColor(c.certs.FOET)}`}>
                                            {c.certs.FOET === "valid" ? "✅" : c.certs.FOET === "expiring" ? "⏳" : c.certs.FOET === "expired" ? "❌" : c.certs.FOET === "missing" ? "🚫" : "⏳"}
                                        </td>
                                        <td className={`p-3 text-center ${getCertStatusColor(c.certs.Medical)}`}>
                                            {c.certs.Medical === "valid" ? "✅" : c.certs.Medical === "pending" ? "⏳" : c.certs.Medical === "expired" ? "❌" : c.certs.Medical === "missing" ? "🚫" : "⏳"}
                                        </td>
                                        <td className={`p-3 text-center ${getCertStatusColor(c.certs.WorkPermit)}`}>
                                            {c.certs.WorkPermit === "valid" ? "✅" : c.certs.WorkPermit === "pending" ? "⏳" : c.certs.WorkPermit === "expired" ? "❌" : c.certs.WorkPermit === "missing" ? "🚫" : "⏳"}
                                        </td>
                                        <td className={`p-3 text-center ${c.status === "compliant" ? "text-green-400" : "text-red-400"}`}>
                                            {c.status === "compliant" ? "🟢 Compliant" : "⚠️ Incomplete"}
                                        </td>
                                        <td className="p-3 text-right">
                                            <button className="text-orange-500 hover:underline text-sm" onClick={e => { e.stopPropagation(); openDetails(c); }}>👁 View</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={10} className="p-6 text-center text-gray-400">
                                        No matching records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Bulk Actions */}
                <div className="mb-6 flex gap-2">
                    <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm">
                        📧 Send Reminder
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm">
                        📄 Download Report
                    </button>
                    <button className="bg-red-900 hover:bg-red-800 text-red-400 px-4 py-2 rounded-md text-sm">
                        ⚠ Mark as Urgent
                    </button>
                </div>

                {/* Jurisdiction Rules Sidebar */}
                <div className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold mb-4">Jurisdiction Requirements</h3>
                    <div className="space-y-3">
                        <p className="text-sm text-gray-400">
                            <strong>Nigeria Offshore:</strong> DPR Certificate ❌ | NIPEX Reg ❌ | BOSIET ✅
                        </p>
                        <p className="text-sm text-gray-400">
                            <strong>Gulf of Mexico:</strong> USCG Approved ✅ | HUET ✅ | Medical ✅
                        </p>
                        <p className="text-sm text-gray-400">
                            <strong>Texas Onshore:</strong> API Certification ✅ | OSHA Training ✅
                        </p>
                    </div>
                </div>

                {/* Candidate Details Slideout */}
                {showSlideout && selectedCandidate && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">{selectedCandidate.name}</h2>
                                <button onClick={closeDetails} className="text-gray-400 hover:text-white">
                                    &times;
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{selectedCandidate.job}</p>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Certificates</h3>
                                <ul className="space-y-2">
                                    {Object.entries(selectedCandidate.certs).map(([cert, status]) => (
                                        <li key={cert} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                                            <span>{cert}</span>
                                            <span className={getCertStatusColor(status)}>
                                                {status === "valid" ? "✅ Valid" : status === "expiring" ? "⏳ Expiring" : status === "expired" ? "❌ Expired" : status === "missing" ? "🚫 Missing" : "⏳ Pending"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Verification Tools</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Upload New File</label>
                                        <input type="file" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">QR Code Verification</label>
                                        <input
                                            type="text"
                                            placeholder="Enter QR code reference ID"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                        />
                                    </div>
                                </div>
                                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                                    🔎 Verify with Issuing Authority
                                </button>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Compliance Flags</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-red-500">⚠️</span>
                                        <p className="text-sm">Medical clearance is pending for offshore rotation.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-5 h-5 mr-2 text-orange-500">🔔</span>
                                        <p className="text-sm">BOSIET certificate will expire in 10 days.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 flex justify-end space-x-3">
                                <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm">
                                    Cancel
                                </button>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </EmployerLayout>
    );
}