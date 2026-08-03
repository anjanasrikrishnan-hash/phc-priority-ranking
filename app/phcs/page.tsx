"use client";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const phcs = [
  {
    id: "villianur-primary-health-centre",
    name: "Villianur Primary Health Centre",
    district: "Puducherry",
    population: "42,500",
    infrastructure: 42,
    staff: 48,
    utilization: 94,
    priority: 92,
    status: "Critical",
  },
  {
    id: "bahour-community-health-centre",
    name: "Bahour Community Health Centre",
    district: "Bahour",
    population: "38,200",
    infrastructure: 55,
    staff: 52,
    utilization: 89,
    priority: 88,
    status: "Critical",
  },
  {
    id: "ariyankuppam-primary-health-centre",
    name: "Ariyankuppam Primary Health Centre",
    district: "Puducherry",
    population: "31,800",
    infrastructure: 68,
    staff: 64,
    utilization: 82,
    priority: 74,
    status: "High",
  },
  {
    id: "netapakkam-primary-health-centre",
    name: "Netapakkam Primary Health Centre",
    district: "Netapakkam",
    population: "27,600",
    infrastructure: 82,
    staff: 76,
    utilization: 61,
    priority: 51,
    status: "Medium",
  },
  {
    id: "kirumampakkam-health-centre",
    name: "Kirumampakkam Health Centre",
    district: "Bahour",
    population: "24,900",
    infrastructure: 88,
    staff: 84,
    utilization: 58,
    priority: 45,
    status: "Medium",
  },
  {
    id: "mannadipet-primary-health-centre",
    name: "Mannadipet Primary Health Centre",
    district: "Puducherry",
    population: "29,400",
    infrastructure: 91,
    staff: 87,
    utilization: 52,
    priority: 38,
    status: "Low",
  },
  {
    id: "thirubuvanai-health-centre",
    name: "Thirubuvanai Health Centre",
    district: "Villianur",
    population: "21,700",
    infrastructure: 79,
    staff: 73,
    utilization: 67,
    priority: 56,
    status: "Medium",
  },
  {
    id: "koodapakkam-primary-health-centre",
    name: "Koodapakkam Primary Health Centre",
    district: "Villianur",
    population: "18,500",
    infrastructure: 93,
    staff: 89,
    utilization: 46,
    priority: 29,
    status: "Low",
  },
  {
    id: "thirunallar-health-centre",
    name: "Thirunallar Health Centre",
    district: "Karaikal",
    population: "35,100",
    infrastructure: 61,
    staff: 58,
    utilization: 85,
    priority: 79,
    status: "High",
  },
  {
    id: "nedungadu-primary-health-centre",
    name: "Nedungadu Primary Health Centre",
    district: "Karaikal",
    population: "22,300",
    infrastructure: 86,
    staff: 81,
    utilization: 55,
    priority: 41,
    status: "Low",
  },
];

function getStatusStyle(status: string) {
  if (status === "Critical") {
    return "bg-red-100 text-red-700";
  }

  if (status === "High") {
    return "bg-orange-100 text-orange-700";
  }

  if (status === "Medium") {
    return "bg-blue-100 text-blue-700";
  }

  return "bg-green-100 text-green-700";
}

export default function PHCsPage() {
      const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredPHCs = phcs.filter((phc) => {
    const matchesSearch =
      phc.name.toLowerCase().includes(search.toLowerCase()) ||
      phc.district.toLowerCase().includes(search.toLowerCase());

    const matchesDistrict =
      district === "All" || phc.district === district;

    const matchesStatus =
      status === "All" || phc.status === status;

    return matchesSearch && matchesDistrict && matchesStatus;
  });
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
        placeholder="Search PHC or district..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      <select
        value={district}
        onChange={(event) => setDistrict(event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-600"
      >
        <option value="All">All Districts</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Bahour">Bahour</option>
        <option value="Netapakkam">Netapakkam</option>
        <option value="Villianur">Villianur</option>
        <option value="Karaikal">Karaikal</option>
      </select>

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-600"
      >
        <option value="All">All Statuses</option>
        <option value="Critical">Critical</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  </div>
</div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    PHC Name
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    District
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Population
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Infrastructure
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Staff
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Utilization
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Priority
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
                    key={phc.name}
                    className="border-t border-slate-200 transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">
                        {phc.name}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {phc.district}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {phc.population}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {phc.infrastructure}%
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {phc.staff}%
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {phc.utilization}%
                    </td>

                    <td className="px-5 py-4">
                      <span className="font-bold text-blue-700">
                        {phc.priority}/100
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          phc.status
                        )}`}
                      >
                        {phc.status}
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
                      colSpan={9}
                      className="px-5 py-10 text-center text-sm text-slate-500"
                    >
                      No PHCs match your search or selected filters.
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