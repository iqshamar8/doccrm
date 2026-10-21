const projects = [{title:"Brand Refresh", category:"Branding", year:2026, img:"https://picsum.photos/seed/brand/600/400", desc:"Visual identity for a modern tech startup.", url:""},{title:"Social Campaign", category:"Social Media", year:2026, img:"https://picsum.photos/seed/social/600/400", desc:"Instagram and TikTok content series.", url:""}];
const categories = ["All","Branding","Social Media","Motion","Video"];
let filter="All";

function render() {
  document.getElementById('filters').innerHTML = categories.map(c=>'<button class="'+(c===filter?'active':'')+'" onclick="setFilter(\''+c+'\')">'+c+'</button>').join('');
  const list = filter==="All"?projects:projects.filter(p=>p.category===filter);
  document.getElementById('project-grid').innerHTML = list.map(p=>'<div class="project-card" onclick="openProject('+projects.indexOf(p)+')"><img class="project-img" src="'+p.img+'" alt=""><div class="project-info"><span class="project-category">'+p.category+'</span><h3 class="project-title">'+p.title+'</h3><span class="project-year">'+p.year+'</span></div></div>').join('');
}
function setFilter(c){filter=c;render();}
function showAll(){filter="All";render();}
function openProject(i){
  const p=projects[i]; document.getElementById('m-title').textContent=p.title; document.getElementById('m-img').src=p.img; document.getElementById('m-desc').textContent=p.desc; document.getElementById('m-link').href=p.url||"#"; document.getElementById('modal').style.display='flex';
}
function closeModal(){document.getElementById('modal').style.display='none';}
function toggleTheme(){document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');}
function toggleMobile(){document.querySelector('.nav-links').classList.toggle('show');}
function submitContact(f){const btn=f.querySelector('button');btn.textContent='Sent';btn.disabled=true;setTimeout(()=>{btn.textContent='Send';btn.disabled=false;f.reset();},2000);return false;}
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
document.getElementById('yr').textContent=new Date().getFullYear();
if(localStorage.getItem('theme')==='light') document.body.classList.add('light');
render();
