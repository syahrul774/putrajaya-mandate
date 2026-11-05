(() => {
"use strict";

// --- 1. DATA ---
const statesData = [
  { id: "perlis", name: "Perlis", pop: 0.25, seats: 3, x: 80, y: 95, path: "M60,80 L100,80 L100,110 L60,110 Z" },
  { id: "kedah", name: "Kedah", pop: 2.1, seats: 15, x: 95, y: 140, path: "M60,110 L130,110 L130,170 L60,170 Z" },
  { id: "penang", name: "Penang", pop: 1.7, seats: 13, x: 60, y: 185, path: "M40,170 L80,170 L80,200 L40,200 Z" },
  { id: "kelantan", name: "Kelantan", pop: 1.8, seats: 14, x: 175, y: 105, path: "M150,80 L200,80 L200,130 L150,130 Z" },
  { id: "terengganu", name: "Terengganu", pop: 1.2, seats: 8, x: 175, y: 155, path: "M150,130 L200,130 L200,180 L150,180 Z" },
  { id: "perak", name: "Perak", pop: 2.5, seats: 24, x: 115, y: 230, path: "M80,200 L150,200 L150,260 L80,260 Z" },
  { id: "pahang", name: "Pahang", pop: 1.6, seats: 14, x: 185, y: 220, path: "M150,180 L220,180 L220,260 L150,260 Z" },
  { id: "selangor", name: "Selangor", pop: 6.5, seats: 22, x: 115, y: 285, path: "M80,260 L150,260 L150,310 L80,310 Z" },
  { id: "kl", name: "Kuala Lumpur", pop: 1.8, seats: 11, x: 110, y: 320, path: "M100,310 L120,310 L120,330 L100,330 Z" },
  { id: "putrajaya", name: "Putrajaya", pop: 0.1, seats: 1, x: 137, y: 317, path: "M130,310 L145,310 L145,325 L130,325 Z" },
  { id: "nsembilan", name: "N. Sembilan", pop: 1.1, seats: 8, x: 170, y: 330, path: "M150,310 L190,310 L190,350 L150,350 Z" },
  { id: "melaka", name: "Melaka", pop: 0.9, seats: 6, x: 165, y: 365, path: "M150,350 L180,350 L180,380 L150,380 Z" },
  { id: "johor", name: "Johor", pop: 3.7, seats: 26, x: 210, y: 355, path: "M180,310 L240,310 L240,400 L180,400 Z" },
  { id: "sarawak", name: "Sarawak", pop: 2.8, seats: 31, x: 340, y: 220, path: "M280,180 L400,180 L400,260 L280,260 Z" },
  { id: "sabah", name: "Sabah", pop: 3.9, seats: 25, x: 470, y: 240, path: "M420,200 L520,200 L520,280 L420,280 Z" }
];

const possibleComplaints = [
  { id: "cost", text: "Cost of Living", cost: 1000, effect: 25 },
  { id: "flood", text: "Flood Mitigation", cost: 1500, effect: 20 },
  { id: "jobs", text: "Unemployment", cost: 800, effect: 15 },
  { id: "corruption", text: "Corruption", cost: 500, effect: 30 }
];

// Initialize State Game Data
statesData.forEach(st => {
  st.gdp = Math.floor(Math.random() * 40000) + 15000; // GDP per capita
  st.happiness = Math.floor(Math.random() * 20) + 40; // Start 40-60%
  st.support = Math.floor(Math.random() * 20) + 20; // Player support %
  
  // Assign random complaints based on state wealth/size
  st.complaints = [];
  const numComplaints = Math.floor(Math.random() * 2) + 1; // 1 or 2 complaints
  const shuffled = [...possibleComplaints].sort(() => 0.5 - Math.random());
  for(let i=0; i<numComplaints; i++) {
    st.complaints.push({ ...shuffled[i], resolved: false });
  }
});

const game = {
  month: 1,
  maxMonths: 12,
  energy: 100,
  bank: 5000,
  pc: 100,
  selectedState: null,
};

// --- 2. UI FUNCTIONS ---
const $ = id => document.getElementById(id);

function updateUI() {
  $("ui-month").textContent = `${game.month} / ${game.maxMonths}`;
  $("ui-energy").textContent = `${game.energy}%`;
  $("ui-pc").textContent = game.pc;
  $("ui-bank").textContent = `RM ${game.bank.toLocaleString()}`;

  // Map Heatmap (Colors based on Player Support)
  document.querySelectorAll(".map-state").forEach(el => {
    const st = statesData.find(s => s.id === el.id.replace("state-", ""));
    if (st.support > 60) el.style.fill = "var(--gold)";
    else if (st.support > 40) el.style.fill = "#a68d5c";
    else if (st.support > 20) el.style.fill = "#4a5a75";
    else el.style.fill = "#2a3a55";
  });

  if (game.selectedState) renderStateInfo(game.selectedState);
  
  // Disable buttons
  document.querySelectorAll('.action-btn').forEach(btn => {
    if (game.energy <= 0 && !btn.textContent.includes("Rest")) btn.disabled = true;
    else btn.disabled = false;
  });
}

function renderStateInfo(stateId) {
  const st = statesData.find(s => s.id === stateId);
  
  let happyColor = st.happiness > 70 ? "var(--green)" : st.happiness > 40 ? "var(--gold)" : "var(--red)";
  
  let html = `
    <h3>${st.name}</h3>
    <div class="metric-box">
      <div><span>POPULATION</span><b>${st.pop}M</b></div>
      <div><span>GDP / CAPITA</span><b>RM ${st.gdp.toLocaleString()}</b></div>
    </div>
    
    <div class="data-row"><span>VOTER HAPPINESS</span> <b style="color:${happyColor}">${st.happiness}%</b></div>
    <div class="happy-meter"><div class="happy-fill" style="width:${st.happiness}%; background:${happyColor}"></div></div>

    <div class="data-row" style="margin-top:15px;"><span>YOUR SUPPORT</span> <b style="color:var(--gold)">${st.support}%</b></div>
    <div class="happy-meter"><div class="happy-fill" style="width:${st.support}%; background:var(--gold)"></div></div>
    
    <div class="complaint-list">
      <h4>VOTER COMPLAINTS</h4>
  `;
  
  if (st.complaints.length === 0) {
    html += `<p style="color:var(--green); font-size:12px;">No major complaints. The people are content.</p>`;
  } else {
    st.complaints.forEach((c, index) => {
      if (c.resolved) {
        html += `<button class="complaint-btn" disabled style="opacity:0.5; border-color:var(--green)">✅ ${c.text} (Resolved)</button>`;
      } else {
        html += `<button class="complaint-btn" onclick="resolveComplaint('${st.id}', ${index})">${c.text} <span>Cost: RM ${c.cost} | +${c.effect}% Happiness</span></button>`;
      }
    });
  }
  
  html += `</div>`;
  $("seat-info").innerHTML = html;
}

// --- 3. MAP GENERATION & CHARACTER MOVEMENT ---
function buildMap() {
  let svgHTML = `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">`;
  statesData.forEach(s => {
    svgHTML += `<path id="state-${s.id}" class="map-state" d="${s.path}" data-id="${s.id}" data-name="${s.name}"></path>`;
  });
  svgHTML += `</svg>`;
  $("malaysia-svg-container").innerHTML = svgHTML + `<div id="player-token" class="hidden">👤</div>`;

  document.querySelectorAll(".map-state").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".map-state").forEach(p => p.classList.remove("selected"));
      el.classList.add("selected");
      game.selectedState = el.dataset.id;
      
      // Move Player Token
      const st = statesData.find(s => s.id === game.selectedState);
      const token = $("player-token");
      token.classList.remove("hidden");
      token.style.left = `${st.x}px`;
      token.style.top = `${st.y}px`;

      renderStateInfo(game.selectedState);
    });

    el.addEventListener("mousemove", (e) => {
      const tooltip = $("map-tooltip");
      tooltip.classList.remove("hidden");
      tooltip.style.left = (e.clientX + 15) + "px";
      tooltip.style.top = (e.clientY + 15) + "px";
      const st = statesData.find(s => s.id === el.dataset.id);
      tooltip.innerHTML = `<b>${st.name}</b><br>GDP: RM ${st.gdp.toLocaleString()}<br>Happy: ${st.happiness}%`;
    });

    el.addEventListener("mouseleave", () => $("map-tooltip").classList.add("hidden"));
  });
}

// --- 4. ACTIONS & POLICIES ---
window.resolveComplaint = (stateId, complaintIndex) => {
  const st = statesData.find(s => s.id === stateId);
  const complaint = st.complaints[complaintIndex];
  
  if (game.bank < complaint.cost) return alert("Not enough funds to resolve this complaint!");
  
  game.bank -= complaint.cost;
  complaint.resolved = true;
  st.happiness = Math.min(100, st.happiness + complaint.effect);
  st.support = Math.min(100, st.support + 5); // Resolving issues slightly boosts your support too
  
  showModal("Complaint Addressed", `You allocated RM ${complaint.cost} to resolve "${complaint.text}" in ${st.name}. Happiness rose by ${complaint.effect}%.`);
  updateUI();
};

window.doAction = (type) => {
  if (type === 'rest') {
    game.energy = Math.min(100, game.energy + 40);
    updateUI();
    return;
  }

  if (!game.selectedState) { alert("Select a state on the map first!"); return; }
  const st = statesData.find(s => s.id === game.selectedState);

  if (type === "rally") {
    if (game.bank < 500) return alert("Not enough money!");
    if (game.energy < 20) return alert("Too exhausted! Rest first.");
    game.bank -= 500; game.energy -= 20;
    st.support = Math.min(100, st.support + Math.floor(Math.random() * 5) + 3);
    showModal("Rally Held", `You gave a speech in ${st.name}. Your support increased.`);
  } 
  else if (type === "ads") {
    if (game.bank < 1500) return alert("Not enough money!");
    if (game.energy < 10) return alert("Too exhausted!");
    game.bank -= 1500; game.energy -= 10;
    st.support = Math.min(100, st.support + Math.floor(Math.random() * 10) + 8);
    showModal("Media Blitz", `Ads ran in ${st.name}. Support jumped significantly.`);
  }
  else if (type === "fundraise") {
    if (game.energy < 10) return alert("Too exhausted!");
    game.energy -= 10;
    let raised = Math.floor(st.gdp / 100); // Higher GDP = more donations
    game.bank += raised;
    showModal("Fundraising Success", `You raised RM ${raised} from wealthy donors in ${st.name}.`);
  }

  updateUI();
};

// --- 5. TURN LOGIC ---
$("btn-end-turn").addEventListener("click", () => {
  if (game.energy < 20) {
    showModal("Exhaustion!", "You must Rest before advancing to the next month.");
    return;
  }

  // Finances
  game.bank += 2500; // Salary
  game.bank -= 1200; // Bills
  
  if (game.bank < 0) {
    showModal("Bankrupt!", "You couldn't pay your household bills. Game Over.");
    return;
  }

  game.energy = Math.min(100, game.energy + 20);
  
  // Rival parties campaign
  statesData.forEach(st => {
    if (Math.random() > 0.7) st.support = Math.max(0, st.support - 2);
  });

  game.month++;
  
  if (game.month > game.maxMonths) {
    runElection();
  } else {
    updateUI();
  }
});

// --- 6. ELECTION & MODAL ---
function runElection() {
  let seatsWon = 0;
  statesData.forEach(st => {
    // If your support is higher than 50%, you win the state's seats
    if (st.support > 50) seatsWon += st.seats;
  });

  if (seatsWon >= 112) {
    showModal("VICTORY!", `You won ${seatsWon} seats and became the Prime Minister!`);
  } else {
    showModal("ELECTION OVER", `You only won ${seatsWon} seats. You are now in the opposition.`);
  }
}

function showModal(title, desc) {
  $("modal-title").textContent = title;
  $("modal-desc").textContent = desc;
  $("modal").classList.remove("hidden");
}

// --- INIT ---
buildMap();
updateUI();

})();
