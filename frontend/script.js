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

function barClass(dimensionName, phc) {
  return phc.criticalDimension === dimensionName ? "bar-fill critical" : "bar-fill";
}

phcs.forEach(phc => {
  const card = document.createElement("div");
  card.className = "phc-card";
  card.innerHTML = `
    <h2>#${phc.rank} - ${phc.name}</h2>
    <p>Final Score: ${phc.finalScore}</p>

    <div class="bar-row">
      <span class="bar-label">Infra</span>
      <div class="bar-bg"><div class="${barClass('Infrastructure', phc)}" style="width:${phc.infraScore}%"></div></div>
      <span class="bar-value">${phc.infraScore}</span>
    </div>

    <div class="bar-row">
      <span class="bar-label">Load</span>
      <div class="bar-bg"><div class="${barClass('Patient Load', phc)}" style="width:${phc.loadScore}%"></div></div>
      <span class="bar-value">${phc.loadScore}</span>
    </div>

    <div class="bar-row">
      <span class="bar-label">Staffing</span>
      <div class="bar-bg"><div class="${barClass('Staffing', phc)}" style="width:${phc.staffingScore}%"></div></div>
      <span class="bar-value">${phc.staffingScore}</span>
    </div>

    <div class="explanation-box">${phc.explanation}</div>
  `;
  container.appendChild(card);
});