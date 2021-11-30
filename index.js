let menuBtn = document.querySelector("[class='bars']");
let navLinks = document.querySelector(".nav-links");

// toggle the "show" class to show and hide the menu
function showMenu() {
    navLinks.classList.toggle("show");
}

menuBtn.addEventListener("click", showMenu);

//close dropdown menu when clicked outside
function closeMenu(e) {
let clickOutside = menuBtn.contains(e.target);
if (!clickOutside) {
    navLinks.classList.remove("show");
  }
}
document.addEventListener("click", closeMenu);