// change the navbar color on the scoll event
document.addEventListener("DOMContentLoaded", function () {
    
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        }
        
    });
    
});
  
// Change the color of the active nav-link
function addHighlightedClass(event) {

  var target = event.currentTarget;
  if (window.previewHighlited)
    window.previewHighlited.classList.remove("active");

  target.classList.add("active");
  window.previewHighlited = target;
  
}