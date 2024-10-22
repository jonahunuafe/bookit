// middleware are functions that have access to the request response circle
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  console.log(`Requested Page: ${pathname}`);

  return NextResponse.next();
}

// Limiting middleware to run only on the login page
export const config = {
  matcher: ["/login"]
}