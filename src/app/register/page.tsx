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


export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="w-full space-y-1">
                    <div className="flex items-center justify-center mb-2">
                        <div className="rounded-full bg-gray-100 p-3">
                            <PhoneCall className="h-6 w-6 text-gray-600" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Crear Cuenta</CardTitle>
                    <CardDescription className="text-center">
                        Regístrate para comenzar a usar tu agenda telefónica
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="nombre">Nombre</Label>
                            <Input id="nombre" placeholder="Tu nombre" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="apellido">Apellido</Label>
                            <Input id="apellido" placeholder="Tu apellido" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                        <Input id="confirm-password" type="password" />
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="terms" className="mt-1" />
                        <Label htmlFor="terms" className="text-sm font-normal">
                            Acepto los términos y condiciones y la política de privacidad
                        </Label>
                    </div>
                    <Button type="submit" className="w-full">
                        Registrarse
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes una cuenta?
                    </p>
                    <Link href="/login" className="font-medium hover:underline">
                        Iniciar sesión
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
