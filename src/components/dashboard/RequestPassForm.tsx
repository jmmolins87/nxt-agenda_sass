


"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";



export default function RequestPassForm() {

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        
        const supabase = await createClient()
        await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset`
        })

        toast.success("Email enviado", {
            description: "Se ha enviado un email con las intrucciones para restablecer la constraseña"
        })

        setIsLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="w-full space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Recuperar Usuario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Ingrese su Correo electrónico</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="Escriba su correo electrónico" />
                    </div>
                    <Button type="submit" className="w-full" disabled={ isLoading }>
                        { isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Solicitar email de recuperación" }
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}