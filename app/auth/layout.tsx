import { AppHeader } from "@/components/app/app-header";
import { AppFooter } from "@/components/app/app-footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>
      <AppFooter />
    </div>
  );
}
