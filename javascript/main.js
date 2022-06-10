const button = document.getElementById("btn");
const nav = document.querySelector(".hide-nav").classList;
button.addEventListener("click", function(){
  if(nav.contains("active")){
    nav.remove("active")
  }
  else{
    nav.add("active")
  }
})
