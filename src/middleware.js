// middleware.js
import { NextResponse } from 'next/server';

const comingSoonPaths = ['/#/Contact', '/#about-us"', '/events', '/gallery'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (comingSoonPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/coming-soon';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
