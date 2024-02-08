function open_close_nav_Burger() {
  let h = document.getElementById('drop_down_contentt')

  if (h.style.height === '' || h.style.height == '0' || h.style.height == '0px') {
    h.style.height = '100%';
  }
  else {
    h.style.height = '0';
  }
}

function animation(e) {
  e.classList.toggle('change');
}

//--- movie poster animation code---
let slideIndex = 1;
showSlides(slideIndex);

//Next and prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//dots-control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//function showslides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlide');
  let dot = document.getElementsByClassName('dot');

  if (n > slides.length){slideIndex = 1;}

  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = 'block';
  dot[slideIndex - 1].className += ' active';

}
setInterval(function () {
  plusSlides(1);
}, 3000);


// ----footer drop-down opening and closing code--
document.addEventListener('DOMContentLoaded', function() {
  const footerLinks = document.querySelectorAll('.footer-link');

  footerLinks.forEach(function(footerLink) {
    footerLink.addEventListener('click', function(event) {
      const dropdown = this.querySelector('.footer-link-dropdown');
      toggleDropdown(dropdown);
    });
  });

  function toggleDropdown(dropdown) {
    if (dropdown.style.height === '' || dropdown.style.height === '0' || dropdown.style.height === '0px') {
      dropdown.style.height = '100%';
    } else {
      dropdown.style.height = '0';
    }
  }
});