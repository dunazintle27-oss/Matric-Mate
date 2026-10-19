const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const subjects = [
["Accounting","Financial statements and analysis","Accounting records financial information to help people make informed decisions."],
["Agricultural Sciences","Agricultural management","Agricultural Sciences studies production, management and the biological and physical systems involved in agriculture."],
["Afrikaans FAL","Leesbegrip en taal","Lees die vraag noukeurig, haal bewyse uit die teks en hersien woordsoorte, sinsbou en idiome."],
["Afrikaans HL","Taal en letterkunde","Bestudeer taalstrukture, genres en voorgeskrewe tekste volgens jou skool se sillabus."],
["Business Studies","Business environments","A business environment includes internal, market and macro environments that influence how a business operates."],
["Consumer Studies","Consumer choices","Consumer Studies explores informed decisions about food, clothing, housing and consumer responsibilities."],
["Dance Studies","Dance performance and theory","Revise dance terminology, technique, choreography and prescribed theory."],
["Dramatic Arts","Drama and performance","Study performance skills, dramatic elements, theatre history and prescribed works."],
["Economics","Markets and the economy","Economics examines how people, businesses and governments make choices about scarce resources."],
["English FAL","Comprehension and language","Read questions carefully, support answers with textual evidence and revise grammar, summary and visual literacy."],
["English HL","Literature and language","Revise prescribed literature, comprehension, summary, visual literacy and language structures."],
["Geography","Mapwork and climate","Geography links physical processes, human activity, maps, data and spatial patterns."],
["History","Source-based skills","Identify a source's message, origin, purpose and limitations; support interpretations with evidence."],
["Hospitality Studies","Food and hospitality","Revise food preparation, hygiene, nutrition, costing and hospitality operations."],
["Information Technology","Programming and systems","Practise programming logic, data management, networks and prescribed theory."],
["Life Orientation","Well-being and society","Revise prescribed content, decision-making, citizenship and assessment requirements."],
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
["IsiNdebele","Language skills","Practise comprehension, writing, grammar and prescribed literature."],
["IsiXhosa","Ulwimi nezakhono","Ziqhelanise nokufunda, ukubhala, igrama noncwadi olufundiswayo."],
["IsiZulu","Ulimi nezincwadi","Zijwayeze ukuqonda okufundwayo, ukubhala, ulimi nezincwadi ezinqunyiwe."],
["Sepedi","Language and literature","Revise comprehension, writing, language structures and prescribed literature."],
["Sesotho","Puo le lingoliloeng","Itloaetse kutloisiso, ho ngola, melao ea puo le lingoliloeng tse behiloeng."],
["Setswana","Puo le dikwalo","Boeletsa tlhaloganyo, kwalo, popego ya puo le dikwalo tse di rutiwang."],
["Siswati","Language skills","Revise comprehension, writing, language structures and prescribed literature."],
["Tshivenda","Language and literature","Revise comprehension, writing, language structures and prescribed literature."],
["Other CAPS subjects","Check your school subject list","This catalogue is a starting point, not an official exhaustive DBE list. Tell us the subject to add its exact curriculum."]
];
const resourcePacks = {
"Business Studies":{
notes:[
["Business environments","Internal environment: factors inside the business that management can usually influence, such as staff, policies and resources. Market environment: customers, suppliers and competitors. Macro environment: wider forces such as economic, social, technological, political and legal changes; a business has limited control over these."],
["SWOT analysis","Strengths and weaknesses are internal factors. Opportunities and threats are external factors. A useful SWOT point must be specific to the business and linked to a possible strategy."],
["Business strategies","A strategy is a planned action to reach a goal. Typical steps: identify the challenge, analyse information, generate alternatives, evaluate options, choose and implement a plan, then monitor results."],
["Quality of performance","Quality management involves planning standards, checking processes, correcting problems and improving continuously. Explain how the practice improves customer satisfaction, productivity or costs."],
["Exam technique","For a 2-mark question, give two distinct facts or a fact and explanation if asked. For 'discuss' or 'evaluate', develop points and make a reasoned judgement. Use the case-study facts rather than writing only generic theory."]
],
cards:[
["What is the internal business environment?","Factors inside a business that management can generally influence."],
["What does SWOT stand for?","Strengths, Weaknesses, Opportunities and Threats."],
["Which SWOT elements are internal?","Strengths and weaknesses."],
["Which SWOT elements are external?","Opportunities and threats."],
["What is a business strategy?","A planned course of action used to achieve a business goal."],
["Why monitor a strategy after implementation?","To check whether it is working and make corrections where needed."]
],
quiz:[
["Customers, suppliers and competitors are mainly part of which environment?","Market environment"],
["In SWOT, a new market trend is usually a…","Opportunity"],
["Name one reason to evaluate alternative strategies.","To compare costs, benefits, risks or feasibility before choosing."]
]},
"History":{
notes:[
["Source-based questions","Read the source closely. Identify its main message, then support your answer with specific evidence from the source. If asked about origin, consider who created it, when, and what kind of source it is."],
["Reliability and usefulness","A source may be useful for one question but limited for another. Consider the creator's position, purpose, audience, context, bias and corroboration with other sources."],
["Compare sources","State one clear similarity or difference, then give evidence from both sources. Do not simply summarise Source A and then Source B."],
["Essay structure","Introduction: answer the question and state your line of argument. Body: organise paragraphs by themes or chronology, using evidence and explanation. Conclusion: directly answer the question without introducing new evidence."],
["Command words","Identify/name: give the fact. Explain: show how or why. Compare: similarities and/or differences. Evaluate: weigh evidence and reach a supported judgement."]
],
cards:[
["What is corroboration?","Checking one source against another to see whether evidence supports or contradicts it."],
["What does bias mean in source analysis?","A perspective or preference that may shape how information is presented."],
["What should a good source-based answer include?","A direct answer and relevant evidence from the source, with explanation where required."],
["What belongs in an essay introduction?","A response to the question and a clear line of argument."],
["What does 'evaluate' ask you to do?","Weigh evidence or arguments and reach a supported judgement."]
],
quiz:[
["A source creator's reason for producing a source is its…","Purpose"],
["When comparing sources, should you use evidence from both?","Yes"],
["Name one limitation to consider when judging a source.","Bias, purpose, audience, context, origin or lack of corroboration."]
]},
"Life Sciences":{
notes:[
["DNA and genes","DNA stores hereditary information. A gene is a section of DNA associated with a functional product or trait. Different forms of a gene are called alleles."],
["Mitosis","Mitosis produces two genetically identical daughter cells with the same chromosome number as the parent cell. It supports growth, repair and replacement of cells."],
["Meiosis","Meiosis produces haploid cells for sexual reproduction. It reduces chromosome number by half and creates genetic variation through processes such as crossing over and independent assortment."],
["Natural selection","Individuals in a population vary. Some inherited variations improve survival and reproductive success in a particular environment. Those individuals are more likely to pass on the alleles, so allele frequencies can change over generations."],
["Exam technique","Use correct biological terms, label diagrams clearly, compare processes in a table when useful, and link each answer to the question's context."]
],
cards:[
["What is an allele?","An alternative form of a gene."],
["What is the result of mitosis?","Two genetically identical daughter cells with the same chromosome number as the parent cell."],
["Why is meiosis important?","It produces haploid cells and contributes to genetic variation."],
["What is natural selection?","A process in which inherited variations that improve reproductive success become more common over generations."],
["What does haploid mean?","Having one set of chromosomes."]
],
quiz:[
["Which process produces two genetically identical daughter cells?","Mitosis"],
["Does meiosis halve the chromosome number?","Yes"],
["What provides the heritable variation on which natural selection acts?","Genetic variation"]
]},
"Mathematical Literacy":{
notes:[
["Read the context first","Identify what is being asked, list the given values, check units and decide which operation or formula fits the situation."],
["Percentages","Percentage = (part ÷ whole) × 100. To find a percentage of an amount, multiply the amount by the percentage written as a decimal. For example, 15% of R200 = 0.15 × 200 = R30."],
["VAT and discounts","For an increase of 15%, multiply by 1.15. For a discount of 15%, multiply by 0.85. Check whether the question asks for the amount of the change or the final price."],
["Scale and maps","Keep units consistent. A scale of 1:50 000 means 1 unit on the map represents 50 000 of the same units in reality. Convert centimetres, metres and kilometres carefully."],
["Financial questions","Show the formula, substitute values, calculate and include the correct unit or currency. Check whether interest is simple or compound and whether payments are monthly or annual."]
],
cards:[
["How do you calculate a percentage?","(Part ÷ whole) × 100."],
["What multiplier gives a 15% increase?","1.15"],
["What multiplier gives a 15% discount?","0.85"],
["What does a map scale of 1:50 000 mean?","One unit on the map represents 50 000 of the same units in reality."],
["Why should you write units in your final answer?","To show what the answer measures and avoid losing marks."]
],
quiz:[
["Calculate 10% of R350.","R35"],
["A R200 item is discounted by 25%. What is the final price?","R150"],
["A distance is 3 cm on a 1:100 000 map. What is the real distance?","3 km"]
]},
"English HL":{
notes:[
["Comprehension","Answer the exact question, use your own words when requested, and support inferences with evidence from the passage. Do not copy a whole paragraph for a short answer."],
["Summary writing","Select only the main points, keep within the word limit, avoid examples and repetition, and use your own wording unless direct quotation is required."],
["Visual literacy","For advertisements, cartoons and photographs, analyse how words, layout, facial expressions, symbolism, contrast and audience work together to create meaning."],
["Poetry analysis","Discuss the speaker, tone, imagery, diction, structure and sound devices. Explain the effect of a technique rather than only naming it."],
["Language editing","Check agreement, tense, punctuation, sentence structure, word choice and spelling. Read the full sentence to see how the correction affects meaning."]
],
cards:[
["What is an inference?","A conclusion drawn from clues or evidence rather than stated directly."],
["What should you do after naming a literary device?","Explain its effect or meaning in context."],
["What is tone?","The speaker or writer's attitude conveyed through language."],
["What is the main rule for a summary?","Include only key points in your own words and obey the word limit."],
["What should visual analysis explain?","How visual and written choices create meaning for an audience."]
],
quiz:[
["A comparison using 'like' or 'as' is usually a…","Simile"],
["What is the writer's purpose?","The reason the writer created the text."],
["Should a summary include every example from the passage?","No"]
]},
"Afrikaans FAL":{
notes:[
["Leesbegrip","Lees die vrae voor en ná die teks. Soek sleutelwoorde, antwoord presies en gebruik bewyse uit die teks. Let op of die vraag jou eie woorde vereis."],
["Opsomming","Kies slegs hoofgedagtes, skryf bondig in jou eie woorde en hou by die woordlimiet. Moenie voorbeelde of herhaling insluit nie."],
["Woordsoorte","Selfstandige naamwoord: benoem iets. Werkwoord: dui handeling of toestand aan. Byvoeglike naamwoord: beskryf 'n naamwoord. Bywoord: beskryf dikwels 'n werkwoord, byvoeglike naamwoord of ander bywoord."],
["Sinstrukture","Let op woordorde, tydsvorme, ontkenning en voegwoorde. Herskryf die hele sin en kontroleer dat die betekenis behoue bly."],
["Eksamenwenk","Lees die opdragwoord noukeurig: noem, verduidelik, haal aan of motiveer vereis verskillende soorte antwoorde."]
],
cards:[
["Wat is 'n werkwoord?","'n Woord wat 'n handeling of toestand aandui."],
["Wat is 'n byvoeglike naamwoord?","'n Woord wat 'n selfstandige naamwoord beskryf."],
["Wat moet jy in 'n opsomming insluit?","Slegs die belangrikste hoofgedagtes, bondig en in jou eie woorde."],
["Wat beteken 'motiveer'?","Gee 'n rede of bewys vir jou antwoord."],
["Hoekom moet jy die woordlimiet volg?","Omdat bondigheid deel van die taak en assessering is."]
],
quiz:[
["Vertaal: 'werkwoord'.","Verb"],
["Moet 'n opsomming onnodige voorbeelde bevat?","Nee"],
["Wat doen jy wanneer 'n vraag sê 'haal aan'?","Haal die relevante woorde presies uit die teks aan."]
]},
"Religion Studies":{
notes:[
["Religion and belief","Study how religions understand beliefs, practices, sacred texts, communities and ethical questions. Describe traditions accurately and avoid treating all members of a religion as identical."],
["Compare perspectives","Identify a shared issue, explain each perspective fairly, then state similarities and differences with relevant examples."],
["Religion in society","Consider how religion can influence identity, community, ethics, culture and public life. Use specific examples and distinguish evidence from personal opinion."],
["Exam responses","Define key concepts, answer the exact command word, support points with examples and explain why the examples matter."],
["Respectful analysis","Use neutral, accurate language. Avoid stereotypes and acknowledge diversity within religious traditions."]
],
cards:[
["What is a worldview?","A broad set of beliefs and assumptions through which a person understands life and the world."],
["How should you compare religious perspectives?","Explain each fairly, then identify similarities and differences with examples."],
["Why are examples useful in an essay?","They support and clarify the point being made."],
["Should a religion be described as if every follower believes exactly the same thing?","No; acknowledge diversity within traditions."]
],
quiz:[
["What does it mean to analyse?","Examine parts and explain how they relate to the issue."],
["Should evidence and personal opinion be clearly distinguished?","Yes"],
["Name one area religion may influence in society.","Identity, ethics, community, culture or public life."]
]}
};
function getPack(name){
 if(resourcePacks[name]) return resourcePacks[name];
 const s=subjects.find(x=>x[0]===name);
 return {notes:[["Starter overview",s?s[2]:"Check your current CAPS subject guide and teacher's notes."],["How to revise","Turn each syllabus heading into a question. Read a short section, close your notes, explain it from memory, then check what you missed."],["Exam practice","Practise questions using the command word, show your working where relevant, and mark your answers against a reliable memo or teacher guidance."]],cards:[["What should you do first when revising?", "Choose one specific syllabus topic and a clear goal."],["Why use active recall?","It makes you retrieve information from memory rather than only rereading."],["How should you check exam answers?","Use a reliable memo, textbook or teacher feedback."]],quiz:[["What is a good revision goal?","A specific topic or skill that can be practised and checked."]]};
}
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
 const pack=getPack(s[0]);
 $("#subjectDetail").innerHTML=`<p class="eyebrow">REVISION RESOURCES · ${escapeHtml(state.grade||"Grade 12 / Matric")}</p><h3>${escapeHtml(s[0])}</h3><p><b>Topic:</b> ${escapeHtml(s[1])}</p>
 <div class="resource-tabs" role="tablist"><button class="resource-tab active" data-resource="notes">Notes</button><button class="resource-tab" data-resource="cards">Flashcards</button><button class="resource-tab" data-resource="quiz">Quick quiz</button></div>
 <div id="resourceContent"></div>
 <p class="fineprint">Starter study content for practice, not an official or exhaustive DBE resource pack. Confirm syllabus details with your teacher and current CAPS/DBE material.</p>
 <button class="primary-btn" id="makeTask">Add revision goal</button>`;
 function showResource(which){
  $$(".resource-tab").forEach(b=>b.classList.toggle("active",b.dataset.resource===which));
  const root=$("#resourceContent");
  if(which==="notes"){
   root.innerHTML=pack.notes.map((n,i)=>`<article class="resource-card"><h4>${i+1}. ${escapeHtml(n[0])}</h4><p>${escapeHtml(n[1])}</p></article>`).join("");
  } else if(which==="cards"){
   let i=0;
   root.innerHTML=`<article class="resource-card flashcard"><p class="eyebrow" id="cardCount">CARD 1 OF ${pack.cards.length}</p><h4 id="cardQuestion">${escapeHtml(pack.cards[0][0])}</h4><div id="cardAnswer" class="hidden answer">${escapeHtml(pack.cards[0][1])}</div><button class="secondary-btn" id="flipCard">Show answer</button><div class="resource-actions"><button class="secondary-btn" id="prevCard">Previous</button><button class="secondary-btn" id="nextCard">Next</button></div></article>`;
   let flipped=false;
   const draw=()=>{$("#cardCount").textContent=`CARD ${i+1} OF ${pack.cards.length}`;$("#cardQuestion").textContent=pack.cards[i][0];$("#cardAnswer").textContent=pack.cards[i][1];$("#cardAnswer").classList.toggle("hidden",!flipped);$("#flipCard").textContent=flipped?"Hide answer":"Show answer"};
   $("#flipCard").onclick=()=>{flipped=!flipped;draw()};
   $("#prevCard").onclick=()=>{i=(i-1+pack.cards.length)%pack.cards.length;flipped=false;draw()};
   $("#nextCard").onclick=()=>{i=(i+1)%pack.cards.length;flipped=false;draw()};
  } else {
   let i=0,score=0,answered=false;
   root.innerHTML=`<article class="resource-card"><p class="eyebrow" id="quizCount"></p><h4 id="quizQuestion"></h4><input id="quizAnswer" class="quiz-input" placeholder="Type your answer"><button class="primary-btn" id="checkAnswer">Check answer</button><p id="quizFeedback" aria-live="polite"></p><button class="secondary-btn hidden" id="nextQuestion">Next question</button></article>`;
   const draw=()=>{$("#quizCount").textContent=`QUESTION ${i+1} OF ${pack.quiz.length}`;$("#quizQuestion").textContent=pack.quiz[i][0];$("#quizAnswer").value="";$("#quizAnswer").disabled=false;$("#quizFeedback").textContent="";$("#checkAnswer").classList.remove("hidden");$("#nextQuestion").classList.add("hidden");answered=false};
   $("#checkAnswer").onclick=()=>{if(answered)return;const answer=$("#quizAnswer").value.trim();if(!answer){$("#quizFeedback").textContent="Type an answer first.";return}answered=true;const correct=pack.quiz[i][1];const ok=answer.toLowerCase().replace(/[.!?]/g,"")===correct.toLowerCase().replace(/[.!?]/g,"");if(ok)score++;$("#quizFeedback").textContent=(ok?"Correct! ":"Good try. Suggested answer: ")+correct;$("#quizAnswer").disabled=true;$("#checkAnswer").classList.add("hidden");$("#nextQuestion").classList.remove("hidden");$("#nextQuestion").textContent=i===pack.quiz.length-1?`Finish · Score ${score}/${pack.quiz.length}`:"Next question"};
   $("#nextQuestion").onclick=()=>{if(i<pack.quiz.length-1){i++;draw()}else{$("#resourceContent").innerHTML=`<article class="resource-card"><h4>Quiz complete!</h4><p>Your score: ${score}/${pack.quiz.length}</p><button class="secondary-btn" id="retryQuiz">Try again</button></article>`;$("#retryQuiz").onclick=()=>showResource("quiz")}};
   draw();
  }
 }
 $$(".resource-tab").forEach(b=>b.addEventListener("click",()=>showResource(b.dataset.resource)));
 showResource("notes");
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
