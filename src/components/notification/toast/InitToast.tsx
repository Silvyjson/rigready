// src/utils/toast.js

import ReactDOM from "react-dom/client";
import ToastContainerRefSetter from "./ToastContainerRefSetter";
import { ToastContext } from "./ToastContext";

declare global {
  interface Window {
    addToast?: (message: string, type?: 'success' | 'error') => void;
  }
}

let container: HTMLElement | null = null;

export function initToast(containerId = "toast-root") {
  container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const root = ReactDOM.createRoot(container);
  root.render(
    <ToastContext.Provider value={(message: string, type: 'success' | 'error' = 'success') => {
      if (typeof window.addToast === 'function') {
        window.addToast(message, type);
      }
    }}>
      <ToastContainerRefSetter />
    </ToastContext.Provider>
  );
}
