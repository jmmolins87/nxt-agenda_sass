

'use client'

import { useState } from "react"

import { createNewContact } from "@/server/database/contacts.db"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ContactModel } from "@/models/contact.model"


export function CreateContactDialog() {

  const [information, setInformation] = useState<ContactModel>({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    age: 0
  })

  const handlerSaveNewContact = async () => {
    await createNewContact(information)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Agregar contacto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo contacto</DialogTitle>
          <DialogDescription>
            Agregar nuevo contacto a la lista de contactos.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input 
              id="name" 
              value={information.name} 
              onChange={(e) => setInformation({ ...information, name: e.target.value })}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Apellido
            </Label>
            <Input 
              id="last_name" 
              value={information.last_name} 
              onChange={(e) => setInformation({ ...information, last_name: e.target.value })}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Teléfono
            </Label>
            <Input 
              id="phone" 
              value={information.phone} 
              onChange={(e) => setInformation({ ...information, phone: e.target.value })}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input 
              id="email" 
              value={information.email} 
              onChange={(e) => setInformation({ ...information, email: e.target.value })}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Edad
            </Label>
            <Input 
              id="age" 
              type="number"
              value={information.age} 
              onChange={(e) => setInformation({ ...information, age: Number(e.target.value) })}
              className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handlerSaveNewContact} className="cursor-pointer">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
