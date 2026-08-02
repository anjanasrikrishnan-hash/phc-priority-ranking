const phcs = [
  {
    id: "PHC-14", name: "Kottakuppam PHC",
    finalScore: 78.5, rank: 1,
    infraScore: 65.0, loadScore: 82.0, staffingScore: 90.0,
    criticalDimension: "Staffing",
    explanation: "Staffing critical: 2 of 6 nurses available."
  },
  {
    id: "PHC-22", name: "Villianur PHC",
    finalScore: 71.2, rank: 2,
    infraScore: 88.0, loadScore: 60.0, staffingScore: 55.0,
    criticalDimension: "Infrastructure",
    explanation: "Infrastructure critical: no functioning water supply."
  },
  {
    id: "PHC-09", name: "Ariyankuppam PHC",
    finalScore: 54.0, rank: 3,
    infraScore: 40.0, loadScore: 70.0, staffingScore: 48.0,
    criticalDimension: "Patient Load",
    explanation: "Patient load critical: 200 daily patients, 12km to nearest hospital."
  }
];

const container = document.getElementById("phc-list");

phcs.forEach(phc => {
  const card = document.createElement("div");
  card.className = "phc-card";
  card.innerHTML = `
    <h2>#${phc.rank} - ${phc.name}</h2>
    <p>Final Score: ${phc.finalScore}</p>
    <p>Infra: ${phc.infraScore} | Load: ${phc.loadScore} | Staffing: ${phc.staffingScore}</p>
    <p><strong>${phc.explanation}</strong></p>
  `;
  container.appendChild(card);
});