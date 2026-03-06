const inputBox = document.getElementById("caixaTexto");
const keyboard = document.getElementById("teclado");

// Mostrar o teclado ao clicar no input
inputBox.addEventListener("focus", () => {
    keyboard.style.display = "flex"; /* Garante que ele se ajuste corretamente */
    keyboard.style.flexDirection = "column"; /* Mantém as linhas alinhadas */
});

// Esconder o teclado ao clicar fora
document.addEventListener("click", (event) => {
    if (!inputBox.contains(event.target) && !keyboard.contains(event.target)) {
        keyboard.style.display = "none";
    }
});

function addCharacter(char) {
    inputBox.value += char;
}

function deleteCharacter() {
    inputBox.value = inputBox.value.slice(0, -1);
}
