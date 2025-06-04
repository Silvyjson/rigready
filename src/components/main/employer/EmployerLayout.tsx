import Sidebar from "./Sidebar";
import Header from "./Header";
import type { ReactNode } from "react";

interface EmployerLayoutProps {
  title: string;
  children: ReactNode;
}

export default function EmployerLayout({ title, children }: EmployerLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-74">
        <div className="sticky top-0 z-30">
          <Header title={title} />
        </div>
        <main className="flex-1 p-6 overflow-auto bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
