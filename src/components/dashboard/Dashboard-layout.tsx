


import type React from "react";

import { getCurrentUser } from "@/server/login/actions";

import { TopNav } from "@/components/dashboard/top-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Sidebar } from "./sidebar";
import { ReactNode } from "react";


export async function DashboardLayout({ children }: { children: ReactNode }) {

  const user = await getCurrentUser()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <TopNav email={user?.email || "guest@example.com"} user={typeof user === "string" ? user : "Guest"} />
        <div className="flex flex-1 w-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
