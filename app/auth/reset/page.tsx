import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Set new password</h1>
        <p className="text-muted-foreground">
          Enter your new password below
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            New password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirm" className="text-sm font-medium">
            Confirm new password
          </label>
          <input
            id="confirm"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <Button className="w-full">Reset password</Button>
      </div>

      <div className="text-center text-sm">
        <Link href="/auth/login" className="font-medium hover:underline">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
