


import Link from "next/link";

import { 
    LayoutDashboard, 
    Users, 
    Settings
} from "lucide-react"

import {
    Sidebar as SidebarComponent,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarHeader,
    SidebarFooter,
    SidebarSeparator,
} from "@/components/ui/sidebar"


export function Sidebar() {
    return (
        <SidebarComponent>
            <SidebarHeader className="flex items-center justify-center py-4">
                <h2 className="text-lg font-semibold">Panel de Administración</h2>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/dashboard">
                                <LayoutDashboard className="h-5 w-5" />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/dashboard/contacts">
                                <Users className="h-5 w-5" />
                                <span>Contactos</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/recovery">
                                <Settings className="h-5 w-5" />
                                <span>Configuración</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 text-xs text-muted-foreground">
                <p>AgendaPro SaaS v1.0</p>
            </SidebarFooter>
        </SidebarComponent>
    )
}
