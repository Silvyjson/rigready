// src/components/employer/CertificationCard.jsx

type CertificationCardProps = {
    candidate: string;
    cert: string;
    expires: string;
};

export default function CertificationCard({ candidate, cert, expires }: CertificationCardProps) {
    return (
        <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-center hover:bg-gray-600 transition-colors">
            <div>
                <h3 className="font-semibold">{candidate}</h3>
                <p className="text-sm text-gray-400">Certification: {cert}</p>
                <p className="text-xs text-red-400 mt-1">Expires: {expires}</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                Remind
            </button>
        </div>
    );
  }