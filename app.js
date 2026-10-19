const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const subjects = [
["Accounting","Financial statements and analysis","Accounting records financial information to help people make informed decisions. Practise applying concepts to statements, calculations and interpretation."],
["Agricultural Sciences","Agricultural management","Agricultural Sciences studies production, management and the biological and physical systems involved in agriculture."],
["Afrikaans FAL","Leesbegrip en taal","Lees die vraag noukeurig, haal bewyse uit die teks en hersien woordsoorte, sinsbou en idiome."],
["Afrikaans HL","Taal en letterkunde","Bestudeer taalstrukture, genres, literary techniques and prescribed texts according to your school's syllabus."],
["Business Studies","Business environments","A business environment includes internal, market and macro environments that influence how a business operates."],
["Consumer Studies","Consumer choices","Consumer Studies explores informed decisions about food, clothing, housing and consumer responsibilities."],
["Dance Studies","Dance performance and theory","Revise dance terminology, technique, choreography and the prescribed theoretical content."],
["Dramatic Arts","Drama and performance","Study performance skills, dramatic elements, theatre history and prescribed works."],
["Economics","Markets and the economy","Economics examines how people, businesses and governments make choices about scarce resources."],
["English FAL","Comprehension and language","Read questions carefully, support answers with textual evidence and revise grammar, summary and visual literacy."],
["English HL","Literature and language","Revise prescribed literature, comprehension, summary, visual literacy and language structures."],
["Geography","Mapwork and climate","Geography links physical processes, human activity, maps, data and spatial patterns."],
["History","Source-based skills","Identify a source's message, origin, purpose and limitations; support interpretations with evidence."],
["Hospitality Studies","Food and hospitality","Revise food preparation, hygiene, nutrition, costing and hospitality operations."],
["Information Technology","Programming and systems","Practise programming logic, data management, networks and the prescribed theory."],
["Life Orientation","Well-being and society","Revise the prescribed content, decision-making, citizenship and assessment requirements."],
["Life Sciences","Cell biology and genetics","Connect biological structures and processes; practise labelled diagrams and application questions."],
["Mathematical Literacy","Finance and measurement","Identify the context, choose the correct method, show working and check units and reasonableness."],
["Mathematics","Functions and calculus","Practise mathematical methods step by step and check answers against the question's conditions."],
["Physical Sciences","Physics and chemistry","Learn concepts, practise equations and units, and show every calculation step."],
["Religion Studies","Religion and society","Compare religious perspectives fairly and support answers with relevant concepts and examples."],
["Visual Arts","Art interpretation","Revise visual analysis, context, terminology and prescribed practical or theoretical requirements."],
["CAT","Computer applications","Practise application features, document skills, spreadsheets, databases and theory."],
["Electrical Technology","Electrical systems","Revise circuit concepts, components, safety and calculations in your syllabus."],
["Engineering Graphics and Design","Technical drawing","Practise drawing conventions, projections, dimensions and accurate construction."],
["Mechanical Technology","Mechanical systems","Revise mechanisms, materials, tools, processes and technical calculations."],
["Music","Music theory","Practise notation, aural skills, analysis and prescribed repertoire."],
["IsiNdebele","Language skills","Practise comprehension, writing, grammar and literature prescribed for your level."],
["IsiXhosa","Ulwimi nezakhono","Ziqhelanise nokufunda, ukubhala, igrama noncwadi olufundiswayo."],
["IsiZulu","Ulimi nezincwadi","Zijwayeze ukuqonda okufundwayo, ukubhala, ulimi nezincwadi ezinqunyiwe."],
["Sepedi","Language and literature","Revise comprehension, writing, language structures and prescribed literature."],
["Sesotho","Puo le lingoliloeng","Itloaetse kutloisiso, ho ngola, melao ea puo le lingoliloeng tse behiloeng."],
["Setswana","Puo le dikwalo","Boeletsa tlhaloganyo, kwalo, popego ya puo le dikwalo tse di rutiwang."],
["Siswati","Language skills","Revise comprehension, writing, language structures and prescribed literature."],
["Tshivenda","Language and literature","Revise comprehension, writing, language structures and prescribed literature."],
["Other CAPS subjects","Check your school subject list","This catalogue is a starting point, not an official exhaustive DBE list. Tell us the subject to add its exact curriculum."]
];
const key = "matricmate-v1";
let state = load();
let selectedSubject = "Business Studies";
function load(){try{return JSON.parse(localStorage.getItem(key))||{grade:"Grade 12 / Matric",tasks:[]}}catch{return {grade:"Grade 12 / Matric",tasks:[]}}}
function save(){localStorage.setItem(key,JSON.stringify(state));}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.remove("hidden");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.add("hidden"),2300)}
function navigate(page){$$(".page").forEach(p=>p.classList.toggle("hidden",p.id!==`page-${page}`));$$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.page===page));window.scrollTo({top:0,behavior:"smooth"});if(page==="planner")renderTasks();if(page==="progress")renderProgress()}
$$(".tab").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.go)));
$("#grade").addEventListener("change",e=>{state.grade=e.target.value;save();toast("Grade saved on this device.");});
$("#today").textContent=new Intl.DateTimeFormat("en-ZA",{day:"numeric",month:"short",year:"numeric"}).format(new Date());
$("#grade").value=state.grade||"Grade 12 / Matric";
function renderSubjects(){
 const q=$("#subjectSearch").value.trim().toLowerCase();
 const filtered=subjects.filter(s=>s[0].toLowerCase().includes(q));
 $("#subjectList").innerHTML=filtered.map(s=>`<button class="subject-item ${s[0]===selectedSubject?"selected":""}" data-subject="${escapeHtml(s[0])}"><span>📘</span><span>${escapeHtml(s[0])}</span><span class="arrow">›</span></button>`).join("")||'<div class="empty">No subject found. Try another search.</div>';
 $$(".subject-item").forEach(b=>b.addEventListener("click",()=>{selectedSubject=b.dataset.subject;renderSubjects();renderDetail();}));
}
function renderDetail(){
 const s=subjects.find(s=>s[0]===selectedSubject);
 if(!s){$("#subjectDetail").innerHTML="<h3>Select a subject</h3>";return}
 $("#subjectDetail").innerHTML=`<p class="eyebrow">STARTER REVISION · ${escapeHtml(state.grade||"Grade 12 / Matric")}</p><h3>${escapeHtml(s[0])}</h3><p><b>Topic:</b> ${escapeHtml(s[1])}</p><div class="answer">${escapeHtml(s[2])}</div><p class="fineprint">This is a short starter explanation, not a complete or officially verified CAPS study pack. Check your current syllabus and teacher's notes.</p><button class="primary-btn" id="makeTask">Add revision goal</button>`;
 $("#makeTask").addEventListener("click",()=>{state.tasks.push({id:Date.now(),name:`Revise ${s[0]}: ${s[1]}`,date:"",done:false});save();renderTasks();toast("Revision goal added.");navigate("planner")});
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("#subjectSearch").addEventListener("input",renderSubjects);
$("#taskForm").addEventListener("submit",e=>{e.preventDefault();const name=$("#taskInput").value.trim();if(!name)return;state.tasks.push({id:Date.now(),name,date:$("#taskDate").value,done:false});save();$("#taskInput").value="";renderTasks();toast("Study goal saved.");});
function renderTasks(){
 const tasks=state.tasks;
 $("#taskList").innerHTML=tasks.length?tasks.map(t=>`<div class="task"><input type="checkbox" data-check="${t.id}" ${t.done?"checked":""} aria-label="Mark ${escapeHtml(t.name)} complete"><div class="task-copy ${t.done?"done":""}">${escapeHtml(t.name)}${t.date?`<span class="task-date">Target: ${escapeHtml(t.date)}</span>`:""}</div><button class="delete-task" data-delete="${t.id}" aria-label="Delete goal">×</button></div>`).join(""):'<div class="empty">No goals yet. Add one small task to get started.</div>';
 $$("[data-check]").forEach(el=>el.addEventListener("change",()=>{const t=state.tasks.find(t=>t.id===Number(el.dataset.check));if(t)t.done=el.checked;save();renderTasks();}));
 $$("[data-delete]").forEach(el=>el.addEventListener("click",()=>{state.tasks=state.tasks.filter(t=>t.id!==Number(el.dataset.delete));save();renderTasks();}));
 const done=tasks.filter(t=>t.done).length,rate=tasks.length?Math.round(done/tasks.length*100):0;
 $("#taskBar").style.width=rate+"%";$("#taskSummary").textContent=`${done} of ${tasks.length} goals completed · ${rate}%`;
}
function renderProgress(){const done=state.tasks.filter(t=>t.done).length,total=state.tasks.length;$("#statDone").textContent=done;$("#statTotal").textContent=total;$("#statRate").textContent=(total?Math.round(done/total*100):0)+"%";}
$("#resetBtn").addEventListener("click",()=>{if(confirm("Delete all study goals saved on this device? This cannot be undone.")){state.tasks=[];save();renderProgress();toast("Study goals cleared.");}});
renderSubjects();renderDetail();renderTasks();
let installPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("#installBtn").classList.remove("hidden")});
$("#installBtn").addEventListener("click",async()=>{if(!installPrompt){toast("Open the hosted app in your browser menu to check install options.");return}installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("#installBtn").classList.add("hidden")});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
