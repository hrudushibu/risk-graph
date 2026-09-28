import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Reset your password</h1>
        <p className="text-muted-foreground">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <Button className="w-full">Send reset link</Button>
      </div>

      <div className="text-center text-sm">
        <Link href="/auth/login" className="font-medium hover:underline">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
