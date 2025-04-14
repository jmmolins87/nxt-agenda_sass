


"use client"


import { useState } from "react";

import Link from "next/link";

import { signinAction } from "@/server/auth/auth";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { Loader2 } from "lucide-react";
import { PhoneCall } from "lucide-react";


export default function LoginForm() {

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const pass = formData.get("password") as string;

        const result = await signinAction(email, pass);

        toast.error("Error", {
            description: "Usuario o contraseña incorrectos"
        })

        setIsLoading(false);

        // const result = await fetch("api/signin", {
        //     method: "POST",
        //     body: JSON.stringify({ email, pass }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // const data = await result.json();

        // if (data.success === false) {
        //     setErrorTxt("Correo electrónico o contraseña incorrectos");
        //     setIsLoading(false); 
        // } else {
        //     setErrorTxt("");
        //     setIsLoading(false);
        //     router.push("/dashboard");
        // }
    }

    return (
        <form onSubmit={onSubmit} className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
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
                        <Input id="email" type="email" name="email" placeholder="tu@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Contraseña</Label>
                            <Link href="/recovery" className="text-sm hover:text-gray-400">¿Olvidaste tu contraseña?</Link>
                        </div>
                        <Input id="password" type="password" name="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal">Recordarme</Label>
                    </div>
                    <Button type="submit" className="w-full" disabled={ isLoading }>
                        { isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Iniciar sesión" }
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">¿No tienes una cuenta?</p>
                    <Link href="/register" className="font-medium hover:underline">Regístrate</Link>
                </CardFooter>
            </Card>
        </form>
    )
}