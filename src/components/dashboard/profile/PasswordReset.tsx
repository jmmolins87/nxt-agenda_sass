

"use client";


import { resetPassword } from "@/server/login/actions";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export const PasswordReset = () => {

    const handlerResetPass = async () => {

        const result = await resetPassword()
        if(result) {
            toast.success("Solicitud enviada", {
                description: "Se ha enviado un correo electrónico para resetear la contraseña"
            })
        } else {
            toast.error("Error", {
                description: "No se ha podido enviar el correo electrónico"
            })
        }
    }

    return (
        <div className="w-full flex justify-end mt-2.5">
            <Button 
                onClick={handlerResetPass}
                variant="outline" 
                className="cursor-pointer">Solicitar cambio de la contraseña</Button>
        </div>
    )
}