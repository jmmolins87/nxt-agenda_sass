

"use client"

import React, { useState } from 'react'

import Link from "next/link"
import { Loader2, PhoneCall } from "lucide-react"

import { signup } from "@/server/login/actions"

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
import { toast } from "sonner"


export const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirm-password") as string;

        if(password !== confirmPassword) {
            toast.error("Error", {
                description: "Las dos contraseñas debe de coincidir"
            })
            setIsLoading(false)
            return
        }

        const error = await signup(email, password)

        toast.error("Error", {
            description: error.message
        })

        setIsLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
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
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="tu@ejemplo.com" 
                            required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input 
                            id="password" 
                            name="password"
                            type="password" 
                            required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                        <Input 
                            id="confirm-password" 
                            name="confirm-password"
                            type="password" 
                            required />
                    </div>
                    <Button type="submit" className="w-full">
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Registrese"}
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
        </form>
    )
}