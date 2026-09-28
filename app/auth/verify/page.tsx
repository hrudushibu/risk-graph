import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Verify your email</h1>
        <p className="text-muted-foreground">
          We sent a verification link to your email
        </p>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4 text-center">
        <p className="text-sm">
          Check your inbox and click the verification link to activate your
          account.
        </p>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full">
          Resend verification email
        </Button>
      </div>

      <div className="text-center text-sm">
        <Link href="/auth/login" className="font-medium hover:underline">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
