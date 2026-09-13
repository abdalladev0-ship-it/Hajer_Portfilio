const themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("hajer-theme");
if(saved==="light")document.body.classList.add("light");
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("hajer-theme",document.body.classList.contains("light")?"light":"dark")});

document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";
});
