"use client";

import { useEffect, useState } from "react";

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

export default function TestApiPage() {
  const [phcs, setPhcs] = useState<RankedPhc[]>([]);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8081/api/phcs/ranked")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setPhcs(data);
        setMessage("Backend data loaded successfully");
      })
      .catch((error) => {
        setMessage("Error: " + error.message);
      });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-10">

      <h1 className="text-3xl font-bold text-blue-900">
        AarogyaRank Backend Data Test
      </h1>

      <p className="mt-3 text-lg">
        {message}
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">PHC</th>
              <th className="p-4 text-left">Infrastructure</th>
              <th className="p-4 text-left">Patient Load</th>
              <th className="p-4 text-left">Staffing</th>
              <th className="p-4 text-left">Final Score</th>
              <th className="p-4 text-left">Priority</th>
            </tr>
          </thead>

          <tbody>
            {phcs.map((phc) => (
              <tr
                key={phc.id}
                className="border-t"
              >
                <td className="p-4 font-bold">
                  {phc.rank}
                </td>

                <td className="p-4">
                  {phc.name}
                </td>

                <td className="p-4">
                  {phc.infrastructureScore.toFixed(2)}
                </td>

                <td className="p-4">
                  {phc.patientLoadScore.toFixed(2)}
                </td>

                <td className="p-4">
                  {phc.staffingScore.toFixed(2)}
                </td>

                <td className="p-4 font-bold">
                  {phc.finalPriorityScore.toFixed(2)}
                </td>

                <td className="p-4 font-semibold">
                  {phc.priorityLevel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </main>
  );
}