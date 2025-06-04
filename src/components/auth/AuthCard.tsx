// src/components/AuthCard.jsx

import type { ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
    title: string;
}

export default function AuthCard({ children, title }: AuthCardProps) {
    return (
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">{title}</h2>
            {children}
        </div>
    );
}