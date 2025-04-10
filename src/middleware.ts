




import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {

    const nextResponse = NextResponse.next({ request });
    const cookiesHandler = await cookies();
    const isLogged = cookiesHandler.get("isLogged");

    if(request.nextUrl.pathname.startsWith("/dashboard") && !isLogged) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    } else if (request.nextUrl.pathname.startsWith("/login") && isLogged) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return nextResponse;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}