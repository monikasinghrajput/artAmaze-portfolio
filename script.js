/* ===== Touch detection to control hover overlay ===== */
(function(){
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  document.body.classList.add(isTouch ? 'is-touch' : 'no-touch');
})();

/* ===== Gallery Data ===== */
const ALBUMS = {
  painting: { 
    title:'Painting', 
    images:[
      'image/painting-1.jpg',
      'image/painting-2.jpg',
      'image/painting-3.jpg',
      'image/painting-4.jpg',
      'image/painting-5.jpg',
      'image/painting-6.jpg',
      'image/painting-7.jpg',
      'image/painting-8.jpg',
      'image/painting-9.jpg',
      'image/painting-10.jpg',
      'image/painting-11.jpg',
      'image/painting-12.jpg',
      'image/painting-13.jpg',
      'image/painting-14.jpg',
      'image/painting-15.jpg',
      'image/painting-16.jpg',
      'image/painting-17.jpg',
      'image/painting-18.jpg',
      'image/painting-19.jpg',
      'image/painting-20.jpg'
    ] 
  },
  illustration: { 
    title:'Illustration', 
    images:[
      'image/digital-character.jpg',
      'image/illustration-1.jpg',
      'image/illustration-2.jpg',
      'image/illustration-3.jpg',
      'image/illustration-4.jpg',
      'image/illustration-5.jpg',
      'image/illustration-6.jpg',
      'image/illustration-7.jpg',
      'image/illustration-8.jpg',
      'image/illustration-9.jpg',
      'image/illustration-10.jpg',
      'image/illustration-11.jpg',
      'image/illustration-12.jpg',
      'image/illustration-13.jpg',
      'image/illustration-14.jpg',
      'image/illustration-15.jpg'
    ] 
  },
  animation: { 
    title:'Animation', 
    images:[
      'image/character-design.jpg',
      'image/animate-1.jpg',
      'image/animate-2.jpg',
      'image/animate-3.jpg',
      'image/animate-4.jpg',
      'image/animate-5.jpg',
      'image/animate-6.jpg',
      'image/animate-7.jpg',
      'image/animate-8.jpg',
      'image/animate-9.jpg',
      'image/animate-10.jpg',
      'image/animate-11.jpg',
      'image/animate-12.jpg'
    ] 
  },
  video: { 
    title:'AI Video', 
    images:[
      'image/sci-fi.jpg',
      'image/ai-1.jpg',
      'image/ai-2.jpg',
      'image/ai-3.jpg',
      'image/ai-4.jpg',
      'image/ai-5.jpg',
      'image/ai-6.jpg',
      'image/ai-7.jpg',
      'image/ai-8.jpg',
      'image/ai-9.jpg',
      'image/ai-10.jpg'
    ] 
  },
  study: { 
    title:'Character Study', 
    images:[
      'image/Character-Study.jpg',
      'image/study-1.jpg',
      'image/study-2.jpg',
      'image/study-3.jpg',
      'image/study-4.jpg',
      'image/study-5.jpg',
      'image/study-6.jpg',
      'image/study-7.jpg',
      'image/study-8.jpg',
      'image/study-9.jpg'
    ] 
  }
};

/* ===== Gallery Functions ===== */
function openGallery(albumKey) {
  const album = ALBUMS[albumKey] || ALBUMS.painting;
  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryTitle');
  const grid = document.getElementById('galleryGrid');
  
  // Set title and make it sticky
  title.textContent = album.title;
  
  // Clear and populate grid with different aspect ratios
  grid.innerHTML = '';
  
  album.images.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = album.title;
    img.loading = 'lazy';
    img.decoding = 'async';
    
    // Add error handling for missing images
    img.onerror = function() {
      this.style.display = 'none';
      item.style.display = 'none';
    };
    
    item.appendChild(img);
    grid.appendChild(item);
  });
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Smooth scroll to top of modal
  modal.scrollTop = 0;
}

function closeGallery() {
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/* ===== Close gallery on ESC key ===== */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeGallery();
  }
});

/* ===== Close gallery when clicking outside content ===== */
document.getElementById('galleryModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeGallery();
  }
});

/* ===== MOBILE NAV ===== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile nav when clicking on links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    if (hamburger) {
      hamburger.classList.remove('active');
    }
  });
});

/* ===== HERO SLIDER ===== */
const heroImg = document.querySelector('.hero-bg-img');
const heroImages = [
  'image/artAmaze-Banner.png',
  'image/artAmaze-Banner.png',
  'image/artAmaze-Banner.png',
  'image/artAmaze-Banner.png',
  'image/artAmaze-Banner.png'
];
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function setHero(i) {
  currentSlide = i % heroImages.length;
  dots.forEach(d => d.classList.remove('active'));
  if (dots[currentSlide]) {
    dots[currentSlide].classList.add('active');
  }
  if (heroImg) {
    heroImg.src = heroImages[currentSlide];
  }
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    setHero((currentSlide + 1) % heroImages.length);
  }, 5000);
}

function stopSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// Dot click handlers
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    stopSlideshow();
    setHero(idx);
    startSlideshow();
  });
});

// Initialize slideshow
if (heroImg && dots.length) {
  startSlideshow();
}

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');

function showNotification(msg, type = 'success') {
  // Remove existing notification
  const old = document.querySelector('.notification');
  if (old) old.remove();
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.background = (type === 'error') 
    ? 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' 
    : 'linear-gradient(45deg, #ffd700, #ffed4e)';
  
  notification.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px">
      <i class="${type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle'}"></i>
      <span>${msg}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 50);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(300px)';
    setTimeout(() => notification.remove(), 300);
  }, 3500);
}

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Validate form
    for (const [key, value] of formData.entries()) {
      if (!String(value).trim()) {
        showNotification('Please fill all fields', 'error');
        return;
      }
    }
    
    // Show success message
    showNotification("Thanks! We'll get back to you within 24 hours.");
    contactForm.reset();
  });
}

/* ===== UTILITY FUNCTIONS ===== */
function scrollToPortfolio() {
  const portfolio = document.querySelector('#portfolio');
  if (portfolio) {
    portfolio.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Make functions globally available
window.scrollToPortfolio = scrollToPortfolio;
window.scrollToSection = scrollToSection;
window.openGallery = openGallery;
window.closeGallery = closeGallery;

/* ===== HEADER SCROLL EFFECT ===== */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (!header) return;
  
  // Change header background on scroll
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(24,26,30,.98)';
  } else {
    header.style.backgroundColor = 'rgba(24,26,30,.95)';
  }
  
  // Update active nav link based on scroll position
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ===== LOGO FALLBACK ===== */
document.querySelectorAll('.logo-img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const logoText = img.nextElementSibling;
    if (logoText && logoText.classList.contains('logo-text')) {
      logoText.style.display = 'block';
    }
  });
});

/* ===== PORTFOLIO FILTER FUNCTIONALITY ===== */
document.querySelectorAll('.jc-filter').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    
    // Update active filter button
    document.querySelectorAll('.jc-filter').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Filter portfolio items
    const items = document.querySelectorAll('#jcGrid .jc-item');
    items.forEach(item => {
      const category = item.getAttribute('data-cat');
      const shouldShow = (filter === 'all') ? true : (category === filter);
      
      if (shouldShow) {
        item.style.display = 'block';
        item.style.opacity = '0';
        setTimeout(() => {
          item.style.opacity = '1';
        }, 100);
      } else {
        item.style.opacity = '0';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

/* ===== SMOOTH ANIMATIONS ===== */
// Add intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.service-item, .stat, .contact-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

/* ===== PREVENT CONTEXT MENU ON IMAGES (Optional) ===== */
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

/* ===== LAZY LOADING ENHANCEMENT ===== */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  // Apply to gallery images when they're created
  const observeGalleryImages = () => {
    document.querySelectorAll('.gallery-item img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  };
  
  window.observeGalleryImages = observeGalleryImages;
}

/* ===== KEYBOARD NAVIGATION ===== */
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('galleryModal');
  if (modal && modal.style.display === 'block') {
    switch(e.key) {
      case 'Escape':
        closeGallery();
        break;
      case 'ArrowLeft':
        // You can add previous image functionality here
        break;
      case 'ArrowRight':
        // You can add next image functionality here
        break;
    }
  }
});

/* ===== PERFORMANCE OPTIMIZATION ===== */
// Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
  // Your existing scroll handler code here
}, 10);

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', function(e) {
  console.log('Error caught:', e.error);
  // You can add error reporting here
});

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any components that need DOM to be ready
  console.log('artAmaze website initialized');
  
  // Set initial active states
  const firstFilter = document.querySelector('.jc-filter[data-filter="all"]');
  if (firstFilter && !firstFilter.classList.contains('active')) {
    firstFilter.classList.add('active');
  }
  
  // Preload critical images
  const criticalImages = [
    'image/artAmaze-Banner.png',
    'image/painting-2.jpg',
    'image/digital-character.jpg'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});