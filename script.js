/* ========= PROJECT DATA (same structure; add your images/videos) ========= */
const PROJECTS = {
  'character-design': {
    title: 'CHARACTER DESIGN',
    description: 'Creating original characters, focusing on personality, anatomy, costumes, and style.',
    media: [
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' }
    ]
  },
  'environment-design': {
    title: 'ENVIRONMENT DESIGN',
    description: 'Designing backgrounds, landscapes, interiors, and worlds where stories take place.',
    media: [
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' }
    ]
  },
  'creature-design': {
    title: 'CREATURE DESIGN',
    description: 'Imaginary animals and fantasy beasts.',
    media: [
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' }
    ]
  },
  'prop-design': {
    title: 'PROP DESIGN',
    description: 'Objects and gadgets used by characters.',
    media: [
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' }
    ]
  },
  'vehicle-design': {
    title: 'VEHICLE DESIGN',
    description: 'Cars, spaceships, boats, or fantasy vehicles.',
    media: [
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' }
    ]
  },
  'animation': {
    title: 'ANIMATION',
    description: 'Dynamic animations and motion graphics.',
    media: [
      { type: 'video', src: 'videos/animation-demo.mp4', poster: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'video', src: 'videos/motion-graphics.mp4', poster: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' }
    ]
  },
  'storyboard-art': {
    title: 'STORYBOARD ART',
    description: 'Sequential panels to visualize scenes.',
    media: [
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/study-1.jpg' }
    ]
  },
  'visual-development': {
    title: 'VISUAL DEVELOPMENT',
    description: 'Mood, lighting, and style.',
    media: [
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' }
    ]
  },
  'illustration': {
    title: 'ILLUSTRATION',
    description: 'Detailed artworks for storytelling.',
    media: [
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' }
    ]
  },
  'concept-art': {
    title: 'CONCEPT ART',
    description: 'Early visual exploration.',
    media: [
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' }
    ]
  },
  
  'ui-ux-design': {
    title: 'UI/UX DESIGN',
    description: 'Interfaces and icons.',
    media: [
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' }
    ]
  },
  
  
  
};

let currentProjectKey = '';
let currentIndex = 0;

/* ===== Nav (mobile) ===== */
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
hamburger?.addEventListener('click',()=>{hamburger.classList.toggle('active');navMenu.classList.toggle('active')});
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{navMenu?.classList.remove('active');hamburger?.classList.remove('active')}));

/* ===== Hero dummy slider dots ===== */
const heroImg = document.querySelector('.hero-bg-img');
const heroImages = ['image/artAmaze-Banner.png','image/artAmaze-Banner.png','image/artAmaze-Banner.png','image/artAmaze-Banner.png','image/artAmaze-Banner.png'];
const dots = document.querySelectorAll('.dot');
let currentSlide = 0, slideInterval;
function setHero(i){currentSlide=i%heroImages.length;dots.forEach(d=>d.classList.remove('active'));dots[currentSlide]?.classList.add('active'); if(heroImg) heroImg.src=heroImages[currentSlide]}
function startSlideshow(){slideInterval=setInterval(()=>setHero((currentSlide+1)%heroImages.length),5000)}
function stopSlideshow(){if(slideInterval) clearInterval(slideInterval)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{stopSlideshow();setHero(i);startSlideshow()}));
if(heroImg && dots.length) startSlideshow();

/* ===== Build Grid (uniform squares) ===== */
const grid = document.getElementById('grid');
Object.keys(PROJECTS).forEach(key=>{
  const p = PROJECTS[key];
  // first media as thumbnail (poster if video)
  const thumb = p.media[0].poster || p.media[0].src;
  const card = document.createElement('div');
  card.className='grid-card';
  card.innerHTML = `
    <img class="thumbnail" src="${thumb}" alt="${p.title}">
    <div class="wrapper">
      <div class="project-title">
        <h2>${p.title}</h2>
        <h3>&mdash; view &mdash;</h3>
      </div>
    </div>`;
  card.addEventListener('click',()=>openLightbox(key,0));
  grid.appendChild(card);
});

/* ===== Lightbox Controls ===== */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-image');
const lbVideo = document.getElementById('lb-video');
const lbVideoSrc = document.getElementById('lb-video-src');
const lbTitle = document.getElementById('lb-title');
const lbDesc = document.getElementById('lb-desc');
const lbCounter = document.getElementById('lb-counter');
const btnPrev = document.querySelector('.lb-prev');
const btnNext = document.querySelector('.lb-next');
const btnClose = document.querySelector('.lb-close');

function openLightbox(projectKey, startIndex=0){
  currentProjectKey = projectKey;
  currentIndex = startIndex;
  const p = PROJECTS[projectKey];
  lbTitle.textContent = p.title;
  lbDesc.textContent = p.description;
  lb.classList.add('show');
  document.body.style.overflow='hidden';
  loadMedia();
}
function closeLightbox(){
  lb.classList.remove('show');
  document.body.style.overflow='';
  // stop video when closing
  if(!lbVideo.paused){lbVideo.pause();}
}
function loadMedia(){
  const p = PROJECTS[currentProjectKey];
  const m = p.media[currentIndex];
  lbCounter.textContent = `${currentIndex+1} / ${p.media.length}`;
  if(m.type==='video'){
    lbImg.style.display='none';
    lbVideo.style.display='block';
    lbVideoSrc.src = m.src;
    lbVideo.poster = m.poster || '';
    lbVideo.load();
    lbVideo.play().catch(()=>{});
  }else{
    lbVideo.pause();
    lbVideo.style.display='none';
    lbImg.style.display='block';
    lbImg.src = m.src;
    lbImg.alt = `${p.title} ${currentIndex+1}`;
  }
}
function nextMedia(){
  const total = PROJECTS[currentProjectKey].media.length;
  currentIndex = (currentIndex+1)%total;
  loadMedia();
}
function prevMedia(){
  const total = PROJECTS[currentProjectKey].media.length;
  currentIndex = (currentIndex-1+total)%total;
  loadMedia();
}

/* events */
btnNext.addEventListener('click',nextMedia);
btnPrev.addEventListener('click',prevMedia);
btnClose.addEventListener('click',closeLightbox);
lb.addEventListener('click',e=>{
  // click on dark area closes
  const isBg = e.target === lb;
  if(isBg) closeLightbox();
});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('show')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowRight') nextMedia();
  if(e.key==='ArrowLeft') prevMedia();
});

/* ===== Utilities ===== */
function scrollToPortfolio(){document.querySelector('#portfolio')?.scrollIntoView({behavior:'smooth'})}
function scrollToSection(id){document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}

/* Header active link on scroll */
window.addEventListener('scroll',()=>{
  const header = document.querySelector('.header');
  if(header) header.style.backgroundColor = (window.scrollY>100)?'rgba(24,26,30,.98)':'rgba(24,26,30,.95)';
  let current='';
  document.querySelectorAll('section[id]').forEach(s=>{
    const top = s.offsetTop-130;
    if(pageYOffset >= top){current = s.getAttribute('id')}
  });
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.classList.remove('active');
    if(a.getAttribute('href') === '#'+current){a.classList.add('active')}
  });
});

/* Logo fallback */
document.querySelectorAll('.logo-img').forEach(img=>{
  img.addEventListener('error',()=>{
    img.style.display='none';
    const t = img.nextElementSibling;
    if(t && t.classList.contains('logo-text')) t.style.display='block';
  });
});

/* Prefetch a few images */
document.addEventListener('DOMContentLoaded',()=>{
  ['image/artAmaze-Banner.png','image/painting-2.jpg','image/digital-character.jpg'].forEach(src=>{const i=new Image();i.src=src;});
});

/* Expose for inline onclick if needed */
window.openLightbox = openLightbox;
