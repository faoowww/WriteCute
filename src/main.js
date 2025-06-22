const editor = document.getElementById('editor');

// Auto save to localStorage
editor.value = localStorage.getItem('writecute_draft') || '';
editor.addEventListener('input', () => {
  localStorage.setItem('writecute_draft', editor.value);
});

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.log('SW registration failed:', err));
}
