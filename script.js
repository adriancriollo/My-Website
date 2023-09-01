const toggleButton = document.getElementById('sidebarToggle');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
  overlay.classList.toggle('active'); // Toggle the 'active' class
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    overlay.classList.remove('active');
  }
});