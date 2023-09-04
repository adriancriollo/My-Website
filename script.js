const toggleButton = document.getElementById('sidebarToggle');
const overlay = document.querySelector('.overlay');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
  overlay.classList.toggle('active'); // Toggle the 'active' class
});

closeButton.addEventListener('click', () => {
    overlay.classList.toggle('active'); // Toggle the 'active' class
  });

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    overlay.classList.remove('active');
  }
});

document.addEventListener("mousemove", (event) => {
    const circle = document.getElementById("cursor");
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.left = mouseX + "px";
    circle.style.top = mouseY + "px";
});
