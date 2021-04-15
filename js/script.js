var mybutton = document.getElementById("btn-scroll");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.animation = "fadeIn linear 7s;"
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
    
  }
}

function navFixed(){
    document.getElementById();
}