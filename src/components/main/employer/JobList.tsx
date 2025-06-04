// src/components/employer/JobList.jsx

import JobCard from "./JobCard";

type Job = {
    id: number;
    title: string;
    location: string;
    applicants: number;
    deadline: string;
};

interface JobListProps {
    jobs?: Job[];
}

export default function JobList({ jobs = [] }: JobListProps) {
    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
            ))}
        </div>
    );
}