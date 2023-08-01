console.log("Hey! Welcome to my portfolio site!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
      var isMobileBreakpoint = window.innerWidth <= 641
  
    if (x.className === 'navtoggle' && isMobileBreakpoint) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 6000); 
}

// JavaScript code to console.log the URLs of the images
const firstImageElement = document.querySelector('div.col-md-6 picture:nth-child(1) img');
const firstImageURL = firstImageElement.src;
console.log('First Image URL:', firstImageURL);

const secondImageElement = document.querySelector('div.col-md-6 picture:nth-child(2) img');
const secondImageURL = secondImageElement.src;
console.log('Second Image URL:', secondImageURL);
