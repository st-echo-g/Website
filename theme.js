// Shared theme logic for every page.

// setTheme — apply a color scheme and remember it for next time.
function setTheme(bg, text) {
  document.body.style.setProperty('--bg', bg);
  document.body.style.setProperty('--text', text);
  localStorage.setItem('bg', bg);
  localStorage.setItem('text', text);
}

// On load, re-apply whatever theme was saved on a previous visit.
const savedBg = localStorage.getItem('bg');
const savedText = localStorage.getItem('text');
if (savedBg && savedText) {
  setTheme(savedBg, savedText);
}
