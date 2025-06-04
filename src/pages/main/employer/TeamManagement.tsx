// src/pages/employer/TeamManagement.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface TeamMember {
    id: number;
    name: string;
    role: string;
    email: string;
    lastActive: string;
    status: "active" | "invited" | "inactive";
}

export default function TeamManagement() {
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    // Sample Data
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Sarah James",
            role: "admin",
            email: "sarah@company.com",
            lastActive: "Today, 9:23 AM",
            status: "active",
        },
        {
            id: 2,
            name: "Mike Benson",
            role: "hiring-manager",
            email: "mike@company.com",
            lastActive: "May 30, 4:12 PM",
            status: "invited"
        },
        {
            id: 3,
            name: "Abdul Rahman",
            role: "interviewer",
            email: "abdul@company.com",
            lastActive: "May 28, 2:45 PM",
            status: "active"
        },
        {
            id: 4,
            name: "Amina Yusuf",
            role: "hr-manager",
            email: "amina@company.com",
            lastActive: "Never",
            status: "inactive"
        }
    ];

    const getRoleLabel = (role: TeamMember["role"]) => {
        switch (role) {
            case "admin": return "Admin";
            case "hr-manager": return "HR Manager";
            case "hiring-manager": return "Hiring Manager";
            case "interviewer": return "Interviewer";
            case "read-only": return "Read-Only";
            default: return role;
        }
    };

    const getStatusColor = (status: TeamMember["status"]) => {
        switch (status) {
            case "active": return "bg-green-900 text-green-200";
            case "invited": return "bg-yellow-900 text-yellow-200";
            case "inactive": return "bg-red-900 text-red-200";
            default: return "";
        }
    };

    const getStatusIcon = (status: TeamMember["status"]) => {
        switch (status) {
            case "active": return "✅";
            case "invited": return "🟡";
            case "inactive": return "❌";
            default: return "⚪";
        }
    };

    const handleResendInvite = (member: TeamMember) => {
        alert(`Invite resent to ${member.email}`);
    };

    const handleRemoveMember = (member: TeamMember) => {
        if (window.confirm(`Are you sure you want to remove ${member.name} from the team?`)) {
            alert(`${member.name} removed`);
        }
    };

    const handleSuspendMember = (member: TeamMember) => {
        if (window.confirm(`Are you sure you want to suspend ${member.name}?`)) {
            alert(`${member.name} suspended`);
        }
    };

    return (
        <EmployerLayout title="Team & Access Management">
            <div className="container mx-auto px-6 py-6 max-w-6xl">
                {/* Top Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <h2 className="text-xl font-bold">Manage Your HR Team</h2>
                        <p className="text-sm text-gray-400">Assign roles, manage access, and track activity.</p>
                    </div>
                    <button
                        onClick={() => setShowInviteModal(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        ➕ Add New Member
                    </button>
                </div>

                {/* Team Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                        <thead className="bg-gray-900">
                            <tr>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Last Active</th>
                                <th className="p-3 text-center">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {teamMembers.map((member) => (
                                <tr key={member.id} className="hover:bg-gray-700 cursor-pointer">
                                    <td className="p-3 font-medium">{member.name}</td>
                                    <td className="p-3 text-gray-400">{getRoleLabel(member.role)}</td>
                                    <td className="p-3 text-gray-400">{member.email}</td>
                                    <td className="p-3 text-gray-400">{member.lastActive}</td>
                                    <td className={`p-3 text-center ${getStatusColor(member.status)}`}>
                                        {getStatusIcon(member.status)}{" "}
                                        <span className="ml-1">{member.status === "active" ? "Active" : member.status === "invited" ? "Invited" : "Inactive"}</span>
                                    </td>
                                    <td className="p-3 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => setSelectedMember(member)}
                                                className="text-orange-500 hover:underline text-sm"
                                            >
                                                View
                                            </button>
                                            <button className="text-blue-400 hover:underline text-sm">
                                                Edit
                                            </button>
                                            {member.status === "invited" && (
                                                <button
                                                    onClick={() => handleResendInvite(member)}
                                                    className="text-yellow-400 hover:underline text-sm"
                                                >
                                                    Resend
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleRemoveMember(member)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bulk Actions */}
                <div className="mb-6 flex gap-2">
                    <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm">
                        📥 Export Members
                    </button>
                    <button className="bg-red-900 hover:bg-red-800 text-red-400 px-4 py-2 rounded-md text-sm">
                        🚫 Suspend Selected
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm">
                        🔄 Resend Invites
                    </button>
                </div>

                {/* Role Permissions Matrix */}
                <div className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold mb-4">Role-Based Permissions</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-gray-400 text-sm">
                                    <th className="p-2 text-left">Feature</th>
                                    <th className="p-2 text-center">Admin</th>
                                    <th className="p-2 text-center">HR Manager</th>
                                    <th className="p-2 text-center">Interviewer</th>
                                    <th className="p-2 text-center">Read-Only</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t border-gray-700">
                                    <td className="p-3">Post/Edit Jobs</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">❌</td>
                                    <td className="p-3 text-center">❌</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="p-3">View Applicants</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="p-3">Edit Candidate Notes</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">❌</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="p-3">Access Compliance</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">❌</td>
                                    <td className="p-3 text-center">❌</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="p-3">Manage Team</td>
                                    <td className="p-3 text-center">✅</td>
                                    <td className="p-3 text-center">❌</td>
                                    <td className="p-3 text-center">❌</td>
                                    <td className="p-3 text-center">❌</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Team Analytics Widget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <h4 className="text-sm text-gray-400">Active Users This Month</h4>
                        <p className="text-2xl font-bold mt-2">3</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <h4 className="text-sm text-gray-400">Interviews Scheduled</h4>
                        <p className="text-2xl font-bold mt-2">14</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <h4 className="text-sm text-gray-400">Pending Invites</h4>
                        <p className="text-2xl font-bold mt-2">1</p>
                    </div>
                </div>

                {/* Activity Log Slideout (on View click) */}
                {selectedMember && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-auto">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold">{selectedMember.name}</h2>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    &times;
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{getRoleLabel(selectedMember.role)}</p>
                            <p className="text-sm mb-6">{selectedMember.email}</p>

                            {/* Login History */}
                            <h3 className="font-semibold mb-3">Login History</h3>
                            <ul className="space-y-2 mb-6">
                                <li className="flex justify-between text-sm">
                                    <span>May 30, 4:12 PM</span>
                                    <span className="text-gray-400">IP: 192.168.1.1</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span>May 29, 10:45 AM</span>
                                    <span className="text-gray-400">IP: 192.168.1.2</span>
                                </li>
                            </ul>

                            {/* Recent Activity */}
                            <h3 className="font-semibold mb-3">Recent Activity</h3>
                            <ul className="space-y-2">
                                <li className="text-sm">Posted Rig Manager job</li>
                                <li className="text-sm">Shortlisted Jane Doe</li>
                                <li className="text-sm">Updated rotation schedule</li>
                            </ul>

                            {/* Security Controls */}
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <h3 className="font-semibold mb-3">Security Controls</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm">Reset Password</label>
                                        <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-xs">
                                            Reset Now
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm">Two-Factor Auth</label>
                                        <span className="inline-block w-4 h-4 mr-2 text-green-500">✅</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm">Account Status</label>
                                        <button
                                            onClick={() => handleSuspendMember(selectedMember)}
                                            className="bg-red-900 hover:bg-red-800 text-red-400 px-3 py-1 rounded text-xs">
                                            Suspend
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Invite Modal */}
                {showInviteModal && <InviteMemberModal onClose={() => setShowInviteModal(false)} />}
            </div>
        </EmployerLayout>
    );
}

// Subcomponent: Invite New Team Member Modal
// Add type for props
interface InviteMemberModalProps {
    onClose: () => void;
}

const InviteMemberModal = ({ onClose }: InviteMemberModalProps) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "hr-manager",
        sendInvite: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Invitation sent to ${form.email}`);
        onClose();
    };

    const roles = [
        { value: "admin", label: "Admin" },
        { value: "hr-manager", label: "HR Manager" },
        { value: "hiring-manager", label: "Hiring Manager" },
        { value: "interviewer", label: "Interviewer" },
        { value: "read-only", label: "Read-Only" },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold">Add New Team Member</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g., Sarah James"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="sarah@example.com"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium mb-1">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            {roles.map((r) => (
                                <option key={r.value} value={r.value}>
                                    {r.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="sendInvite"
                            name="sendInvite"
                            checked={form.sendInvite}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="sendInvite" className="text-sm">Send invitation email</label>
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm"
                        >
                            Send Invite
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};