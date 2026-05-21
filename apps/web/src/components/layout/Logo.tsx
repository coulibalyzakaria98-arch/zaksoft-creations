'use client';

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center group">
      <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        ZAKSOFT
      </span>
      <span className="text-xs text-gray-500 -mt-1 tracking-wide uppercase">
        creations
      </span>
    </Link>
  );
}
