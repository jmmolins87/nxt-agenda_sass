


import Link from "next/link"
import { PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="w-full space-y-1">
                    <div className="flex items-center justify-center mb-2">
                        <div className="rounded-full bg-gray-100 p-3">
                            <PhoneCall className="h-6 w-6 text-gray-600" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
                    <CardDescription className="text-center">
                        Ingresa tus credenciales para acceder a tu agenda telefónica
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Contraseña</Label>
                            <Link href="/recovery" className="text-sm hover:text-gray-400">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <Input id="password" type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal">
                            Recordarme
                        </Label>
                    </div>
                    <Button type="submit" className="w-full">
                        Iniciar Sesión
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        ¿No tienes una cuenta?
                    </p>
                    <Link href="/register" className="font-medium hover:underline">
                        Regístrate
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
