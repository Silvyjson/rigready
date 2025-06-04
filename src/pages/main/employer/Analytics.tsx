// src/pages/employer/Analytics.jsx

import { useState } from "react";
import EmployerLayout from "../../../components/main/employer/EmployerLayout";

// Type definitions
interface JobStat {
  id: number;
  title: string;
  views: number;
  applications: number;
  ctr: number;
  timeToFirstApplicant: string;
  timeToHire: string;
  reposted: number;
}

interface FunnelData {
  applied: number;
  shortlisted: number;
  interviewed: number;
  offerSent: number;
  hired: number;
}

interface TeamActivity {
  name: string;
  role: string;
  jobsPosted: number;
  interviewsScheduled: number;
  avgResponseTime: string;
}

interface ComplianceStats {
  fullyCertified: number;
  expired: number;
  missing: number;
  upcomingExpirations: number;
  nonCompliantHires: number;
}

interface PlatformUsage {
  activeUsers: number;
  mobileUsage: number;
  desktopUsage: number;
  mostUsedFeature: string;
  smartMatchRate: number;
}

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<string>("job-performance");

  // Sample Data
  const jobStats: JobStat[] = [
    {
      id: 1,
      title: "Drilling Engineer",
      views: 1200,
      applications: 24,
      ctr: 2.0,
      timeToFirstApplicant: "3 days",
      timeToHire: "18 days",
      reposted: 1,
    },
    {
      id: 2,
      title: "HSE Officer",
      views: 950,
      applications: 17,
      ctr: 1.8,
      timeToFirstApplicant: "5 days",
      timeToHire: "22 days",
      reposted: 0,
    },
    {
      id: 3,
      title: "Rig Supervisor",
      views: 1100,
      applications: 15,
      ctr: 1.4,
      timeToFirstApplicant: "4 days",
      timeToHire: "20 days",
      reposted: 2,
    },
  ];

  const funnelData: FunnelData = {
    applied: 120,
    shortlisted: 65,
    interviewed: 32,
    offerSent: 18,
    hired: 12,
  };

  const teamActivity: TeamActivity[] = [
    {
      name: "Jane Smith",
      role: "HR Manager",
      jobsPosted: 5,
      interviewsScheduled: 14,
      avgResponseTime: "24h",
    },
    {
      name: "Mark Lee",
      role: "Interviewer",
      jobsPosted: 0,
      interviewsScheduled: 9,
      avgResponseTime: "48h",
    },
    {
      name: "Abdul Rahman",
      role: "Recruiter",
      jobsPosted: 3,
      interviewsScheduled: 11,
      avgResponseTime: "36h",
    },
  ];

  const complianceStats: ComplianceStats = {
    fullyCertified: 87,
    expired: 12,
    missing: 5,
    upcomingExpirations: 23,
    nonCompliantHires: 1,
  };

  const platformUsage: PlatformUsage = {
    activeUsers: 32,
    mobileUsage: 68,
    desktopUsage: 32,
    mostUsedFeature: "Candidate Search",
    smartMatchRate: 74,
  };

  return (
    <EmployerLayout title="Analytics & Insights">
      <div className="container mx-auto px-6 py-6 max-w-7xl">
        {/* Tab Navigation */}
        <div className="mb-8 border-b border-gray-700">
          <nav className="flex space-x-8 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("job-performance")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "job-performance"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              📈 Job Performance
            </button>
            <button
              onClick={() => setActiveTab("funnel-analysis")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "funnel-analysis"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              📊 Applicant Funnel
            </button>
            <button
              onClick={() => setActiveTab("team-efficiency")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "team-efficiency"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              👥 Team Efficiency
            </button>
            <button
              onClick={() => setActiveTab("compliance-metrics")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "compliance-metrics"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              🛡️ Compliance Metrics
            </button>
            <button
              onClick={() => setActiveTab("platform-engagement")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "platform-engagement"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-orange-400"
              }`}
            >
              📱 Platform Engagement
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "job-performance" && (
          <JobPerformanceSection data={jobStats} />
        )}

        {activeTab === "funnel-analysis" && (
          <FunnelAnalysisSection data={funnelData} />
        )}

        {activeTab === "team-efficiency" && (
          <TeamEfficiencySection data={teamActivity} />
        )}

        {activeTab === "compliance-metrics" && (
          <ComplianceMetricsSection stats={complianceStats} />
        )}

        {activeTab === "platform-engagement" && (
          <PlatformEngagementSection usage={platformUsage} />
        )}
      </div>
    </EmployerLayout>
  );
}

// Section 1: Job Performance Analytics
interface JobPerformanceSectionProps {
  data: JobStat[];
}
const JobPerformanceSection = ({ data }: JobPerformanceSectionProps) => {
  const getCTRColor = (ctr: number) => {
    if (ctr > 2) return "bg-green-900 text-green-300";
    if (ctr > 1.5) return "bg-blue-900 text-blue-300";
    return "bg-red-900 text-red-300";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📈 Job Performance Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Total Applications</h3>
          <p className="text-2xl font-bold text-orange-500">{data.reduce((acc, curr) => acc + curr.applications, 0)}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Avg. Time to Hire</h3>
          <p className="text-2xl font-bold text-blue-400">
            {Math.round(data.reduce((acc, curr) => acc + parseInt(curr.timeToHire), 0) / data.length)} days
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Top Performing Role</h3>
          <p className="text-2xl font-bold text-green-400">Drilling Engineer</p>
        </div>
      </div>

      {/* Job Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold mb-4">Job Listing Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-md overflow-hidden">
            <thead className="bg-gray-900">
              <tr className="text-left text-sm text-gray-400">
                <th className="p-3">Job Title</th>
                <th className="p-3">Views</th>
                <th className="p-3">Applications</th>
                <th className="p-3">CTR</th>
                <th className="p-3">Time to First Application</th>
                <th className="p-3">Time to Fill</th>
                <th className="p-3">Reposted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {data.map((job) => (
                <tr key={job.id} className="hover:bg-gray-700">
                  <td className="p-3 font-medium">{job.title}</td>
                  <td className="p-3">{job.views}</td>
                  <td className="p-3">{job.applications}</td>
                  <td className={`p-3 ${getCTRColor(job.ctr)}`}>
                    {job.ctr}%
                  </td>
                  <td className="p-3">{job.timeToFirstApplicant}</td>
                  <td className="p-3">{job.timeToHire}</td>
                  <td className="p-3">{job.reposted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Section 2: Funnel Analysis
interface FunnelAnalysisSectionProps {
  data: FunnelData;
}
const FunnelAnalysisSection = ({ data }: FunnelAnalysisSectionProps) => {
  const totalApplicants = data.applied;
  const stages = [
    { label: "Applied", value: data.applied },
    { label: "Shortlisted", value: data.shortlisted },
    { label: "Interviewed", value: data.interviewed },
    { label: "Offer Sent", value: data.offerSent },
    { label: "Hired", value: data.hired },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📊 Applicant Funnel Analysis</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold mb-4">Application Funnel</h3>
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const prevValue = stages[index - 1]?.value || totalApplicants;
            const percentage = ((stage.value / prevValue) * 100).toFixed(1);
            return (
              <div key={index} className="relative h-10 bg-gray-900 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${(stage.value / totalApplicants) * 100}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center pl-4 z-10 pointer-events-none">
                  <span className="font-medium">{stage.label} – {stage.value}</span>
                  {index > 0 && (
                    <span className="ml-4 text-xs italic text-gray-500">
                      {(percentage === "NaN" ? 0 : percentage)}% conversion rate
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">🎯 Average Match Score</h3>
          <p className="text-3xl font-bold text-green-400">87%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">🌍 Candidate Geo Distribution</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Local: 45%</li>
            <li>Offshore: 30%</li>
            <li>Global: 25%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Section 3: Team Efficiency
interface TeamEfficiencySectionProps {
  data: TeamActivity[];
}
const TeamEfficiencySection = ({ data }: TeamEfficiencySectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">🕵️ Hiring Team Efficiency</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold mb-4">Team Member Activity</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-md overflow-hidden">
            <thead className="bg-gray-900">
              <tr className="text-left text-sm text-gray-400">
                <th className="p-3">Name</th>
                <th className="p-3">Jobs Posted</th>
                <th className="p-3">Interviews Scheduled</th>
                <th className="p-3">Avg. Response Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {data.map((member) => (
                <tr key={member.name} className="hover:bg-gray-700">
                  <td className="p-3 font-medium">{member.name}</td>
                  <td className="p-3">{member.jobsPosted}</td>
                  <td className="p-3">{member.interviewsScheduled}</td>
                  <td className="p-3">{member.avgResponseTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">📆 Scheduling Delays</h3>
          <p className="text-3xl font-bold text-yellow-400">3 days</p>
          <p className="text-sm text-gray-400 mt-2">Average interview delay</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">✅ Top Closers</h3>
          <p className="text-3xl font-bold text-green-400">Jane Smith</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">🕒 Avg. Review Time</h3>
          <p className="text-3xl font-bold text-blue-400">2.5 days</p>
        </div>
      </div>
    </div>
  );
};

// Section 4: Compliance Metrics
interface ComplianceMetricsSectionProps {
  stats: ComplianceStats;
}
const ComplianceMetricsSection = ({ stats }: ComplianceMetricsSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">🧾 Compliance & Certification Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">✅ Fully Certified</h3>
          <p className="text-3xl font-bold text-green-400">{stats.fullyCertified}%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">⚠️ Expired or Missing</h3>
          <p className="text-3xl font-bold text-red-400">{stats.expired + stats.missing}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">🔔 Upcoming Expirations</h3>
          <p className="text-3xl font-bold text-yellow-400">{stats.upcomingExpirations}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">📍 Non-Compliant Hires</h3>
          <p className="text-3xl font-bold text-red-500">{stats.nonCompliantHires}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">📅 Certifications Over Time</h3>
          <div className="mt-4 h-20 relative">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700"></div>
            <div className="absolute bottom-0 left-0 h-2 bg-green-500 w-1/2"></div>
            <div className="absolute bottom-0 left-0 h-2 bg-orange-500 w-1/4"></div>
            <div className="absolute bottom-0 left-0 h-2 bg-red-500 w-1/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 5: Platform Engagement
interface PlatformEngagementSectionProps {
  usage: PlatformUsage;
}
const PlatformEngagementSection = ({ usage }: PlatformEngagementSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📱 Platform Usage & Engagement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">🖥️ Portal Usage Trends</h3>
          <div className="flex justify-between items-center mb-4">
            <span>Daily Active Users</span>
            <span className="text-2xl font-bold text-orange-500">{usage.activeUsers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Mobile vs Desktop</span>
            <div className="text-right">
              <div className="flex items-center">
                <span className="text-sm mr-2">📱 {usage.mobileUsage}%</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500"
                    style={{ width: `${usage.mobileUsage}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm mr-2">💻 {usage.desktopUsage}%</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${usage.desktopUsage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">🧩 Most Used Features</h3>
          <div className="space-y-4">
            <div>
              <strong>Most Popular:</strong> {usage.mostUsedFeature}
            </div>
            <div>
              <strong>Smart Match Acceptance Rate:</strong> {usage.smartMatchRate}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};