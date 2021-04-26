var mybutton = document.getElementById("btn-scroll");
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.animation = "fadeIn linear 7s;"
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
    
  }
}
// ==== SCROLL HEADER STYLE ====
// var header = document.getElementById("myHeader");

// window.onscroll = function(){
//   navFixed()
// };
// function navFixed(){
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     header.style.position = "fixed";
//     header.style.height = "75px"; 
//     header.style.padding = "10px";
//     header.style.background = "#010812";
//     header.style.zIndex = "1";
//     header.style.transition = "all .5s ease 0s";
//   } 
//   else{
//     header.style.position = "absolute";
//     header.style.background = "none";
//     header.style.padding = "30px 10px";
//   }
// }