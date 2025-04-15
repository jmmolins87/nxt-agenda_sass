

"use client";


import Link from "next/link"

import { logout } from "@/server/login/actions";

import {
    Bell,
    Calendar,
    HelpCircle,
    Search,
    Settings,
    User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface IUserProps {
    name: string;
    email: string;
}


export function TopNav({ name, email }: IUserProps) {

    // const router = useRouter();
    // const signout = async () => {
    //     const result = await fetch("/api/signout", {
    //         method: "POST"
    //     })
    //     const data = await result.json();
    //     if (data.success) {
    //         router.push("/");
    //     }
    // }

    function getInitials(fullName: string): string {
        const parts = fullName.trim().split(' ');
        return parts.slice(0, 2).map(name => name.charAt(0).toUpperCase()).join('');
    }
    const initials = getInitials(name);

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-2 md:gap-4">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Calendar className="h-6 w-6" />
                    <span className="hidden md:inline-block">AgendaPro</span>
                </Link>
                <div className="hidden md:flex md:w-full md:max-w-sm lg:max-w-md">
                    <div className="relative w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Buscar..."
                            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notificaciones</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <HelpCircle className="h-5 w-5" />
                    <span className="sr-only">Ayuda</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Configuración</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>{ initials }</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{ name }</DropdownMenuLabel>
                        <DropdownMenuLabel>{ email }</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Perfil</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Configuración</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                            onClick={logout} 
                            className="cursor-pointer">
                            Cerrar sesión
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
