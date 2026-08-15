"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  function handleSignIn(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left information panel */}
        <section className="hidden bg-blue-800 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Building2 size={27} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  AarogyaRank
                </h1>

                <p className="text-sm text-blue-100">
                  PHC Priority Ranking System
                </p>
              </div>
            </div>

            <div className="mt-24 max-w-lg">
              <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
                HEALTHCARE DECISION SUPPORT
              </span>

              <h2 className="mt-7 text-4xl font-bold leading-tight">
                Prioritize healthcare needs using
                data-driven insights.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                AarogyaRank helps district health administrators
                identify PHCs requiring urgent attention and
                support better resource allocation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-blue-100">
            <ShieldCheck size={21} />

            <span>
              Secure district healthcare administration platform
            </span>
          </div>
        </section>

        {/* Login panel */}
        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-800 text-white">
                <Building2 size={27} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-blue-800">
                  AarogyaRank
                </h1>

                <p className="text-sm text-slate-500">
                  PHC Priority Ranking System
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-xl sm:p-9">

              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  DISTRICT ADMINISTRATION
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Sign in to access the PHC priority dashboard.
                </p>
              </div>

              <form
                onSubmit={handleSignIn}
                className="mt-8 space-y-5"
              >

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Official Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={20}
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="administrator@health.gov.in"
                      required
                      className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-blue-700 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={20}
                    />

                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Remember me */}
                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300"
                  />

                  Remember this device
                </label>

                {/* Sign in */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-800 py-3.5 font-bold text-white transition hover:bg-blue-900"
                >
                  Sign In to Dashboard

                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="my-7 border-t border-slate-200" />

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex gap-3">
                  <ShieldCheck
                    className="mt-0.5 shrink-0 text-emerald-700"
                    size={20}
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Authorized access only
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      This system is intended for authorized
                      district healthcare administrators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-7 text-center text-xs text-slate-500">
              Ministry of Health · National Health Mission
            </p>

            <p className="mt-2 text-center text-xs text-slate-400">
              AarogyaRank v1.0 · Healthcare Decision Support
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}