import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    let url = req.nextUrl.clone();
    if (req.nextUrl.pathname === "/order-summary") {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === "production",
        });
        url.pathname = "/login";
        if (!session) return NextResponse.redirect(url);
    }
}
