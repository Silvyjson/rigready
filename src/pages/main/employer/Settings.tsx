// src/pages/employer/SettingsPage.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface SettingsForm {
    companyName: string;
    industrySector: string;
    timeZone: string;
    currency: string;
    language: string;
    emailNotifications: boolean;
    smsNotifications: boolean;
    inAppNotifications: boolean;
    tagline: string;
    socialLinks: {
        linkedin: string;
        indeed: string;
        rigZone: string;
    };
    twoFactorAuth: boolean;
    dataRetention: string;
    gdprCompliant: boolean;
    ccpaCompliant: boolean;
    autoPostLinkedIn: boolean;
    autoPostIndeed: boolean;
    googleCalendarSync: boolean;
    outlookCalendarSync: boolean;
}

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<string>("general");
    const [form, setForm] = useState<SettingsForm>({
        companyName: "Shell Offshore Ltd.",
        industrySector: "Offshore Exploration",
        timeZone: "UTC+1",
        currency: "USD",
        language: "en",
        emailNotifications: true,
        smsNotifications: false,
        inAppNotifications: true,
        tagline: "",
        socialLinks: {
            linkedin: "",
            indeed: "",
            rigZone: "",
        },
        twoFactorAuth: true,
        dataRetention: "5 years",
        gdprCompliant: true,
        ccpaCompliant: true,
        autoPostLinkedIn: true,
        autoPostIndeed: false,
        googleCalendarSync: true,
        outlookCalendarSync: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const saveSettings = () => {
        alert("Settings saved!");
    };

    const tabs = [
        { id: "general", label: "General", icon: "⚙️" },
        { id: "team", label: "Team & Roles", icon: "👥" },
        { id: "branding", label: "Branding", icon: "🎨" },
        { id: "integrations", label: "Integrations", icon: "🔌" },
        { id: "billing", label: "Billing & Subscription", icon: "💳" },
        { id: "security", label: "Security & Privacy", icon: "🔒" },
    ];

    return (
        <EmployerLayout title="Settings & Integrations">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
                {/* Tabs Navigation */}
                <div className="mb-8 border-b border-gray-700">
                    <nav className="flex space-x-8 overflow-x-auto pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 pb-4 border-b-2 ${activeTab === tab.id ? "border-orange-500 text-white" : "border-transparent text-gray-400 hover:text-orange-500"}`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* General Settings */}
                {activeTab === "general" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">General Preferences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Industry Sector</label>
                                <select
                                    name="industrySector"
                                    value={form.industrySector}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4"
                                >
                                    <option>Offshore Exploration</option>
                                    <option>Upstream Drilling</option>
                                    <option>Refining & Processing</option>
                                    <option>Oilfield Services</option>
                                    <option>Engineering Contractor</option>
                                    <option>Logistics & Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Default Time Zone</label>
                                <select
                                    name="timeZone"
                                    value={form.timeZone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4"
                                >
                                    <option value="UTC+1">UTC +1 (Europe)</option>
                                    <option value="UTC-6">UTC -6 (North America)</option>
                                    <option value="UTC+3">UTC +3 (Middle East)</option>
                                    <option value="UTC+8">UTC +8 (Asia)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Preferred Currency</label>
                                <select
                                    name="currency"
                                    value={form.currency}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4"
                                >
                                    <option value="USD">USD</option>
                                    <option value="NGN">NGN</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Language</label>
                                <select
                                    name="language"
                                    value={form.language}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-3">Communication Preferences</h4>
                            <div className="space-y-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="emailNotifications"
                                        checked={form.emailNotifications}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Receive Email Notifications
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="smsNotifications"
                                        checked={form.smsNotifications}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Receive SMS Notifications
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="inAppNotifications"
                                        checked={form.inAppNotifications}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Show In-App Alerts
                                </label>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* Team & Roles Tab */}
                {activeTab === "team" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Team & Role Management</h3>
                        <p className="text-gray-400">
                            These are global team settings.{" "}
                            <a href="/employer/team" className="text-orange-500 hover:underline">
                                Go to full team management
                            </a>
                        </p>

                        <div>
                            <h4 className="font-semibold mb-2">Default Permissions</h4>
                            <ul className="space-y-2">
                                <li className="flex justify-between items-center">
                                    <span>Hiring Managers can post jobs</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="form-checkbox h-4 w-4"
                                    />
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Interviewers can add notes</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="form-checkbox h-4 w-4"
                                    />
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Read-only users can view applicants</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="form-checkbox h-4 w-4"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Notification Settings</h4>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="mr-2"
                                />
                                Notify Interviewers when job is posted
                            </label>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* Branding Tab */}
                {activeTab === "branding" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Company Branding</h3>
                        <p className="text-gray-400">
                            Customize how your company appears on job listings.
                        </p>

                        <div>
                            <label className="block text-sm font-medium mb-1">Company Logo</label>
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-gray-700 flex items-center justify-center rounded">
                                    <span className="text-gray-400">Logo</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-blue-200 px-4 py-2 rounded text-sm">
                                    Upload New Logo
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Tagline / Bio</label>
                            <textarea
                                rows={3}
                                placeholder="e.g., Shell Offshore Ltd. – Leading innovation in offshore drilling."
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-2"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Theme Colors</label>
                            <div className="flex items-center gap-4 mt-2">
                                <div>
                                    <span className="block text-xs text-gray-400 mb-1">Primary Color</span>
                                    <input
                                        type="color"
                                        defaultValue="#FF6B35"
                                        className="w-10 h-10 rounded"
                                    />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 mb-1">Accent Color</span>
                                    <input
                                        type="color"
                                        defaultValue="#0B1F3A"
                                        className="w-10 h-10 rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Preview</h4>
                            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gray-700 mr-4"></div>
                                    <div>
                                        <h5 className="font-bold">{form.companyName}</h5>
                                        <p className="text-sm text-gray-400">Offshore Recruitment Partner</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-300">
                                    We connect top talent with global oil & gas opportunities.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Branding
                            </button>
                        </div>
                    </div>
                )}

                {/* Integrations Tab */}
                {activeTab === "integrations" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Integrations</h3>
                        <p className="text-gray-400">
                            Connect external tools and platforms to automate workflows.
                        </p>

                        {/* LinkedIn */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold">LinkedIn</h4>
                                    <p className="text-sm text-gray-400">Auto-import profiles and share jobs</p>
                                </div>
                                <button className="bg-blue-900 text-blue-200 px-4 py-2 rounded text-sm hover:bg-blue-800">
                                    {form.autoPostLinkedIn ? "Connected" : "Connect"}
                                </button>
                            </div>
                            {form.autoPostLinkedIn && (
                                <div className="mt-4 ml-6">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="autoPostLinkedIn"
                                            checked={form.autoPostLinkedIn}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Auto-post new jobs to LinkedIn
                                    </label>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Jobs will be shared to your company page within 1 hour of posting.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Indeed */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold">Indeed</h4>
                                    <p className="text-sm text-gray-400">Cross-post roles to Indeed</p>
                                </div>
                                <button className="bg-blue-900 text-blue-200 px-4 py-2 rounded text-sm hover:bg-blue-800">
                                    {form.autoPostIndeed ? "Connected" : "Connect"}
                                </button>
                            </div>
                            {form.autoPostIndeed && (
                                <div className="mt-4 ml-6">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="autoPostIndeed"
                                            checked={form.autoPostIndeed}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Auto-publish new roles
                                    </label>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Jobs will sync automatically to Indeed using filters.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Calendar Sync */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow">
                            <h4 className="font-semibold mb-2">Calendar Synchronization</h4>
                            <div className="ml-6 space-y-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="googleCalendarSync"
                                        defaultChecked
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Google Calendar
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="outlookCalendarSync"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Outlook Calendar
                                </label>
                                <p className="text-xs text-gray-500 mt-2">
                                    Enables interview slots to sync with your calendar.
                                </p>
                            </div>
                        </div>

                        {/* HRIS Integration */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow">
                            <h4 className="font-semibold mb-2">HRIS / Payroll System</h4>
                            <div className="ml-6 space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1">API Endpoint</label>
                                    <input
                                        type="text"
                                        placeholder="https://api.your-hris.com/rigready"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">API Key</label>
                                    <input
                                        type="text"
                                        placeholder="**************"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                                    />
                                </div>
                                <button className="bg-green-900 text-green-200 px-4 py-2 rounded text-sm hover:bg-green-800">
                                    Test Connection
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Integrations
                            </button>
                        </div>
                    </div>
                )}

                {/* Billing Tab */}
                {activeTab === "billing" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Billing & Subscription</h3>
                        <div className="bg-gray-800 p-6 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold">Current Plan: Professional</h4>
                                    <p className="text-sm text-gray-400">Renewal Date: Feb 1, 2025</p>
                                </div>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                            <h4 className="font-semibold">Payment Method</h4>
                            <p className="text-sm text-gray-400">Card ending in 1234 | Expires 12/26</p>
                            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded text-sm">
                                Update Payment Info
                            </button>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                            <h4 className="font-semibold">Usage Overview</h4>
                            <p className="text-sm text-gray-400">Jobs Posted: 12</p>
                            <p className="text-sm text-gray-400">Candidates Hired: 3</p>
                            <p className="text-sm text-gray-400">Active Users: 5/10</p>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Billing
                            </button>
                        </div>
                    </div>
                )}

                {/* Security & Privacy Tab */}
                {activeTab === "security" && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Security & Privacy</h3>
                        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                            <h4 className="font-semibold">Two-Factor Authentication</h4>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="twoFactorAuth"
                                    checked={form.twoFactorAuth}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Enable 2FA (Recommended)
                            </label>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                            <h4 className="font-semibold">Data Retention</h4>
                            <select
                                name="dataRetention"
                                value={form.dataRetention}
                                onChange={handleChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4"
                            >
                                <option>5 years</option>
                                <option>10 years</option>
                                <option>Lifetime</option>
                                <option>Custom</option>
                            </select>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                            <h4 className="font-semibold">Privacy Compliance</h4>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="gdprCompliant"
                                    checked={form.gdprCompliant}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                GDPR Compliant
                            </label>
                            <label className="inline-flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    name="ccpaCompliant"
                                    checked={form.ccpaCompliant}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                CCPA Compliant
                            </label>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={saveSettings}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Save Security Settings
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </EmployerLayout>
    );
}