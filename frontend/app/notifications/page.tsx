import { Navbar } from "@/components/layout/Navbar";
import { DesktopSidebar } from "@/components/layout/DesktopSidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { NotificationsPage } from "@/components/pages/NotificationsPage";

export default function Notifications() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <DesktopSidebar />
        <main className="flex-1 p-6">
          <NotificationsPage />
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}


