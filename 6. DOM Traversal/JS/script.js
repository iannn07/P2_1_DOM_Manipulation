const close = document.querySelectorAll(".close");

// Rather than use traditional for, use this instead
close.forEach(function(event){
  event.addEventListener("click", function(e){
    e.target.parentElement.style.display = "none";
  })
})