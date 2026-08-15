"use client";
import Sidebar from "@/components/Sidebar";
import {
  Activity,
  AlertTriangle,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const patientLoadData = [
  { day: "Mon", patients: 820 },
  { day: "Tue", patients: 960 },
  { day: "Wed", patients: 890 },
  { day: "Thu", patients: 1120 },
  { day: "Fri", patients: 1280 },
  { day: "Sat", patients: 1170 },
  { day: "Sun", patients: 980 },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <main className="min-h-screen p-6 lg:ml-64 lg:p-10">
        <div className="mb-8">
          <p className="text-sm text-slate-500">
            Home / Live Analytics
          </p>

          <h1 className="mt-2 text-3xl font-bold text-blue-900">
            Live Analytics
          </h1>

          <p className="mt-2 text-slate-600">
            District-level PHC demand, capacity, and priority insights.
          </p>
        </div>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Patient Load
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  12,840
                </h2>

                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  +8.4% this week
                </p>
              </div>

              <Users className="text-blue-700" size={34} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  High-Risk PHCs
                </p>

                <h2 className="mt-2 text-3xl font-bold text-red-600">
                  18
                </h2>

                <p className="mt-2 text-sm font-semibold text-red-600">
                  Immediate review needed
                </p>
              </div>

              <AlertTriangle className="text-red-600" size={34} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Average Priority Score
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  72.4
                </h2>

                <p className="mt-2 text-sm font-semibold text-blue-700">
                  District average
                </p>
              </div>

              <TrendingUp className="text-emerald-700" size={34} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
  <div className="flex items-center gap-3">
    <Activity className="text-blue-700" />

    <div>
      <h2 className="text-xl font-bold">
        Patient Load Trend
      </h2>

      <p className="text-sm text-slate-500">
        Aggregated patient inflow over the last seven days
      </p>
    </div>
  </div>

  {/* Patient Load Chart */}
  <div className="mt-6 h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={patientLoadData}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="patientLoadGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#2563eb"
              stopOpacity={0.3}
            />

            <stop
              offset="95%"
              stopColor="#2563eb"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          width={45}
        />

        <Tooltip
          formatter={(value) => [
            `${value} patients`,
            "Patient Load",
          ]}
        />

        <Area
          type="monotone"
          dataKey="patients"
          stroke="#2563eb"
          strokeWidth={3}
          fill="url(#patientLoadGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
</div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              AI Priority Insights
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4">
                <p className="font-semibold text-red-700">
                  Critical Staffing Risk
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Villianur PHC requires immediate staff allocation.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                <p className="font-semibold text-amber-700">
                  Rising Patient Demand
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Patient load may increase by 14% next week.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
                <p className="font-semibold text-emerald-700">
                  Resource Optimization
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Reallocate available nurses to high-demand regions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}