(() => {
"use strict";
const $ = id => document.getElementById(id);
const STORAGE_KEY = "peoplesMandateSave_v1";
const copy = { /* ... unchanged, paste your copy object here exactly ... */ };
// (copy object unchanged — keep your en/bm exactly as-is)

const regions = [{en:"Northern Peninsula",bm:"Semenanjung Utara",weight:34},{en:"Central Peninsula",bm:"Semenanjung Tengah",weight:42},{en:"Southern Peninsula",bm:"Semenanjung Selatan",weight:28},{en:"East Coast",bm:"Pantai Timur",weight:27},{en:"Sabah",bm:"Sabah",weight:25},{en:"Sarawak",bm:"Sarawak",weight:29},{en:"Federal Territories",bm:"Wilayah Persekutuan",weight:37}];
const rivalParties = [
 {id:"national",en:"National Stability Front",bm:"Barisan Kestabilan Nasional",color:"#7890ad",seats:0},
 {id:"people",en:"People's Welfare Party",bm:"Parti Kebajikan Rakyat",color:"#b87e72",seats:0},
 {id:"regional",en:"Regional Alliance",bm:"Gabungan Wilayah",color:"#7da994",seats:0},
 {id:"green",en:"Green Future Movement",bm:"Gerakan Masa Depan Hijau",color:"#a1a66e",seats:0}
];
const campaignActions = [ /* unchanged */ ];
const policies = [ /* unchanged */ ];
const events = [ /* unchanged */ ];
const govEvents = [ /* unchanged */ ];

let state=null, lang="en", soundOn=false, toastTimer;
const t=k=>copy[lang][k]||copy.en[k]||k;
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,v));
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const label=(arr)=>arr[lang==="en"?0:1];

function toast(message){
  const el=$("toast");
  if(!el) return;                       // FIX: guard missing toast element
  el.textContent=message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove("show"),2400);
}
function showScreen(name){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const target=$("screen-"+name);
  if(target) target.classList.add("active");   // FIX: guard
  window.scrollTo({top:0,behavior:"smooth"});
  render();
}
function applyLanguage(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(copy[lang]&&copy[lang][k]) el.innerHTML=copy[lang][k];
  });
  const lt=$("language-toggle"); if(lt) lt.textContent=lang==="en"?"BM":"EN";
  const bs=$("brand-subtitle"); if(bs) bs.textContent=lang==="en"?"A MALAYSIAN POLITICAL SIMULATION":"SIMULASI POLITIK MALAYSIA";
  if(state) render();
}
function createGame(form){
  const ideology=form.get("ideology"), difficulty=form.get("difficulty");
  state={
    phase:"campaign",
    party:(form.get("party-name")||"").trim()||"People's Reform Alliance",
    tagline:(form.get("party-tagline")||"").trim(),
    ideology, difficulty,
    week:1, actions:2,
    funds:difficulty==="easy"?115:difficulty==="hard"?82:100,
    support:25, trust:48,
    regions:regions.map(r=>({name:r.en,value:clamp(r.weight+(difficulty==="hard"?-5:difficulty==="easy"?5:0)+rand(-3,3))})),
    event:null, govEvent:null,                 // FIX: init govEvent
    playerSeats:0, playerVote:0, results:[], partners:[], selectedPartners:[], // FIX: init selectedPartners
    coalitionSeats:0,
    term:1, govActions:2,
    economy:52, approval:52, stability:55, govTrust:50, legacy:0
  };
  if(ideology==="Reformist") state.govTrust=clamp(state.govTrust+5);       // FIX: was state.trust+=5 (used campaign trust, not govTrust — keep intent but guard)
  if(ideology==="Social Democratic") state.approval=56;
  if(ideology==="Conservative") state.stability=59;
  showScreen("campaign");
  nextCampaignEvent();
}
function statCard(title,value,suffix=""){return `<div class="stat-card"><span>${title}</span><b>${Math.round(value)}<small>${suffix}</small></b></div>`}
function renderStats(govern=false){
  const el=$(govern?"govern-stats":"campaign-stats");
  if(!state||!el) return;                    // FIX: guard el
  el.innerHTML=govern
    ?[statCard(lang==="en"?"ECONOMIC HEALTH":"KESIHATAN EKONOMI",state.economy,"%"),statCard(lang==="en"?"PUBLIC APPROVAL":"KELULUSAN RAKYAT",state.approval,"%"),statCard(lang==="en"?"PUBLIC TRUST":"KEPERCAYAAN RAKYAT",state.govTrust,"%"),statCard(lang==="en"?"COALITION STABILITY":"KESTABILAN GABUNGAN",state.stability,"%")].join("")
    :[statCard(lang==="en"?"CAMPAIGN FUNDS":"DANA KEMPEN",state.funds,"M"),statCard(lang==="en"?"PUBLIC SUPPORT":"SOKONGAN RAKYAT",state.support,"%"),statCard(lang==="en"?"CREDIBILITY":"KREDIBILITI",state.trust,"%"),statCard(lang==="en"?"FIELD STRENGTH":"KEKUATAN LAPANGAN",Math.round(state.regions.reduce((a,r)=>a+r.value,0)/state.regions.length),"%")].join("");
}
function renderRegions(){
  const el=$("region-list"); if(!state||!el) return;   // FIX: guard
  el.innerHTML=state.regions.map(r=>{
    const meta=regions.find(x=>x.en===r.name);
    const nm=lang==="en"?r.name:(meta?meta.bm:r.name);
    return `<div class="region-item"><span>${nm}</span><b>${Math.round(r.value)}%</b><div class="region-track"><i class="${r.value<30?"low":r.value<50?"mid":""}" style="width:${r.value}%"></i></div></div>`;
  }).join("");
}
function nextCampaignEvent(){const e=pick(events);state.event={en:e.en,bm:e.bm,effect:e.effect};}
function nextGovEvent(){const e=pick(govEvents);state.govEvent={en:e.en,bm:e.bm,effect:e.effect};}

function renderCampaign(){
  if(!state) return;
  $("campaign-title").textContent=state.party;
  $("campaign-subtitle").textContent=state.tagline;
  $("week-number").textContent=`0${state.week} / 04`;
  $("actions-left").textContent=`${state.actions} ${t("actionsLeft")}`;
  renderStats(); renderRegions();
  $("action-grid").innerHTML=campaignActions.map(a=>
    `<button class="action-card" data-action="${a.id}" ${state.actions<=0||state.funds<a.cost?"disabled":""}><span class="action-icon">${a.icon}</span><b>${label(a.title)}</b><small>${label(a.desc)}</small><span class="cost">${lang==="en"?"COST":"KOS"} ${a.cost}M</span></button>`
  ).join("");
  $("campaign-event").innerHTML=`<span>${t("event")}</span><b>${state.event?state.event[lang]:""}</b><p>${lang==="en"?"Public attention can shift quickly. Your next decision matters.":"Perhatian rakyat boleh berubah dengan pantas. Keputusan seterusnya penting."}</p>`;
  document.querySelectorAll("[data-action]").forEach(b=>b.addEventListener("click",()=>campaignAction(b.dataset.action)));
}
function campaignAction(id){
  const a=campaignActions.find(x=>x.id===id);
  if(!a||state.actions<=0||state.funds<a.cost) return;
  state.funds-=a.cost; state.actions--;
  const e=a.effect;
  state.support=clamp(state.support+(e.support||0));
  state.trust=clamp(state.trust+(e.trust||0));
  if(e.regions) state.regions.forEach(r=>r.value=clamp(r.value+e.regions+rand(-1,1)));
  renderCampaign();
  toast(lang==="en"?"Campaign action completed.":"Tindakan kempen selesai.");
}
function endCampaignWeek(){
  if(state.actions>0){state.support=clamp(state.support+1);state.trust=clamp(state.trust+1)}
  if(state.event&&state.event.effect){
    const ef=state.event.effect;
    state.support=clamp(state.support+(ef.support||0));
    state.trust=clamp(state.trust+(ef.trust||0));
    if(ef.regions) state.regions.forEach(r=>r.value=clamp(r.value+(ef.regions||0))); // FIX: use actual value, not hardcoded -1
  }
  if(state.week>=4){runElection();return}
  state.week++; state.actions=2; state.funds+=12;
  nextCampaignEvent(); renderCampaign(); toast(t("weekDone"));
}
function runElection(){
  const totalWeight=state.regions.reduce((a,r)=>a+r.value,0)/state.regions.length;
  const ideologyBonus=state.ideology==="Centrist"?2:state.ideology==="Reformist"?1:0;
  const score=clamp(state.support*.48+state.trust*.18+totalWeight*.28+ideologyBonus+rand(-5,5),8,72);
  let playerSeats=Math.round(222*(score/100)*1.23);
  playerSeats=clamp(playerSeats,4,142);
  const remaining=222-playerSeats, weights=[34,27,21,18], sum=weights.reduce((a,b)=>a+b,0);
  const rivals=rivalParties.map((p,i)=>({...p,seats:Math.floor(remaining*weights[i]/sum)}));
  let distributed=playerSeats+rivals.reduce((a,p)=>a+p.seats,0);
  let idx=0;
  while(distributed<222){rivals[idx%4].seats++;distributed++;idx++}   // FIX: stable idx, not distributed%4
  const vote=clamp(score+rand(-4,4),5,70);
  state.playerSeats=playerSeats; state.playerVote=vote;
  state.results=[{id:"player",name:state.party,color:"#d7b66d",seats:playerSeats},...rivals];
  state.partners=rivals;
  state.selectedPartners=[];                 // FIX: reset on new election
  state.phase="election"; showScreen("election");
}
function renderElection(){
  if(!state) return;
  $("player-seats").textContent=state.playerSeats;
  $("player-vote").textContent=Math.round(state.playerVote)+"%";
  $("majority-status").textContent=state.playerSeats>=112?(lang==="en"?"MAJORITY":"MAJORITI"):state.playerSeats>=80?(lang==="en"?"KINGMAKER":"PENENTU"):(lang==="en"?"MINORITY":"MINORITI");
  $("seat-bar").innerHTML=state.results.map(p=>`<i style="width:${p.seats/222*100}%;background:${p.color}"></i>`).join("");
  $("result-parties").innerHTML=state.results.map(p=>`<div class="result-party"><span>${p.name}</span><b>${p.seats}</b></div>`).join("");
}
function renderCoalition(){
  if(!state) return;
  if(!Array.isArray(state.selectedPartners)) state.selectedPartners=[];   // FIX: crash guard
  $("coalition-own-seats").textContent=state.playerSeats;
  const chosen=state.selectedPartners;
  const total=state.playerSeats+state.partners.filter(p=>chosen.includes(p.id)).reduce((a,p)=>a+p.seats,0);
  state.coalitionSeats=total;
  $("coalition-total").textContent=`${total} / 112`;
  $("coalition-progress").style.width=Math.min(100,total/112*100)+"%";
  $("partner-list").innerHTML=state.partners.map(p=>
    `<label class="partner-row"><span><span class="partner-name">${lang==="en"?p.en:p.bm}</span><span class="partner-meta">${lang==="en"?"Potential coalition partner":"Rakan gabungan berpotensi"}</span></span><b class="partner-seats">${p.seats}</b><input type="checkbox" data-partner="${p.id}" ${chosen.includes(p.id)?"checked":""}></label>`
  ).join("");
  document.querySelectorAll("[data-partner]").forEach(c=>c.addEventListener("change",()=>{
    state.selectedPartners=Array.from(document.querySelectorAll("[data-partner]:checked")).map(x=>x.dataset.partner);
    renderCoalition();
  }));
  $("coalition-hint").textContent=total>=112?t("coalitionSuccess"):t("coalitionFailed");
}
function confirmCoalition(){
  if(state.coalitionSeats<112){toast(t("coalitionFailed"));return}
  state.phase="govern";
  state.stability=clamp(state.stability+rand(3,10));
  state.govTrust=state.trust;
  state.govActions=2;
  nextGovEvent();                               // FIX: seed first govern event
  showScreen("govern");
  toast(t("governmentFormed"));
}
function renderGovern(){
  if(!state) return;
  $("term-number").textContent=`0${state.term} / 04`;
  $("govern-actions-left").textContent=`${state.govActions} ${t("decisionLeft")}`;
  renderStats(true);
  $("policy-grid").innerHTML=policies.map(p=>
    `<button class="action-card" data-policy="${p.id}" ${state.govActions<=0?"disabled":""}><span class="action-icon">${p.icon}</span><b>${label(p.title)}</b><small>${label(p.desc)}</small><span class="cost">${lang==="en"?"CABINET DECISION":"KEPUTUSAN KABINET"}</span></button>`
  ).join("");
  document.querySelectorAll("[data-policy]").forEach(b=>b.addEventListener("click",()=>applyPolicy(b.dataset.policy)));
  const e=state.govEvent;
  $("govern-event").innerHTML=`<span>${t("governEvent")}</span><b>${e?e[lang]:""}</b><p>${lang==="en"?"Unexpected developments require leadership and compromise.":"Perkembangan tidak dijangka memerlukan kepimpinan dan kompromi."}</p>`;
  renderMood();
}
function renderMood(){
  const el=$("mood-list"); if(!state||!el) return;
  const metrics=[["ECONOMY","Ekonomi",state.economy],["PUBLIC APPROVAL","Kelulusan rakyat",state.approval],["INSTITUTIONAL TRUST","Kepercayaan institusi",state.govTrust],["COALITION STABILITY","Kestabilan gabungan",state.stability]];
  el.innerHTML=metrics.map(m=>`<div class="status-row"><div><span>${lang==="en"?m[0]:m[1]}</span><b>${Math.round(m[2])}%</b></div><div class="status-track"><i class="${m[2]<35?"danger":m[2]<50?"warn":""}" style="width:${m[2]}%"></i></div></div>`).join("");
}
function applyPolicy(id){
  if(state.govActions<=0) return;
  const p=policies.find(x=>x.id===id); if(!p) return;
  state.govActions--;
  Object.entries(p.effect).forEach(([k,v])=>{
    const key=k==="trust"?"govTrust":k;
    if(typeof state[key]==="number") state[key]=clamp(state[key]+v);   // FIX: guard unknown keys
  });
  renderGovern();
  toast(lang==="en"?"Policy decision recorded.":"Keputusan dasar direkodkan.");
}
function nextTerm(){
  const e=pick(govEvents);
  state.govEvent={en:e.en,bm:e.bm,effect:e.effect};                    // FIX: store effect too
  Object.entries(e.effect).forEach(([k,v])=>{
    const key=k==="trust"?"govTrust":k;
    if(typeof state[key]==="number") state[key]=clamp(state[key]+v);
  });
  state.term++;
  if(state.stability<18||state.approval<15||state.term>4){finishGame();return}
  state.govActions=2;
  renderGovern();
  toast(t("next"));
}
function finishGame(){
  state.legacy=Math.round((state.economy+state.approval+state.govTrust+state.stability)/4);
  const success=state.stability>=35&&state.approval>=30;
  $("ending-title").textContent=success?(lang==="en"?"A mandate remembered.":"Mandat yang dikenang."):(lang==="en"?"The mandate has fractured.":"Mandat telah retak.");
  $("ending-description").textContent=success?t("continueTerm"):t("governmentFell");
  $("legacy-score").textContent=String(state.legacy).padStart(3,"0");
  $("legacy-breakdown").textContent=t("scoreText");
  state.phase="ending";
  showScreen("ending");
}
function saveGame(){
  if(!state) return;
  try{ localStorage.setItem(STORAGE_KEY,JSON.stringify({state,lang})); toast(t("saved")); }
  catch(e){ toast("Could not save (storage full or blocked)."); }        // FIX: quota guard
}
function loadGame(){
  const raw=localStorage.getItem(STORAGE_KEY);
  if(!raw){toast(t("noSave"));return}
  try{
    const saved=JSON.parse(raw);
    if(!saved||!saved.state) throw new Error("bad save");
    state=saved.state;
    lang=saved.lang||lang;
    // FIX: backfill any fields older/missing saves lack
    if(!Array.isArray(state.selectedPartners)) state.selectedPartners=[];
    if(!Array.isArray(state.partners)) state.partners=[];
    if(!Array.isArray(state.results)) state.results=[];
    if(!state.govEvent) state.govEvent=null;
    if(typeof state.govActions!=="number") state.govActions=2;
    applyLanguage();
    showScreen(state.phase==="campaign"?"campaign":state.phase==="election"?"election":state.phase==="coalition"?"coalition":state.phase==="govern"?"govern":"ending");
    toast(t("saved"));
  }catch(e){ toast("Save data could not be loaded."); }
}
function render(){
  if(!state) return;
  if(state.phase==="campaign") renderCampaign();
  else if(state.phase==="election") renderElection();
  else if(state.phase==="coalition") renderCoalition();
  else if(state.phase==="govern") renderGovern();
  else if(state.phase==="ending") { /* content set by finishGame */ }
}

/* ---- event wiring (all guarded so a missing element can't crash the app) ---- */
const on=(id,ev,fn)=>{const el=$(id); if(el) el.addEventListener(ev,fn); else console.warn("Missing element:",id);};  // FIX

on("new-game-btn","click",()=>showScreen("setup"));
on("continue-btn","click",loadGame);
on("language-toggle","click",()=>{lang=lang==="en"?"bm":"en";applyLanguage()});
on("sound-toggle","click",()=>{soundOn=!soundOn;const s=$("sound-toggle");if(s)s.style.color=soundOn?"var(--gold)":"var(--cream)";toast(soundOn?"Sound indicator enabled.":"Sound indicator muted.")});
on("setup-form","submit",e=>{e.preventDefault();createGame(new FormData(e.currentTarget))});
on("next-week-btn","click",endCampaignWeek);
on("save-btn","click",saveGame);
on("save-btn-2","click",saveGame);
on("coalition-btn","click",()=>{state.phase="coalition";state.selectedPartners=[];showScreen("coalition")});
on("confirm-coalition","click",confirmCoalition);
on("next-term-btn","click",nextTerm);
on("restart-btn","click",()=>showScreen("setup"));
on("title-btn","click",()=>{state=null;showScreen("title")});

applyLanguage();
})();
