


import { cookies } from "next/headers";

import { DashboardLayout } from "@/components/dashboard/Dashboard-layout";
import { DashboardContent } from "@/components/dashboard/Dashboard-content";


export default async function DashboardPage() {

  const cookiesHandler = await cookies();
  const username = cookiesHandler.get("username");
  const usernameValue = JSON.parse(username?.value || "{}");

  return (
    <DashboardLayout usernameValue={usernameValue}>
      <DashboardContent />
    </DashboardLayout>
  )
}
