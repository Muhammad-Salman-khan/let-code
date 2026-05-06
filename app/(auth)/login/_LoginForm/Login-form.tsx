"use client";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginSchema } from "@/lib/Validator/Form-validators";
import { LoginWithEmail } from "@/action/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient, signIn, useSession } from "@/lib/auth/auth-client";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const { data } = useSession();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      const response = await LoginWithEmail(value);

      if (!response?.success) {
        toast.error(response?.message.toString());
        return;
      }
      toast.success(response.message.toString());

      setTimeout(() => router.push(`/dashboard/${data?.user?.name}`), 2000);
    },
  });
  const LoginWithGoogle = () => {
    signIn.social({
      provider: "google",
      callbackURL: `/dashboard/${data?.user?.name}`,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-full"
    >
      <Card className="w-full max-w-md mx-auto animate-fade-in-up delay-1">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form.Field
            name="email"
            children={(field) => (
              <div className="grid gap-2 animate-fade-in-up delay-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  placeholder="m@example.com"
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                  className="transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive animate-fade-in"
                  >
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          />

          <form.Field
            name="password"
            children={(field) => (
              <div className="grid gap-2 animate-fade-in-up delay-3">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                  className="transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive animate-fade-in"
                  >
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <div className="w-full animate-fade-in-up delay-4">
                <Button
                  type="submit"
                  className="w-full transition-all duration-200 active:scale-[0.98]"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? "loggedIn..." : "Login"}
                </Button>
              </div>
            )}
          />
          <Button
            type="button"
            onClick={LoginWithGoogle}
            aria-orientation="vertical"
            className="
    animate-fade-in-up delay-5
    relative w-full h-11 flex items-center justify-center gap-3
    bg-white dark:bg-zinc-900
    border border-zinc-200 dark:border-zinc-800
    hover:bg-zinc-50 dark:hover:bg-zinc-800/80
    hover:border-zinc-300 dark:hover:border-zinc-700
    hover:shadow-md hover:-translate-y-0.5
    active:scale-[0.98] active:translate-y-0
    text-zinc-800 dark:text-zinc-100
    text-sm font-medium tracking-wide
    rounded-md
    transition-all duration-200 ease-out
    disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100
    shadow-sm
  "
          >
            <Image
              src="/google.svg"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
            />
            <span>Continue with Google</span>
          </Button>
          <div className="text-center text-sm animate-fade-in-up delay-6">
            Already have an account?{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-primary transition-colors duration-200"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
