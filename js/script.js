
const navbar = document.querySelector('.navbar-custom');
document.addEventListener('scroll', () => {
 navbar.classList.add('scrolled');
});
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
link.addEventListener('click', function() {
          // Hapus kelas aktif dari semua tab
navLinks.forEach(nav => nav.classList.remove('active'));
          
          // Tambahkan kelas aktif ke tab yang diklik
          this.classList.add('active');
          navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Mendapatkan ID target
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Menghitung posisi scroll dengan offset untuk navbar sticky
    const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    // Melakukan scroll ke target dengan smooth behavior
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
        });});});});});
const typedTextSpan = document.querySelector("#typing-text");
const textArray = ['Let me Introduce Myself',"I'm Batman", "Boboiboy", "I'm Darma Al Gani","Freedom"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  setTimeout(type, newTextDelay + 250);
});

document.addEventListener("contextmenu", (e) => e.preventDefault()); // Disable right-click
document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault(); // Disable F12 and Ctrl+Shift+I
  }
});
