// ════════════════════════════════════════════════════════════════
// Dark Mode & Countdown Banner Implementation
// Add this to your script.js or link separately
// ════════════════════════════════════════════════════════════════

// ─── DARK MODE IMPLEMENTATION ────────────────────────────────────

function initializeDarkMode() {
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme-preference') || 'light';
  
  // Apply saved theme
  applyTheme(savedTheme);
  
  // Watch for system theme changes
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme-preference')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme-preference', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme-preference', 'light');
  }
  updateThemeToggleIcon();
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

function updateThemeToggleIcon() {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// ─── COUNTDOWN BANNER IMPLEMENTATION ────────────────────────────

function createCountdownBanner() {
  // Check if banner already exists
  if (document.getElementById('countdownBanner')) return;
  
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  const banner = document.createElement('div');
  banner.id = 'countdownBanner';
  banner.className = 'countdown-banner';
  banner.style.cssText = `
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    padding: 10px 0;
    font-size: 0.85rem;
    font-weight: 600;
    text-align: center;
    z-index: 150;
    display: none;
  `;
  
  navbar.insertAdjacentElement('afterend', banner);
  
  // Add CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    .countdown-banner {
      animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .countdown-items {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      padding: 0 20px;
    }
    
    .countdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }
    
    .countdown-badge {
      background: rgba(255, 255, 255, 0.25);
      padding: 4px 10px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.8rem;
      backdrop-filter: blur(10px);
    }
    
    @media (max-width: 640px) {
      .countdown-items {
        gap: 12px;
        font-size: 0.8rem;
      }
      
      .countdown-item {
        gap: 4px;
      }
    }
  `;
  document.head.appendChild(style);
}

function getUpcomingExams(limit = 3) {
  if (!window.exams || !Array.isArray(window.exams)) return [];
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return window.exams
    .filter(exam => {
      try {
        const dateStr = exam.tentativeExam.split('-')[0].trim();
        const examDate = parseExamDate(dateStr);
        return examDate && examDate > today;
      } catch (e) {
        return false;
      }
    })
    .sort((a, b) => {
      const dateA = parseExamDate(a.tentativeExam.split('-')[0].trim());
      const dateB = parseExamDate(b.tentativeExam.split('-')[0].trim());
      return dateA - dateB;
    })
    .slice(0, limit);
}

function parseExamDate(dateString) {
  // Handle formats like "May 3, 2026", "Feb 1–2, 2026", etc.
  try {
    const cleanDate = dateString.replace(/–.*/, '').trim();
    const date = new Date(cleanDate + ', 2026');
    if (!isNaN(date.getTime())) {
      return date;
    }
  } catch (e) {
    return null;
  }
  return null;
}

function calculateDaysUntil(dateString) {
  try {
    const date = parseExamDate(dateString.split('-')[0].trim());
    if (!date) return 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diff = date - today;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  } catch (e) {
    return 0;
  }
}

function updateCountdownBanner() {
  const banner = document.getElementById('countdownBanner');
  if (!banner) {
    createCountdownBanner();
    setTimeout(updateCountdownBanner, 100);
    return;
  }
  
  const upcoming = getUpcomingExams(3);
  
  if (upcoming.length === 0) {
    banner.style.display = 'none';
    banner.innerHTML = '';
    return;
  }
  
  let html = '<div class="countdown-items">';
  
  upcoming.forEach(exam => {
    const days = calculateDaysUntil(exam.tentativeExam);
    
    if (days > 0) {
      const displayText = days === 1 ? 'tomorrow' : `in ${days} days`;
      html += `
        <div class="countdown-item" title="${exam.name} - ${exam.tentativeExam}">
          <strong>${exam.name}</strong>
          <span class="countdown-badge">⏰ ${displayText}</span>
        </div>
      `;
    }
  });
  
  html += '</div>';
  
  banner.innerHTML = html;
  banner.style.display = 'block';
}

// Update countdown every hour
function initCountdownBanner() {
  createCountdownBanner();
  updateCountdownBanner();
  setInterval(updateCountdownBanner, 3600000); // Update every hour
}

// Add theme toggle button to navbar
function addThemeToggleButton() {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;
  
  // Check if toggle already exists
  if (document.getElementById('themeToggle')) return;
  
  const style = document.createElement('style');
  style.textContent = `
    .theme-toggle-btn {
      background: var(--muted-purple);
      border: 2px solid var(--border);
      color: var(--text);
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      margin-left: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
    }
    
    .theme-toggle-btn:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
      transform: scale(1.05);
    }
    
    .theme-toggle-btn:active {
      transform: scale(0.95);
    }
  `;
  document.head.appendChild(style);
  
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'themeToggle';
  toggleBtn.className = 'theme-toggle-btn';
  toggleBtn.textContent = '🌙';
  toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
  toggleBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDarkMode();
  };
  
  navLinks.appendChild(toggleBtn);
  updateThemeToggleIcon();
}

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', () => {
  addThemeToggleButton();
  setTimeout(initCountdownBanner, 500); // Small delay to ensure exams data is loaded
});

// ─── HELPER: SHOW NOTIFICATION MESSAGES ──────────────────────────

function showNotification(message, type = 'info', duration = 3000) {
  const messageDiv = document.createElement('div');
  const bgColor = {
    'success': '#059669',
    'error': '#dc2626',
    'warning': '#f59e0b',
    'info': '#0ea5e9'
  }[type] || '#0ea5e9';
  
  messageDiv.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
    font-weight: 500;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  const style = document.createElement('style');
  if (!document.getElementById('notificationStyles')) {
    style.id = 'notificationStyles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => messageDiv.remove(), 300);
  }, duration);
}

// Export for use
window.toggleDarkMode = toggleDarkMode;
window.showNotification = showNotification;