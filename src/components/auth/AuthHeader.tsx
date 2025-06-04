// src/components/AuthHeader.jsx
import { Link } from "react-router-dom";

export default function AuthHeader() {
    return (
        <Link to="/" className="flex items-center justify-center mb-10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h1 className="text-2xl md:text-3xl font-bold text-white">RIGREADY</h1>
        </Link>
    );
  }