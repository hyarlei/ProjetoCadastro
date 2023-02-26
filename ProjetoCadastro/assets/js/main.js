const inputs = document.querySelectorAll(".input");

// Função para focar no elemento
function focusFun() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

// Função para remover o foco do elemento
function blurFun() {
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

// Adicionando os ouvintes de eventos aos elementos selecionados
inputs.forEach(input => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", focusFun);

});