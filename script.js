document.addEventListener('DOMContentLoaded', function(){
  const filters=document.querySelectorAll('.filter');
  const cards=document.querySelectorAll('.product-card');
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    cards.forEach(card=>card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter));
  }));

  document.querySelectorAll('[data-category-link]').forEach(link=>link.addEventListener('click',()=>{
    const filter=link.dataset.categoryLink;
    const target=document.querySelector('.filter[data-filter="'+filter+'"]');
    if(target) target.click();
  }));

  const finishName=document.getElementById('finishName');
  const previewFinish=document.getElementById('previewFinish');
  document.querySelectorAll('.swatch').forEach(s=>s.addEventListener('click',()=>{
    document.querySelectorAll('.swatch').forEach(x=>x.classList.remove('active'));
    s.classList.add('active');
    finishName.textContent=s.dataset.finish;
    previewFinish.textContent=s.dataset.finish;
    const color=getComputedStyle(s).getPropertyValue('--swatch').trim();
    document.querySelector('.preview-metal').style.background='radial-gradient(circle at 30% 25%, #f1d0a8, '+color+' 48%, #211813 100%)';
  }));

  const handleName=document.getElementById('handleName');
  const previewHandle=document.getElementById('previewHandle');
  document.querySelectorAll('.handle').forEach(h=>h.addEventListener('click',()=>{
    document.querySelectorAll('.handle').forEach(x=>x.classList.remove('active'));
    h.classList.add('active');
    handleName.textContent=h.dataset.handle;
    previewHandle.textContent=h.dataset.handle;
  }));

  document.querySelectorAll('.inquiry-link').forEach(link=>link.addEventListener('click',()=>{
    const product=link.dataset.product||'';
    const mail=document.querySelector('.cta-actions a.btn-primary');
    if(mail) mail.href='mailto:h.suppot@gmail.com?subject='+encodeURIComponent('Demande de projet — '+product);
  }));

  const sections=[...document.querySelectorAll('main section[id]')];
  const navLinks=[...document.querySelectorAll('nav.links a')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));
    }),{rootMargin:'-35% 0px -55% 0px',threshold:0});
    sections.forEach(section=>observer.observe(section));
  }
});
