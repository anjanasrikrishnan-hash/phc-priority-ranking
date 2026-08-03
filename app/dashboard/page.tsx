import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="p-6 lg:ml-64 lg:p-10">
        <p className="text-sm font-semibold text-emerald-700">
          DISTRICT HEALTH OVERVIEW
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          AarogyaRank Dashboard
        </h1>

        <p className="mt-3 text-slate-500">
          PHC Priority Ranking and Healthcare Decision Support System
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Dashboard
          </h2>

          <p className="mt-2 text-slate-500">
            Dashboard components will be added here.
          </p>
        </div>
      </main>
    </div>
  );
}