// src/components/ToastContainer.jsx

import { useEffect, useState } from "react";
import Toast from "./Toast";
import { ToastContext } from "./ToastContext";
import type { ToastType } from "./ToastContext";

let toastId = 0;

export default function ToastContainer() {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const addToast = (message: string, type: 'success' | 'error' = "success") => {
        const id = toastId++;
        const newToast = { id, message, type };
        setToasts((prev) => [...prev, newToast]);
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    };

    const removeToast = (id: string | number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        // Optional: Add fade-in animation only once
        const style = document.createElement("style");
        style.textContent = `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <ToastContext.Provider value={addToast}>
            <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}