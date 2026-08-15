"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Bell,
  Brain,
  Building2,
  ChevronRight,
  Download,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Users,
} from "lucide-react";

type RankedPhc = {
  rank: number;
  id: string;
  name: string;
  infrastructureScore: number;
  patientLoadScore: number;
  staffingScore: number;
  finalPriorityScore: number;
  priorityLevel: string;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPhcs, setTotalPhcs] = useState(0);
const [criticalPhcs, setCriticalPhcs] = useState(0);
useEffect(() => {
  fetch("http://localhost:8081/api/phcs/summary")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to load summary");
      }
      return res.json();
    })
    .then((data) => {
      setTotalPhcs(data.total);
      setCriticalPhcs(data.critical);
    })
    .catch((error) => {
      console.error("Summary error:", error);
    });
}, []);
  const [priorityFilter, setPriorityFilter] = useState("ALL");
const [phcs, setPhcs] = useState<RankedPhc[]>([]);
const [allPhcs, setAllPhcs] = useState<RankedPhc[]>([]);  
const criticalCount = allPhcs.filter(
  (phc) => phc.priorityLevel === "CRITICAL"
).length;

const highCount = allPhcs.filter(
  (phc) => phc.priorityLevel === "HIGH"
).length;

const mediumCount = allPhcs.filter(
  (phc) => phc.priorityLevel === "MEDIUM"
).length;

const lowCount = allPhcs.filter(
  (phc) => phc.priorityLevel === "LOW"
).length;
const averageInfrastructure =
  phcs.length > 0
    ? phcs.reduce(
        (sum, phc) => sum + phc.infrastructureScore,
        0
      ) / phcs.length
    : 0;

const averagePatientLoad =
  phcs.length > 0
    ? phcs.reduce(
        (sum, phc) => sum + phc.patientLoadScore,
        0
      ) / phcs.length
    : 0;

const averageStaffing =
  phcs.length > 0
    ? phcs.reduce(
        (sum, phc) => sum + phc.staffingScore,
        0
      ) / phcs.length
    : 0;
const [summary, setSummary] = useState({
  total: 0,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
});
const [loading, setLoading] = useState(true);
const [backendError, setBackendError] = useState("");
  const [notificationsOpen, setNotificationsOpen] =
  useState(false);

const [unreadCount, setUnreadCount] = useState(3);
const handleExport = () => {
  const csvData = [
    ["Rank", "PHC Name", "Priority Score", "Status"],
    ["1", "Villianur Health Center", "92", "Critical"],
    ["2", "Bahour Wellness Unit", "88", "Critical"],
    ["3", "Ariyankuppam PHC", "74", "High"],
    ["4", "Netapakkam General", "51", "Medium"],
  ];

  const csvContent = csvData
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "AarogyaRank_Priority_Rankings.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
const [activityOpen, setActivityOpen] = useState(false);

const [interventionOpen, setInterventionOpen] =
  useState(false);

const [interventionSuccess, setInterventionSuccess] =
  useState(false);
  useEffect(() => {
  const timer = setTimeout(() => {
    let url = "http://localhost:8081/api/phcs/ranked";

    if (searchQuery.trim() && priorityFilter !== "ALL") {
      url = `http://localhost:8081/api/filter/search?query=${encodeURIComponent(searchQuery)}&priority=${priorityFilter}`;
    } else if (searchQuery.trim()) {
      url = `http://localhost:8081/api/search/phcs?query=${encodeURIComponent(searchQuery)}`;
    } else if (priorityFilter !== "ALL") {
      url = `http://localhost:8081/api/filter/phcs?priority=${priorityFilter}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load PHC data");
        }
        const maxPriorityCount = Math.max(
  criticalCount,
  highCount,
  mediumCount,
  lowCount,
  1
);
        return res.json();
      })
      .then((data) => {
setPhcs(data);

if (!searchQuery.trim() && priorityFilter === "ALL") {
  setAllPhcs(data);
}        setLoading(false);
        setBackendError("");
      })
      .catch((error) => {
        setBackendError(error.message);
        setLoading(false);
      });
  }, 300);

  return () => clearTimeout(timer);
}, [searchQuery, priorityFilter]);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-white p-5 lg:flex">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-blue-800">
            AarogyaRank
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            District Administration
          </p>
        </div>

        <nav className="space-y-2">
         <Link
  href="/"
  className="flex w-full items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800"
>
  <LayoutDashboard size={20} />
  Dashboard
</Link>

<Link
  href="/phcs"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
>
  <Building2 size={20} />
  PHC Network
</Link>

<Link
  href="/performance"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
>
  <Activity size={20} />
  Performance
</Link>

<Link
  href="/analytics"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
>
  <Brain size={20} />
  Live Analytics
</Link>

<Link
  href="/supply-chain"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
>
  <Users size={20} />
  Supply Chain
</Link>
</nav>

<div className="mt-auto border-t border-slate-200 pt-4">
  <Link
    href="/settings"
    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
  >
    <Settings size={20} />
    Settings
  </Link>

  <Link
    href="/login"
    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 hover:bg-red-50"
  >
    <LogOut size={20} />
    Logout
  </Link>
</div>
        
      </aside>

      {/* Main area */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between gap-5">
            <div>
              <div className="flex items-center text-sm text-slate-500">
                Home
                <ChevronRight size={16} />
                Dashboard
              </div>

              <h2 className="mt-1 text-xl font-bold text-blue-900">
                Puducherry District Overview
              </h2>
              {searchQuery.trim() !== "" && (
  <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
    <h2 className="text-sm font-bold text-blue-900">
      Search Results
    </h2>

    <p className="mt-1 text-sm text-slate-600">
      Searching for:{" "}
      <span className="font-semibold">
        {searchQuery}
      </span>
    </p>

    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {[
        "Villianur Health Center",
        "Bahour Wellness Unit",
        "Ariyankuppam PHC",
        "Netapakkam General",
      ]
        .filter((phc) =>
          phc
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
        .map((phc) => (
          <div
            key={phc}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <p className="font-semibold text-slate-900">
              {phc}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              PHC facility found in the district network
            </p>
          </div>
        ))}
    </div>
  </div>
)}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 md:flex">
                <Search size={18} className="text-slate-500" />

                <input
  type="text"
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)}
  placeholder="Search PHCs..."
  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
/>
<select
  value={priorityFilter}
  onChange={(event) => setPriorityFilter(event.target.value)}
  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
>
  <option value="ALL">All Priorities</option>
  <option value="CRITICAL">Critical</option>
  <option value="HIGH">High</option>
  <option value="MEDIUM">Medium</option>
  <option value="LOW">Low</option>
</select>
{(searchQuery || priorityFilter !== "ALL") && (
  <button
    type="button"
    onClick={() => {
      setSearchQuery("");
      setPriorityFilter("ALL");
    }}
    className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
  >
    Clear
  </button>
)}
              </div>

              <div className="relative">
  <button
    type="button"
    onClick={() =>
      setNotificationsOpen(!notificationsOpen)
    }
    className="relative rounded-xl p-2 text-slate-600 transition hover:bg-slate-100"
    aria-label="Open notifications"
  >
    <Bell size={20} />

    {unreadCount > 0 && (
      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
    )}
  </button>

  {notificationsOpen && (
    <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <h3 className="font-bold text-slate-900">
            Notifications
          </h3>

          <p className="text-xs text-slate-500">
            {unreadCount} unread alerts
          </p>
        </div>

        <button
          type="button"
          onClick={() => setUnreadCount(0)}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900"
        >
          Mark all as read
        </button>
      </div>

      <div className="mt-3 space-y-3">

        <div className="rounded-xl border border-red-100 bg-red-50 p-3">
          <p className="text-sm font-semibold text-red-700">
            Critical staffing shortage
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Villianur Health Center requires immediate
            staffing support.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            10 minutes ago
          </p>
        </div>

        <div className="rounded-xl border border-orange-100 bg-orange-50 p-3">
          <p className="text-sm font-semibold text-orange-700">
            Patient load increased
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Bahour Wellness Unit has exceeded the
            expected OPD load.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            45 minutes ago
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm font-semibold text-blue-700">
            Assessment completed
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Ariyankuppam PHC assessment data has
            been updated.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            1 hour ago
          </p>
        </div>

      </div>

      <button
        type="button"
        onClick={() => setNotificationsOpen(false)}
        className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Close Notifications
      </button>

    </div>
  )}
</div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {backendError && (
  <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
    Backend connection error: {backendError}
  </div>
)}
{loading && (
  <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
    Loading PHC data from backend...
  </div>
)}
          {/* KPI cards */}
          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard
  title="Total PHC Hubs"
  value={String(totalPhcs)}
  description="PHCs in district network"
  icon={<Building2 size={28} />}
  color="blue"
/>

           <KpiCard
  title="Critical PHCs"
  value={String(criticalPhcs)}
  description="Requires immediate attention"
  icon={<AlertTriangle size={28} />}
  color="red"
/>

            <KpiCard
              title="Avg District Score"
              value="72.4"
              description="In Green Zone"
              icon={<Activity size={28} />}
              color="green"
            />

            <KpiCard
              title="System Status"
              value="Connected"
              description="Last sync: Today, 09:45 AM"
              icon={<Activity size={28} />}
              color="blue"
            />
          </section>

          {/* Ranking table */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-bold">
                  Priority Ranking Matrix
                </h3>

                <p className="text-sm text-slate-500">
                  Real-time demand and resource assessment
                </p>
              </div>

              <button
  type="button"
  onClick={handleExport}
  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
>
  Export
</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead className="bg-slate-50 text-left text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-4">Rank</th>
                    <th className="px-5 py-4">PHC Facility</th>
                    <th className="px-5 py-4">Infrastructure</th>
                    <th className="px-5 py-4">Patient Load</th>
                    <th className="px-5 py-4">Priority Score</th>
                  </tr>
                </thead>

                <tbody>
  {phcs.map((phc) => (
    <tr
      key={phc.id}
      className="border-t border-slate-100 hover:bg-slate-50"
    >
      <td className="px-5 py-4 font-bold text-blue-800">
        #{String(phc.rank).padStart(2, "0")}
      </td>

      <td className="px-5 py-4">
        <p className="font-semibold">
          {phc.name}
        </p>

        <p className="text-xs text-slate-500">
          ID: {phc.id}
        </p>
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-blue-700"
              style={{
                width: `${phc.infrastructureScore}%`,
              }}
            />
          </div>

          <span className="text-sm font-semibold">
            {phc.infrastructureScore.toFixed(1)}
          </span>
        </div>
      </td>

      <td className="px-5 py-4 font-medium">
        {phc.patientLoadScore.toFixed(1)}
      </td>

      <td className="px-5 py-4">
        <span
          className={
            phc.finalPriorityScore >= 80
              ? "text-xl font-bold text-red-600"
              : phc.finalPriorityScore >= 60
              ? "text-xl font-bold text-amber-600"
              : "text-xl font-bold text-green-600"
          }
        >
          {phc.finalPriorityScore.toFixed(2)}
        </span>
      </td>
    </tr>
  ))}

  {phcs.length === 0 && !loading && (
    <tr>
      <td
        colSpan={5}
        className="px-5 py-10 text-center text-slate-500"
      >
        No PHC ranking data available.
      </td>
    </tr>
  )}
</tbody>
              </table>
            </div>
          </section>
          {/* Dashboard insights */}
<section className="mt-6 grid gap-6 xl:grid-cols-3">
  {/* Critical alerts */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AlertTriangle className="text-red-600" size={22} />

        <h3 className="text-lg font-bold">
          Critical Alerts
        </h3>
      </div>

      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
        3 ACTIVE
      </span>
    </div>

    <div className="space-y-5">
      <AlertItem
        title="Staffing Shortage: Villianur"
        description="Two specialists are unavailable. Emergency service delays are expected."
        time="10 minutes ago"
        level="High"
        color="red"
      />

      <AlertItem
        title="Power Critical: Bahour"
        description="Generator fuel is at 12%. The refuel request is still pending."
        time="45 minutes ago"
        level="Critical"
        color="red"
      />

      <AlertItem
        title="Heavy Inflow: Ariyankuppam"
        description="OPD capacity is near 95% following a rise in viral cases."
        time="1 hour ago"
        level="Moderate"
        color="green"
      />
    </div>

   <button
  type="button"
  onClick={() => setActivityOpen(!activityOpen)}
  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
>
  {activityOpen ? "Hide Activity" : "View Activity"}
</button>
{activityOpen && (
  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          Recent PHC Activity
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Latest system updates and intervention activity.
        </p>
      </div>

      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        Live Updates
      </span>
    </div>

    <div className="mt-5 space-y-4">

      <div className="border-l-4 border-red-500 pl-4">
        <p className="text-sm font-semibold text-slate-900">
          Villianur staffing shortage escalated
        </p>

        <p className="mt-1 text-sm text-slate-500">
          The priority score remains critical at 92.
        </p>

        <p className="mt-1 text-xs text-slate-400">
          10 minutes ago
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <p className="text-sm font-semibold text-slate-900">
          Bahour patient-load assessment updated
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Peak OPD demand has increased during the current review.
        </p>

        <p className="mt-1 text-xs text-slate-400">
          45 minutes ago
        </p>
      </div>

      <div className="border-l-4 border-blue-500 pl-4">
        <p className="text-sm font-semibold text-slate-900">
          Ariyankuppam assessment completed
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Infrastructure and utilization data were updated.
        </p>

        <p className="mt-1 text-xs text-slate-400">
          1 hour ago
        </p>
      </div>

    </div>
  </div>
)}
  </div>

  {/* AI insights */}
  <div className="rounded-2xl border-l-4 border-emerald-700 bg-emerald-50 p-6 shadow-sm">
    <div className="mb-6 flex items-center gap-2">
      <Brain className="text-emerald-700" size={23} />

      <h3 className="text-lg font-bold text-emerald-800">
        Aarogya AI Insights
      </h3>
    </div>

    <div className="space-y-4">
      <div className="border-b border-emerald-200 pb-3">
        <p className="text-xs font-semibold uppercase text-slate-500">
          Highest Risk Region
        </p>

        <p className="mt-1 font-bold text-red-600">
          South Coastal Region
        </p>
      </div>

      <div className="border-b border-emerald-200 pb-3">
        <p className="text-xs font-semibold uppercase text-slate-500">
          Patient Load Forecast
        </p>

        <p className="mt-1 font-bold text-red-600">
          +14.2% in the next 7 days
        </p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-white p-4">
        <p className="text-sm font-bold text-emerald-700">
          Top Recommendation
        </p>

        <p className="mt-2 font-semibold">
          Priority Vaccine Cold Chain Audit
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Power fluctuations were detected in South Coastal
          storage hubs. An immediate audit is recommended.
        </p>
      </div>

     <button
  type="button"
  onClick={() => {
    setInterventionOpen(true);
    setInterventionSuccess(false);
  }}
  className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
>
  Execute Interventions
</button>
    </div>
  </div>

  {/* System summary */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-bold">
      District Readiness
    </h3>

    <div className="my-7 flex justify-center">
      <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-[14px] border-blue-700">
        <span className="text-3xl font-bold text-blue-800">
{averageInfrastructure.toFixed(0)}%        </span>

        <span className="text-xs font-semibold text-slate-500">
          Target: 90%
        </span>
      </div>
    </div>

    <p className="text-center text-sm text-slate-500">
Average infrastructure readiness from backend data    </p>

    <div className="mt-6 rounded-xl bg-blue-50 p-4">
      <p className="text-xs font-semibold uppercase text-slate-500">
        NHM Gateway
      </p>

      <p className="mt-1 font-bold text-emerald-700">
        Connected
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Last synchronization: Today, 09:45 AM
      </p>
    </div>
  </div>
</section>

{/* Dashboard metrics */}
<section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {/* Priority distribution */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold">
        Priority Distribution
      </h3>

      <span className="text-xs text-slate-500">
        Current Data
      </span>
    </div>

    <div className="mt-8 flex h-44 items-end justify-around gap-4">
      <ChartBar
  height={`${Math.max(criticalCount * 100 / Math.max(phcs.length, 1), 5)}%`}
  label={criticalCount.toString()}
  name="Critical"
  color="bg-red-600"
/>

<ChartBar
  height={`${Math.max(highCount * 100 / Math.max(phcs.length, 1), 5)}%`}
  label={highCount.toString()}
  name="High"
  color="bg-orange-500"
/>

<ChartBar
  height={`${Math.max(mediumCount * 100 / Math.max(phcs.length, 1), 5)}%`}
  label={mediumCount.toString()}
  name="Medium"
  color="bg-blue-700"
/>

<ChartBar
  height={`${Math.max(lowCount * 100 / Math.max(phcs.length, 1), 5)}%`}
  label={lowCount.toString()}
  name="Low"
  color="bg-emerald-600"
/>
    </div>
  </div>

  {/* OPD flow */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold">
        OPD Flow Variance
      </h3>

      <Activity className="text-blue-700" size={21} />
    </div>

    <div className="mt-7 rounded-xl bg-slate-50 p-4">
      <svg
        viewBox="0 0 100 40"
        className="h-32 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 10 10, 20 25 T 40 15 T 60 35 T 80 5 T 100 20"
          fill="none"
          stroke="#1565C0"
          strokeWidth="2"
        />
      </svg>
    </div>

    <div className="mt-4 flex justify-between">
      <p className="text-sm text-slate-500">
        Weekly patient inflow
      </p>

      <p className="font-bold text-blue-800">
        Peak: 14.2k
      </p>
    </div>
  </div>

  {/* Availability */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-bold">
      Critical Availability
    </h3>

    <div className="mt-7 space-y-6">
      <AvailabilityBar
  label="Average Staffing"
  value={Number(averageStaffing.toFixed(0))}
  color="bg-blue-700"
/>

<AvailabilityBar
  label="Average Infrastructure"
  value={Number(averageInfrastructure.toFixed(0))}
  color="bg-emerald-600"
/>

<AvailabilityBar
  label="Average Patient Load"
  value={Number(averagePatientLoad.toFixed(0))}
  color="bg-red-600"
/>
    </div>

    <p className="mt-7 text-center text-xs text-slate-500">
      Data based on biometric synchronization
    </p>
  </div>
</section>
        </div>
        {interventionOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4">

    <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Execute PHC Intervention
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Select an action for the highest-priority PHC.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setInterventionOpen(false)}
          className="rounded-lg px-3 py-1 text-xl text-slate-500 hover:bg-slate-100"
          aria-label="Close intervention panel"
        >
          ×
        </button>
      </div>

      {interventionSuccess ? (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">

          <p className="font-bold text-emerald-700">
            Intervention request submitted successfully
          </p>

          <p className="mt-2 text-sm text-emerald-700">
            The district health team has been notified about
            the Villianur staffing requirement.
          </p>

        </div>
      ) : (
        <>
          <div className="mt-6">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Target PHC
            </label>

            <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600">
              <option>
                Villianur Primary Health Centre
              </option>

              <option>
                Bahour Community Health Centre
              </option>

              <option>
                Ariyankuppam Primary Health Centre
              </option>
            </select>

          </div>

          <div className="mt-4">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Intervention
            </label>

            <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600">
              <option>
                Deploy temporary nursing staff
              </option>

              <option>
                Request additional duty doctor
              </option>

              <option>
                Increase peak-hour OPD support
              </option>

              <option>
                Start infrastructure maintenance
              </option>
            </select>

          </div>

          <div className="mt-4">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Priority
            </label>

            <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600">
              <option>Immediate</option>

              <option>High</option>

              <option>Planned</option>
            </select>

          </div>

          <div className="mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setInterventionOpen(false)}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => setInterventionSuccess(true)}
              className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Submit Intervention
            </button>

          </div>
        </>
      )}

    </div>
  </div>
)}
      </main>
    </div>
  );
}

function KpiCard({
  title,
  value,
  description,
  icon,
  color,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "red" | "green";
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    red: "bg-red-50 text-red-600",
    green: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`rounded-2xl p-4 ${styles[color]}`}>
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 text-2xl font-bold">{value}</h3>

          <p className="mt-1 text-xs font-medium text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
function AlertItem({
  title,
  description,
  time,
  level,
  color,
}: {
  title: string;
  description: string;
  time: string;
  level: string;
  color: "red" | "green";
}) {
  const borderColor =
    color === "red"
      ? "border-red-500"
      : "border-emerald-500";

  return (
    <div className={`border-l-4 ${borderColor} pl-4`}>
      <p className="font-semibold">
        {title}
      </p>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        {description}
      </p>

      <p className="mt-2 text-xs font-medium text-slate-400">
        {time} · Impact: {level}
      </p>
    </div>
  );
}

function ChartBar({
  height,
  label,
  name,
  color,
}: {
  height: string;
  label: string;
  name: string;
  color: string;
}) {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-end">
      <span className="mb-2 text-xs font-bold">
        {label}
      </span>

      <div
        className={`w-full rounded-t-lg ${color}`}
        style={{ height }}
      />

      <span className="mt-2 text-[10px] font-semibold text-slate-500">
        {name}
      </span>
    </div>
  );
}

function AvailabilityBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-semibold">
          {label}
        </span>

        <span className="font-bold">
          {value}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}