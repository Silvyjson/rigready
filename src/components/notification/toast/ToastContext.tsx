import { createContext } from "react";

export type ToastType = {
    id: string | number;
    message: string;
    type: 'success' | 'error';
};

export const ToastContext = createContext<((message: string, type?: 'success' | 'error') => void) | null>(null);
