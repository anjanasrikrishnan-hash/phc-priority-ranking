"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

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

export default function PHCDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [phc, setPhc] = useState<RankedPhc | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8081/api/phcs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("PHC not found");
        }
        return res.json();
      })
      .then((data) => {
        setPhc(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-10">Loading PHC...</div>;
  }

  if (error) {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
        <h2 className="font-bold">Unable to load PHC</h2>
        <p className="mt-1 text-sm">{error}</p>
        <Link
          href="/phcs"
          className="mt-4 inline-block font-semibold text-blue-700"
        >
          ← Back to PHC Network
        </Link>
      </div>
    </main>
  );
}

  if (!phc) {
    return <div className="p-10">PHC not found</div>;
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <Link
        href="/phcs"
        className="text-blue-700 hover:underline"
      >
        ← Back to PHC Network
      </Link>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          {phc.name}
        </h1>

        <p className="mt-2 text-slate-500">
          PHC ID: {phc.id}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-5">
            <p className="text-sm text-slate-500">
              Rank
            </p>
            <p className="mt-1 text-2xl font-bold text-blue-700">
              #{phc.rank}
            </p>
          </div>

          <div className="rounded-xl bg-red-50 p-5">
            <p className="text-sm text-slate-500">
              Priority Level
            </p>
            <p className="mt-1 text-2xl font-bold text-red-600">
              {phc.priorityLevel}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Infrastructure Score
            </p>
            <p className="mt-1 text-2xl font-bold">
              {phc.infrastructureScore}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Patient Load Score
            </p>
            <p className="mt-1 text-2xl font-bold">
              {phc.patientLoadScore}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Staffing Score
            </p>
            <p className="mt-1 text-2xl font-bold">
              {phc.staffingScore}
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-5">
            <p className="text-sm text-slate-500">
              Final Priority Score
            </p>
            <p className="mt-1 text-3xl font-bold text-blue-700">
              {phc.finalPriorityScore.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}