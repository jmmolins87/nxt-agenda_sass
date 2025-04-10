


import type React from "react";

import { TopNav } from "@/components/dashboard/top-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Sidebar } from "./sidebar";


export function DashboardLayout({ children, usernameValue }: { children: React.ReactNode; usernameValue: { name: string; email: string } }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <TopNav name={usernameValue?.name || "Guest"} email={usernameValue?.email || "guest@example.com"} />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
