import Image from 'next/image';
import Link from 'next/link';

export function ConsoleSidebar() {
  return (
    <aside className="w-64 border-r bg-muted/30 p-4">
      <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
        <Image
          src="/icons/app/icon.svg"
          alt="Risk Graph"
          width={28}
          height={28}
          priority
        />
        <span className="font-semibold">Risk Graph</span>
      </Link>
      {/* Console navigation will go here */}
    </aside>
  );
}
