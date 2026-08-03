"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Activity,
  BarChart3,
  Building2,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  X,
} from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "PHC Network",
    href: "/phcs",
    icon: Building2,
  },
  {
    name: "Priority Rankings",
    href: "/rankings",
    icon: BarChart3,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: Activity,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="fixed left-4 top-4 z-[60] rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-md lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>

      {/* Dark background on mobile */}
      {mobileMenuOpen && (
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-[65] bg-slate-900/40 lg:hidden"
          aria-label="Close navigation menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-[70] flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-5 shadow-xl transition-transform duration-300 lg:translate-x-0 lg:shadow-none ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Close button for mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 lg:hidden"
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-blue-800">
            AarogyaRank
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            PHC Priority Ranking System
          </p>
        </div>

        {/* Main navigation */}
        <nav className="flex flex-1 flex-col gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl border-l-4 px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-emerald-700 bg-blue-50 text-blue-800"
                    : "border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={20} />

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom navigation */}
        <div className="border-t border-slate-200 pt-4">
          <Link
            href="/settings"
            onClick={() => setMobileMenuOpen(false)}
            className={`mb-2 flex items-center gap-3 rounded-xl border-l-4 px-4 py-3 text-sm font-semibold transition ${
              pathname.startsWith("/settings")
                ? "border-emerald-700 bg-blue-50 text-blue-800"
                : "border-transparent text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Settings size={20} />

            Settings
          </Link>

          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl border-l-4 border-transparent px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={20} />

            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}