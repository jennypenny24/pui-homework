'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

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

/*new stuff*/

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

// Initially hide the text
$('.text span').css('opacity', 0);

// Loop through each letter
$('.text span').each(function(index) {
    // Delay the animation for each letter
    $(this).delay(200 * index).animate({opacity: 1}, 500); // Adjust timing as needed
});


document.addEventListener('DOMContentLoaded', function() {
  // Get all the <a> elements inside the navigation bar
  const navLinks = document.querySelectorAll('nav a');

  // Loop through each <a> element
  navLinks.forEach(function(navLink) {
    // Add click event listener to each <a> element
    navLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Get the target section's ID from the href attribute of the clicked link
      const targetId = navLink.getAttribute('href');

      // Use the smooth scroll function to scroll to the target section
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.toc a');

  links.forEach(link => {
      link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
      });
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const toc = document.getElementById('toc');
  const headings = document.querySelectorAll('.content h1');
  
  headings.forEach((heading) => {
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.setAttribute('href', '#' + heading.id);
    const listItem = document.createElement('li');
    listItem.appendChild(link);
    toc.querySelector('ul').appendChild(listItem);
  });
});












