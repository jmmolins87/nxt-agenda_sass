


'use server'

import { createClient } from "@/utils/supabase/server"

import { ContactModel } from "@/models/contact.model"


export const getAllContacts = async (id: string) => {

    const supabase = await createClient()
    const contactResponse = await supabase.from('contacts').select('*').eq('user_id', id)
    const contactsList: ContactModel[] = []
    
    contactResponse.data?.forEach((contact: ContactModel) => {
        contactsList.push(contact)
    })

    return contactsList
} 

export const createNewContact = async (contact: ContactModel) => {

    const supabase = await createClient()
    
    const {data:{user}} = await supabase.auth.getUser()
    const user_id = user?.id ?? ""

    const contactResponse = await supabase.from('contacts').insert({...contact, user_id})

    console.log(contactResponse)
}