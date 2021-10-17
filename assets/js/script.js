// Dropdown Language Button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        verMais.style.display = "none";
        btnVerMais.innerHTML = "ver mais";
    } else {
        pontos.style.display = "none";
        verMais.style.display = "inline";
        btnVerMais.innerHTML = "ver menos";
    }
}

// ##################################

// Show Form criarTopico

function criarTopico() {
    var criarTopico = document.getElementById("criarTopico");
    var discussoesWrap = document.getElementById("discussoesWrap");
    var formCriarTopico = document.getElementById("formCriarTopico");
    var topicoEnviado = document.getElementById("topicoEnviado");
    var feedbackAutores = document.getElementById("feedback-autores");
    var feedbackWait = document.getElementById("feedback-wait");

    criarTopico.style.display = "none";
    discussoesWrap.style.display = "none";
    formCriarTopico.style.display = "inline";
    topicoEnviado.style.display = "none";
    feedbackAutores.style.display = "none";
    feedbackWait.style.display = "none";
}

// ##################################

// Show topicoEnviado Section

function topicoEnviado() {
    var formCriarTopico = document.getElementById("formCriarTopico");
    var topicoEnviado = document.getElementById("topicoEnviado");
    var feedbackAutores = document.getElementById("feedback-autores");
    var feedbackWait = document.getElementById("feedback-wait");
    var criarTopico = document.getElementById("criarTopico");

    formCriarTopico.style.display = "none";
    topicoEnviado.style.display = "inline";
    feedbackAutores.style.display = "block";
    feedbackWait.style.display = "inline";
    criarTopico.style.display = "block";
    criarTopico.innerHTML = "criar novo tópico";

}

// ##################################

// Input tag <strong></strong> and <em></em> in textarea

function addTag(tag) {
    var selection = '';
    var textarea = document.getElementById('inputConteudo');

    if (textarea.selectionStart === undefined) {
        var textrange = document.selection.createRange();
        var selection = textrange.text;

        if (selection == '') {
            alert('Sem texto selecionado.');
        }

        else {
            textarea.focus();
            textrange.text = '<' + tag + '>' + selection + '</' + tag + '>';
        }
    }

    else {
        if (textarea.selectionStart != textarea.selectionEnd) {
            selection = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

            var selection_start = textarea.value.substring(0, textarea.selectionStart);
            var selection_end = textarea.value.substring(textarea.selectionEnd);
        }

        if (selection == '') {
            alert('Sem texto selecionado.');
        }

        else {
            textarea.value = selection_start + '<' + tag + '>' + selection + '</' + tag + '>' + selection_end;
        }
    }

}

// ##################################
var liked = false;
var likeCount = 1;

function like() {
    // var contador = document.getElementById("likeIndex").innerHTML;
    if (liked === false) {
        liked = true;
        document.getElementById("likeIndex").innerHTML = likeCount + 1;
        likeCount++;
    } else {
        liked = false;
        document.getElementById("likeIndex").innerHTML = likeCount - 1;
        likeCount--;
    }
}