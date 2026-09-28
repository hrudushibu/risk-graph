import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-6 md:px-8 md:py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Risk Graph
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
