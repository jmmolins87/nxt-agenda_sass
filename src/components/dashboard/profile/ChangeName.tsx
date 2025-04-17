

"use client"

import { useState } from "react"

import { changeDisplayName } from "@/server/login/actions"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface IChangeNameProps {
    displayName: string
}


export const ChangeName = ({ displayName }: IChangeNameProps) => {

    const [name, setName] = useState(displayName)
    const handlerChangeName = async () => {
        await changeDisplayName(name)
        toast.success("Cambio exitoso", {
            description: "El cambio de nombre se realizó correctamente"
        })
    }

    return (
        <div className="w-full flex justify-start items-center gap-2.5 mt-2.5">
            <h2 className="min-w-1/4">Cambiar nombre</h2>
            <Input 
                type="text" 
                value={name} 
                onChange={(e) => {
                    setName(e.target.value)
                }}
                placeholder="Nuevo nombre"
                className="min-w-2/3" />
            <Button 
                onClick={handlerChangeName} 
                variant="outline" 
                className="min-w-1/4 cursor-pointer">
                Guardar
            </Button>
        </div>
    )
}