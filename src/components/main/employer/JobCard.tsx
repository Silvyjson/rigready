// src/components/employer/JobCard.jsx

type JobCardProps = {
    title: string;
    location: string;
    applicants: number;
    deadline: string;
};

export default function JobCard({ title, location, applicants, deadline }: JobCardProps) {
    return (
        <div className="bg-gray-700 rounded-lg p-4 shadow hover:shadow-orange-500/20 hover:border-l-4 hover:border-orange-500 transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{location}</p>
                    <p className="text-xs text-gray-500 mt-1">{deadline}</p>
                </div>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {applicants} Apps
                </span>
            </div>
        </div>
    );
  }