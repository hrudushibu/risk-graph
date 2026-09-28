import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Risk Graph. Apache-2.0 License.
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
