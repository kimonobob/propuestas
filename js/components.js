// ============================================
// TODOS JUNTOS POR LA FIE - Components
// Inserts shared nav and footer dynamically
// ============================================

function getNavHTML(prefix = '') {
  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="${prefix}index.html" class="nav-brand">
        <img src="${prefix}imagenes/logo1.png" alt="Logo FIE" class="nav-logo" onerror="this.style.display='none'">
        <div class="nav-brand-text">
          <span class="nav-brand-title">Todos Juntos por la FIE</span>
          <span class="nav-brand-sub">Consejo de Facultad · FIE</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="${prefix}index.html">Inicio</a></li>
        <li><a href="${prefix}propuestas.html">Propuestas</a></li>
        <li><a href="${prefix}candidatos.html">Candidatos</a></li>
        <li><a href="${prefix}repositorio.html">Repositorio FIE</a></li>
      </ul>
      <button class="nav-hamburger" aria-label="Menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function getFooterHTML(prefix = '') {
  return `
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-brand">
          <img src="${prefix}imagenes/logo1.png" alt="Logo" class="footer-logo" onerror="this.style.display='none'">
          <span class="footer-title">Todos Juntos por la FIE</span>
        </div>
        <p class="footer-desc">
          No vendemos promesas, demostramos trabajo.<br>
          Facultad de Ingeniería Económica · Consejo de Facultad.
        </p>
      </div>
      <div class="footer-values">
        <span class="footer-value">✦ Transparencia</span>
        <span class="footer-value">✦ Innovación</span>
        <span class="footer-value">✦ Honestidad</span>
      </div>
      <div class="footer-copy">
        ¡Juntos construimos la mejor <span>FIE</span>! &nbsp;·&nbsp; Todos Juntos por la FIE © 2025
      </div>
    </div>
  </footer>`;
}

// Auto-inject if placeholders exist
document.addEventListener('DOMContentLoaded', () => {
  const navHolder = document.getElementById('nav-placeholder');
  const footHolder = document.getElementById('footer-placeholder');
  const prefix = navHolder ? (navHolder.dataset.prefix || '') : '';
  if (navHolder)  navHolder.outerHTML = getNavHTML(prefix);
  if (footHolder) footHolder.outerHTML = getFooterHTML(prefix);
});
