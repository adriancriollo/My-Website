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
addSmoothScrollEventListener("contact-nav", "contact");
addSmoothScrollEventListener("home-side", "landing-container");
addSmoothScrollEventListener("resume-side", "resume");
addSmoothScrollEventListener("about-side", "aboutme");
addSmoothScrollEventListener("projects-side", "projects");
addSmoothScrollEventListener("contact-side", "contact");

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
let opacity = .5;

window.addEventListener('scroll', function() {
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    
    opacity = 1 - ((window.scrollY / maxScrollTop) *5);
    
    arrow.style.opacity = opacity;
});


function adjustOpacityOnScroll(section) {
    window.addEventListener('scroll', function() {
        const rect = section.getBoundingClientRect();

        let relativeScroll = (window.innerHeight - rect.top) / window.innerHeight;
        let opacity = 0.2 + (0.8 * relativeScroll);

        opacity = Math.min(Math.max(opacity, 0.2), 1);
        section.style.opacity = opacity;
    });
}

const resumeSection = document.querySelector(".resume");
const aboutmeSection = document.querySelector(".aboutme");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");
adjustOpacityOnScroll(resumeSection);
adjustOpacityOnScroll(aboutmeSection);
adjustOpacityOnScroll(projectsSection);
adjustOpacityOnScroll(contactSection);

let slideIndex = 1;
showSlides();

setInterval(() => {
    plusSlides(1);
}, 3500);

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
}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);
reveal();