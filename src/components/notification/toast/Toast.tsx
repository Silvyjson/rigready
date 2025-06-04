// src/components/notification/Toast.tsx

const icons = {
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    error: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
};

type ToastProps = {
    id: string | number;
    message: string;
    type: 'success' | 'error';
    onClose: (id: string | number) => void;
};

export default function Toast({ id, message, type, onClose }: ToastProps) {
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
    const hoverColor = type === "success" ? "hover:bg-green-600" : "hover:bg-red-600";

    return (
        <div
            className={`max-w-md w-full bg-opacity-90 backdrop-blur-sm ${bgColor} ${hoverColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between transform transition-all animate-fadeIn`}
            style={{ animation: "fadeIn 0.3s ease-in-out" }}
        >
            <div className="flex items-center space-x-3">
                <span>{icons[type]}</span>
                <p className="text-sm">{message}</p>
            </div>
            <button onClick={() => onClose(id)} className="text-white ml-4">
                &times;
            </button>
        </div>
    );
}
