"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  Bell,
  Building2,
  CheckCircle2,
  Save,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

export default function SettingsPage() {
  const [adminName, setAdminName] = useState(
    "District Health Administrator"
  );

  const [email, setEmail] = useState(
    "admin@aarogyarank.gov.in"
  );

  const [district, setDistrict] = useState(
    "Puducherry"
  );

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [criticalAlerts, setCriticalAlerts] =
    useState(true);

  const [automaticRanking, setAutomaticRanking] =
    useState(true);

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <main className="min-h-screen p-6 lg:ml-64 lg:p-10">

        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Home / Settings
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            System Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage administrator details, notifications,
            ranking preferences, and system configuration.
          </p>
        </div>

       

        <div className="grid gap-6 xl:grid-cols-3">

          {/* Left side */}
          <div className="space-y-6 xl:col-span-2">

            {/* Administrator profile */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <User size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Administrator Profile
                  </h2>

                  <p className="text-sm text-slate-500">
                    Update the account information used for
                    district administration.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Administrator Name
                  </label>

                  <input
                    type="text"
                    value={adminName}
                    onChange={(event) =>
                      setAdminName(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Official Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    District
                  </label>

                  <select
                    value={district}
                    onChange={(event) =>
                      setDistrict(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
                  >
                    <option>Puducherry</option>
                    <option>Bahour</option>
                    <option>Karaikal</option>
                    <option>Villianur</option>
                    <option>Netapakkam</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    User Role
                  </label>

                  <input
                    type="text"
                    value="District Health Administrator"
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
                  />
                </div>

              </div>
            </section>

            {/* Notification settings */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-700">
                  <Bell size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Notifications
                  </h2>

                  <p className="text-sm text-slate-500">
                    Configure how AarogyaRank sends alerts.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">

                  <div>
                    <p className="font-semibold">
                      Email Notifications
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Receive ranking updates and district
                      assessment notifications.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(event) =>
                      setEmailNotifications(
                        event.target.checked
                      )
                    }
                    className="h-5 w-5 accent-blue-700"
                  />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">

                  <div>
                    <p className="font-semibold">
                      Critical PHC Alerts
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Receive immediate alerts when a PHC
                      enters critical priority status.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={criticalAlerts}
                    onChange={(event) =>
                      setCriticalAlerts(
                        event.target.checked
                      )
                    }
                    className="h-5 w-5 accent-blue-700"
                  />
                </div>

              </div>
            </section>

            {/* Ranking settings */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Settings size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Ranking Configuration
                  </h2>

                  <p className="text-sm text-slate-500">
                    Control how PHC priority scores are updated.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 p-4">

                <div>
                  <p className="font-semibold">
                    Automatic Priority Ranking
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Automatically recalculate PHC priority
                    scores when new assessment data is available.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={automaticRanking}
                  onChange={(event) =>
                    setAutomaticRanking(
                      event.target.checked
                    )
                  }
                  className="h-5 w-5 accent-blue-700"
                />
              </div>

            </section>

          </div>

          {/* Right side */}
          <div className="space-y-6">

            {/* System status */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <h2 className="text-lg font-bold">
                    System Status
                  </h2>

                  <p className="text-sm text-slate-500">
                    AarogyaRank services
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Ranking Engine
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    PHC Data Service
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Connected
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Analytics Engine
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </div>

              </div>
            </section>

            {/* District summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Building2 size={23} />
                </div>

                <div>
                  <h2 className="text-lg font-bold">
                    Monitoring Summary
                  </h2>

                  <p className="text-sm text-slate-500">
                    Current district data
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">
                    PHCs Monitored
                  </span>

                  <span className="font-bold">
                    10
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">
                    Critical PHCs
                  </span>

                  <span className="font-bold text-red-600">
                    2
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">
                    Last Assessment
                  </span>

                  <span className="font-bold">
                    Today
                  </span>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* Save button */}
        {/* Save section */}
<div className="mt-8">

  {saved && (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-700">
      <CheckCircle2 size={22} />

      <div>
        <p className="font-semibold">
          Settings saved successfully
        </p>

        <p className="text-sm">
          Your AarogyaRank preferences have been updated.
        </p>
      </div>
    </div>
  )}
  {/* Notification Settings */}
<section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div>
    <h2 className="text-xl font-bold text-slate-900">
      Notification Settings
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      Choose which AarogyaRank alerts and updates you want to receive.
    </p>
  </div>

  <div className="mt-6 space-y-5">

    {/* Email notifications */}
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div>
        <p className="font-semibold text-slate-900">
          Email Notifications
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Receive important system updates by email.
        </p>
      </div>

      <input
        type="checkbox"
        className="h-5 w-5 accent-blue-700"
      />
    </label>

    {/* Critical PHC alerts */}
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div>
        <p className="font-semibold text-slate-900">
          Critical PHC Alerts
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Receive an alert when a PHC reaches critical priority.
        </p>
      </div>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-blue-700"
      />
    </label>

    {/* Weekly summary */}
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div>
        <p className="font-semibold text-slate-900">
          Weekly Performance Summary
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Receive a weekly summary of PHC performance and rankings.
        </p>
      </div>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-blue-700"
      />
    </label>

    {/* Report notifications */}
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div>
        <p className="font-semibold text-slate-900">
          Report Generation Updates
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Get notified when a requested report is ready.
        </p>
      </div>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-blue-700"
      />
    </label>

  </div>
</section>

  <div className="flex justify-end">
    <button
      type="button"
      onClick={handleSave}
      className="flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
    >
      <Save size={19} />

      Save Changes
    </button>
  </div>

</div>
      </main>
    </div>
  );
}