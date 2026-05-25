'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-8 h-8">
        <Image
          src="/logo.png"
          alt="ZAKSOFT AI"
          width={32}
          height={32}
          className="object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl leading-none text-white">
          ZAKSOFT<span className="text-orange-500">AI</span>
        </span>
        <span className="text-[10px] text-gray-500 tracking-widest uppercase">
          creations
        </span>
      </div>
    </Link>
  );
}
