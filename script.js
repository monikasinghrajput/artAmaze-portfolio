// script.js - Complete updated code

/* ========= COMPLETE PROJECT DATA WITH PROCESS ========= */
const PROJECTS = {
  'character-design': {
    title: 'CHARACTER DESIGN',
    description: 'Creating original characters, focusing on personality, anatomy, costumes, and style.',
    details: 'This project showcases the complete character development process from initial concept sketches to final rendered artwork. Each character is carefully crafted with unique personality traits, backstory, and visual appeal.',
    media: [
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' }
    ],
    process: [
      {
        title: 'Initial Sketches',
        description: 'Rough concept sketches exploring different poses and expressions',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Line Art',
        description: 'Clean line work defining the character structure',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Color Studies',
        description: 'Experimenting with different color palettes',
        image: 'image/painting-2.jpg'
      },
      {
        title: 'Final Render',
        description: 'Fully rendered character with lighting and effects',
        image: 'image/digital-character.jpg'
      }
    ],
    tools: ['Photoshop', 'Procreate', 'Blender', 'ZBrush']
  },


  'environment-design': {
    title: 'ENVIRONMENT DESIGN',
    description: 'Designing backgrounds, landscapes, interiors, and worlds where stories take place.',
    details: 'Environmental storytelling through carefully crafted spaces. From fantasy worlds to sci-fi cities, each environment is designed to support narrative and evoke emotions.',
    media: [
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' }
    ],
    process: [
      {
        title: 'Concept Thumbnails',
        description: 'Quick exploration of composition and mood',
        image: 'image/illustration-1.jpg'
      },
      {
        title: 'Value Study',
        description: 'Establishing light and shadow patterns',
        image: 'image/sci-fi.jpg'
      },
      {
        title: 'Color Keys',
        description: 'Setting the mood with color palettes',
        image: 'image/painting-2.jpg'
      },
      {
        title: 'Final Painting',
        description: 'Detailed environment with atmosphere',
        image: 'image/digital-character.jpg'
      }
    ],
    tools: ['Photoshop', 'Blender', 'Unreal Engine', 'Substance Painter']
  },

  
  
  'creature-design': {
    title: 'CREATURE DESIGN',
    description: 'Imaginary animals and fantasy beasts brought to life.',
    details: 'Creating believable creatures by combining real-world anatomy with imaginative elements. Each creature has its own ecology, behavior, and place in its world.',
    media: [
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' }
    ],
    process: [
      {
        title: 'Anatomy Studies',
        description: 'Studying real animal anatomy for reference',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Silhouette Design',
        description: 'Creating unique and recognizable shapes',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Detail Development',
        description: 'Adding textures, patterns, and features',
        image: 'image/painting-2.jpg'
      },
      {
        title: 'Final Presentation',
        description: 'Fully rendered creature in its habitat',
        image: 'image/character-design.jpg'
      }
    ],
    tools: ['ZBrush', 'Photoshop', 'Substance Painter', 'Maya']
  },
  'prop-design': {
    title: 'PROP DESIGN',
    description: 'Objects and gadgets that enhance storytelling.',
    details: 'Designing functional and aesthetic props that support the narrative. From magical artifacts to futuristic gadgets, each prop has its own history and purpose.',
    media: [
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' }
    ],
    process: [
      {
        title: 'Ideation Sketches',
        description: 'Exploring different design directions',
        image: 'image/illustration-1.jpg'
      },
      {
        title: 'Orthographic Views',
        description: 'Technical drawings from multiple angles',
        image: 'image/ai-1.jpg'
      },
      {
        title: 'Material Studies',
        description: 'Defining surfaces and textures',
        image: 'image/painting-3.jpg'
      },
      {
        title: 'Beauty Shot',
        description: 'Final presentation with lighting',
        image: 'image/animate-1.jpg'
      }
    ],
    tools: ['Fusion 360', 'KeyShot', 'Photoshop', 'Blender']
  },
  'vehicle-design': {
    title: 'VEHICLE DESIGN',
    description: 'Cars, spaceships, boats, or fantasy vehicles.',
    details: 'Designing vehicles that are both functional and visually striking. From sleek racing cars to massive space cruisers, each vehicle tells a story.',
    media: [
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' }
    ],
    process: [
      {
        title: 'Form Exploration',
        description: 'Quick sketches exploring different shapes',
        image: 'image/sci-fi.jpg'
      },
      {
        title: '3D Blockout',
        description: 'Basic 3D model to test proportions',
        image: 'image/illustration-1.jpg'
      },
      {
        title: 'Detail Pass',
        description: 'Adding mechanical details and features',
        image: 'image/ai-1.jpg'
      },
      {
        title: 'Final Render',
        description: 'Photorealistic presentation',
        image: 'image/painting-2.jpg'
      }
    ],
    tools: ['Blender', 'Fusion 360', 'KeyShot', 'Photoshop']
  },
  'animation': {
    title: 'ANIMATION',
    description: 'Dynamic animations and motion graphics.',
    details: 'Bringing characters and stories to life through movement. From 2D character animation to complex 3D sequences, we create engaging motion content.',
    media: [
      { type: 'video', src: 'videos/animation-demo.mp4', poster: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'video', src: 'videos/motion-graphics.mp4', poster: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' }
    ],
    process: [
      {
        title: 'Storyboard',
        description: 'Planning the sequence and timing',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Animatic',
        description: 'Rough animation to test pacing',
        image: 'image/animate-1.jpg'
      },
      {
        title: 'Key Animation',
        description: 'Main poses and movements',
        image: 'image/digital-character.jpg'
      },
      {
        title: 'Polish & Effects',
        description: 'Final details and visual effects',
        image: 'image/painting-3.jpg'
      }
    ],
    tools: ['After Effects', 'Blender', 'Spine', 'Toon Boom']
  },
  'storyboard-art': {
    title: 'STORYBOARD ART',
    description: 'Sequential panels to visualize scenes.',
    details: 'Visual storytelling through sequential art. Planning shots, camera angles, and narrative flow for films, games, and animations.',
    media: [
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/study-1.jpg' }
    ],
    process: [
      {
        title: 'Script Breakdown',
        description: 'Analyzing scenes and key moments',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Thumbnail Boards',
        description: 'Quick sketches for composition',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Rough Boards',
        description: 'More detailed panel drawings',
        image: 'image/animate-1.jpg'
      },
      {
        title: 'Clean Boards',
        description: 'Final polished storyboards',
        image: 'image/digital-character.jpg'
      }
    ],
    tools: ['Storyboard Pro', 'Photoshop', 'Procreate']
  },
  'visual-development': {
    title: 'VISUAL DEVELOPMENT',
    description: 'Mood, lighting, and style exploration.',
    details: 'Establishing the visual language of projects. Creating style guides, color scripts, and mood boards that define the aesthetic direction.',
    media: [
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' }
    ],
    process: [
      {
        title: 'Mood Boards',
        description: 'Gathering visual references and inspiration',
        image: 'image/illustration-1.jpg'
      },
      {
        title: 'Color Scripts',
        description: 'Defining color palettes for different moods',
        image: 'image/sci-fi.jpg'
      },
      {
        title: 'Style Tests',
        description: 'Exploring different visual treatments',
        image: 'image/painting-2.jpg'
      },
      {
        title: 'Style Guide',
        description: 'Final visual development package',
        image: 'image/ai-1.jpg'
      }
    ],
    tools: ['Photoshop', 'Illustrator', 'Procreate']
  },
  'illustration': {
    title: 'ILLUSTRATION',
    description: 'Detailed artworks for storytelling.',
    details: 'Creating compelling illustrations that capture moments and emotions. From book covers to editorial pieces, each illustration is crafted to communicate effectively.',
    media: [
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/animate-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' }
    ],
    process: [
      {
        title: 'Concept Sketches',
        description: 'Initial ideas and compositions',
        image: 'image/illustration-1.jpg'
      },
      {
        title: 'Value Study',
        description: 'Establishing light and mood',
        image: 'image/ai-1.jpg'
      },
      {
        title: 'Color Rough',
        description: 'Testing color schemes',
        image: 'image/painting-2.jpg'
      },
      {
        title: 'Final Illustration',
        description: 'Polished artwork with all details',
        image: 'image/digital-character.jpg'
      }
    ],
    tools: ['Photoshop', 'Procreate', 'Clip Studio Paint']
  },
  'concept-art': {
    title: 'CONCEPT ART',
    description: 'Early visual exploration for projects.',
    details: 'The foundation of visual development. Creating concepts that explore possibilities and establish the creative direction for games, films, and other media.',
    media: [
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' }
    ],
    process: [
      {
        title: 'Brainstorming',
        description: 'Generating multiple ideas quickly',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Exploration',
        description: 'Developing promising concepts',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Refinement',
        description: 'Focusing on selected directions',
        image: 'image/sci-fi.jpg'
      },
      {
        title: 'Presentation',
        description: 'Final concept art package',
        image: 'image/character-design.jpg'
      }
    ],
    tools: ['Photoshop', 'Blender', '3D-Coat', 'Procreate']
  },
  'ui-ux-design': {
    title: 'UI/UX DESIGN',
    description: 'Interfaces and user experiences for games and apps.',
    details: 'Designing intuitive and visually appealing interfaces. Creating user flows, wireframes, and polished UI that enhances the user experience.',
    media: [
      { type: 'image', src: 'image/Character-Study.jpg' },
      { type: 'image', src: 'image/study-1.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      { type: 'image', src: 'image/ai-1.jpg' },
      { type: 'image', src: 'image/painting-3.jpg' },
      { type: 'image', src: 'image/illustration-1.jpg' }
    ],
    process: [
      {
        title: 'User Research',
        description: 'Understanding user needs and behaviors',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Wireframes',
        description: 'Basic layout and functionality',
        image: 'image/Character-Study.jpg'
      },
      {
        title: 'Visual Design',
        description: 'Applying colors, typography, and style',
        image: 'image/ai-1.jpg'
      },
      {
        title: 'Prototyping',
        description: 'Interactive mockups for testing',
        image: 'image/digital-character.jpg'
      }
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle']
  },
  'matte-painting': {
    title: 'MATTE PAINTING',
    description: 'Digital paintings for film backgrounds and environments.',
    details: 'Creating photorealistic backgrounds and environment extensions for films and games.',
    media: [
      { type: 'image', src: 'image/painting-2.jpg' },
      { type: 'image', src: 'image/sci-fi.jpg' },
      // ... more images
    ],
    process: [
      {
        title: 'Reference Gathering',
        description: 'Collecting photographic references',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Base Painting',
        description: 'Creating the foundation',
        image: 'image/painting-2.jpg'
      },
      // ... more steps
    ],
    tools: ['Photoshop', 'Nuke', '3D-Coat']
  },
  
  '3d-modeling': {
    title: '3D MODELING',
    description: 'High-quality 3D models for games and films.',
    details: 'Creating detailed 3D models from concept to final render.',
    media: [
      { type: 'image', src: 'image/character-design.jpg' },
      { type: 'image', src: 'image/digital-character.jpg' },
      // ... more images
    ],
    process: [
      {
        title: 'Blocking',
        description: 'Basic shapes and proportions',
        image: 'image/study-1.jpg'
      },
      {
        title: 'Sculpting',
        description: 'Adding details and refinement',
        image: 'image/Character-Study.jpg'
      },
      // ... more steps
    ],
    tools: ['ZBrush', 'Maya', 'Substance Painter', 'Marmoset']
  },
  'texture-painting': {
  title: 'TEXTURE PAINTING',
  description: 'Hand-painted textures and materials for 3D assets.',
  details: 'Creating stylized and realistic textures for games and animations. From hand-painted textures to PBR materials, bringing 3D models to life with surface details.',
  media: [
    { type: 'image', src: 'image/ai-1.jpg' },
    { type: 'image', src: 'image/painting-3.jpg' },
    { type: 'image', src: 'image/illustration-1.jpg' },
    { type: 'image', src: 'image/Character-Study.jpg' },
    { type: 'image', src: 'image/sci-fi.jpg' },
    { type: 'image', src: 'image/painting-2.jpg' }
  ],
  process: [
    {
      title: 'UV Mapping',
      description: 'Preparing the model for texture painting',
      image: 'image/study-1.jpg'
    },
    {
      title: 'Base Colors',
      description: 'Establishing the primary color palette',
      image: 'image/painting-3.jpg'
    },
    {
      title: 'Detail Painting',
      description: 'Adding wear, dirt, and surface variations',
      image: 'image/ai-1.jpg'
    },
    {
      title: 'Material Setup',
      description: 'Creating PBR maps and shaders',
      image: 'image/illustration-1.jpg'
    }
  ],
  tools: ['Substance Painter', 'Mari', 'Photoshop', '3D-Coat', 'Quixel Mixer']
},

'motion-graphics': {
  title: 'MOTION GRAPHICS',
  description: 'Dynamic animated graphics and visual effects.',
  details: 'Creating engaging motion graphics for commercials, title sequences, and explainer videos. Combining design, animation, and visual effects to communicate ideas effectively.',
  media: [
    { type: 'video', src: 'videos/motion-graphics.mp4', poster: 'image/animate-1.jpg' },
    { type: 'image', src: 'image/animate-1.jpg' },
    { type: 'image', src: 'image/digital-character.jpg' },
    { type: 'image', src: 'image/sci-fi.jpg' },
    { type: 'image', src: 'image/illustration-1.jpg' },
    { type: 'video', src: 'videos/animation-demo.mp4', poster: 'image/Character-Study.jpg' }
  ],
  process: [
    {
      title: 'Concept & Storyboard',
      description: 'Planning the animation flow and timing',
      image: 'image/study-1.jpg'
    },
    {
      title: 'Design Frames',
      description: 'Creating key visual elements and layouts',
      image: 'image/illustration-1.jpg'
    },
    {
      title: 'Animation',
      description: 'Bringing designs to life with movement',
      image: 'image/animate-1.jpg'
    },
    {
      title: 'Compositing',
      description: 'Final effects and color correction',
      image: 'image/sci-fi.jpg'
    }
  ],
  tools: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Illustrator', 'Octane Render']
}
};
















let currentProjectKey = '';
let currentIndex = 0;

/* ===== Nav (mobile) ===== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => {
  navMenu?.classList.remove('active');
  hamburger?.classList.remove('active');
}));

/* ===== Hero Auto Slider with Services Animation ===== */
const heroImg = document.querySelector('.hero-bg-img');
const heroImages = [
  'image/artAmaze-Banner.png',
  'image/painting-2.jpg',
  'image/digital-character.jpg',
  'image/sci-fi.jpg',
  'image/illustration-1.jpg'
];
const dots = document.querySelectorAll('.dot');
const serviceItems = document.querySelectorAll('.service-item');
let currentSlide = 0, slideInterval;

function animateServices() {
  serviceItems.forEach((item, index) => {
    item.style.animation = 'none';
    setTimeout(() => {
      item.style.animation = `slideInLeft 0.6s ${index * 0.1}s both`;
    }, 10);
  });
}

function setHero(i) {
  currentSlide = i % heroImages.length;
  dots.forEach(d => d.classList.remove('active'));
  dots[currentSlide]?.classList.add('active');
  if (heroImg) {
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.src = heroImages[currentSlide];
      heroImg.style.opacity = '1';
    }, 300);
  }
  animateServices();
}

function startSlideshow() {
  slideInterval = setInterval(() => setHero((currentSlide + 1) % heroImages.length), 4000);
}

function stopSlideshow() {
  if (slideInterval) clearInterval(slideInterval);
}

dots.forEach((d, i) => d.addEventListener('click', () => {
  stopSlideshow();
  setHero(i);
  startSlideshow();
}));

if (heroImg && dots.length) {
  startSlideshow();
  animateServices();
}

/* ===== Stats Counter Animation ===== */
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const target = parseInt(stat.getAttribute('data-target') || stat.innerText);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.innerText = target + '+';
            clearInterval(timer);
          } else {
            stat.innerText = Math.floor(current) + '+';
          }
        }, 30);
        observer.unobserve(stat);
      }
    });
  }, observerOptions);

  stats.forEach(stat => {
    const value = parseInt(stat.innerText);
    stat.setAttribute('data-target', value);
    stat.innerText = '0+';
    observer.observe(stat);
  });
}

/* ===== Build Grid ===== */
const grid = document.getElementById('grid');
Object.keys(PROJECTS).forEach(key => {
  const p = PROJECTS[key];
  const thumb = p.media[0].poster || p.media[0].src;
  const card = document.createElement('div');
  card.className = 'grid-card';
  card.innerHTML = `
    <img class="thumbnail" src="${thumb}" alt="${p.title}">
    <div class="wrapper">
      <div class="project-title">
        <h2>${p.title}</h2>
        <h3>&mdash; view &mdash;</h3>
      </div>
    </div>`;
  card.addEventListener('click', () => openDetailView(key, 0));
  grid.appendChild(card);
});

/* ===== Detail View Functions ===== */
function openDetailView(projectKey, startIndex = 0) {
  currentProjectKey = projectKey;
  currentIndex = startIndex;
  const p = PROJECTS[projectKey];
  
  const detailHTML = `
    <div class="detail-view-container">
      <div class="detail-header">
        <button class="back-btn" onclick="closeDetailView()">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <h1>${p.title}</h1>
      </div>
      
      <div class="detail-hero">
        <img src="${p.media[0].src}" alt="${p.title}" class="detail-hero-img">
      </div>
      
      <div class="detail-content">
        <div class="detail-description">
          <h2>About This Project</h2>
          <p>${p.description}</p>
          ${p.details ? `<p>${p.details}</p>` : ''}
        </div>
        
        ${p.process ? `
        <div class="process-section">
          <h2>Design Process</h2>
          <div class="process-grid">
            ${p.process.map((step, idx) => `
              <div class="process-step">
                <div class="step-number">${idx + 1}</div>
                <img src="${step.image}" alt="${step.title}">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        <div class="detail-gallery">
          <h2>Project Gallery</h2>
          <div class="gallery-grid">
            ${p.media.map((item, idx) => `
              <div class="gallery-item" onclick="openLightbox('${projectKey}', ${idx})">
                <img src="${item.type === 'video' ? item.poster : item.src}" alt="">
                <div class="gallery-overlay">
                  <i class="fas fa-search-plus"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        ${p.tools ? `
        <div class="tools-section">
          <h3>Tools Used</h3>
          <div class="tools-list">
            ${p.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
  
  const detailView = document.createElement('div');
  detailView.id = 'detail-view';
  detailView.className = 'detail-view';
  detailView.innerHTML = detailHTML;
  
  document.body.appendChild(detailView);
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => {
    detailView.classList.add('show');
  }, 10);
}

function closeDetailView() {
  const detailView = document.getElementById('detail-view');
  if (detailView) {
    detailView.classList.remove('show');
    setTimeout(() => {
      detailView.remove();
      document.body.style.overflow = '';
    }, 300);
  }
}

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

function openLightbox(projectKey, startIndex = 0) {
  currentProjectKey = projectKey;
  currentIndex = startIndex;
  const p = PROJECTS[projectKey];
  lbTitle.textContent = p.title;
  lbDesc.textContent = p.description;
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
  loadMedia();
}

function closeLightbox() {
  lb.classList.remove('show');
  document.body.style.overflow = 'hidden'; // Keep hidden because detail view might be open
  if (!lbVideo.paused) {
    lbVideo.pause();
  }
}

function loadMedia() {
  const p = PROJECTS[currentProjectKey];
  const m = p.media[currentIndex];
  lbCounter.textContent = `${currentIndex + 1} / ${p.media.length}`;
  if (m.type === 'video') {
    lbImg.style.display = 'none';
    lbVideo.style.display = 'block';
    lbVideoSrc.src = m.src;
    lbVideo.poster = m.poster || '';
    lbVideo.load();
    lbVideo.play().catch(() => {});
  } else {
    lbVideo.pause();
    lbVideo.style.display = 'none';
    lbImg.style.display = 'block';
    lbImg.src = m.src;
    lbImg.alt = `${p.title} ${currentIndex + 1}`;
  }
}

function nextMedia() {
  const total = PROJECTS[currentProjectKey].media.length;
  currentIndex = (currentIndex + 1) % total;
  loadMedia();
}

function prevMedia() {
  const total = PROJECTS[currentProjectKey].media.length;
  currentIndex = (currentIndex - 1 + total) % total;
  loadMedia();
}

/* Lightbox events */
btnNext?.addEventListener('click', nextMedia);
btnPrev?.addEventListener('click', prevMedia);
btnClose?.addEventListener('click', closeLightbox);
lb?.addEventListener('click', e => {
  const isBg = e.target === lb;
  if (isBg) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('show')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextMedia();
  if (e.key === 'ArrowLeft') prevMedia();
});

/* ===== Utilities ===== */
function scrollToPortfolio() {
  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* Header active link on scroll */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) header.style.backgroundColor = (window.scrollY > 100) ? 'rgba(24,26,30,.98)' : 'rgba(24,26,30,.95)';
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    const top = s.offsetTop - 130;
    if (pageYOffset >= top) {
      current = s.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

/* Initialize animations on load */
document.addEventListener('DOMContentLoaded', () => {
  animateStats();
  
  // Prefetch images
  ['image/artAmaze-Banner.png', 'image/painting-2.jpg', 'image/digital-character.jpg'].forEach(src => {
    const i = new Image();
    i.src = src;
  });
});

/* Expose functions for inline onclick */
window.openLightbox = openLightbox;
window.openDetailView = openDetailView;
window.closeDetailView = closeDetailView;
window.scrollToPortfolio = scrollToPortfolio;
window.scrollToSection = scrollToSection;
