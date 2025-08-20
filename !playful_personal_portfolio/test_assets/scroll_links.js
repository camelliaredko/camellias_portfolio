// Get all the scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');

// Add click event listener to each scroll link
scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Get the target section
    const targetSection = document.querySelector(this.getAttribute('href'));

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
