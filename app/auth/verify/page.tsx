import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyEmailPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Verify your email</CardTitle>
        <CardDescription>We sent a verification link to your email</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-sm text-muted-foreground">
          Check your inbox and click the verification link to activate your account.
        </p>
        <Button variant="outline" className="w-full">Resend verification email</Button>
      </CardContent>
      <CardFooter className="justify-center text-sm">
        <Link href="/auth/login" className="font-medium hover:underline">Back to sign in</Link>
      </CardFooter>
    </Card>
  );
}
