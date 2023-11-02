// Navigation links 
const navLinks = document.querySelectorAll(".navbarManus .nav-link");

function handleClick(e) {
  // Remove 'active' class from all navigation links
  navLinks.forEach(link => link.classList.remove("active"));

  // Add 'active' class to the clicked navigation link
  e.target.classList.add("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", handleClick);
});
// Banner automatic images 
const bannerImage = document.getElementById("banner-image");
const images = ["../images/index_banner1_quote_1.png", "../images/index_banner1_quote_2.png", "../images/index_banner1_quote_3.png","../images/index_banner1_quote_4.png", "../images/index_banner1_quote_5.png"];
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  bannerImage.style.opacity = 0;
  
  setTimeout(() => {
    bannerImage.src = images[currentImageIndex];
    bannerImage.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 10000); // Change image every 45 seconds
