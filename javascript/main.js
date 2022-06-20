const button = document.getElementById("btn");
const nav = document.querySelector(".hide-nav").classList;
button.addEventListener("click", function () {
  if (nav.contains("active")) {
    nav.remove("active");
  } else {
    nav.add("active");
  }
});

const element = document.querySelectorAll(".scroll");
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  for (let i = 0; i < element.length; i++) {
    const { offsetTop, classList } = element[i];
    if (offsetTop / 2 <= scrolled)
      if (!classList.contains("active-animation"))
        classList.add("active-animation");
  }
});
