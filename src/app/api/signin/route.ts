




import { NextRequest, NextResponse } from "next/server";

import { signinMock } from "@/app/services/signin";


export async function POST(request: NextRequest) {

    const body = await request.json();
    const { email, pass } = body;

    const logged = await signinMock(email, pass);
    if(!logged) {
        return NextResponse.json({ success: false });
    }

    return NextResponse.json({ success: true });

}