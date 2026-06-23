import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}