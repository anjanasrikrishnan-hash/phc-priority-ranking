"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const rankings = [
  {
    id: "villianur-primary-health-centre",
    rank: 1,
    name: "Villianur Primary Health Centre",
    district: "Puducherry",
    score: 92,
    trend: "Up",
    issue: "Severe staffing shortage",
    status: "Critical",
  },
  {
    id: "bahour-community-health-centre",
    rank: 2,
    name: "Bahour Community Health Centre",
    district: "Bahour",
    score: 88,
    trend: "Up",
    issue: "High patient load",
    status: "Critical",
  },
  {
    id: "thirunallar-health-centre",
    rank: 3,
    name: "Thirunallar Health Centre",
    district: "Karaikal",
    score: 79,
    trend: "Up",
    issue: "Infrastructure maintenance",
    status: "High",
  },
  {
    id: "ariyankuppam-primary-health-centre",
    rank: 4,
    name: "Ariyankuppam Primary Health Centre",
    district: "Puducherry",
    score: 74,
    trend: "Stable",
    issue: "Increasing OPD demand",
    status: "High",
  },
  {
    id: "thirubuvanai-health-centre",
    rank: 5,
    name: "Thirubuvanai Health Centre",
    district: "Villianur",
    score: 56,
    trend: "Down",
    issue: "Limited nursing staff",
    status: "Medium",
  },
  {
    id: "netapakkam-primary-health-centre",
    rank: 6,
    name: "Netapakkam Primary Health Centre",
    district: "Netapakkam",
    score: 51,
    trend: "Down",
    issue: "Equipment replacement",
    status: "Medium",
  },
  {
    id: "kirumampakkam-health-centre",
    rank: 7,
    name: "Kirumampakkam Health Centre",
    district: "Bahour",
    score: 45,
    trend: "Stable",
    issue: "Moderate resource gap",
    status: "Medium",
  },
  {
    id: "nedungadu-primary-health-centre",
    rank: 8,
    name: "Nedungadu Primary Health Centre",
    district: "Karaikal",
    score: 41,
    trend: "Down",
    issue: "Low specialist availability",
    status: "Low",
  },
  {
    id: "mannadipet-primary-health-centre",
    rank: 9,
    name: "Mannadipet Primary Health Centre",
    district: "Puducherry",
    score: 38,
    trend: "Stable",
    issue: "Routine monitoring",
    status: "Low",
  },
  {
    id: "koodapakkam-primary-health-centre",
    rank: 10,
    name: "Koodapakkam Primary Health Centre",
    district: "Villianur",
    score: 29,
    trend: "Down",
    issue: "Low utilization",
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

function getTrendStyle(trend: string) {
  if (trend === "Up") {
    return "text-red-600";
  }

  if (trend === "Down") {
    return "text-green-600";
  }

  return "text-slate-500";
}

function getTrendSymbol(trend: string) {
  if (trend === "Up") {
    return "↑";
  }

  if (trend === "Down") {
    return "↓";
  }

  return "→";
}
function getScoreBarColor(score: number) {
  if (score >= 85) {
    return "bg-red-600";
  }

  if (score >= 70) {
    return "bg-orange-500";
  }

  if (score >= 45) {
    return "bg-blue-600";
  }

  return "bg-green-600";
}

export default function RankingsPage() {
  const [rankingData, setRankingData] = useState(rankings);
  const [isRecalculating, setIsRecalculating] = useState(false);

  const handleRecalculate = () => {
    setIsRecalculating(true);

    setTimeout(() => {
      const updatedRankings = rankingData
        .map((phc) => {
          const change = Math.floor(Math.random() * 7) - 3;

          return {
            ...phc,
            score: Math.max(0, Math.min(100, phc.score + change)),
          };
        })
        .sort((a, b) => b.score - a.score)
        .map((phc, index) => ({
          ...phc,
          rank: index + 1,
        }));

      setRankingData(updatedRankings);
      setIsRecalculating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="p-6 lg:ml-64 lg:p-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              PRIORITY DECISION SUPPORT
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Priority Rankings
            </h1>

            <p className="mt-3 text-slate-500">
              PHCs are ranked using infrastructure, staffing,
              utilization, and population-need indicators.
            </p>
          </div>

          <button
  onClick={handleRecalculate}
  disabled={isRecalculating}
  className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
>
  {isRecalculating
    ? "Recalculating..."
    : "Recalculate Rankings"}
</button>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              District Priority Leaderboard
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Higher scores indicate a greater need for intervention.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Rank
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    PHC
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    District
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Priority Score
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Trend
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Key Issue
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
  Action
</th>
                </tr>
              </thead>

              <tbody>
{rankingData.map((phc) => (                  
    <tr
                    key={phc.rank}
                    className="border-t border-slate-200 transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <span
  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
    phc.rank === 1
      ? "bg-red-100 text-red-700"
      : phc.rank === 2
      ? "bg-orange-100 text-orange-700"
      : phc.rank === 3
      ? "bg-yellow-100 text-yellow-700"
      : "bg-slate-100 text-slate-700"
  }`}
>
  #{phc.rank}
</span>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">
                        {phc.name}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {phc.district}
                    </td>

                    <td className="min-w-48 px-5 py-4">
  <div className="flex items-center gap-3">
    <div className="h-2.5 w-28 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full rounded-full ${getScoreBarColor(
          phc.score
        )}`}
        style={{ width: `${phc.score}%` }}
      />
    </div>

    <span className="min-w-12 font-bold text-slate-800">
      {phc.score}/100
    </span>
  </div>
</td>

                    <td className="px-5 py-4">
                      <span
                        className={`font-bold ${getTrendStyle(
                          phc.trend
                        )}`}
                      >
                        {getTrendSymbol(phc.trend)} {phc.trend}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {phc.issue}
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
    className="inline-flex rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800"
  >
    View Details
  </Link>
</td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
      Transparent Decision Support
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Multi-Agent Priority Scoring Methodology
    </h2>

    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
      AarogyaRank combines assessments from four specialized agents
      to calculate a composite priority score from 0 to 100.
      A higher score indicates a greater need for administrative
      attention and resource intervention.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
    {/* Infrastructure Agent */}
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
          30% Weight
        </span>

        <span className="text-lg font-bold text-blue-800">
          01
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        Infrastructure Agent
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Evaluates facility condition, medical equipment,
        electricity, water supply, and essential infrastructure.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
        <div className="h-full w-[30%] rounded-full bg-blue-700" />
      </div>
    </div>

    {/* Staffing Agent */}
    <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-bold text-white">
          30% Weight
        </span>

        <span className="text-lg font-bold text-teal-800">
          02
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        Staffing Agent
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Evaluates the availability of doctors, nurses,
        specialists, and other essential healthcare staff.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-teal-100">
        <div className="h-full w-[30%] rounded-full bg-teal-700" />
      </div>
    </div>

    {/* Utilization Agent */}
    <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
          25% Weight
        </span>

        <span className="text-lg font-bold text-orange-700">
          03
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        Utilization Agent
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Evaluates patient load, OPD utilization,
        service demand, and operational capacity.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-orange-100">
        <div className="h-full w-[25%] rounded-full bg-orange-500" />
      </div>
    </div>

    {/* Population Need Agent */}
    <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-purple-700 px-3 py-1 text-xs font-bold text-white">
          15% Weight
        </span>

        <span className="text-lg font-bold text-purple-800">
          04
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        Population Need Agent
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Evaluates population served, rural healthcare need,
        accessibility, and local demand indicators.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-purple-100">
        <div className="h-full w-[15%] rounded-full bg-purple-700" />
      </div>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
    <h3 className="text-base font-bold text-slate-900">
      Composite Priority Score
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Priority Score =
      (Infrastructure Score × 30%) +
      (Staffing Score × 30%) +
      (Utilization Score × 25%) +
      (Population Need Score × 15%)
    </p>

    <p className="mt-3 text-xs font-medium text-slate-500">
      Scores are currently generated using frontend mock data.
      In the backend phase, these values will be calculated by
      the AarogyaRank decision-support service.
    </p>
  </div>
</section>
      </main>
    </div>
  );
}