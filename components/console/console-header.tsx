import Image from 'next/image';
import Link from 'next/link';

export function ConsoleHeader() {
  return (
    <header className="border-b bg-background">
      <div className="px-6 py-4 md:px-8">
        <Link href="/console" className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
          <Image
            src="/icons/app/icon.svg"
            alt="Risk Graph"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold">Risk Graph Console</span>
        </Link>
      </div>
    </header>
  );
}
