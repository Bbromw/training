const button = document.getElementById("btn");
const nav = document.querySelector(".hide-nav").classList;
button.addEventListener("click", function(){
  if(nav.contains("active")){
    nav.remove("active")
  }
  else{
    nav.add("active")
  }
});

const element = document.querySelectorAll(".scroll")
const windowHeight = window.innerHeight
window.addEventListener("scroll", () => {
  for(let i = 0; i < element.length; i++){
    const elementTop = element[i].getBoundingClientRect().top
    console.log(elementTop)
    if(elementTop < windowHeight - 650){
      element[i].classList.add("active-animation")   
    }
    else
      element[i].classList.remove("active-animation")  
  }
})




