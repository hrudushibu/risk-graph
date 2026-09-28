import Image from 'next/image';
import Link from 'next/link';

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
          <Image
            src="/icons/app/icon.svg"
            alt="Risk Graph"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-semibold">Risk Graph</span>
        </Link>
      </div>
    </header>
  );
}
