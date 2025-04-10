

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function RecoveryPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="w-full space-y-1">
                    <div className="flex items-center justify-center mb-2">
                        <div className="rounded-full bg-gray-100 p-3">
                            <PhoneCall className="h-6 w-6 text-gray-600" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Recuperar Contraseña</CardTitle>
                    <CardDescription className="text-center">
                        Ingresa tu correo electrónico para recibir un enlace de recuperación
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                    </div>
                    <Button type="submit" className="w-full">
                        Enviar Enlace de Recuperación
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        ¿Recordaste tu contraseña?
                    </p>
                    <Link href="/login" className="font-medium hover:underline">
                        Volver al inicio de sesión
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
