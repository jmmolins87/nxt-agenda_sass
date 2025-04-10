




import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST() {
    
    const cookiesHadler = await cookies();
    cookiesHadler.delete("isLogged");
    cookiesHadler.delete("username");


    return NextResponse.json({ success: true })

}