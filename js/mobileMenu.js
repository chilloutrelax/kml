function openNav() {
  document.getElementById("mobileMenu").style.width = "200px";
};
  
function closeNav() {
  document.getElementById("mobileMenu").style.width = "0";
}

window.addEventListener('mouseup', function(event){
  var menu = document.getElementById('mobileMenu');

  if(event.target != menu) {
    menu.style.width = "0";
  };
});