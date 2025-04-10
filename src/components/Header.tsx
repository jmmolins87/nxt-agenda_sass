




import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from '@/components/theme-toggle';
import { Calendar } from "lucide-react"


export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-0 flex h-16 items-center justify-between">
                <div className="w-1/3 flex items-center gap-2">
                    <div className="md:hidden">
                        <button className="flex items-center space-x-2" aria-label="Toggle Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <Calendar className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">AgendaPro</span>
                </div>
                <nav className="w-1/3 hidden md:flex justify-center gap-4 lg:gap-6">
                    <Link href="#caracteristicas" className="text-sm font-medium hover:text-primary">
                        Características
                    </Link>
                    <Link href="#servicios" className="text-sm font-medium hover:text-primary">
                        Servicios
                    </Link>
                    <Link href="#planes" className="text-sm font-medium hover:text-primary">
                        Planes
                    </Link>
                    <Link href="#opiniones" className="text-sm font-medium hover:text-primary">
                        Opiniones
                    </Link>
                    <Link href="#contacto" className="text-sm font-medium hover:text-primary">
                        Contacto
                    </Link>
                </nav>
                <div className="w-1/3 flex justify-end items-center gap-4">
                    <ThemeToggle />
                    <Link href="/login" className="text-sm font-medium hover:text-primary hidden sm:block">Iniciar Sesión</Link>
                    <Button size="lg" className="cursor-pointer">
                        <Link href="/dashboard">Prueba Gratuita</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
