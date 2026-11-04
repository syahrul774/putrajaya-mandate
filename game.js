
function createGame(form) {
  // Read values directly from the HTML input IDs
  const partyName = $("partyName").value.trim();
  const partyShort = $("partyShort").value.trim().toUpperCase();
  const leaderName = $("leaderName").value.trim();

  // Read selected radio button values
  const approach = form.querySelector(
    'input[name="approach"]:checked'
  )?.value || "reform";

  const colour = form.querySelector(
    'input[name="colour"]:checked'
  )?.value || "#2e8b78";

  // Validate the required fields
  if (!partyName || !partyShort || !leaderName) {
    toast("Please complete all movement details.");
    return;
  }

  // Create the game
  game = {
    party: {
      name: partyName,
      short: partyShort,
      colour: colour,
      leader: leaderName,
      approach: approach
    },
    phase: "campaign",
    year: 2028,
    turn: 1,
    stats: {
      support: 22,
      economy: 55,
      trust: 58,
      stability: 52,
      infrastructure: 48
    },
    rivals: rivalsCopy(),
    seats: 0,
    voteShare: 0,
    capacity: 2,
    coalition: [],
    governmentSeats: 0,
    journal: [],
    usedActions: [],
    turnsInOffice: 0
  };

  // Apply starting political approach bonus
  const bonus = {
    reform: { trust: 5 },
    welfare: { support: 5 },
    growth: { economy: 5 }
  }[approach] || {};

  Object.entries(bonus).forEach(([key, value]) => {
    game.stats[key] = clamp(game.stats[key] + value);
  });

  // Record the founding of the movement
  journal(`Movement founded: ${game.party.name}.`);

  // Set the opening national briefing
  currentEvent = {
    category: "eventPolitics",
    icon: "▤",
    title: "A new political season",
    bm: "Musim politik baharu",
    text: "The campaign begins. Voters are weighing the country's direction.",
    bmText: "Kempen bermula. Pengundi sedang menilai hala tuju negara.",
    effects: {}
  };

  // Display the national dashboard
  showScreen("gameScreen");
  render();

  // Display the opening message
  showModal(
    lang === "en"
      ? "Your campaign begins"
      : "Kempen anda bermula",
    lang === "en"
      ? "Your movement enters a competitive national campaign. Build trust, connect with communities and turn support into parliamentary seats."
      : "Gerakan anda memasuki kempen nasional yang kompetitif. Bina kepercayaan, dekati komuniti dan tukarkan sokongan kepada kerusi Parlimen.",
    t("nextTurn"),
    () => {},
    "THE CAMPAIGN"
  );
}
