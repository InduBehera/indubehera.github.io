const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("visible")})},{threshold:.07});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
function toggleBM(c){c.classList.toggle("open")}
function toggleCS(h){const c=h.parentElement;const o=c.classList.contains("open");document.querySelectorAll(".cs-card.open").forEach(x=>x.classList.remove("open"));if(!o)c.classList.add("open")}
function openUC(i){const m=document.getElementById("ucModal");document.querySelectorAll(".uc-modal-content").forEach((c,j)=>c.classList.toggle("show",j===i));m.classList.add("open");document.body.classList.add("no-scroll")}
function closeUC(e){if(e&&e.target&&!e.target.classList.contains("uc-modal")&&e.target.tagName!=="BUTTON")return;document.getElementById("ucModal").classList.remove("open");document.body.classList.remove("no-scroll")}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeUC()});
document.querySelectorAll(".uc-card").forEach((c,i)=>c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openUC(i)}}));
