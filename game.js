(() => {
"use strict";
const $ = id => document.getElementById(id);
const STORAGE_KEY = "peoplesMandateSave_v2"; // Updated version for new map data

const copy = {
 en:{
  eyebrow:"THE FUTURE IS DECIDED BY THE PEOPLE",heroTitle:'A nation.<br><em>A mandate.</em><br>A thousand decisions.',heroDesc:"Build a movement, contest an election and navigate the difficult business of governing a diverse nation.",begin:"BEGIN YOUR MANDATE",continue:"CONTINUE GAME",footnote:"A fictional political simulation inspired by Malaysia's parliamentary system.",setupEyebrow:"YOUR POLITICAL JOURNEY STARTS HERE",setupTitle:"Build your movement.",setupDesc:"Every government begins with an idea — and the people willing to stand behind it.",partyName:"MOVEMENT / PARTY NAME",tagline:"YOUR SLOGAN",ideology:"POLITICAL DIRECTION",reformist:"Reformist",reformistDesc:"Institutional reform and clean governance",centrist:"Centrist",centristDesc:"Pragmatic policies and broad consensus",social:"Social democratic",socialDesc:"Public services and economic fairness",conservative:"Conservative",conservativeDesc:"Tradition, continuity and stability",difficulty:"CAMPAIGN DIFFICULTY",accessible:"Accessible",standard:"Standard",challenging:"Challenging",formStart:"ESTABLISH YOUR MOVEMENT",yourMission:"Your mission",missionDesc:"Win public trust, contest 222 parliamentary seats and secure the confidence of the Dewan Rakyat.",parliament:"PARLIAMENT",majority:"SIMPLE MAJORITY",seats:"seats",fictionNote:"All parties, politicians and election events in this game are fictional.",campaignDesk:"CAMPAIGN HEADQUARTERS",campaignWeek:"CAMPAIGN WEEK",fieldStrategy:"FIELD STRATEGY",chooseMove:"Choose your next move",endWeek:"END CAMPAIGN WEEK",electoralMap:"ELECTORAL LANDSCAPE",regionalSupport:"Regional support",strong:"Strong",competitive:"Competitive",weak:"Needs work",campaignPhase:"PHASE 01 · CAMPAIGN",saveGame:"SAVE GAME ↗",electionNight:"THE COUNTING BEGINS",nationHasSpoken:"The nation has spoken.",electionDesc:"The ballots are counted. The balance of power is about to change.",officialResult:"SIMULATED GENERAL ELECTION RESULT",seatsWon:"SEATS WON",popularVote:"POPULAR VOTE",mandateStatus:"MANDATE STATUS",formGovernment:"PROCEED TO GOVERNMENT FORMATION",postElection:"POST-ELECTION NEGOTIATIONS",numbersGame:"The numbers game.",coalitionDesc:"No single party governs alone without a majority. Build a coalition and secure confidence.",yourSeats:"YOUR SEATS",availablePartners:"AVAILABLE PARTNERS",negotiate:"Negotiate a coalition",needed:"NEEDED",coalitionTotal:"COALITION SEAT TOTAL",confirmCoalition:"CONFIRM COALITION",confidenceSupply:"Confidence & supply",confidenceDesc:"A coalition agreement needs more than arithmetic. Partners expect cabinet representation and a shared policy agenda.",majorityThreshold:"MAJORITY THRESHOLD",hungNote:"A hung parliament is possible. If negotiations fail, the head of state may need to determine who is most likely to command confidence.",puttingCountry:"THE WORK OF GOVERNMENT",governingBegins:"Governing begins.",governDesc:"Your mandate is not a blank cheque. Every decision has consequences.",term:"GOVERNMENT TERM",cabinetAgenda:"CABINET AGENDA",nationalPriorities:"Set national priorities",advanceTerm:"ADVANCE TO NEXT QUARTER",nationalPulse:"NATIONAL PULSE",publicMood:"Public mood",governTip:"Keep the economy, public trust and coalition stability in balance. A government can fall before its term ends.",governPhase:"PHASE 04 · GOVERNANCE",chapterComplete:"CHAPTER COMPLETE",legacyScore:"LEGACY SCORE",playAgain:"PLAY ANOTHER TERM",returnTitle:"RETURN TO TITLE",footerDisclaimer:"FICTIONAL SIMULATION · NOT AN ACTUAL ELECTION FORECAST",actionsLeft:"ACTIONS LEFT",decisionLeft:"DECISIONS",noFunds:"Not enough campaign funds.",weekDone:"Campaign week completed.",coalitionFailed:"You need at least 112 seats to form a government.",coalitionSuccess:"Coalition agreement secured.",saved:"Game saved in this browser.",noSave:"No saved game found.",event:"CAMPAIGN DEVELOPMENT",governEvent:"NATIONAL DEVELOPMENT",won:"MAJORITY GOVERNMENT",hung:"HUNG PARLIAMENT",minority:"MINORITY POSITION",party:"Party",vote:"Vote",governmentFormed:"A government is formed.",governmentFailed:"Coalition talks collapsed. Your movement will return to opposition.",continueTerm:"Your government has completed its term.",governmentFell:"Your government lost public confidence.",scoreText:"Public trust, economic performance and stability shape your legacy.",next:"Next quarter",noActions:"No decisions remaining this quarter.",pruMap:"PARLIAMENTARY MAP (PRU)",prnMap:"STATE ASSEMBLIES (PRN)",wonBy:"Won by",popularVote:"Popular Vote",totalPRN:"Total PRN Seats"
 },
 bm:{
  eyebrow:"MASA DEPAN DITENTUKAN OLEH RAKYAT",heroTitle:'Sebuah negara.<br><em>Satu mandat.</em><br>Seribu keputusan.',heroDesc:"Bina gerakan politik, bertanding dalam pilihan raya dan hadapi cabaran mentadbir sebuah negara yang majmuk.",begin:"MULAKAN MANDAT ANDA",continue:"SAMBUNG PERMAINAN",footnote:"Simulasi politik fiksyen berinspirasikan sistem parlimen Malaysia.",setupEyebrow:"PERJALANAN POLITIK ANDA BERMULA DI SINI",setupTitle:"Bina gerakan anda.",setupDesc:"Setiap kerajaan bermula dengan sebuah gagasan — dan rakyat yang bersedia menyokongnya.",partyName:"NAMA GERAKAN / PARTI",tagline:"SLOGAN ANDA",ideology:"HALA TUJU POLITIK",reformist:"Reformis",reformistDesc:"Pembaharuan institusi dan tadbir urus bersih",centrist:"Tengah",centristDesc:"Dasar pragmatik dan konsensus luas",social:"Demokrat sosial",socialDesc:"Perkhidmatan awam dan keadilan ekonomi",conservative:"Konservatif",conservativeDesc:"Tradisi, kesinambungan dan kestabilan",difficulty:"TAHAP KEMPEN",accessible:"Mudah",standard:"Standard",challenging:"Mencabar",formStart:"TUBUHKAN GERAKAN ANDA",yourMission:"Misi anda",missionDesc:"Menangi kepercayaan rakyat, tandingi 222 kerusi Parlimen dan raih kepercayaan Dewan Rakyat.",parliament:"PARLIMEN",majority:"MAJORITI MUDAH",seats:"kerusi",fictionNote:"Semua parti, ahli politik dan peristiwa pilihan raya dalam permainan ini adalah fiksyen.",campaignDesk:"IBU PEJABAT KEMPEN",campaignWeek:"MINGGU KEMPEN",fieldStrategy:"STRATEGI LAPANGAN",chooseMove:"Pilih langkah seterusnya",endWeek:"TAMATKAN MINGGU KEMPEN",electoralMap:"LANDSKAP PILIHAN RAYA",regionalSupport:"Sokongan wilayah",strong:"Kukuh",competitive:"Bersaing",weak:"Perlu usaha",campaignPhase:"FASA 01 · KEMPEN",saveGame:"SIMPAN PERMAINAN ↗",electionNight:"PENGIRAAN BERMULA",nationHasSpoken:"Rakyat telah membuat pilihan.",electionDesc:"Undi telah dikira. Imbangan kuasa bakal berubah.",officialResult:"KEPUTUSAN SIMULASI PILIHAN RAYA UMUM",seatsWon:"KERUSI DIMENANGI",popularVote:"UNDI POPULAR",mandateStatus:"STATUS MANDAT",formGovernment:"TERUSKAN PEMBENTUKAN KERAJAAN",postElection:"RUNDINGAN SELEPAS PILIHAN RAYA",numbersGame:"Permainan angka.",coalitionDesc:"Tiada parti boleh mentadbir sendiri tanpa majoriti. Bina gabungan dan raih kepercayaan.",yourSeats:"KERUSI ANDA",availablePartners:"RAKAN GABUNGAN",negotiate:"Runding gabungan",needed:"DIPERLUKAN",coalitionTotal:"JUMLAH KERUSI GABUNGAN",confirmCoalition:"SAHKAN GABUNGAN",confidenceSupply:"Kepercayaan dan perbekalan",confidenceDesc:"Perjanjian gabungan memerlukan lebih daripada angka. Rakan gabungan mengharapkan perwakilan kabinet dan agenda dasar bersama.",majorityThreshold:"AMBANG MAJORITI",hungNote:"Parlimen tergantung boleh berlaku. Jika rundingan gagal, ketua negara mungkin perlu menentukan pihak yang berkemungkinan mendapat kepercayaan majoriti.",puttingCountry:"TUGASAN KERAJAAN",governingBegins:"Pentadbiran bermula.",governDesc:"Mandat bukan cek kosong. Setiap keputusan membawa kesan.",term:"PENGGAL KERAJAAN",cabinetAgenda:"AGENDA KABINET",nationalPriorities:"Tetapkan keutamaan negara",advanceTerm:"MAJU KE SUKU TAHUN SETERUSNYA",nationalPulse:"NADI NEGARA",publicMood:"Sentimen rakyat",governTip:"Seimbangkan ekonomi, kepercayaan rakyat dan kestabilan gabungan. Kerajaan boleh tumbang sebelum penggal tamat.",governPhase:"FASA 04 · PENTADBIRAN",chapterComplete:"BAB SELESAI",legacyScore:"SKOR LEGASI",playAgain:"MULAKAN PENGGAL BAHARU",returnTitle:"KEMBALI KE TAJUK",footerDisclaimer:"SIMULASI FIKSYEN · BUKAN RAMALAN PILIHAN RAYA SEBENAR",actionsLeft:"TINDAKAN BERBAKI",decisionLeft:"KEPUTUSAN",noFunds:"Dana kempen tidak mencukupi.",weekDone:"Minggu kempen selesai.",coalitionFailed:"Anda memerlukan sekurang-kurangnya 112 kerusi untuk membentuk kerajaan.",coalitionSuccess:"Perjanjian gabungan berjaya dicapai.",saved:"Permainan disimpan dalam pelayar ini.",noSave:"Tiada permainan tersimpan ditemui.",event:"PERKEMBANGAN KEMPEN",governEvent:"PERKEMBANGAN NEGARA",won:"KERAJAAN MAJORITI",hung:"PARLIMEN TERGANTUNG",minority:"KEDUDUKAN MINORITI",party:"Parti",vote:"Undi",governmentFormed:"Kerajaan berjaya dibentuk.",governmentFailed:"Rundingan gabungan gagal. Gerakan anda kembali menjadi pembangkang.",continueTerm:"Kerajaan anda telah melengkapkan penggal.",governmentFell:"Kerajaan anda kehilangan kepercayaan rakyat.",scoreText:"Kepercayaan rakyat, prestasi ekonomi dan kestabilan membentuk legasi anda.",next:"Suku tahun seterusnya",noActions:"Tiada keputusan berbaki untuk suku tahun ini.",pruMap:"PETA PARLIMEN (PRU)",prnMap:"DEWAN UNDANGAN NEGERI (PRN)",wonBy:"Dim enangi oleh",popularVote:"Undi Popular",totalPRN:"Jumlah Kerusi PRN"
 }
};

// --- GEOGRAPHIC & ELECTION DATA (Grid layout mimics Malaysia map) ---
const malaysiaStates = [
  // Peninsular Malaysia
  { id: "perlis", name: "Perlis", seats: 3, prn: 15, x: 1, y: 1, region: "north" },
  { id: "kedah", name: "Kedah", seats: 15, prn: 36, x: 2, y: 1, region: "north" },
  { id: "penang", name: "Pulau Pinang", seats: 13, prn: 40, x: 1, y: 2, region: "north" },
  { id: "kelantan", name: "Kelantan", seats: 14, prn: 45, x: 4, y: 1, region: "east_coast" },
  { id: "terengganu", name: "Terengganu", seats: 8, prn: 32, x: 4, y: 2, region: "east_coast" },
  { id: "perak", name: "Perak", seats: 24, prn: 59, x: 2, y: 3, region: "central" },
  { id: "pahang", name: "Pahang", seats: 14, prn: 42, x: 3, y: 3, region: "east_coast" },
  { id: "selangor", name: "Selangor", seats: 22, prn: 56, x: 2, y: 4, region: "central" },
  { id: "kl", name: "Kuala Lumpur", seats: 11, prn: 0, x: 2, y: 5, region: "central", isFT: true },
  { id: "putrajaya", name: "Putrajaya", seats: 1, prn: 0, x: 3, y: 5, region: "central", isFT: true },
  { id: "nsembilan", name: "N. Sembilan", seats: 8, prn: 36, x: 3, y: 4, region: "central" },
  { id: "melaka", name: "Melaka", seats: 6, prn: 28, x: 3, y: 5, region: "south" },
  { id: "johor", name: "Johor", seats: 26, prn: 56, x: 4, y: 5, region: "south" },
  // East Malaysia (Borneo)
  { id: "sarawak", name: "Sarawak", seats: 31, prn: 82, x: 5, y: 3, region: "borneo" },
  { id: "labuan", name: "Labuan", seats: 1, prn: 0, x: 5, y: 2, region: "borneo", isFT: true },
  { id: "sabah", name: "Sabah", seats: 25, prn: 73, x: 6, y: 3, region: "borneo" }
];

const regions = [
  {en:"Northern Peninsula",bm:"Semenanjung Utara",weight:34},{en:"Central Peninsula",bm:"Semenanjung Tengah",weight:42},
  {en:"Southern Peninsula",bm:"Semenanjung Selatan",weight:28},{en:"East Coast",bm:"Pantai Timur",weight:27},
  {en:"Sabah",bm:"Sabah",weight:25},{en:"Sarawak",bm:"Sarawak",weight:29},{en:"Federal Territories",bm:"Wilayah Persekutuan",weight:37}
];

const rivalParties = [
 {id:"national",en:"National Stability Front",bm:"Barisan Kestabilan Nasional",color:"#7890ad",seats:0, prn:0},
 {id:"people",en:"People's Welfare Party",bm:"Parti Kebajikan Rakyat",color:"#b87e72",seats:0, prn:0},
 {id:"regional",en:"Regional Alliance",bm:"Gabungan Wilayah",color:"#7da994",seats:0, prn:0},
 {id:"green",en:"Green Future Movement",bm:"Gerakan Masa Depan Hijau",color:"#a1a66e",seats:0, prn:0}
];

const campaignActions = [
 {id:"rally",icon:"◉",title:["Community town hall","Dialog komuniti"],desc:["Hold a public meeting and listen to local concerns.","Adakan pertemuan awam dan dengar kebimbangan penduduk."],cost:12,effect:{support:5,trust:2,regions:2}},
 {id:"policy",icon:"▤",title:["Publish policy blueprint","Terbitkan pelan dasar"],desc:["Present a credible plan for jobs, services and reform.","Bentangkan rancangan pekerjaan, perkhidmatan dan reformasi."],cost:18,effect:{trust:6,support:3}},
 {id:"ground",icon:"⌂",title:["Door-to-door outreach","Kempen dari rumah ke rumah"],desc:["Build grassroots networks across key constituencies.","Bina rangkaian akar umbi di kawasan tumpuan."],cost:10,effect:{support:4,regions:4}},
 {id:"media",icon:"◎",title:["National media interview","Temu bual media nasional"],desc:["Take your message to a wider national audience.","Sampaikan mesej kepada khalayak nasional."],cost:15,effect:{support:3,trust:3}},
 {id:"volunteer",icon:"✚",title:["Mobilise volunteers","Gerakkan sukarelawan"],desc:["Strengthen election-day organisation and local presence.","Perkukuh organisasi hari mengundi dan kehadiran setempat."],cost:13,effect:{regions:5,support:2}},
 {id:"audit",icon:"◇",title:["Transparency pledge","Ikrar ketelusan"],desc:["Commit to transparent procurement and public reporting.","Beriltizam terhadap perolehan telus dan laporan awam."],cost:8,effect:{trust:5,support:1}}
];

const policies = [
 {id:"jobs",icon:"▥",title:["Jobs & small business","Pekerjaan & perniagaan kecil"],desc:["Targeted support for SMEs and workforce training.","Sokongan bersasar kepada PKS dan latihan tenaga kerja."],effect:{economy:7,approval:4,stability:1}},
 {id:"health",icon:"✚",title:["Public healthcare","Kesihatan awam"],desc:["Improve access, primary care and hospital capacity.","Tingkatkan akses, penjagaan primer dan kapasiti hospital."],effect:{approval:7,economy:-2,trust:2}},
 {id:"education",icon:"▤",title:["Education & skills","Pendidikan & kemahiran"],desc:["Invest in schools, TVET and future-ready skills.","Labur dalam sekolah, TVET dan kemahiran masa hadapan."],effect:{approval:5,economy:3,trust:2}},
 {id:"integrity",icon:"◇",title:["Institutional integrity","Integriti institusi"],desc:["Strengthen oversight, procurement and accountability.","Perkukuh pemantauan, perolehan dan akauntabiliti."],effect:{trust:8,stability:3,approval:2}},
 {id:"cost",icon:"⌂",title:["Cost of living relief","Bantuan kos sara hidup"],desc:["Target relief while managing fiscal pressure.","Sediakan bantuan bersasar sambil mengurus tekanan fiskal."],effect:{approval:8,economy:-5,stability:-1}},
 {id:"climate",icon:"♧",title:["Climate resilience","Daya tahan iklim"],desc:["Fund flood mitigation and resilient infrastructure.","Biayai mitigasi banjir dan infrastruktur berdaya tahan."],effect:{economy:2,approval:4,trust:3}}
];

const events = [
 {en:"A cost-of-living debate dominates the news cycle.",bm:"Perbahasan kos sara hidup mendominasi berita.",effect:{support:-1,trust:0}},
 {en:"A well-received local visit brings new volunteers.",bm:"Lawatan tempatan yang mendapat sambutan membawa sukarelawan baharu.",effect:{support:2,trust:1}},
 {en:"A rival party questions your funding transparency.",bm:"Parti lawan mempersoalkan ketelusan dana anda.",effect:{trust:-2,support:-1}},
 {en:"A televised debate gives your movement national visibility.",bm:"Debat televisyen meningkatkan pendedahan nasional gerakan anda.",effect:{support:2,trust:2}},
 {en:"Heavy rain disrupts several campaign events.",bm:"Hujan lebat mengganggu beberapa acara kempen.",effect:{support:-1,regions:-1}}
];

const govEvents = [
 {en:"A regional flood emergency tests public services.",bm:"Kecemasan banjir wilayah menguji perkhidmatan awam.",effect:{approval:-5,economy:-2,trust:1}},
 {en:"Investor confidence improves after a stable quarter.",bm:"Keyakinan pelabur meningkat selepas suku tahun yang stabil.",effect:{economy:4,stability:2}},
 {en:"A procurement controversy raises questions in Parliament.",bm:"Kontroversi perolehan menimbulkan persoalan di Parlimen.",effect:{trust:-7,approval:-3,stability:-2}},
 {en:"A successful skills programme earns public praise.",bm:"Program kemahiran yang berjaya menerima pujian rakyat.",effect:{approval:4,economy:2}},
 {en:"Coalition partners disagree over a major bill.",bm:"Rakan gabungan tidak sependapat tentang rang undang-undang utama.",effect:{stability:-6,trust:-1}}
];

let state=null, lang="en", soundOn=false, toastTimer;
const t=k=>copy[lang][k]||copy.en[k]||k;
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,v));
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const label=(arr)=>arr[lang==="en"?0:1];

function toast(message){const el=$("toast");if(!el)return;el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}
function showScreen(name){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));const target=$("screen-"+name);if(target)target.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});render()}
function applyLanguage(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(copy[lang]&&copy[lang][k])el.innerHTML=copy[lang][k]});const lt=$("language-toggle");if(lt)lt.textContent=lang==="en"?"BM":"EN";const bs=$("brand-subtitle");if(bs)bs.textContent=lang==="en"?"A MALAYSIAN POLITICAL SIMULATION":"SIMULASI POLITIK MALAYSIA";if(state)render()}

function createGame(form){
 const ideology=form.get("ideology"),difficulty=form.get("difficulty");
 state={phase:"campaign",party:(form.get("party-name")||"").trim()||"People's Reform Alliance",tagline:(form.get("party-tagline")||"").trim(),ideology,difficulty,week:1,actions:2,funds:difficulty==="easy"?115:difficulty==="hard"?82:100,support:25,trust:48,regions:regions.map(r=>({name:r.en,value:clamp(r.weight+(difficulty==="hard"?-5:difficulty==="easy"?5:0)+rand(-3,3))})),event:null,govEvent:null,playerSeats:0,playerVote:0,results:[],partners:[],selectedPartners:[],coalitionSeats:0,term:1,govActions:2,economy:52,approval:52,stability:55,govTrust:50,legacy:0,electionMap:{},prnMap:{}};
 if(ideology==="Reformist")state.trust=clamp(state.trust+5);
 if(ideology==="Social Democratic")state.approval=56;
 if(ideology==="Conservative")state.stability=59;
 showScreen("campaign");nextCampaignEvent();
}

function statCard(title,value,suffix=""){return `<div class="stat-card"><span>${title}</span><b>${Math.round(value)}<small>${suffix}</small></b></div>`}
function renderStats(govern=false){const el=$(govern?"govern-stats":"campaign-stats");if(!state||!el)return;el.innerHTML=govern?[statCard(lang==="en"?"ECONOMIC HEALTH":"KESIHATAN EKONOMI",state.economy,"%"),statCard(lang==="en"?"PUBLIC APPROVAL":"KELULUSAN RAKYAT",state.approval,"%"),statCard(lang==="en"?"PUBLIC TRUST":"KEPERCAYAAN RAKYAT",state.govTrust,"%"),statCard(lang==="en"?"COALITION STABILITY":"KESTABILAN GABUNGAN",state.stability,"%")].join(""):[statCard(lang==="en"?"CAMPAIGN FUNDS":"DANA KEMPEN",state.funds,"M"),statCard(lang==="en"?"PUBLIC SUPPORT":"SOKONGAN RAKYAT",state.support,"%"),statCard(lang==="en"?"CREDIBILITY":"KREDIBILITI",state.trust,"%"),statCard(lang==="en"?"FIELD STRENGTH":"KEKUATAN LAPANGAN",Math.round(state.regions.reduce((a,r)=>a+r.value,0)/state.regions.length),"%")].join("")}

function renderRegions(){const el=$("region-list");if(!state||!el)return;el.innerHTML=state.regions.map(r=>{const meta=regions.find(x=>x.en===r.name);const nm=lang==="en"?r.name:(meta?meta.bm:r.name);return `<div class="region-item"><span>${nm}</span><b>${Math.round(r.value)}%</b><div class="region-track"><i class="${r.value<30?"low":r.value<50?"mid":""}" style="width:${r.value}%"></i></div></div>`}).join("")}
function nextCampaignEvent(){const e=pick(events);state.event={en:e.en,bm:e.bm,effect:e.effect};}
function nextGovEvent(){const e=pick(govEvents);state.govEvent={en:e.en,bm:e.bm,effect:e.effect};}

function renderCampaign(){
 if(!state)return;$("campaign-title").textContent=state.party;$("campaign-subtitle").textContent=state.tagline;$("week-number").textContent=`0${state.week} / 04`;$("actions-left").textContent=`${state.actions} ${t("actionsLeft")}`;
 renderStats();renderRegions();$("action-grid").innerHTML=campaignActions.map(a=>`<button class="action-card" data-action="${a.id}" ${state.actions<=0||state.funds<a.cost?"disabled":""}><span class="action-icon">${a.icon}</span><b>${label(a.title)}</b><small>${label(a.desc)}</small><span class="cost">${lang==="en"?"COST":"KOS"} ${a.cost}M</span></button>`).join("");
 $("campaign-event").innerHTML=`<span>${t("event")}</span><b>${state.event?state.event[lang]:""}</b><p>${lang==="en"?"Public attention can shift quickly. Your next decision matters.":"Perhatian rakyat boleh berubah dengan pantas. Keputusan seterusnya penting."}</p>`;
 document.querySelectorAll("[data-action]").forEach(b=>b.addEventListener("click",()=>campaignAction(b.dataset.action)))
}

function campaignAction(id){const a=campaignActions.find(x=>x.id===id);if(!a||state.actions<=0||state.funds<a.cost)return;state.funds-=a.cost;state.actions--;const e=a.effect;state.support=clamp(state.support+(e.support||0));state.trust=clamp(state.trust+(e.trust||0));if(e.regions)state.regions.forEach(r=>r.value=clamp(r.value+e.regions+rand(-1,1)));renderCampaign();toast(lang==="en"?"Campaign action completed.":"Tindakan kempen selesai.");}
function endCampaignWeek(){if(state.actions>0){state.support=clamp(state.support+1);state.trust=clamp(state.trust+1)}if(state.event&&state.event.effect){const ef=state.event.effect;state.support=clamp(state.support+(ef.support||0));state.trust=clamp(state.trust+(ef.trust||0));if(ef.regions)state.regions.forEach(r=>r.value=clamp(r.value+(ef.regions||0)))}if(state.week>=4){runElection();return}state.week++;state.actions=2;state.funds+=12;nextCampaignEvent();renderCampaign();toast(t("weekDone"))}

// --- THE ELECTION ENGINE (PRU & PRN) ---
function runElection(){
 const totalWeight=state.regions.reduce((a,r)=>a+r.value,0)/state.regions.length;
 const ideologyBonus=state.ideology==="Centrist"?2:state.ideology==="Reformist"?1:0;
 const score=clamp(state.support*.48+state.trust*.18+totalWeight*.28+ideologyBonus+rand(-5,5),8,72);
 
 let pSeats=0, pPRN=0;
 let rSeats=[0,0,0,0], rPRN=[0,0,0,0];
 state.electionMap = {};
 state.prnMap = {};

 // Loop through all 16 states to determine winners
 malaysiaStates.forEach(st => {
   // Region modifiers
   let localScore = score + rand(-12, 12);
   if(st.region === "borneo") localScore -= 10; // Regional parties stronger here
   if(st.region === "east_coast") localScore -= 6; // Conservative parties stronger here
   
   // Calculate Parliament (PRU) seats won
   let won = Math.floor(st.seats * (clamp(localScore, 5, 80) / 100));
   if(Math.random() > 0.5 && won < st.seats) won++; // Marginal swing
   pSeats += won;
   state.electionMap[st.id] = { player: won, total: st.seats, winner: won > (st.seats/2) ? "player" : "rival" };

   // Assign remaining PRU seats to rivals
   let rem = st.seats - won;
   while(rem > 0) {
     let rIdx = pick([0,1,2,3]);
     if(st.region === "borneo" && Math.random() > 0.3) rIdx = 2; // Regional Alliance dominance in Borneo
     else if(st.region === "east_coast" && Math.random() > 0.5) rIdx = 1; // People's Welfare (Conservative) dominance in East Coast
     rSeats[rIdx]++; rem--;
   }

   // Calculate State Assembly (PRN) seats won (based on local PRU performance)
   let prnWon = Math.floor(st.prn * (clamp(localScore, 5, 80) / 100));
   pPRN += prnWon;
   state.prnMap[st.id] = { player: prnWon, total: st.prn, winner: prnWon > (st.prn/2) ? "player" : "rival" };

   // Assign remaining PRN seats
   let prnRem = st.prn - prnWon;
   while(prnRem > 0) {
     let rIdx = pick([0,1,2,3]);
     if(st.region === "borneo" && Math.random() > 0.3) rIdx = 2;
     else if(st.region === "east_coast" && Math.random() > 0.5) rIdx = 1;
     rPRN[rIdx]++; prnRem--;
   }
 });

 // Save Results
 const vote=clamp(score+rand(-4,4),5,70);
 state.playerSeats=pSeats; state.playerVote=vote;
 
 const rivals = rivalParties.map((r,i) => {
   const clone = {...r};
   clone.seats = rSeats[i];
   clone.prn = rPRN[i];
   return clone;
 });

 state.results=[{id:"player",name:state.party,color:"#d7b66d",seats:pSeats, prn:pPRN},...rivals];
 state.partners=rivals; state.selectedPartners=[]; state.phase="election"; showScreen("election");
}

function renderElection(){
 if(!state)return;
 $("player-seats").textContent=state.playerSeats;
 $("player-vote").textContent=Math.round(state.playerVote)+"%";
 $("majority-status").textContent=state.playerSeats>=112?(lang==="en"?"MAJORITY":"MAJORITI"):state.playerSeats>=80?(lang==="en"?"KINGMAKER":"PENENTU"):(lang==="en"?"MINORITY":"MINORITI");
 
 $("seat-bar").innerHTML=state.results.map(p=>`<i style="width:${p.seats/222*100}%;background:${p.color}"></i>`).join("");
 $("result-parties").innerHTML=state.results.map(p=>`<div class="result-party"><span>${p.name}</span><b>${p.seats}</b></div>`).join("");

 // RENDER THE PRU MAP
 const mapPru = $("malaysia-map-pru");
 if(mapPru) {
   mapPru.innerHTML = malaysiaStates.map(st => {
     let color = "#1a2639";
     let data = state.electionMap[st.id];
     if(data) {
       if(data.winner === "player") color = "#d7b66d";
       else color = rivalParties[0].color; // Just show blue for rivals on
