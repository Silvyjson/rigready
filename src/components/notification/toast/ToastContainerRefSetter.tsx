import React from "react";
import ToastContainer from "./ToastContainer";
import { ToastContext } from "./ToastContext";

export default function ToastContainerRefSetter() {
  const context = React.useContext(ToastContext);
  React.useEffect(() => {
    if (context) {
      (window as unknown as { addToast: typeof context }).addToast = context;
    }
  }, [context]);
  return <ToastContainer />;
}