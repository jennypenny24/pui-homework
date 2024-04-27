/*event listener*/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/*reveal items*/
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/*mobile nav bar*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/*cards*/
var cardToFlip = document.querySelectorAll('.thecard');

    for (var thecard of cardToFlip){
    thecard.addEventListener("click", toggleToFlip);
    }

function toggleToFlip() {
    this.classList.toggle("flipCard");
}

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

// initially hide the text
$('.text span').css('opacity', 0);

// loop through each letter
$('.text span').each(function(index) {
    // delay the animation 
    $(this).delay(200 * index).animate({opacity: 1}, 500); 
});

document.addEventListener('DOMContentLoaded', function() {

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(navLink) {
    
    navLink.addEventListener('click', function(event) {
     
      event.preventDefault();
      const targetId = navLink.getAttribute('href');

      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});














