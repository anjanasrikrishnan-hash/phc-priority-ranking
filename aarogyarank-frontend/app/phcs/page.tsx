"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

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

export default function PHCsPage() {
  const [phcs, setPhcs] = useState<RankedPhc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    fetch("http://localhost:8081/api/phcs/ranked")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load PHCs");
        }
        return res.json();
      })
      .then((data) => {
        setPhcs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPHCs = phcs.filter((phc) => {
    const matchesSearch =
      phc.name.toLowerCase().includes(search.toLowerCase()) ||
      phc.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      phc.priorityLevel.toLowerCase() === status.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  function getStatusStyle(status: string) {
    if (status === "CRITICAL") {
      return "bg-red-100 text-red-700";
    }

    if (status === "HIGH") {
      return "bg-orange-100 text-orange-700";
    }

    if (status === "MEDIUM") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-green-100 text-green-700";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <p className="text-slate-600">Loading PHC rankings...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="p-6 lg:ml-64 lg:p-10">
        <div>
          <p className="text-sm font-semibold text-emerald-700">
            PHC MANAGEMENT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            PHC Network
          </h1>

          <p className="mt-3 text-slate-500">
            Monitor healthcare facilities, resource availability,
            service utilization, and priority scores.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Primary Health Centres
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {filteredPHCs.length} PHC
                  {filteredPHCs.length !== 1 ? "s" : ""} found.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search PHC or ID..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-600"
                >
                  <option value="All">All Statuses</option>
                  <option value="CRITICAL">Critical</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Rank
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    PHC Name
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Infrastructure
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Patient Load
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Staffing
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Priority Score
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPHCs.map((phc) => (
                  <tr
                    key={phc.id}
                    className="border-t border-slate-200 transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <span className="font-bold text-blue-700">
                        #{phc.rank}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">
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
                          {phc.infrastructureScore.toFixed(1)}%
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {phc.patientLoadScore.toFixed(1)}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {phc.staffingScore.toFixed(1)}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={
                          phc.finalPriorityScore >= 80
                            ? "text-xl font-bold text-red-600"
                            : phc.finalPriorityScore >= 60
                              ? "text-xl font-bold text-orange-600"
                              : phc.finalPriorityScore >= 40
                                ? "text-xl font-bold text-blue-600"
                                : "text-xl font-bold text-green-600"
                        }
                      >
                        {phc.finalPriorityScore.toFixed(2)}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          phc.priorityLevel
                        )}`}
                      >
                        {phc.priorityLevel}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <Link
                        href={`/phcs/${phc.id}`}
                        className="inline-block rounded-lg border border-blue-700 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}

                {filteredPHCs.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-10 text-center text-sm text-slate-500"
                    >
                      No PHCs match your search or selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}