// src/components/employer/ApplicantCard.jsx

type Candidate = {
    name: string;
    role: string;
    certs: string[];
    match?: number;
};

interface ApplicantCardProps {
    candidate: Candidate;
}


export default function ApplicantCard({ candidate, showMatch = false }: ApplicantCardProps & { showMatch?: boolean }) {
    return (
        <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-center hover:bg-gray-600 transition-colors">
            <div>
                <h3 className="font-semibold">{candidate.name}</h3>
                <p className="text-sm text-gray-400">{candidate.role}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {candidate.certs.map((cert, i) => (
                        <span key={i} className="bg-gray-600 text-orange-400 text-xs px-2 py-1 rounded">
                            {cert}
                        </span>
                    ))}
                </div>
                {showMatch && <p className="text-green-400 text-sm mt-2">Match Score: {candidate.match || 85}%</p>}
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                View Profile
            </button>
        </div>
    );
}