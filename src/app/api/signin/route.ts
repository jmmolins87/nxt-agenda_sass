




import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { signinMock } from "@/app/services/signin";


export async function POST(request: NextRequest) {

    const body = await request.json();
    const { email, pass } = body;

    const logged = await signinMock(email, pass);
    if(!logged) {
        return NextResponse.json({ success: false });
    }

    // Set Cookies
    const cookiesHadler = await cookies();
    cookiesHadler.set("isLogged", "ok");
    const username = {
        name: "Juan María Molins",
        email: "demo@demo.com",
        avatar: "/avatar/01.png"
    }
    cookiesHadler.set("username", JSON.stringify(username));

    return NextResponse.json({ success: true });

}