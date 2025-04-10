



import { 
    Calendar, 
    LayoutDashboard, 
    Users, 
    Settings, 
    BarChart3, 
    MessageSquare, 
    Clock, 
    CreditCard 
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
                            <a href="/dashboard">
                                <LayoutDashboard className="h-5 w-5" />
                                <span>Dashboard</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/calendar">
                                <Calendar className="h-5 w-5" />
                                <span>Calendario</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/appointments">
                                <Clock className="h-5 w-5" />
                                <span>Citas</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/clients">
                                <Users className="h-5 w-5" />
                                <span>Clientes</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/messages">
                                <MessageSquare className="h-5 w-5" />
                                <span>Mensajes</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/analytics">
                                <BarChart3 className="h-5 w-5" />
                                <span>Analíticas</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/payments">
                                <CreditCard className="h-5 w-5" />
                                <span>Pagos</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/settings">
                                <Settings className="h-5 w-5" />
                                <span>Configuración</span>
                            </a>
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
