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
import signupSchema from "@/lib/Validator/SignUp-Validator";

export default function SignUpForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-full"
    >
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form.Field
            name="username"
            children={(field) => (
              <div className="grid gap-2">
                <Label htmlFor={field.name}>Username</Label>
                <Input
                  id={field.name}
                  placeholder="johndoe"
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive"
                  >
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          />

          <form.Field
            name="email"
            children={(field) => (
              <div className="grid gap-2">
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
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive"
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
              <div className="grid gap-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive"
                  >
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          />

          <form.Field
            name="confirmPassword"
            children={(field) => (
              <div className="grid gap-2">
                <Label htmlFor={field.name}>Confirm Password</Label>
                <Input
                  id={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-destructive"
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
              <Button type="submit" className="w-full" disabled={!canSubmit}>
                {isSubmitting ? "Creating..." : "Create Account"}
              </Button>
            )}
          />
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
