import { ConsoleHeader } from "./console-header";
import { ConsoleSidebar } from "./console-sidebar";

interface ConsoleLayoutProps {
  children: React.ReactNode;
}

export function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <>
      <ConsoleHeader />
      <div>
        <ConsoleSidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
