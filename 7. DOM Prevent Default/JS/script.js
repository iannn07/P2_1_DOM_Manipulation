const close = document.querySelectorAll(".close");

// Rather than use traditional for, use this instead
close.forEach(function(event){
  event.addEventListener("click", function(e){
    e.target.parentElement.style.display = "none";
    
    // Prevent Default allows us to prevent any default action of an element
    e.preventDefault();
  })
})