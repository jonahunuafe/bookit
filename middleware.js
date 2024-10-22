// middleware are functions that have access to the request response circle
import { NextResponse } from "next/server";

export async function middleware(request) {
  const isAuthenticated = true;

  if(!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next();
}

// Limiting middleware to run only on the bookings page
export const config = {
  matcher: ["/bookings"]
}





// const { pathname } = request.nextUrl;

// console.log(`Requested Page: ${pathname}`);