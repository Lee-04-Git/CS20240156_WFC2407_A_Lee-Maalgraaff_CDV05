// This function will handle the fade-in effect
document.addEventListener("DOMContentLoaded", function () {
    const projectsLink = document.querySelector('a[href="#projects"]');
    const projectCards = document.querySelectorAll('.project-card');
  
    // Initially hide the project cards by setting opacity to 0
    projectCards.forEach(card => {
      card.classList.add('fade-in');
    });
  
    // Add event listener to the "Projects" link to trigger fade-in
    projectsLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor link behavior
  
      // Scroll to the projects section
      document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  
      // Trigger fade-in effect
      setTimeout(function () {
        projectCards.forEach(card => {
          card.classList.add('visible');
        });
      }, 500); // Slight delay before starting fade-in
    });
  });
  