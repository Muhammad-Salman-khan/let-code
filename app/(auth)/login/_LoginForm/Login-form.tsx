"use client";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/Validator/Form-validators";
import { LoginWithEmail } from "@/modules/auth/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth-client";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();

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
      setTimeout(() => router.push(`/dashboard/profile/`), 2000);
    },
  });

  const LoginWithGoogle = () => {
    signIn.social({
      provider: "google",
      callbackURL: `/dashboard/profile/`,
    });
  };

  const LoginWithGitHub = () => {
    signIn.social({
      provider: "github",
      callbackURL: `/dashboard/profile/`,
    });
  };

  return (
    <div className="w-full max-w-md">
      {/* Mobile Branding */}
      <div className="md:hidden mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-[#0040e0] border-2 border-[#1c1b1b] flex items-center justify-center">
          <span className="material-symbols-outlined text-white">terminal</span>
        </div>
        <Image src="/brandlogo.svg" alt="ÉclairCode" width={160} height={40} className="h-14 md:h-16 lg:h-18 w-auto"/>
      </div>

      <div className="mb-10">
        <h2 className="text-[32px] font-bold text-[#1c1b1b] mb-2 uppercase tracking-tight">
          System Authentication
        </h2>
        <p className="text-[16px] text-[#434656]">
          Enter your credentials to access the <Image src="/brandlogo.svg" alt="ÉclairCode" width={80} height={80} className="inline h-10 w-auto align-middle"/> terminal.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        {/* Email */}
        <form.Field
          name="email"
          children={(field) => (
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                Username or Email
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
                  placeholder="dev_engineer_01"
                  className="w-full bg-white border-2 border-[#1c1b1b] px-4 py-3 focus:ring-0 focus:border-[#0040e0] focus:shadow-[4px_4px_0px_0px_#0040e0] outline-none transition-all text-[#1c1b1b]"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#c4c5d9]">
                  person
                </span>
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
        {/* Password */}
        <form.Field
          name="password"
          children={(field) => (
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[14px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                  Password
                </label>
                <a
                  className="text-[12px] font-bold text-[#0040e0] hover:underline uppercase tracking-wider"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
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
                  className="w-full bg-white border-2 border-[#1c1b1b] px-4 py-3 focus:ring-0 focus:border-[#0040e0] focus:shadow-[4px_4px_0px_0px_#0040e0] outline-none transition-all text-[#1c1b1b]"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#c4c5d9]">
                  lock
                </span>
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
        <Button
          type="submit"
          className="w-full py-4 bg-[#0040e0] text-white font-black text-lg tracking-widest border-2 border-[#1c1b1b] shadow-[4px_4px_0px_0px_#1c1b1b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>LOGIN</span>
        </Button>
        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[#c4c5d9]"></div>
          </div>
          <div className="relative flex justify-center text-[14px] font-bold uppercase bg-[#fcf9f8] px-4">
            <span className="text-[#434656]">External Auth Protocols</span>
          </div>
        </div>
        {/* Social Login Buttons */}
        <div className="grid  gap-4">
          <Button
            type="button"
            onClick={LoginWithGoogle}
            className="flex items-center justify-center gap-3 bg-white border-2 border-[#1c1b1b] py-3 shadow-[4px_4px_0px_0px_#1c1b1b] hover:bg-[#f0edec] transition-colors active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Image
              src="google.svg"
              width={20}
              height={20}
              alt="google button"
            />
            <span className="text-[14px] text-black font-bold uppercase">
              Google
            </span>
          </Button>
        </div>
      </form>

      <div className="mt-12 pt-8 border-t border-[#c4c5d9] text-center">
        <p className="text-[16px] text-[#434656]">
          New to the terminal?{" "}
          <Link
            href="/signup"
            className="text-[#0040e0] font-bold hover:underline uppercase ml-2 tracking-wider"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
