let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector("header .navbar");

console.log(menuIcon);

menuIcon.onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};

let sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".form-container form", { delay: 200, origin: "left" });
sr.reveal(".heading", { delay: 800, origin: "top" });
sr.reveal(".ride-container .box", { delay: 800, origin: "top" });
sr.reveal(".service-container .box", { delay: 800, origin: "top" });
sr.reveal(".about-container ", { delay: 600, origin: "top" });
