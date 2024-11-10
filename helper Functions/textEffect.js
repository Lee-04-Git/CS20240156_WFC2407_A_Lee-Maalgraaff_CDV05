// typeEffect.js

document.addEventListener("DOMContentLoaded", function () {
  // Targeting the Home section
  const homeSection = document.querySelector("#home");

  if (homeSection) {
    console.log("Home section found");

    const phrases = [
      "CodeSpace Student",
      "Web Developer"
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const typeContainer = homeSection.querySelector(".type-container");

    if (!typeContainer) {
      console.error("Type container not found in #home section");
      return;
    }

    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        typeContainer.textContent = currentPhrase.substring(0, currentCharIndex--);
        if (currentCharIndex < 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      } else {
        typeContainer.textContent = currentPhrase.substring(0, currentCharIndex++);
        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
        }
      }
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Start the typing effect
    typeEffect();

    // Placeholder for particles setup within the Home section
    const particleContainer = homeSection.querySelector(".particle-container");
    if (particleContainer) {
      particleContainer.innerHTML = "<!-- Particle effects go here -->";
    } else {
      console.warn("Particle container not found in #home section");
    }

    // Placeholder for Home2 content
    const home2Container = homeSection.querySelector("#home2");
    if (home2Container) {
      home2Container.innerHTML = "<p>Additional content from Home2 component would go here.</p>";
    } else {
      console.warn("Home2 container not found in #home section");
    }
  } else {
    console.error("Home section not found");
  }
});
