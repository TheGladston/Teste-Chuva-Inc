// Dropdown Language Button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ##################################


// Read More Accordion

function readMore() {
    var pontos = document.getElementById("pontos");
    var verMais = document.getElementById("ver-mais");
    var btnVerMais = document.getElementById("btnVerMais");

    if(pontos.style.display === "none") {
        pontos.style.display = "inline";
        verMais.style.display = "none";
        btnVerMais.innerHTML = "ver mais";
    }else {
        pontos.style.display = "none";
        verMais.style.display = "inline";
        btnVerMais.innerHTML = "ver menos";
    }
}