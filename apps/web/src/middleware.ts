// apps/web/src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that do not require authentication
const publicPaths = ['/login', '/register', '/request-reset', '/reset-password'];

export function middleware(request: NextRequest) {
  // Le middleware s'exécute côté serveur (Edge Runtime)
  // localStorage n'est PAS disponible ici. On utilise uniquement les cookies.
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Check if the current path is one of the public paths
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // If there's no token and the path is not public, redirect to login
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If there is a token and the path is public (login, register, reset), redirect to dashboard
  if (token && isPublicPath) {
    // Prevent logged-in users from accessing login/register/reset pages
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  // This regex ensures the middleware runs on all paths except those starting with /api, /_next/static, /_next/image, or /favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
