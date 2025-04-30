
'use client'

import { useEffect, useState } from "react";

import { 
    Table, 
    TableBody, 
    TableCaption, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"

import { getAllContacts } from "@/server/database/contacts.db"

import { CreateContactDialog } from "./CreateContactDialog";

import { ContactModel } from "@/models/contact.model"
import { Skeleton } from "@/components/ui/skeleton";

interface TableContactsProps {
    id: string
}


export const TableContacts = ({ id }: TableContactsProps ) => {

    const [contacts, setContacts] = useState<ContactModel[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = async () => {
        const contacts: ContactModel[] = await getAllContacts(id)
        setContacts(contacts)
        setLoading(false)
    }

    return (
        <div className="mt-4">
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Edad</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        contacts.map((contact, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{ contact.id }</TableCell>
                                <TableCell>{ contact.name }</TableCell>
                                <TableCell>{ contact.last_name }</TableCell>
                                <TableCell>{ contact.phone }</TableCell>
                                <TableCell>{ contact.email }</TableCell>
                                <TableCell>{ contact.age }</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            {
                loading && (
                    <div className="w-full">
                        <Skeleton className="w-full h-5 mt-2.5" />
                        <Skeleton className="w-full h-5 mt-1.5" />
                        <Skeleton className="w-full h-5 mt-1.5" />
                    </div>
                )
            }
            <div className="flex justify-end mt-5">
                <CreateContactDialog />
            </div>
            
        </div>
    )
}