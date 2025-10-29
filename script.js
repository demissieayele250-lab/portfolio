// NAVIGATION
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');

    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    // Show target
    document.getElementById(section).classList.add('active');

    // Update active nav
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (link.classList.contains('nav-link')) link.classList.add('active');

    // Close menu
    document.querySelector('.nav-links').classList.remove('active');

    // Reset project view
    if (section !== 'projects') {
      document.querySelector('.project-grid').style.display = 'grid';
      document.getElementById('code-view').style.display = 'none';
    }
  });
});

// MOBILE MENU
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// TABS
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// PROJECT CODE
function showCode(lang) {
  document.querySelector('.project-grid').style.display = 'none';
  document.getElementById('code-view').style.display = 'block';
  document.getElementById('code-title').textContent = lang === 'cpp' ? 'Gym Management (C++)' : 'Hotel System (Java)';
  document.getElementById('code-block').textContent = lang === 'cpp' 
    ? `// C++ Code\n#include <iostream>\nusing namespace std;\nint main() { return 0; }`
    : `// Java Code\nimport java.util.*;\npublic class Hotel { public static void main(String[] args) {} }`;
}

function hideCode() {
  document.querySelector('.project-grid').style.display = 'grid';
  document.getElementById('code-view').style.display = 'none';
}

function navigateTo(section) {
  document.querySelector(`[data-section="${section}"]`).click();
}

// FORM
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent!');
});
// REAL C++ CODE (Gym Management)
const cppCode = ` Gym Customer Management System - C++
AUTHOR: MIKIAS ABEBAW

`;

// REAL JAVA CODE (Hotel Management)
const javaCode = `Hotel Management System - Java
 AUTHOR: MIKIAS ABEBAW

`;

// NAVIGATION
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (link.classList.contains('nav-link')) link.classList.add('active');
    document.querySelector('.nav-links').classList.remove('active');
    if (section !== 'projects') hideCode();
  });
});

// MOBILE MENU
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// TABS
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// SHOW CODE
function showCode(lang) {
  document.querySelector('.project-grid').style.display = 'none';
  document.getElementById('code-view').style.display = 'block';
  document.getElementById('code-title').textContent = lang === 'cpp' ? 'Gym Management System (C++)' : 'Hotel Booking System (Java)';
  document.getElementById('code-block').textContent = lang === 'cpp' ? cppCode : javaCode;
}

// HIDE CODE
function hideCode() {
  document.querySelector('.project-grid').style.display = 'grid';
  document.getElementById('code-view').style.display = 'none';
}

// COPY CODE
function copyCode() {
  const code = document.getElementById('code-block').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => btn.innerHTML = original, 2000);
  });
}

// NAVIGATE
function navigateTo(section) {
  document.querySelector(`[data-section="${section}"]`).click();
}

// FORM
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
});
// === NAVIGATION FOR ALL LINKS ===
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const section = link.getAttribute('data-section');
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Show selected section
    document.getElementById(section).classList.add('active');
    
    // Update active link
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    link.classList.add('active');
    
    // Close mobile menu
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// === TOGGLE MOBILE MENU ===
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
// === TOGGLE MOBILE MENU ===
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// === NAVIGATION FOR ALL LINKS (HOME, ABOUT, etc.) ===
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = this.getAttribute('data-section');

    // Show section
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    // Update active link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Close mobile menu
    document.querySelector('.nav-links').classList.remove('active');

    // Hide code view if going home
    if (target !== 'projects') {
      document.querySelector('.project-grid').style.display = 'grid';
      document.getElementById('code-view').style.display = 'none';
    }
  });
});

// === PROJECT CODE (CPP & JAVA) ===
function showCode(lang) {
  document.querySelector('.project-grid').style.display = 'none';
  document.getElementById('code-view').style.display = 'block';
  document.getElementById('code-title').textContent = lang === 'cpp' 
    ? 'Gym Management System (C++)' 
    : 'Hotel Booking System (Java)';
  document.getElementById('code-block').textContent = lang === 'cpp' 
    ? ` Gym Management System 
     AUTHOR   MIKIAS ABEBAW`
    : `Hotel Booking System -
    AUTHOR  MIKIAS ABEBAW`;
}

function hideCode() {
  document.querySelector('.project-grid').style.display = 'grid';
  document.getElementById('code-view').style.display = 'none';
}

function navigateTo(section) {
  document.querySelector(`[data-section="${section}"]`).click();
}

function copyCode() {
  const code = document.getElementById('code-block').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => btn.innerHTML = original, 2000);
  });
}

// FORM
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
});