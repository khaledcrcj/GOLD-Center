
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('primaryNav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.submenu-toggle').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault(); e.stopPropagation();
    const item=btn.closest('.has-menu'); const open=item.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
});
document.addEventListener('click',(e)=>{
  if(!e.target.closest('.has-menu')) document.querySelectorAll('.has-menu.open').forEach(i=>{i.classList.remove('open'); const b=i.querySelector('.submenu-toggle'); if(b)b.setAttribute('aria-expanded','false');});
});
