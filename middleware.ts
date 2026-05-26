import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const adminToken = req.cookies.get("admin_token")?.value;
  const { pathname } = req.nextUrl;

  const isAdminDashboard = pathname.startsWith("/admin/dashboard");
  const isAdminLogin = pathname === "/admin/login";

  if (isAdminDashboard && adminToken !== "authenticated") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (isAdminLogin && adminToken === "authenticated") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/login", "/admin/dashboard/:path*"],
};