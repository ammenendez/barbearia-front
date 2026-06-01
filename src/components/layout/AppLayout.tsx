import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(182,106,60,0.14),transparent_30%),linear-gradient(180deg,#f7efe6_0%,#fffaf3_100%)] text-ink">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
