import { AppHeader } from "@/components/app/app-header";
import { AppFooter } from "@/components/app/app-footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
      <AppFooter />
    </div>
  );
}
