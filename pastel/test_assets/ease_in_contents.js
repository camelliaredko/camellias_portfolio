document.addEventListener("DOMContentLoaded", function() {
  const transitions = document.querySelectorAll('.transition');
  const observedElements = new Set();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observedElements.add(entry.target);
        observer.unobserve(entry.target); // Stop observing the element once it becomes visible
      }
    });
  }, {
    threshold: 0.1 // Adjust the threshold as needed
  });

  transitions.forEach(transition => {
    observer.observe(transition);
  });

  // Check if an element is already observed and add the 'show' class
  const checkObservedElements = () => {
    observedElements.forEach(element => {
      if (!element.classList.contains('show') && isElementInViewport(element)) {
        element.classList.add('show');
        observer.unobserve(element); // Stop observing the element once it becomes visible again
      }
    });
  };

  // Helper function to check if an element is in the viewport
  const isElementInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Add scroll event listener to check observed elements on scroll
  window.addEventListener('scroll', checkObservedElements);
});
