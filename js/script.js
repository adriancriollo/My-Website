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
        facebook.classList.remove('fa-lg')
        facebook.classList.add('fa-2xl')
        instagram.classList.remove('fa-lg')
        instagram.classList.add('fa-2xl')
        linkedin.classList.remove('fa-lg')
        linkedin.classList.add('fa-2xl')
        github.classList.remove('fa-lg')
        github.classList.add('fa-2xl')
    }
    if (window.innerWidth < 1000) {
        facebook.classList.remove('fa-2xl')
        facebook.classList.add('fa-lg')
        instagram.classList.remove('fa-2xl')
        instagram.classList.add('fa-lg')
        linkedin.classList.remove('fa-2xl')
        linkedin.classList.add('fa-lg')
        github.classList.remove('fa-2xl')
        github.classList.add('fa-lg')
    }
});

window.addEventListener('load', function() {
    if (window.innerWidth < 1000) {
        facebook.classList.remove('fa-2xl')
        facebook.classList.add('fa-lg')
        instagram.classList.remove('fa-2xl')
        instagram.classList.add('fa-lg')
        linkedin.classList.remove('fa-2xl')
        linkedin.classList.add('fa-lg')
        github.classList.remove('fa-2xl')
        github.classList.add('fa-lg')
    }
});

function addSmoothScrollEventListener(triggerId, targetId) {
    document.getElementById(triggerId).addEventListener("click", function() {
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

addSmoothScrollEventListener("resume-nav", "resume");
addSmoothScrollEventListener("about-nav", "aboutme");
addSmoothScrollEventListener("projects-nav", "projects");
addSmoothScrollEventListener("contact-nav", "contactme");
addSmoothScrollEventListener("home-side", "landing-container");
addSmoothScrollEventListener("resume-side", "resume");
addSmoothScrollEventListener("about-side", "aboutme");
addSmoothScrollEventListener("projects-side", "projects");
addSmoothScrollEventListener("contact-side", "contactme");

  document.addEventListener("mousemove", (event) => {
    const circle = document.getElementById("cursor");
    const mouseX = event.pageX;  // Use pageX
    const mouseY = event.pageY;  // Use pageY

    circle.style.left = mouseX + "px";
    circle.style.top = mouseY + "px";
});

document.querySelector(".arrow").addEventListener("click", function() {
    document.getElementById("aboutme").scrollIntoView({
        behavior: 'smooth' 
    });
});



const arrow = document.querySelector(".arrow")
let opacity = 1;

window.addEventListener('scroll', function() {
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    
    opacity = 1 - ((window.scrollY / maxScrollTop) *5);
    
    arrow.style.opacity = opacity;
});


function adjustOpacityOnScroll(section) {
    window.addEventListener('scroll', function() {
        const rect = section.getBoundingClientRect();

        // Determine the relative scroll position of the section within the viewport
        let relativeScroll = (window.innerHeight - rect.top) / window.innerHeight;

        // Clamp the opacity value between 0 and 1
        let opacity = Math.min(Math.max(relativeScroll, 0), 1);

        section.style.opacity = opacity;
    });
}

const resumeSection = document.querySelector(".resume");
const aboutmeSection = document.querySelector(".aboutme");
const projectsSection = document.querySelector(".projects");

adjustOpacityOnScroll(resumeSection);
adjustOpacityOnScroll(aboutmeSection);
adjustOpacityOnScroll(projectsSection);

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    const elems = document.querySelectorAll('[data-animate]');
    elems.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('is-visible');
        }
    });
}

checkVisibility();
window.addEventListener('scroll', checkVisibility);


let slideIndex = 1;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activedot";
//   setTimeout(showSlides(slideIndex+1), 3500);
}
