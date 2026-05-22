"use client";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { signupSchema } from "@/lib/Validator/Form-validators";
import { signUpwithEmail } from "@/modules/auth/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, useSession } from "@/lib/auth/auth-client";
// Using shadcn/ui Button instead (per AGENTS.md)
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";

export default function SignUpForm() {
  const router = useRouter();
  const { data } = useSession();

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
      const response = await signUpwithEmail(value);

      if (!response?.success) {
        toast.error(response?.message.toString());
        return;
      }
      toast.success(response.message.toString());
      setTimeout(() => router.push("/login"), 2000);
    },
  });

  const SignUpwithGoogle = (): void => {
    signIn.social({
      provider: "google",
      callbackURL: `/`,
    });
  };

  // const SignUpwithGitHub = (): void => {
  //   signIn.social({
  //     provider: "google",
  //     callbackURL: `/`,
  //   });
  // };

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header Component */}
      <div className="space-y-2">
        <h2 className="text-[32px] font-black uppercase tracking-tighter text-[#1c1b1b]">
          System Registration
        </h2>
        <p className="text-[#434656] font-medium text-sm">
          INITIALIZE YOUR ARCHITECT PROFILE
        </p>
      </div>

      {/* Registration Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        {/* Username */}
        <form.Field
          name="username"
          children={(field) => (
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <Input
                  id={field.name}
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                  placeholder="ARCHITECT_01"
                  className="w-full pl-3 pr-4 py-3 bg-white border-2 border-[#1c1b1b] rounded focus:ring-0 focus:border-[#0040e0] focus:shadow-[6px_6px_0px_0px_#0040e0] transition-all placeholder:text-[#c4c5d9] font-bold text-[#1c1b1b]"
                />
              </div>
              {field.state.meta.errors.length > 0 && (
                <p
                  id={`${field.name}-error`}
                  className="text-sm text-[#ae0008] font-bold"
                >
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Email */}
        <form.Field
          name="email"
          children={(field) => (
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Input
                  id={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={field.state.meta.errors.length > 0}
                  aria-describedby={`${field.name}-error`}
                  placeholder="CORE@DEVCODE.SYSTEM"
                  className="w-full pl-3 pr-4 py-3 bg-white border-2 border-[#1c1b1b] rounded focus:ring-0 focus:border-[#0040e0] focus:shadow-[6px_6px_0px_0px_#0040e0] transition-all placeholder:text-[#c4c5d9] font-bold text-[#1c1b1b]"
                />
              </div>
              {field.state.meta.errors.length > 0 && (
                <p
                  id={`${field.name}-error`}
                  className="text-sm text-[#ae0008] font-bold"
                >
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Password Grid */}
        <div className="grid grid-cols-1 gap-6">
          <form.Field
            name="password"
            children={(field) => (
              <div className="space-y-2">
                <label className="block text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id={field.name}
                    type="password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={field.state.meta.errors.length > 0}
                    aria-describedby={`${field.name}-error`}
                    placeholder="••••••••"
                    className="w-full pl-3 pr-4 py-3 bg-white border-2 border-[#1c1b1b] rounded focus:ring-0 focus:border-[#0040e0] focus:shadow-[6px_6px_0px_0px_#0040e0] transition-all placeholder:text-[#c4c5d9] font-bold text-[#1c1b1b]"
                  />
                </div>
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-[#ae0008] font-bold"
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
              <div className="space-y-2">
                <label className="block text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id={field.name}
                    type="password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={field.state.meta.errors.length > 0}
                    aria-describedby={`${field.name}-error`}
                    placeholder="••••••••"
                    className="w-full pl-3 pr-4 py-3 bg-white border-2 border-[#1c1b1b] rounded focus:ring-0 focus:border-[#0040e0] focus:shadow-[6px_6px_0px_0px_#0040e0] transition-all placeholder:text-[#c4c5d9] font-bold text-[#1c1b1b]"
                  />
                </div>
                {field.state.meta.errors.length > 0 && (
                  <p
                    id={`${field.name}-error`}
                    className="text-sm text-[#ae0008] font-bold"
                  >
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Primary Action */}
        <Button
          type="submit"
          // disabled={!canSubmit}
          className="w-full py-4 bg-[#0040e0] text-white font-black text-lg tracking-widest border-2 border-[#1c1b1b] shadow-[4px_4px_0px_0px_#1c1b1b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>CREATE ACCOUNT</span>
        </Button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t-2 border-[#c4c5d9]"></div>
        <span className="flex-shrink mx-4 text-[12px] font-bold text-[#434656] uppercase tracking-widest text-xs">
          Auth Matrix
        </span>
        <div className="flex-grow border-t-2 border-[#c4c5d9]"></div>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols gap-4">
        <button
          type="button"
          onClick={SignUpwithGoogle}
          className="flex items-center justify-center gap-2 py-3 bg-[#e5e2e1] border-2 border-[#1c1b1b] font-bold text-sm text-[#1c1b1b] hover:bg-[#f0edec] transition-colors active:translate-x-0.5 active:translate-y-0.5"
        >
          <Image
            src="/google.svg"
            width={20}
            height={20}
            alt="Google Logo"
            aria-hidden="true"
          />
          <span>GOOGLE</span>
        </button>
      </div>

      {/* Footer Link */}
      <div className="pt-6 text-center border-t-2 border-[#c4c5d9]">
        <p className="text-sm font-bold text-[#434656]">
          ALREADY A MEMBER?{" "}
          <Link
            href="/login"
            className="text-[#0040e0] hover:underline underline-offset-4 decoration-2 ml-1"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
