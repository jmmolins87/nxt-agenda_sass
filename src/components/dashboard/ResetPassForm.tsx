


"use client";

import { useState } from "react";

import Link from "next/link";

import { setNewPassword } from "@/server/login/actions";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";



export default function ResetPassForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const password = formData.get("password") as string;
        
        const error = await setNewPassword(password)

        setIsLoading(false);
        setShowLogin(true);
    }

    return (
        <form onSubmit={onSubmit} className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="w-full space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Recuperar Contraseña</CardTitle>
                    <CardDescription className="text-center">
                        Ingresa tu nueva constraseña
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Nueva contraseña</Label>
                        <Input id="password" type="password" placeholder="Escriba su nueva contraseña" />
                    </div>
                    <Button type="submit" className="w-full" disabled={ isLoading }>
                        { isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enviar Enlace de Recuperación" }
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        ¿Recordaste tu contraseña?
                    </p>
                    {
                        showLogin && <Link href="/login" className="font-medium hover:underline">
                            Volver al inicio de sesión
                        </Link>
                    }
                </CardFooter>
            </Card>
        </form>
    )
}