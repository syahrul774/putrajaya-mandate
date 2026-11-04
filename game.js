(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const translations = {
    en: {
      eyebrow:"A NATION. A MANDATE. YOUR DECISIONS.",heroTitle:"The road to<br><em>Putrajaya</em> begins here.",heroDescription:"Build a political movement, contest a national election and govern through the difficult choices that shape a country.",startGame:"Start new game",continueGame:"Continue game",featureElection:"Federal election",featureCoalition:"Coalition building",featureGovern:"National governance",disclaimer:"An independent work of political fiction. Parties, candidates, polling and events are fictional and do not represent real Malaysian political actors.",setupEyebrow:"YOUR POLITICAL JOURNEY",createParty:"Create your movement",setupIntro:"Choose a name, identity and priorities. Your starting profile will influence your campaign.",partyName:"Political movement name",shortName:"Abbreviation",partyColour:"Movement colour",leaderName:"Your leader's name",politicalApproach:"Political approach",approachHint:"Choose the priority that best describes your movement.",reform:"Institutional reform",reformDesc:"Transparency, public institutions and accountable government.",welfare:"Social welfare",welfareDesc:"Cost of living, public services and social protection.",growth:"Economic growth",growthDesc:"Jobs, investment, productivity and infrastructure.",launchCampaign:"Launch campaign",nationalDashboard:"NATIONAL DASHBOARD",year:"YEAR",turn:"TURN",federalElection:"FEDERAL ELECTION",seatProjection:"Parliamentary seat projection",liveModel:"LIVE MODEL",projectedSeats:"PROJECTED SEATS",nationalSupport:"NATIONAL SUPPORT",majorityStatus:"MAJORITY STATUS",seatNote:"Illustrative national model across 222 fictional constituencies. This is not an official election forecast.",decisionDesk:"DECISION DESK",campaignActions:"Campaign actions",campaignIntro:"Choose how to spend your limited campaign capacity this turn.",endTurn:"End turn",yourMovement:"YOUR MOVEMENT",campaignCapacity:"Campaign capacity",nationalBriefing:"NATIONAL BRIEFING",campaignJournal:"CAMPAIGN JOURNAL",latestUpdates:"Latest updates",saveGame:"Save game",restart:"Restart simulation",footerNote:"A fictional educational simulation. Not affiliated with the Government of Malaysia or any political party.",campaign:"Election campaign",government:"Government administration",campaignAction:"Campaign action",governmentAction:"Government action",support:"Public support",economy:"Economic confidence",trust:"Public trust",stability:"Political stability",infrastructure:"Infrastructure",capacity:"Campaign capacity",turnEnded:"Turn completed. Your decisions have changed the political landscape.",saved:"Game saved in this browser.",noSave:"No saved game found.",confirmRestart:"Start a new simulation? Your current unsaved progress will be lost.",electionWon:"You have secured a parliamentary majority.",hung:"No movement has won a majority. Build a coalition to form government.",electionLost:"You have not secured enough seats to lead the government.",formCoalition:"Coalition negotiations",coalitionText:"Select partners to reach at least 112 seats. These are fictional political movements.",formGovernment:"Form government",coalitionFailed:"The coalition does not have enough seats. Continue negotiating.",majority:"MAJORITY",minority:"MINORITY",governmentFormed:"A government has been formed. Now the work of governing begins.",nextYear:"Continue to governing",nextTurn:"Continue",endOfTerm:"End of term",endOfTermText:"Your first governing term has concluded. Review your record and begin another electoral cycle.",reElection:"Begin next election",policyTitle:"Policy decision",policyHint:"Choose a policy response. Each choice has trade-offs.",eventPolitics:"POLITICS",eventEconomy:"ECONOMY",eventSociety:"SOCIETY",eventDisaster:"PUBLIC SAFETY",eventGovernance:"GOVERNANCE",selected:"Selected",used:"Used",remaining:"remaining",notEnough:"No action capacity remaining this turn.",seats:"SEATS",turns:"TURNS",leader:"Led by",reformLabel:"Institutional reform",welfareLabel:"Social welfare",growthLabel:"Economic growth",supportLabel:"Public support",economyLabel:"Economic confidence",trustLabel:"Public trust",stabilityLabel:"Political stability",infrastructureLabel:"Infrastructure",eventStartTitle:"A new political season",eventStartText:"The campaign begins. Voters are weighing the country's direction.",majorityFormed:"Majority government",minorityFormed:"Coalition government",campaignWon:"Your movement is now the largest force in Parliament.",result:"RESULT"
    },
    bm: {
      eyebrow:"SEBUAH NEGARA. SATU MANDAT. KEPUTUSAN ANDA.",heroTitle:"Perjalanan ke<br><em>Putrajaya</em> bermula di sini.",heroDescription:"Bina gerakan politik, bertanding dalam pilihan raya nasional dan tadbir negara melalui keputusan sukar yang membentuk masa depan rakyat.",startGame:"Mulakan permainan",continueGame:"Sambung permainan",featureElection:"Pilihan raya persekutuan",featureCoalition:"Pembentukan gabungan",featureGovern:"Pentadbiran negara",disclaimer:"Karya fiksyen politik bebas. Parti, calon, tinjauan dan peristiwa adalah rekaan dan tidak mewakili mana-mana tokoh politik sebenar Malaysia.",setupEyebrow:"PERJALANAN POLITIK ANDA",createParty:"Tubuhkan gerakan anda",setupIntro:"Pilih nama, identiti dan keutamaan. Profil permulaan akan mempengaruhi kempen anda.",partyName:"Nama gerakan politik",shortName:"Singkatan",partyColour:"Warna gerakan",leaderName:"Nama pemimpin anda",politicalApproach:"Pendekatan politik",approachHint:"Pilih keutamaan yang paling menggambarkan gerakan anda.",reform:"Reformasi institusi",reformDesc:"Ketelusan, institusi awam dan kerajaan yang bertanggungjawab.",welfare:"Kebajikan sosial",welfareDesc:"Kos sara hidup, perkhidmatan awam dan perlindungan sosial.",growth:"Pertumbuhan ekonomi",growthDesc:"Pekerjaan, pelaburan, produktiviti dan infrastruktur.",launchCampaign:"Mulakan kempen",nationalDashboard:"PAPAN PEMUKA NEGARA",year:"TAHUN",turn:"PUSINGAN",federalElection:"PILIHAN RAYA PERSEKUTUAN",seatProjection:"Unjuran kerusi Parlimen",liveModel:"MODEL LANGSUNG",projectedSeats:"UNJURAN KERUSI",nationalSupport:"SOKONGAN NASIONAL",majorityStatus:"STATUS MAJORITI",seatNote:"Model ilustrasi nasional merangkumi 222 kawasan pilihan raya rekaan. Ini bukan ramalan pilihan raya rasmi.",decisionDesk:"MEJA KEPUTUSAN",campaignActions:"Tindakan kempen",campaignIntro:"Pilih cara menggunakan kapasiti kempen anda yang terhad pada pusingan ini.",endTurn:"Tamatkan pusingan",yourMovement:"GERAKAN ANDA",campaignCapacity:"Kapasiti kempen",nationalBriefing:"LAPORAN NASIONAL",campaignJournal:"JURNAL KEMPEN",latestUpdates:"Perkembangan terkini",saveGame:"Simpan permainan",restart:"Mulakan semula simulasi",footerNote:"Simulasi pendidikan fiksyen. Tidak bersekutu dengan Kerajaan Malaysia atau mana-mana parti politik.",campaign:"Kempen pilihan raya",government:"Pentadbiran kerajaan",campaignAction:"Tindakan kempen",governmentAction:"Tindakan kerajaan",support:"Sokongan awam",economy:"Keyakinan ekonomi",trust:"Kepercayaan awam",stability:"Kestabilan politik",infrastructure:"Infrastruktur",capacity:"Kapasiti kempen",turnEnded:"Pusingan selesai. Keputusan anda telah mengubah landskap politik.",saved:"Permainan disimpan dalam pelayar ini.",noSave:"Tiada permainan tersimpan ditemui.",confirmRestart:"Mulakan simulasi baharu? Kemajuan yang belum disimpan akan hilang.",electionWon:"Anda telah memperoleh majoriti kerusi Parlimen.",hung:"Tiada gerakan memperoleh majoriti. Bentuk gabungan untuk menubuhkan kerajaan.",electionLost:"Anda belum memperoleh kerusi yang mencukupi untuk mengetuai kerajaan.",formCoalition:"Rundingan gabungan",coalitionText:"Pilih rakan gabungan untuk mencapai sekurang-kurangnya 112 kerusi. Semua gerakan politik ini adalah rekaan.",formGovernment:"Bentuk kerajaan",coalitionFailed:"Gabungan ini belum mempunyai kerusi yang mencukupi. Teruskan rundingan.",majority:"MAJORITI",minority:"MINORITI",governmentFormed:"Kerajaan telah dibentuk. Kini bermula tugas mentadbir negara.",nextYear:"Teruskan ke pentadbiran",nextTurn:"Teruskan",endOfTerm:"Tamat penggal",endOfTermText:"Penggal pentadbiran pertama anda telah berakhir. Semak rekod anda dan mulakan kitaran pilihan raya seterusnya.",reElection:"Mulakan pilihan raya seterusnya",policyTitle:"Keputusan dasar",policyHint:"Pilih tindak balas dasar. Setiap pilihan mempunyai kesan tersendiri.",eventPolitics:"POLITIK",eventEconomy:"EKONOMI",eventSociety:"MASYARAKAT",eventDisaster:"KESELAMATAN AWAM",eventGovernance:"TADBIR URUS",selected:"Dipilih",used:"Digunakan",remaining:"berbaki",notEnough:"Tiada kapasiti tindakan yang tinggal pada pusingan ini.",seats:"KERUSI",turns:"PUSINGAN",leader:"Diketuai oleh",reformLabel:"Reformasi institusi",welfareLabel:"Kebajikan sosial",growthLabel:"Pertumbuhan ekonomi",supportLabel:"Sokongan awam",economyLabel:"Keyakinan ekonomi",trustLabel:"Kepercayaan awam",stabilityLabel:"Kestabilan politik",infrastructureLabel:"Infrastruktur",eventStartTitle:"Musim politik baharu",eventStartText:"Kempen bermula. Pengundi sedang menilai hala tuju negara.",majorityFormed:"Kerajaan majoriti",minorityFormed:"Kerajaan gabungan",campaignWon:"Gerakan anda kini menjadi kuasa terbesar di Parlimen.",result:"KEPUTUSAN"
    }
  };

  const rivals = [
    {id:"civic",name:"Civic Partnership",bm:"Perikatan Sivik",short:"CP",colour:"#3974b9",base:31,seats:0},
    {id:"national",name:"National Renewal Front",bm:"Barisan Pembaharuan Nasional",short:"NRF",colour:"#c18a39",base:27,seats:0},
    {id:"people",name:"People's Welfare League",bm:"Liga Kebajikan Rakyat",short:"PWL",colour:"#9467a8",base:20,seats:0},
    {id:"independent",name:"Independent candidates",bm:"Calon bebas",short:"IND",colour:"#8793a2",base:8,seats:0}
  ];
  const actions = {
    campaign:[
      {id:"townhall",icon:"◉",title:"Community town halls",bm:"Dialog komuniti",desc:"Meet residents and listen to local concerns.",bmDesc:"Temui penduduk dan dengar isu setempat.",effect:{support:5,trust:3,stability:1},cost:1,impact:"+5 support · +3 trust",bmImpact:"+5 sokongan · +3 kepercayaan"},
      {id:"policy",icon:"▤",title:"Publish policy platform",bm:"Terbitkan manifesto dasar",desc:"Present a costed, practical national programme.",bmDesc:"Bentangkan program nasional yang praktikal dan berkos.",effect:{support:3,trust:5,economy:1},cost:1,impact:"+3 support · +5 trust",bmImpact:"+3 sokongan · +5 kepercayaan"},
      {id:"ground",icon:"⌖",title:"Strengthen local branches",bm:"Perkukuh cawangan tempatan",desc:"Build volunteers and improve constituency outreach.",bmDesc:"Bina rangkaian sukarelawan dan hubungan kawasan.",effect:{support:4,stability:3},cost:1,impact:"+4 support · +3 stability",bmImpact:"+4 sokongan · +3 kestabilan"},
      {id:"media",icon:"◌",title:"National media interview",bm:"Temu bual media nasional",desc:"Communicate your priorities to a wider audience.",bmDesc:"Sampaikan keutamaan anda kepada khalayak lebih luas.",effect:{support:3,trust:1},cost:1,impact:"+3 support · +1 trust",bmImpact:"+3 sokongan · +1 kepercayaan"}
    ],
    government:[
      {id:"cost",icon:"▥",title:"Cost-of-living relief",bm:"Bantuan kos sara hidup",desc:"Target temporary support to lower-income households.",bmDesc:"Sasarkan bantuan sementara kepada isi rumah berpendapatan rendah.",effect:{support:5,economy:-2,trust:2},cost:1,impact:"+5 support · −2 economy",bmImpact:"+5 sokongan · −2 ekonomi"},
      {id:"skills",icon:"⌘",title:"Skills and jobs programme",bm:"Program kemahiran dan pekerjaan",desc:"Invest in training and pathways into quality jobs.",bmDesc:"Melabur dalam latihan dan laluan ke pekerjaan berkualiti.",effect:{economy:5,infrastructure:1,support:2},cost:1,impact:"+5 economy · +2 support",bmImpact:"+5 ekonomi · +2 sokongan"},
      {id:"integrity",icon:"◇",title:"Public integrity reforms",bm:"Reformasi integriti awam",desc:"Strengthen procurement transparency and oversight.",bmDesc:"Perkukuh ketelusan perolehan dan pengawasan.",effect:{trust:7,stability:2,support:1},cost:1,impact:"+7 trust · +2 stability",bmImpact:"+7 kepercayaan · +2 kestabilan"},
      {id:"resilience",icon:"⌂",title:"Resilient infrastructure",bm:"Infrastruktur berdaya tahan",desc:"Prioritise drainage, transport and climate adaptation.",bmDesc:"Utamakan saliran, pengangkutan dan adaptasi iklim.",effect:{infrastructure:7,economy:2},cost:1,impact:"+7 infrastructure · +2 economy",bmImpact:"+7 infrastruktur · +2 ekonomi"}
    ]
  };
  const events = [
    {category:"eventEconomy",icon:"↗",title:"Household costs under pressure",bm:"Kos isi rumah semakin meningkat",text:"A rise in essential expenses is dominating public discussion. Voters want credible relief without weakening public finances.",bmText:"Peningkatan perbelanjaan asas menjadi perhatian. Rakyat mahukan bantuan yang munasabah tanpa menjejaskan kewangan awam.",effects:{support:-2,economy:-2}},
    {category:"eventDisaster",icon:"⌁",title:"Monsoon preparedness questioned",bm:"Persediaan monsun dipersoalkan",text:"Heavy seasonal rain has exposed gaps in local drainage and emergency coordination. State agencies request federal support.",bmText:"Hujan bermusim mendedahkan kelemahan saliran dan penyelarasan kecemasan. Agensi negeri memohon sokongan persekutuan.",effects:{infrastructure:-2,stability:-1}},
    {category:"eventSociety",icon:"◎",title:"Young voters demand opportunity",bm:"Pengundi muda menuntut peluang",text:"Youth groups are calling for better access to skills, affordable housing and meaningful employment.",bmText:"Kumpulan belia menuntut akses lebih baik kepada kemahiran, perumahan mampu milik dan pekerjaan bermakna.",effects:{support:-1,economy:-1}},
    {category:"eventGovernance",icon:"◇",title:"Procurement transparency debate",bm:"Perbahasan ketelusan perolehan",text:"Civil society groups call for clearer public reporting and stronger safeguards in government procurement.",bmText:"Kumpulan masyarakat sivil menggesa pelaporan awam yang lebih jelas dan perlindungan lebih kukuh dalam perolehan kerajaan.",effects:{trust:-2,stability:-1}},
    {category:"eventPolitics",icon:"▦",title:"Coalition partners seek clarity",bm:"Rakan gabungan mahukan kepastian",text:"Political partners want clearer priorities and regular consultation before the next parliamentary sitting.",bmText:"Rakan politik mahukan keutamaan yang lebih jelas dan rundingan berkala sebelum sidang Parlimen seterusnya.",effects:{stability:-2}}
  ];

  let lang="en", game=null, currentEvent=null, actionsUsed=0, modalCallback=null, soundOn=false;
  const t=(key)=>translations[lang][key]||translations.en[key]||key;
  const clamp=(n,min=0,max=100)=>Math.max(min,Math.min(max,n));
  const approachNames={reform:["Institutional reform","Reformasi institusi"],welfare:["Social welfare","Kebajikan sosial"],growth:["Economic growth","Pertumbuhan ekonomi"]};
  const rivalsCopy=()=>rivals.map(p=>({...p}));

  function showScreen(id){["startScreen","setupScreen","gameScreen"].forEach(s=>$(s).classList.toggle("hidden",s!==id));}
  function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2300);}
  function journal(message){game.journal.unshift({turn:game.turn,message});game.journal=game.journal.slice(0,6);renderJournal();}
  function showModal(title,text,button,callback,eyebrow=""){ $("modalTitle").textContent=title;$("modalText").textContent=text;$("modalButton").innerHTML=`${button} <b>→</b>`;$("modalEyebrow").textContent=eyebrow||t("result");$("modal").classList.remove("hidden");modalCallback=callback; }
  function closeModal(){ $("modal").classList.add("hidden");if(modalCallback){const cb=modalCallback;modalCallback=null;cb();} }
  function startSetup(){showScreen("setupScreen");}
  function createGame(form){
    const fd=new FormData(form);
    const approach=fd.get("approach");
    game={party:{name:fd.get("partyName").trim(),short:fd.get("partyShort").trim().toUpperCase(),colour:fd.get("colour"),leader:fd.get("leaderName").trim(),approach},phase:"campaign",year:2028,turn:1,stats:{support:22,economy:55,trust:58,stability:52,infrastructure:48},rivals:rivalsCopy(),seats:0,voteShare:0,capacity:2,coalition:[],governmentSeats:0,journal:[],usedActions:[],turnsInOffice:0};
    const bonus={reform:{trust:5},welfare:{support:5},growth:{economy:5}}[approach];
    Object.entries(bonus).forEach(([k,v])=>game.stats[k]=clamp(game.stats[k]+v));
    journal(`Movement founded: ${game.party.name}.`);
    currentEvent={category:"eventPolitics",icon:"▤",title:"A new political season",bm:"Musim politik baharu",text:"The campaign begins. Voters are weighing the country's direction.",bmText:"Kempen bermula. Pengundi sedang menilai hala tuju negara.",effects:{}};
    showScreen("gameScreen");render();
    showModal(lang==="en"?"Your campaign begins":"Kempen anda bermula",lang==="en"?"Your movement enters a competitive national campaign. Build trust, connect with communities and turn support into parliamentary seats.":"Gerakan anda memasuki kempen nasional yang kompetitif. Bina kepercayaan, dekati komuniti dan tukarkan sokongan kepada kerusi Parlimen.",t("nextTurn"),()=>{}, "THE CAMPAIGN");
  }
  function seatProjection(){
    const support=game.stats.support;
    const adjustment=(support-22)*0.34+(game.stats.trust-58)*0.08+(game.stats.stability-52)*0.05;
    const raw=[{id:"player",name:game.party.name,short:game.party.short,colour:game.party.colour,score:22+adjustment}];
    game.rivals.forEach((p,i)=>raw.push({...p,score:p.base+([0.4,-0.2,0.15,-0.1][i]*(game.turn-1))}));
    const total=raw.reduce((s,p)=>s+p.score,0);
    raw.forEach(p=>p.voteShare=p.score/total*100);
    // A simple constituency-level model: support share converted to seats with a modest geographic bonus.
    const normalized=raw.map(p=>({...p,seats:Math.max(0,Math.round(222*Math.pow(p.voteShare/100,1.17)))}));
    let sum=normalized.reduce((s,p)=>s+p.seats,0);
    while(sum<222){normalized.sort((a,b)=>b.voteShare-a.voteShare)[0].seats++;sum++;}
    while(sum>222){const candidate=normalized.filter(p=>p.seats>0).sort((a,b)=>b.seats-a.seats)[normalized.filter(p=>p.seats>0).length-1];candidate.seats--;sum--;}
    return normalized.sort((a,b)=>b.seats-a.seats);
  }
  function renderStats(){
    const statDefs=[["support",t("support"),"◎"],["economy",t("economy"),"↗"],["trust",t("trust"),"◇"],["stability",t("stability"),"⌘"],["infrastructure",t("infrastructure"),"⌂"]];
    $("statGrid").innerHTML=statDefs.map(([key,label,icon])=>`<div class="stat-card"><div class="stat-top"><span>${label.toUpperCase()}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${Math.round(game.stats[key])}<small style="font:10px Inter;color:#9aa5b1"> / 100</small></div><div class="meter"><span style="width:${clamp(game.stats[key])}%"></span></div><div class="stat-sub">${game.stats[key]>=65?(lang==="en"?"Positive trend":"Arah positif"):game.stats[key]>=40?(lang==="en"?"Needs attention":"Perlu perhatian"):(lang==="en"?"Under pressure":"Dalam tekanan")}</div></div>`).join("");
  }
  function renderElection(){
    const results=seatProjection(),mine=results.find(p=>p.id==="player");
    $("seatCount").textContent=mine.seats;$("voteShare").textContent=mine.voteShare.toFixed(1)+"%";
    $("majorityStatus").textContent=mine.seats>=112?t("majority"):t("minority");
    $("seatTrack").innerHTML=results.map(p=>`<span title="${p.name}: ${p.seats}" style="width:${p.seats/222*100}%;background:${p.colour}"></span>`).join("");
    $("partyLegend").innerHTML=results.map(p=>`<span class="legend-item"><i class="legend-dot" style="background:${p.colour}"></i>${p.short} · ${p.seats}</span>`).join("");
    game.projected=results;
  }
  function renderActions(){
    const list=game.phase==="campaign"?actions.campaign:actions.government;
    $("actionHeading").textContent=t(game.phase==="campaign"?"campaignActions":"policyTitle");
    $("actionIntro").textContent=t(game.phase==="campaign"?"campaignIntro":"policyHint");
    $("actionCount").textContent=`${actionsUsed} / ${game.capacity}`;
    $("capacityValue").textContent=`${game.capacity-actionsUsed} / ${game.capacity}`;
    $("actionCards").innerHTML=list.map(a=>`<button class="action-card" data-action="${a.id}" ${actionsUsed>=game.capacity||game.usedActions.includes(a.id)?"disabled":""}><span class="action-icon">${a.icon}</span><b>${lang==="en"?a.title:a.bm}</b><small>${lang==="en"?a.desc:a.bmDesc}</small><em>${lang==="en"?a.impact:a.bmImpact}</em></button>`).join("");
    document.querySelectorAll("[data-action]").forEach(btn=>btn.addEventListener("click",()=>takeAction(btn.dataset.action)));
    $("actionFeedback").textContent=actionsUsed>=game.capacity?t("notEnough"):"";
  }
  function renderEvent(){
    const e=currentEvent||events[0];$("eventIcon").textContent=e.icon;$("eventTitle").textContent=lang==="en"?e.title:e.bm;$("eventText").textContent=lang==="en"?e.text:e.bmText;$("eventCategory").textContent=t(e.category);
  }
  function renderJournal(){
    $("journalList").innerHTML=game.journal.slice(0,5).map(item=>`<li><time>${t("turn")} ${String(item.turn).padStart(2,"0")}</time>${item.message}</li>`).join("");
  }
  function render(){
    const isGov=game.phase==="government";
    $("phaseTitle").textContent=t(isGov?"government":"campaign");
    $("yearValue").textContent=game.year;$("turnValue").textContent=String(game.turn).padStart(2,"0");
    $("partyEmblem").textContent=game.party.short;$("partyEmblem").style.background=game.party.colour;
    $("sidePartyName").textContent=game.party.name;$("sideLeader").textContent=`${t("leader")} ${game.party.leader}`;
    $("sideApproach").textContent=approachNames[game.party.approach][lang==="en"?0:1];
    renderStats();renderElection();renderActions();renderEvent();renderJournal();
  }
  function takeAction(id){
    if(actionsUsed>=game.capacity||game.usedActions.includes(id))return;
    const list=game.phase==="campaign"?actions.campaign:actions.government;
    const action=list.find(a=>a.id===id);if(!action)return;
    Object.entries(action.effect).forEach(([key,value])=>game.stats[key]=clamp(game.stats[key]+value));
    actionsUsed++;game.usedActions.push(id);
    journal(`${lang==="en"?action.title:action.bm} — ${lang==="en"?action.impact:action.bmImpact}.`);
    render();toast(lang==="en"?"Decision recorded.":"Keputusan direkodkan.");
  }
  function nextEvent(){
    const e=events[Math.floor(Math.random()*events.length)];
    currentEvent=e;
    Object.entries(e.effects).forEach(([key,value])=>game.stats[key]=clamp(game.stats[key]+value));
    journal(`${lang==="en"?e.title:e.bm}.`);
  }
  function endTurn(){
    if(actionsUsed===0){toast(lang==="en"?"Consider taking an action before ending the turn.":"Pertimbangkan untuk mengambil tindakan sebelum menamatkan pusingan.");}
    nextEvent();game.turn++;
    if(game.phase==="campaign"&&game.turn>5){runElection();return;}
    if(game.phase==="government"&&game.turnsInOffice>=6){showModal(t("endOfTerm"),t("endOfTermText"),t("reElection"),()=>beginNextElection(),"TERM REVIEW");return;}
    actionsUsed=0;game.usedActions=[];render();toast(t("turnEnded"));
  }
  function runElection(){
    const results=seatProjection(),mine=results.find(p=>p.id==="player");game.seats=mine.seats;game.voteShare=mine.voteShare;
    if(mine.seats>=112){formGovernment([mine],mine.seats);return;}
    if(mine.seats+results.filter(p=>p.id!=="player").sort((a,b)=>b.seats-a.seats)[0].seats<112){showModal(t("electionLost"),`${t("electionLost")} ${mine.seats} ${t("seats").toLowerCase()}.`,t("nextTurn"),()=>beginNextElection(),"ELECTION RESULT");return;}
    openCoalition(results,mine);
  }
  function openCoalition(results,mine){
    const partners=results.filter(p=>p.id!=="player");
    let selected=[];
    const html=partners.map(p=>`<label class="coalition-option"><label><input type="checkbox" value="${p.id}"> ${p.name}</label><b>${p.seats} seats</b></label>`).join("");
    $("modalTitle").textContent=t("formCoalition");$("modalText").textContent=`${t("coalitionText")} Your movement: ${mine.seats} seats.`;
    $("modalDetails").innerHTML=`<div class="coalition-list">${html}</div><p id="coalitionTotal" class="muted">Total: ${mine.seats} / 112 seats</p>`;
    $("modalEyebrow").textContent="POST-ELECTION NEGOTIATIONS";$("modalButton").textContent=t("formGovernment");$("modal").classList.remove("hidden");
    document.querySelectorAll('.coalition-option input').forEach(input=>input.addEventListener("change",()=>{
      selected=Array.from(document.querySelectorAll('.coalition-option input:checked')).map(x=>x.value);
      const total=mine.seats+partners.filter(p=>selected.includes(p.id)).reduce((s,p)=>s+p.seats,0);
      $("coalitionTotal").textContent=`Total: ${total} / 112 seats`;$("modalButton").disabled=total<112;
      $("modalButton").style.opacity=total<112?".45":"1";
    }));
    $("modalButton").disabled=true;$("modalButton").style.opacity=".45";
    modalCallback=()=>{
      const total=mine.seats+partners.filter(p=>selected.includes(p.id)).reduce((s,p)=>s+p.seats,0);
      if(total>=112){formGovernment([mine,...partners.filter(p=>selected.includes(p.id))],total);}
      else{toast(t("coalitionFailed"));beginNextElection();}
    };
  }
  function formGovernment(coalition,total){
    game.phase="government";game.coalition=coalition.map(p=>p.id);game.governmentSeats=total;game.turn=1;game.year++;
    game.turnsInOffice=0;actionsUsed=0;game.usedActions=[];
    journal(`${lang==="en"?"Government formed with":"Kerajaan dibentuk dengan"} ${total} ${t("seats").toLowerCase()}.`);
    currentEvent={category:"eventGovernance",icon:"◇",title:"The work of government begins",bm:"Tugas kerajaan bermula",text:"Your administration takes office. Public expectations are high and the coalition must work together.",bmText:"Pentadbiran anda mula memegang jawatan. Harapan rakyat tinggi dan gabungan perlu bekerjasama.",effects:{}};
    render();
    showModal(t("governmentFormed"),`${total} ${t("seats").toLowerCase()} — ${total>=112?t("majorityFormed"):t("minorityFormed")}.`,t("nextTurn"),()=>{},"GOVERNMENT FORMED");
  }
  function beginNextElection(){
    game.phase="campaign";game.year+=4;game.turn=1;game.stats.support=clamp(game.stats.support-4);game.stats.stability=clamp(game.stats.stability-3);
    game.rivals=rivalsCopy();game.coalition=[];game.turnsInOffice=0;actionsUsed=0;game.usedActions=[];
    currentEvent={category:"eventPolitics",icon:"▤",title:"A new electoral cycle",bm:"Kitaran pilihan raya baharu",text:"The political landscape resets. Your record will shape the next campaign.",bmText:"Landskap politik berubah. Rekod anda akan mempengaruhi kempen seterusnya.",effects:{}};
    render();showScreen("gameScreen");
  }
  function saveGame(){if(!game)return;localStorage.setItem("peoplesMandateSave",JSON.stringify({game,lang}));toast(t("saved"));$("continueBtn").disabled=false;}
  function loadGame(){try{const data=JSON.parse(localStorage.getItem("peoplesMandateSave"));if(!data?.game)throw Error();game=data.game;lang=data.lang||"en";actionsUsed=0;game.usedActions=[];showScreen("gameScreen");applyLanguage();render();}catch(e){toast(t("noSave"));}}
  function restart(){if(confirm(t("confirmRestart"))){game=null;localStorage.removeItem("peoplesMandateSave");$("continueBtn").disabled=true;showScreen("startScreen");}}
  function applyLanguage(){
    document.documentElement.lang=lang==="en"?"en":"ms";
    document.querySelectorAll("[data-i18n]").forEach(el=>{const value=t(el.dataset.i18n);if(value.includes("<br>")||value.includes("<em>"))el.innerHTML=value;else el.textContent=value;});
    $("languageBtn").textContent=lang==="en"?"BM":"EN";
    if(game)render();
  }

  $("newGameBtn").addEventListener("click",startSetup);
  $("continueBtn").addEventListener("click",loadGame);
  $("partyForm").addEventListener("submit",e=>{e.preventDefault();createGame(e.currentTarget);});
  $("endTurnBtn").addEventListener("click",endTurn);
  $("saveBtn").addEventListener("click",saveGame);
  $("resetBtn").addEventListener("click",restart);
  $("modalButton").addEventListener("click",closeModal);
  $("languageBtn").addEventListener("click",()=>{lang=lang==="en"?"bm":"en";applyLanguage();});
  $("soundBtn").addEventListener("click",()=>{soundOn=!soundOn;$("soundBtn").textContent=soundOn?"♫ On":"♫";toast(soundOn?"Sound effects enabled (interface only).":"Sound effects muted.");});
  $("continueBtn").disabled=!localStorage.getItem("peoplesMandateSave");
  applyLanguage();
})();