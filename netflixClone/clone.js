const element =  document.querySelectorAll(".element")

element.forEach(function(items){

    const bottomItems = items.querySelector(".bottom")
   items.addEventListener("click" , function(event){
    bottomItems.classList.toggle("active")
   },false)
})