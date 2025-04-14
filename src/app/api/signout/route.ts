




import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST() {
    
    // Set cookies
    const cookiesHadler = await cookies();
    cookiesHadler.delete("isLogged");
    cookiesHadler.delete("username");


    return NextResponse.json({ success: true })

}