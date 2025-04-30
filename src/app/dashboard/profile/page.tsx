



import Link from "next/link"

import { getCurrentUser } from "@/server/login/actions"

import { TopNav } from "@/components/dashboard/top-nav"
import { ChangeName } from "@/components/dashboard/profile/ChangeName"
import { PasswordReset } from "@/components/dashboard/profile/PasswordReset"
import { Button } from "@/components/ui/button"


export default async function ProfilePage() {

    const user = await getCurrentUser()
    const displayName = user?.user_metadata.display_name as string ?? "User"

    return(
        <div>
            <TopNav user={displayName} email={user?.email || ''} />
            <div className="max-w-3/4 mt-5 p-3 mx-auto">
                <h1 className="text-2xl font-semibold">Profile</h1>
                <hr />
                <div className="w-full flex justify-between items-center gap-4">
                    <ChangeName displayName={ displayName } />
                    <PasswordReset />
                </div>
                <div className="flex justify-end">
                    <Button className="mt-10">
                        <Link href="/dashboard">Volver al Dashboard</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}