





import { TableContacts } from '@/components/dashboard/contacts/TableContacts';
import { DashboardLayout } from '@/components/dashboard/Dashboard-layout';
import { getCurrentUser } from '@/server/login/actions';


export default async function ContactsPage () {

    const user = await getCurrentUser() 

    return (
        <DashboardLayout>
            <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6">
                <h2>Contactos</h2>
                <hr />
                <TableContacts id={user?.id as string} />
            </main>
        </DashboardLayout>
    )
}