import Link from "next/link";

type PHC = {
  id: string;
  rank: number;
  name: string;
  district: string;
  type: string;
  population: number;
  score: number;
  status: string;
  issue: string;
  lastInspection: string;

  infrastructureScore: number;
  staffingScore: number;
  utilizationScore: number;
  populationNeedScore: number;
 recommendation: string;
actionPriority: "Immediate" | "High" | "Planned" | "Monitor";
expectedImpact: string;

history: {
  date: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Scheduled";
}[];
};

const phcs: PHC[] = [
  {
    id: "villianur-primary-health-centre",
    rank: 1,
    name: "Villianur Primary Health Centre",
    district: "Puducherry",
    type: "Primary Health Centre",
    population: 48500,
    score: 92,
    status: "Critical",
    issue: "Severe staffing shortage",
lastInspection: "18 July 2026",

infrastructureScore: 42,
staffingScore: 25,
utilizationScore: 94,
populationNeedScore: 89,  
recommendation:
  "Deploy two temporary nurses and one duty doctor. Review specialist availability within 24 hours.",
actionPriority: "Immediate",
expectedImpact:
  "Expected to reduce patient waiting time and stabilize emergency service capacity.",
history: [
  {
    date: "18 July 2026",
    title: "Staffing shortage verified",
    description:
      "District assessment confirmed a shortage of nurses and duty doctors.",
    status: "Completed",
  },
  {
    date: "24 July 2026",
    title: "Temporary staff request submitted",
    description:
      "Request sent to the district health office for temporary deployment.",
    status: "In Progress",
  },
  {
    date: "02 August 2026",
    title: "Emergency staffing review",
    description:
      "District team will review staff availability and service capacity.",
    status: "Scheduled",
  },
],},
  {
    id: "bahour-community-health-centre",
    rank: 2,
    name: "Bahour Community Health Centre",
    district: "Bahour",
    type: "Community Health Centre",
    population: 44200,
    score: 88,
    status: "Critical",
    issue: "High patient load",
    lastInspection: "21 July 2026",
    infrastructureScore: 55,
staffingScore: 38,
utilizationScore: 92,
populationNeedScore: 84,
recommendation:
  "Increase OPD staffing during peak hours and arrange an emergency generator fuel refill.",
actionPriority: "Immediate",
expectedImpact:
  "Expected to prevent service disruption and reduce peak-hour patient congestion.",
  history: [
  {
    date: "16 July 2026",
    title: "Patient-load assessment completed",
    description:
      "Peak OPD demand and emergency service congestion were recorded.",
    status: "Completed",
  },
  {
    date: "22 July 2026",
    title: "Generator fuel request raised",
    description:
      "Emergency fuel replenishment request is under district review.",
    status: "In Progress",
  },
  {
    date: "03 August 2026",
    title: "Peak-hour staffing review",
    description:
      "Additional staff allocation will be evaluated.",
    status: "Scheduled",
  },
],
  },
  {
    id: "thirunallar-health-centre",
    rank: 3,
    name: "Thirunallar Health Centre",
    district: "Karaikal",
    type: "Primary Health Centre",
    population: 39600,
    score: 79,
    status: "High",
    issue: "Infrastructure maintenance",
    lastInspection: "15 July 2026",
    infrastructureScore: 48,
staffingScore: 58,
utilizationScore: 81,
populationNeedScore: 76,
recommendation:
  "Schedule infrastructure maintenance and allocate additional clinical support during high-demand periods.",
actionPriority: "High",
expectedImpact:
  "Expected to improve facility readiness and reduce operational delays.",
  history: [
  {
    date: "14 July 2026",
    title: "Infrastructure inspection completed",
    description:
      "Maintenance requirements were identified during the facility review.",
    status: "Completed",
  },
  {
    date: "21 July 2026",
    title: "Maintenance plan prepared",
    description:
      "Priority repair activities are being reviewed.",
    status: "In Progress",
  },
  {
    date: "05 August 2026",
    title: "Repair work scheduling",
    description:
      "District engineering support will finalize the repair schedule.",
    status: "Scheduled",
  },
],
  },
  {
    id: "ariyankuppam-primary-health-centre",
    rank: 4,
    name: "Ariyankuppam Primary Health Centre",
    district: "Puducherry",
    type: "Primary Health Centre",
    population: 37100,
    score: 74,
    status: "High",
    issue: "Increasing OPD demand",
    lastInspection: "20 July 2026",
    infrastructureScore: 62,
staffingScore: 65,
utilizationScore: 88,
populationNeedScore: 71,
recommendation:
  "Add temporary OPD support and monitor patient inflow daily for the next seven days.",
actionPriority: "High",
expectedImpact:
  "Expected to prevent the current patient-load increase from affecting service quality.",
  history: [
  {
    date: "15 July 2026",
    title: "OPD demand increase detected",
    description:
      "The system identified a sustained increase in patient inflow.",
    status: "Completed",
  },
  {
    date: "23 July 2026",
    title: "Daily demand monitoring started",
    description:
      "Patient inflow is being monitored during peak hours.",
    status: "In Progress",
  },
  {
    date: "06 August 2026",
    title: "Temporary support review",
    description:
      "Additional OPD support will be evaluated.",
    status: "Scheduled",
  },
],
  },
  {
    id: "thirubuvanai-health-centre",
    rank: 5,
    name: "Thirubuvanai Health Centre",
    district: "Villianur",
    type: "Primary Health Centre",
    population: 32800,
    score: 56,
    status: "Medium",
    issue: "Limited nursing staff",
    lastInspection: "12 July 2026",
    infrastructureScore: 70,
staffingScore: 54,
utilizationScore: 63,
populationNeedScore: 58,
recommendation:
  "Recruit or temporarily reassign nursing staff and review shift coverage.",
actionPriority: "High",
expectedImpact:
  "Expected to improve staff availability and maintain continuity of care.",
  history: [
  {
    date: "13 July 2026",
    title: "Nursing availability reviewed",
    description:
      "Shift coverage gaps were identified.",
    status: "Completed",
  },
  {
    date: "20 July 2026",
    title: "Staff reassignment request",
    description:
      "Temporary nursing support is being considered.",
    status: "In Progress",
  },
  {
    date: "07 August 2026",
    title: "Shift coverage audit",
    description:
      "Updated staff coverage will be reviewed.",
    status: "Scheduled",
  },
],
  },
  {
    id: "netapakkam-primary-health-centre",
    rank: 6,
    name: "Netapakkam Primary Health Centre",
    district: "Netapakkam",
    type: "Primary Health Centre",
    population: 30500,
    score: 51,
    status: "Medium",
    issue: "Equipment replacement",
    lastInspection: "16 July 2026",
    infrastructureScore: 59,
staffingScore: 68,
utilizationScore: 57,
populationNeedScore: 54,
recommendation:
  "Prepare an equipment replacement plan and complete a maintenance assessment.",
actionPriority: "Planned",
expectedImpact:
  "Expected to improve equipment reliability and reduce future service interruptions.",
  history: [
  {
    date: "12 July 2026",
    title: "Equipment condition assessed",
    description:
      "Priority equipment replacement needs were documented.",
    status: "Completed",
  },
  {
    date: "19 July 2026",
    title: "Replacement proposal prepared",
    description:
      "Required equipment is under procurement review.",
    status: "In Progress",
  },
  {
    date: "09 August 2026",
    title: "Procurement status review",
    description:
      "District officials will review the replacement timeline.",
    status: "Scheduled",
  },
],
  },
  {
    id: "kirumampakkam-health-centre",
    rank: 7,
    name: "Kirumampakkam Health Centre",
    district: "Bahour",
    type: "Primary Health Centre",
    population: 27400,
    score: 45,
    status: "Medium",
    issue: "Moderate resource gap",
    lastInspection: "10 July 2026",
    infrastructureScore: 73,
staffingScore: 72,
utilizationScore: 49,
populationNeedScore: 45,
recommendation:
  "Review resource allocation and continue monthly operational monitoring.",
actionPriority: "Planned",
expectedImpact:
  "Expected to gradually reduce the identified resource gap.",
  history: [
  {
    date: "11 July 2026",
    title: "Resource gap identified",
    description:
      "The district review identified moderate resource limitations.",
    status: "Completed",
  },
  {
    date: "18 July 2026",
    title: "Resource allocation review",
    description:
      "Available resources are being reassessed.",
    status: "In Progress",
  },
  {
    date: "11 August 2026",
    title: "Monthly operational review",
    description:
      "Progress will be checked during the next review cycle.",
    status: "Scheduled",
  },
],
  },
  {
    id: "nedungadu-primary-health-centre",
    rank: 8,
    name: "Nedungadu Primary Health Centre",
    district: "Karaikal",
    type: "Primary Health Centre",
    population: 23800,
    score: 41,
    status: "Low",
    issue: "Low specialist availability",
    lastInspection: "14 July 2026",
    infrastructureScore: 76,
staffingScore: 66,
utilizationScore: 44,
populationNeedScore: 42,
recommendation:
  "Review specialist availability and assess the need for periodic specialist visits.",
actionPriority: "Planned",
expectedImpact:
  "Expected to improve access to specialist healthcare services.",
  history: [
  {
    date: "10 July 2026",
    title: "Specialist availability reviewed",
    description:
      "Limited specialist access was identified.",
    status: "Completed",
  },
  {
    date: "17 July 2026",
    title: "Visiting specialist plan reviewed",
    description:
      "Periodic specialist support is being evaluated.",
    status: "In Progress",
  },
  {
    date: "12 August 2026",
    title: "Specialist visit schedule",
    description:
      "The district will review a possible visit schedule.",
    status: "Scheduled",
  },
],
  },
  {
    id: "mannadipet-primary-health-centre",
    rank: 9,
    name: "Mannadipet Primary Health Centre",
    district: "Puducherry",
    type: "Primary Health Centre",
    population: 19600,
    score: 38,
    status: "Low",
    issue: "Routine monitoring",
    lastInspection: "9 July 2026",
    infrastructureScore: 82,
staffingScore: 79,
utilizationScore: 38,
populationNeedScore: 35,
recommendation:
  "Continue routine monitoring and reassess the PHC during the next district review.",
actionPriority: "Monitor",
expectedImpact:
  "Expected to maintain current operational stability.",
  history: [
  {
    date: "09 July 2026",
    title: "Routine assessment completed",
    description:
      "Current operations were assessed as stable.",
    status: "Completed",
  },
  {
    date: "16 July 2026",
    title: "Routine monitoring continued",
    description:
      "The PHC remains under standard district monitoring.",
    status: "In Progress",
  },
  {
    date: "15 August 2026",
    title: "Next district review",
    description:
      "The PHC will be reassessed during the next review.",
    status: "Scheduled",
  },
],
  },
  {
    id: "koodapakkam-primary-health-centre",
    rank: 10,
    name: "Koodapakkam Primary Health Centre",
    district: "Villianur",
    type: "Primary Health Centre",
    population: 15400,
    score: 29,
    status: "Low",
    issue: "Low utilization",
    lastInspection: "11 July 2026",
    infrastructureScore: 88,
staffingScore: 84,
utilizationScore: 29,
populationNeedScore: 31,
recommendation:
  "Monitor service utilization and evaluate local outreach opportunities.",
actionPriority: "Monitor",
expectedImpact:
  "Expected to improve healthcare awareness and appropriate service utilization.",
  history: [
  {
    date: "08 July 2026",
    title: "Service utilization reviewed",
    description:
      "Low utilization was identified during the assessment.",
    status: "Completed",
  },
  {
    date: "15 July 2026",
    title: "Community outreach review",
    description:
      "Local awareness and outreach options are being evaluated.",
    status: "In Progress",
  },
  {
    date: "18 August 2026",
    title: "Utilization reassessment",
    description:
      "The district will review changes in service utilization.",
    status: "Scheduled",
  },
],
  },
];

type PHCDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PHCDetailsPage({
  params,
}: PHCDetailsPageProps) {
  const { id } = await params;

  const phc = phcs.find((item) => item.id === id);

  if (!phc) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            PHC Not Found
          </h1>

          <Link
            href="/rankings"
            className="mt-5 inline-block font-semibold text-blue-700 hover:underline"
          >
            ← Back to Rankings
          </Link>
        </div>
      </main>
    );
  }

  return (
  <main className="min-h-screen bg-slate-50 p-6 lg:p-10">
    <div className="mx-auto max-w-6xl">
      {/* Back button */}
      <Link
        href="/rankings"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        ← Back to Priority Rankings
      </Link>

      {/* PHC header */}
      <section className="rounded-2xl bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-teal-700">
              AAROGYARANK · PHC PRIORITY PROFILE
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
              {phc.name}
            </h1>

            <p className="mt-3 text-base text-slate-600">
              {phc.district} District · {phc.type}
            </p>
          </div>

          {/* Risk badge */}
          <div
            className={`w-fit rounded-full px-5 py-2 text-sm font-bold ${
              phc.status === "Critical"
                ? "bg-red-100 text-red-700"
                : phc.status === "High"
                  ? "bg-orange-100 text-orange-700"
                  : phc.status === "Medium"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
            }`}
          >
            {phc.status} Priority
          </div>
        </div>

        {/* Summary cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Priority Rank
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-700">
              #{phc.rank}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              District intervention order
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Priority Score
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {phc.score}
              <span className="text-base font-medium text-slate-400">
                /100
              </span>
            </p>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full ${
                  phc.status === "Critical"
                    ? "bg-red-500"
                    : phc.status === "High"
                      ? "bg-orange-500"
                      : phc.status === "Medium"
                        ? "bg-amber-500"
                        : "bg-green-500"
                }`}
                style={{ width: `${phc.score}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Population Served
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {phc.population.toLocaleString()}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Estimated service population
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Last Inspection
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              {phc.lastInspection}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Latest verified assessment
            </p>
          </div>
        </div>
      </section>

      {/* Main issue */}
      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-xs font-bold tracking-[0.18em] text-amber-800">
          PRIMARY INTERVENTION REQUIREMENT
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          {phc.issue}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          This issue is currently contributing to the PHC priority score.
          Detailed infrastructure, patient-load, and staffing assessments
          will be added in the next level.
        </p>
      </section>
            {/* Multi-agent score breakdown */}
      <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700">
              MULTI-AGENT ASSESSMENT
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Priority Score Breakdown
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Each agent evaluates a different operational factor. Higher
              values indicate greater intervention need.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
            Composite Score: {phc.score}/100
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Infrastructure Agent */}
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Infrastructure Agent
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Facility condition, equipment, utilities, and maintenance
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                Weight 30%
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">
                Intervention score
              </span>

              <span className="text-xl font-bold text-slate-900">
                {phc.infrastructureScore}/100
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${phc.infrastructureScore}%` }}
              />
            </div>
          </div>

          {/* Staffing Agent */}
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Staffing Agent
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Doctor, nurse, specialist, and support-staff availability
                </p>
              </div>

              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                Weight 30%
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">
                Intervention score
              </span>

              <span className="text-xl font-bold text-slate-900">
                {phc.staffingScore}/100
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-teal-600"
                style={{ width: `${phc.staffingScore}%` }}
              />
            </div>
          </div>

          {/* Utilization Agent */}
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Utilization Agent
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  OPD demand, patient load, capacity, and service utilization
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                Weight 25%
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">
                Intervention score
              </span>

              <span className="text-xl font-bold text-slate-900">
                {phc.utilizationScore}/100
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${phc.utilizationScore}%` }}
              />
            </div>
          </div>

          {/* Population Need Agent */}
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Population Need Agent
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Population size, vulnerability, and local healthcare need
                </p>
              </div>

              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                Weight 15%
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">
                Intervention score
              </span>

              <span className="text-xl font-bold text-slate-900">
                {phc.populationNeedScore}/100
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-purple-600"
                style={{ width: `${phc.populationNeedScore}%` }}
              />
            </div>
          </div>
        </div>
      </section>
            {/* AI recommendation */}
      <section className="mt-6 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50 p-6 shadow-sm lg:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-xl text-white">
                ✦
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-teal-700">
                  AAROGYARANK AI RECOMMENDATION
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Recommended Intervention
                </h2>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700">
              {phc.recommendation}
            </p>
          </div>

          {/* Action priority badge */}
          <div
            className={`w-fit rounded-full px-5 py-2 text-sm font-bold ${
              phc.actionPriority === "Immediate"
                ? "bg-red-100 text-red-700"
                : phc.actionPriority === "High"
                  ? "bg-orange-100 text-orange-700"
                  : phc.actionPriority === "Planned"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
            }`}
          >
            {phc.actionPriority} Action
          </div>
        </div>

        {/* Expected impact */}
        <div className="mt-7 rounded-xl border border-white bg-white/80 p-5">
          <p className="text-xs font-bold tracking-[0.15em] text-slate-500">
            EXPECTED IMPACT
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            {phc.expectedImpact}
          </p>
        </div>

        {/* Future backend action */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800">
            Approve Intervention
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
            View Supporting Data
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Recommendation generated from the current frontend assessment data.
          Backend AI-agent integration will be added later.
        </p>
      </section>
            {/* Intervention history */}
      <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-blue-700">
              INTERVENTION TRACKING
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Intervention History
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Assessment and intervention progress for this PHC.
            </p>
          </div>

          <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600">
            {phc.history.length} Records
          </span>
        </div>

        <div className="mt-8">
          {phc.history.map((item, index) => (
            <div
              key={`${item.date}-${item.title}`}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index !== phc.history.length - 1 && (
                <div className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-0.5 bg-slate-200" />
              )}

              {/* Timeline indicator */}
              <div
                className={`relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-white ${
                  item.status === "Completed"
                    ? "bg-green-500"
                    : item.status === "In Progress"
                      ? "bg-blue-600"
                      : "bg-amber-500"
                }`}
              />

              {/* Timeline content */}
              <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.date}
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);
}