// src/pages/employer/InterviewScheduler.jsx

import React, { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface Interview {
    id: number;
    candidate: string;
    job: string;
    stage: string;
    status: "scheduled" | "pending" | "canceled" | "needs-reschedule";
    date: string;
    interviewers: string[];
    type: string;
    duration: string;
}

export default function InterviewScheduler() {
    const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
    const [showModal, setShowModal] = useState(false);

    // Mock Interviews Data
    const interviews: Interview[] = [
        {
            id: 1,
            candidate: "John Doe",
            job: "Drilling Engineer",
            stage: "Technical",
            status: "scheduled",
            date: "2025-04-03T10:00:00Z",
            interviewers: ["Jane Smith", "Mark Lee"],
            type: "video",
            duration: "30 mins",
        },
        {
            id: 2,
            candidate: "Amina Musa",
            job: "HSE Officer",
            stage: "HR",
            status: "pending",
            date: "2025-04-05T14:00:00Z",
            interviewers: ["Abdul Rahman"],
            type: "phone",
            duration: "15 mins",
        },
        {
            id: 3,
            candidate: "Khalid Yusuf",
            job: "Rig Supervisor",
            stage: "Final Round",
            status: "needs-reschedule",
            date: "2025-04-06T11:00:00Z",
            interviewers: ["Jane Smith"],
            type: "video",
            duration: "45 mins",
        },
    ];

    const statuses: Record<string, string> = {
        scheduled: "bg-green-900 text-green-200",
        pending: "bg-yellow-900 text-yellow-200",
        canceled: "bg-red-900 text-red-200",
        "needs-reschedule": "bg-orange-900 text-orange-200",
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "scheduled":
                return "✅ Scheduled";
            case "pending":
                return "⚠️ Pending Confirmation";
            case "canceled":
                return "❌ Canceled";
            case "needs-reschedule":
                return "🔁 Needs Rescheduling";
            default:
                return status;
        }
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <EmployerLayout title="Interview Scheduler">
            <div className="container mx-auto px-6 py-6 max-w-6xl">
                {/* Top Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search by candidate or job..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute right-2 top-1.5 text-gray-400 hover:text-orange-500">
                            🔍
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Status</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                            <option value="needs-reschedule">Needs Reschedule</option>
                        </select>
                        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-sm">
                            <option>Interviewer</option>
                            <option>Jane Smith</option>
                            <option>Mark Lee</option>
                            <option>Abdul Rahman</option>
                        </select>
                        <button
                            onClick={openModal}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            ➕ Schedule Interview
                        </button>
                    </div>
                </div>

                {/* View Toggle */}
                <div className="mb-6 flex justify-end">
                    <div className="inline-flex rounded-md bg-gray-800 p-1 space-x-1">
                        <button
                            onClick={() => setViewMode("calendar")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "calendar" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            🗓️ Calendar View
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`px-3 py-1 rounded text-sm ${viewMode === "list" ? "bg-orange-500 text-white" : "text-gray-400"
                                }`}
                        >
                            📋 List View
                        </button>
                    </div>
                </div>

                {/* Calendar View */}
                {viewMode === "calendar" && (
                    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-400 font-semibold mb-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>
                )}

                {/* Calendar Grid */}
                {viewMode === "calendar" && (
                    <div className="grid grid-cols-7 gap-2 mb-6">
                        {Array.from({ length: 35 }).map((_, i) => {
                            const interview = interviews.find(
                                (interview) =>
                                    new Date(interview.date).getDate() === i + 1
                            );
                            return (
                                <div
                                    key={i}
                                    className={`py-2 border border-gray-700 min-h-24 ${i % 7 === 0 || i % 7 === 6 ? "bg-gray-800" : "bg-gray-850"
                                        }`}
                                >
                                    {i + 1}
                                    {interview && (
                                        <div
                                            className="mt-2 bg-blue-900 text-white p-2 rounded text-xs cursor-pointer hover:bg-blue-800"
                                        >
                                            <strong>{interview.candidate}</strong>
                                            <p className="text-gray-300">{interview.job}</p>
                                            <span className={`inline-block mt-1 text-xs ${statuses[interview.status]}`}>
                                                {getStatusLabel(interview.status)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* List View */}
                {viewMode === "list" && (
                    <div className="space-y-4">
                        {interviews.map((interview) => (
                            <div
                                key={interview.id}
                                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-750"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold">{interview.candidate}</h3>
                                        <p className="text-sm text-gray-400">{interview.job}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {new Date(interview.date).toLocaleString()}
                                        </p>
                                    </div>
                                    <span
                                        className={`inline-block px-2 py-1 rounded text-xs ${statuses[interview.status]}`}
                                    >
                                        {getStatusLabel(interview.status)}
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <strong>Stage:</strong> {interview.stage} •{" "}
                                    <strong>Type:</strong> {interview.type} •{" "}
                                    <strong>Duration:</strong> {interview.duration}
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                    <div>
                                        <strong>Interviewers:</strong>{" "}
                                        {interview.interviewers.join(", ")}
                                    </div>
                                    <button
                                        className="text-orange-500 hover:underline text-sm"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Upcoming Interviews Sidebar / Panel */}
                <div className="mb-6 bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="font-semibold mb-4">Upcoming Interviews</h3>
                    <ul className="space-y-3">
                        {interviews
                            .filter((i) => i.status !== "canceled")
                            .map((interview) => (
                                <li key={interview.id} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">{interview.candidate}</p>
                                        <p className="text-sm text-gray-400">{interview.job}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">
                                            {new Date(interview.date).toLocaleDateString(undefined, {
                                                month: "short",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                        <button className="text-orange-500 hover:underline text-sm mt-1">
                                            Join
                                        </button>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Schedule Interview Modal */}
                {showModal && <ScheduleInterviewModal onClose={closeModal} />}
            </div>
        </EmployerLayout>
    );
}

// Subcomponent: Schedule Interview Modal
interface ScheduleInterviewModalProps {
    onClose: () => void;
}

const ScheduleInterviewModal = ({ onClose }: ScheduleInterviewModalProps) => {
    const [form, setForm] = useState({
        candidate: "",
        job: "",
        stage: "",
        interviewType: "video",
        interviewer: [] as string[],
        date: "",
        duration: "30",
        sendInvite: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target;
        const { name, value } = target;
        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            setForm((prev) => ({ ...prev, [name]: target.checked }));
        } else if (target instanceof HTMLSelectElement && target.multiple) {
            setForm((prev) => ({
                ...prev,
                [name]: Array.from(target.options).filter((o) => o.selected).map((o) => o.value),
            }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Interview scheduled!");
        onClose();
    };

    const interviewers = ["Jane Smith", "Mark Lee", "Abdul Rahman"];
    const jobs = ["Drilling Engineer", "HSE Officer", "Rig Manager"];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Schedule New Interview</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Candidate */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Candidate</label>
                        <input
                            type="text"
                            name="candidate"
                            value={form.candidate}
                            onChange={handleChange}
                            placeholder="e.g., John Doe"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        />
                    </div>
                    {/* Job */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Job Position</label>
                        <select
                            name="job"
                            value={form.job}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            <option value="">Select job</option>
                            {jobs.map((j) => (
                                <option key={j} value={j}>
                                    {j}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Interview Stage */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Interview Stage</label>
                        <select
                            name="stage"
                            value={form.stage}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            <option value="">Select stage</option>
                            <option value="technical">Technical</option>
                            <option value="hr">HR Screening</option>
                            <option value="final-round">Final Round</option>
                        </select>
                    </div>
                    {/* Interview Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Interview Type</label>
                        <select
                            name="interviewType"
                            value={form.interviewType}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            <option value="video">Video</option>
                            <option value="phone">Phone</option>
                            <option value="in-person">In-Person</option>
                        </select>
                    </div>
                    {/* Interviewers */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Assign Interviewer(s)</label>
                        <select
                            multiple
                            name="interviewer"
                            value={form.interviewer}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            {interviewers.map((interviewer) => (
                                <option key={interviewer} value={interviewer}>
                                    {interviewer}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Date & Time */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Date & Time</label>
                        <input
                            type="datetime-local"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        />
                    </div>
                    {/* Duration */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Duration</label>
                        <select
                            name="duration"
                            value={form.duration}
                            onChange={handleChange}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                        >
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">1 hour</option>
                            <option value="90">1.5 hours</option>
                        </select>
                    </div>
                    {/* Send Invite */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="sendInvite"
                            checked={form.sendInvite}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label>Send calendar invite to all participants</label>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mt-4"
                    >
                        Schedule Interview
                    </button>
                </form>
            </div>
        </div>
    );
};