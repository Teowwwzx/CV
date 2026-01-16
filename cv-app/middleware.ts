import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/access") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const companyAccess = request.cookies.get("company_access")?.value ?? "";
  const allowedCompanies = ["bybit", "dcconnect", "dcconnectglobal", "dcconnect global", "tapway", "google", "jpmorgan", "jp morgan", "jpm", "horse year"];
  
  if (allowedCompanies.includes(companyAccess.toLowerCase())) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/access";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};

