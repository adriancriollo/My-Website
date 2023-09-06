const toggleButton = document.getElementById('sidebarToggle');
const overlay = document.querySelector('.overlay');
const closeButton = document.getElementById('closeButton');
const linkedin = document.querySelector('.fa-linkedin');
const instagram = document.querySelector('.fa-instagram');
const facebook = document.querySelector('.fa-facebook');
const github = document.querySelector('.fa-github');

toggleButton.addEventListener('click', () => {
    overlay.classList.toggle('active'); // Toggle the 'active' class
});

closeButton.addEventListener('click', () => {
    overlay.classList.toggle('active'); // Toggle the 'active' class
});

overlay.addEventListener('mouseleave', function () {
    if(overlay.classList.contains('active')){
        overlay.classList.toggle('active');
    }
})

linkedin.addEventListener('mouseover', function () {
    linkedin.classList.add('fa-shake');
})
linkedin.addEventListener('mouseout', function () {
    linkedin.classList.remove('fa-shake');
})
instagram.addEventListener('mouseover', function () {
    instagram.classList.add('fa-shake');
})
instagram.addEventListener('mouseout', function () {
    instagram.classList.remove('fa-shake');
})
facebook.addEventListener('mouseover', function () {
    facebook.classList.add('fa-shake');
})
facebook.addEventListener('mouseout', function () {
    facebook.classList.remove('fa-shake');
})
github.addEventListener('mouseover', function () {
    github.classList.add('fa-shake');
})
github.addEventListener('mouseout', function () {
    github.classList.remove('fa-shake');
})

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
