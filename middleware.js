// middleware are functions that have access to the request response circle
import { NextResponse } from "next/server";
import checkAuth from "./app/actions/checkAuth";

export async function middleware(request) {
  const { isAuthenticated } = await checkAuth();

  if(!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next();
}

// Limiting middleware to run only on the bookings page
export const config = {
  matcher: ["/bookings", "/rooms/add", "/rooms/my"]
}





// const { pathname } = request.nextUrl;

// console.log(`Requested Page: ${pathname}`);