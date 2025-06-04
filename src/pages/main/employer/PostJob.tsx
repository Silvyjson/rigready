// src/pages/employer/PostJob.jsx

import { useState } from "react";
import type { ChangeEvent } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

export default function PostJob() {
    const [job, setJob] = useState({
        title: "",
        category: "",
        employmentType: "",
        location: "",
        offshore: false,
        remoteWork: false,
        responsibilities: "",
        requiredSkills: [] as string[],
        certifications: [] as string[],
        experienceYears: 0,
        rotationPattern: "14/14",
        availabilityStart: "",
        availabilityEnd: "",
        deploymentLocation: "",
        salaryMin: "",
        salaryMax: "",
        currency: "USD",
        perks: [] as string[],
        deadline: "",
        autoScreening: true,
        applicationChannel: "internal",
        notifyTeam: [] as string[],
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        let fieldValue: string | boolean = value;
        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
            fieldValue = e.target.checked;
        }
        setJob((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    const handleArrayChange = (e: ChangeEvent<HTMLInputElement>, field: keyof typeof job) => {
        const { value, checked } = e.target;
        setJob((prev) => ({
            ...prev,
            [field]: checked
                ? [...(prev[field] as string[]), value]
                : (prev[field] as string[]).filter((item) => item !== value),
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Job posted successfully!");
    };

    // Job Categories
    const categories = ["Drilling", "HSE Officer", "Petroleum Engineer", "Operations", "Welding", "Maintenance"];

    // Certifications
    const certificationOptions = ["BOSIET", "HUET", "FOET", "IWCF", "NEBOSH", "OPITO"];

    // Perks/Benefits
    const perkOptions = ["Offshore Allowance", "Medical Insurance", "Travel Reimbursement", "Rotational Schedule", "Accommodation Provided"];

    return (
        <EmployerLayout title="Post a New Job">
            <div className="container mx-auto px-4 py-6 max-w-6xl">

                <h2 className="text-2xl md:text-3xl font-bold mb-6">Post a New Job</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Step 1: Basic Info */}
                        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Step 1: Basic Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Job Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={job.title}
                                        onChange={handleChange}
                                        placeholder="e.g., Drilling Engineer"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <select
                                        name="category"
                                        value={job.category}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Employment Type</label>
                                    <select
                                        name="employmentType"
                                        value={job.employmentType}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        <option value="">Select Employment Type</option>
                                        <option value="full-time">Full-Time</option>
                                        <option value="contract">Contract</option>
                                        <option value="rotation">Rotation</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex items-center">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                name="offshore"
                                                checked={job.offshore}
                                                onChange={handleChange}
                                                className="mr-2"
                                            />
                                            Offshore Location
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                name="remoteWork"
                                                checked={job.remoteWork}
                                                onChange={handleChange}
                                                className="mr-2"
                                            />
                                            Remote Work Available
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Job Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={job.location}
                                        onChange={handleChange}
                                        placeholder="e.g., Gulf of Mexico"
                                        disabled={job.offshore}
                                        className={`w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 ${job.offshore ? 'opacity-50' : ''}`}
                                    />
                                    {job.offshore && <p className="text-xs text-gray-500 mt-1">Offshore jobs are automatically marked with global mobility compliance.</p>}
                                </div>
                            </div>
                        </section>

                        {/* Step 2: Role Details */}
                        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Step 2: Role Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Responsibilities</label>
                                    <textarea
                                        name="responsibilities"
                                        value={job.responsibilities}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="List role duties and expectations..."
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Required Skills</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., directional drilling, well control"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Required Certifications</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {certificationOptions.map((cert) => (
                                            <label key={cert} className="inline-flex items-center text-sm">
                                                <input
                                                    type="checkbox"
                                                    value={cert}
                                                    checked={job.certifications.includes(cert)}
                                                    onChange={(e) => handleArrayChange(e, "certifications")}
                                                    className="mr-2"
                                                />
                                                {cert}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Experience Required</label>
                                    <input
                                        type="number"
                                        name="experienceYears"
                                        value={job.experienceYears}
                                        onChange={handleChange}
                                        min="0"
                                        max="30"
                                        placeholder="Years"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Step 3: Rotation & Scheduling */}
                        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Step 3: Rotation & Scheduling</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Rotation Pattern</label>
                                    <select
                                        name="rotationPattern"
                                        value={job.rotationPattern}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    >
                                        <option value="14/14">14/14</option>
                                        <option value="21/21">21/21</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Availability Start</label>
                                        <input
                                            type="date"
                                            name="availabilityStart"
                                            value={job.availabilityStart}
                                            onChange={handleChange}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Availability End</label>
                                        <input
                                            type="date"
                                            name="availabilityEnd"
                                            value={job.availabilityEnd}
                                            onChange={handleChange}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Deployment Location Details</label>
                                    <textarea
                                        name="deploymentLocation"
                                        value={job.deploymentLocation}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Rig name, site ID, access instructions..."
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* Step 4: Salary & Benefits */}
                        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Step 4: Salary & Benefits</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Salary Min</label>
                                        <input
                                            type="number"
                                            name="salaryMin"
                                            value={job.salaryMin}
                                            onChange={handleChange}
                                            placeholder="e.g., 80000"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Salary Max</label>
                                        <input
                                            type="number"
                                            name="salaryMax"
                                            value={job.salaryMax}
                                            onChange={handleChange}
                                            placeholder="e.g., 120000"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Currency</label>
                                    <select
                                        name="currency"
                                        value={job.currency}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    >
                                        <option value="USD">USD</option>
                                        <option value="NGN">NGN</option>
                                        <option value="GBP">GBP</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Perks & Benefits</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {perkOptions.map((perk) => (
                                            <label key={perk} className="inline-flex items-center text-sm">
                                                <input
                                                    type="checkbox"
                                                    value={perk}
                                                    checked={job.perks.includes(perk)}
                                                    onChange={(e) => handleArrayChange(e, "perks")}
                                                    className="mr-2"
                                                />
                                                {perk}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Step 5: Application Settings */}
                        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Step 5: Application Settings</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Application Deadline</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={job.deadline}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="autoScreening"
                                            checked={job.autoScreening}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Enable Auto-Screening (based on certs/skills)
                                    </label>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Receive Applications Via</label>
                                    <select
                                        name="applicationChannel"
                                        value={job.applicationChannel}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    >
                                        <option value="internal">Internal System</option>
                                        <option value="email">Email Only</option>
                                        <option value="external">External Link</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Notify Team Members</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Jane Smith", "Mark Lee", "Abdul Rahman", "Amina Yusuf"].map((member) => (
                                            <label key={member} className="inline-flex items-center text-sm">
                                                <input
                                                    type="checkbox"
                                                    value={member}
                                                    checked={job.notifyTeam.includes(member)}
                                                    onChange={(e) => handleArrayChange(e, "notifyTeam")}
                                                    className="mr-2"
                                                />
                                                {member}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Bottom Actions */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
                            >
                                ➕ Post Job Now
                            </button>
                            <button
                                type="button"
                                className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-6 py-3 rounded-md transition-colors"
                            >
                                📋 Save as Draft
                            </button>
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="bg-red-900 hover:bg-red-800 text-red-400 px-6 py-3 rounded-md transition-colors"
                            >
                                ❌ Cancel
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Preview & Tools */}
                    <div className="space-y-6">
                        {/* Job Preview Card */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
                            <h3 className="font-semibold mb-4 text-orange-500">Live Job Preview</h3>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h4 className="font-bold">{job.title || "Job Title"}</h4>
                                <p className="text-sm text-gray-400">{job.location || "Location"} | {job.rotationPattern} | {job.category || "Role Type"}</p>
                                <hr className="my-3 border-gray-600" />
                                <p className="text-sm text-gray-300">
                                    {job.responsibilities || "Responsibilities will appear here once entered."}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {job.certifications.length > 0
                                        ? job.certifications.map((cert) => (
                                            <span key={cert} className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                                {cert}
                                            </span>
                                        ))
                                        : <span className="text-xs text-gray-500 italic">Certifications</span>
                                    }
                                </div>
                                <div className="mt-3">
                                    <strong>Salary:</strong>{" "}
                                    {job.salaryMin && job.salaryMax
                                        ? `${job.salaryMin} - ${job.salaryMax} ${job.currency}`
                                        : "To be discussed"}
                                </div>
                            </div>
                        </div>

                        {/* Template Selector */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="font-semibold mb-4">Use a Template</h3>
                            <select className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 mb-4">
                                <option value="">Select a template</option>
                                <option value="driller">Driller</option>
                                <option value="hse-officer">HSE Officer</option>
                                <option value="engineer">Petroleum Engineer</option>
                            </select>
                            <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded text-sm">
                                Load Template
                            </button>
                        </div>

                        {/* Social Sharing */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="font-semibold mb-4">Social Sharing</h3>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>LinkedIn</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>RigZone</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Indeed</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Company Website</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </EmployerLayout>
    );
}