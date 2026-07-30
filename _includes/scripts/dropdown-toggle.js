document.addEventListener("DOMContentLoaded", function () {
  const navTrigger = document.getElementById("nav-trigger");
  const langTrigger = document.getElementById("lang-trigger");

  // When opening the navigation menu, close the language menu
  if (navTrigger) {
    navTrigger.addEventListener("change", function () {
      if (this.checked && langTrigger) {
        langTrigger.checked = false;
      }
    });
  }

  // When opening the language menu, close the navigation menu
  if (langTrigger) {
    langTrigger.addEventListener("change", function () {
      if (this.checked && navTrigger) {
        navTrigger.checked = false;
      }
    });
  }
});