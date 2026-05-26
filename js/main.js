// ============================================
// TODOS JUNTOS POR LA FIE - Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile hamburger menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Scroll reveal animation ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // --- Candidate card hover effect on touch ---
  document.querySelectorAll('.candidate-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('hover-touch');
    }, { passive: true });
  });
});
// Cargar la ventana flotante publicitaria dinámicamente en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
  // 1. Crear el contenedor de la publicidad
  const adContainer = document.createElement("div");
  adContainer.className = "floating-ad-container";
  adContainer.id = "floatingAd";

  // 2. Detectar si estamos en la raíz o dentro de una carpeta (como /candidatos) 
  // Esto ajusta la ruta automáticamente para que siempre encuentre la imagen
  let prefix = "";
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder && navPlaceholder.hasAttribute("data-prefix")) {
    prefix = navPlaceholder.getAttribute("data-prefix");
  }

  // 3. Insertar el contenido HTML (Imagen + Botón cerrar)
  adContainer.innerHTML = `
    <button class="floating-ad-close" onclick="document.getElementById('floatingAd').style.opacity='0'; setTimeout(()=>document.getElementById('floatingAd').remove(), 300);">×</button>
    <img src="${prefix}imagenes/publi.png" alt="Publicidad FIE" class="floating-ad-img" onerror="this.style.display='none';">
  `;

  // 4. Inyectar el widget dentro del body de la página
  document.body.appendChild(adContainer);
});