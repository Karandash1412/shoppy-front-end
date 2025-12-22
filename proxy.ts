import { NextRequest, NextResponse } from "next/server";
import { unauthenticatedRoutes } from "./app/constants/routes";

/**
 * Proxy function to protect routes that require authentication
 * Runs for every request handled by this proxy
 */
export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const auth = req.cookies.get("Authentication")?.value;

    // Allow access to unauthenticated routes
    if (unauthenticatedRoutes.some(route => pathname.startsWith(route.path))) {
        return NextResponse.next();
    }

    // Redirect to login if not authenticated and trying to access protected route
    if (!auth) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next/static|_next/image|.*\\.png$).*)"],
};

