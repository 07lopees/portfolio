

    let dados = [

    // ABERTAS
    { codigo: "1", nome: "aberta carne" },
    { codigo: "4", nome: "aberta queijo" },
    { codigo: "84", nome: "zathar" },
    { codigo: "134", nome: "folhada carne" },
    { codigo: "133", nome: "folhada queijo" },

    // FECHADAS
    { codigo: "2", nome: "fechada carne" },
    { codigo: "408", nome: "fechada muçarela" },
    { codigo: "6", nome: "fechada ricota" },
    { codigo: "5", nome: "fechada escarola" },

    // INTEGRAIS
    { codigo: "402", nome: "integral carne" },
    { codigo: "406", nome: "integral ricota" },
    { codigo: "405", nome: "integral escarola" },

    // KIBES
    { codigo: "3", nome: "kibe frito" },
    { codigo: "121", nome: "kibe assado" },
    { codigo: "153", nome: "kibe recheado" },
    { codigo: "117", nome: "kibe cru P" },
    { codigo: "10", nome: "kibe cru M" },
    { codigo: "11", nome: "kibe cru G" },

    // SALADAS
    { codigo: "111", nome: "tabule P" },
    { codigo: "34", nome: "tabule M" },
    { codigo: "35", nome: "tabule G" },
    { codigo: "112", nome: "fatuche P" },
    { codigo: "123", nome: "fatuche M" },
    { codigo: "124", nome: "fatuche G" },
    { codigo: "113", nome: "mista P" },
    { codigo: "125", nome: "mista M" },
    { codigo: "126", nome: "mista G" },

    // PASTAS
    { codigo: "114", nome: "homus P" },
    { codigo: "28", nome: "homus M" },
    { codigo: "29", nome: "homus G" },
    { codigo: "116", nome: "coalhada P" },
    { codigo: "30", nome: "coalhada M" },
    { codigo: "31", nome: "coalhada G" },
    { codigo: "115", nome: "babaganuch P" },
    { codigo: "32", nome: "babaganuch M" },
    { codigo: "33", nome: "babaganuch G" },

    // PORÇÕES QUENTES
    { codigo: "118", nome: "charuto uva P" },
    { codigo: "36", nome: "charuto uva M" },
    { codigo: "37", nome: "charuto uva G" },
    { codigo: "119", nome: "charuto repolho P" },
    { codigo: "38", nome: "charuto repolho M" },
    { codigo: "39", nome: "charuto repolho G" },
    { codigo: "120", nome: "abobrinha recheada P" },
    { codigo: "40", nome: "abobrinha recheada M" },
    { codigo: "41", nome: "abobrinha recheada G" },
    { codigo: "154", nome: "cebola frita" },
    { codigo: "150", nome: "falafel P" },
    { codigo: "151", nome: "falafel M" },
    { codigo: "152", nome: "falafel G" },

    // GRELHADOS
    { codigo: "140", nome: "michui mignon P" },
    { codigo: "22", nome: "michui mignon M" },
    { codigo: "23", nome: "michui mignon G" },
    { codigo: "142", nome: "michui frango P" },
    { codigo: "24", nome: "michui frango M" },
    { codigo: "25", nome: "michui frango G" },
    { codigo: "141", nome: "michui misto P" },
    { codigo: "27", nome: "michui misto G" },
    { codigo: "20", nome: "kafta P" },
    { codigo: "143", nome: "kafta M" },
    { codigo: "21", nome: "kafta G" },
    { codigo: "132", nome: "hamburguer de kafta" },

    // BEBIDAS
    { codigo: "97", nome: "refrigerante lata" },
    { codigo: "100", nome: "refri 600ml" },
    { codigo: "60", nome: "refri 2LTS" },
    { codigo: "8", nome: "agua" },
    { codigo: "58", nome: "del valle lata" },
    { codigo: "59", nome: "del valle light" },
    { codigo: "83", nome: "cha gelado" },
    { codigo: "9", nome: "cerveja lata" },
    { codigo: "98", nome: "cerveja long neck" }

];


let dadosEmbaralhados = [];
let indice = 0;

let acertos = 0;
let erros = 0;



function embaralharLista(lista) {

    let copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        let temp = copia[i];
        copia[i] = copia[j];
        copia[j] = temp;

    }

    return copia;
}


function iniciarProva() {

    dadosEmbaralhados = embaralharLista(dados);

    indice = 0;

    acertos = 0;
    erros = 0;

    atualizarPlacar();

    mostrarPergunta();

}


function mostrarPergunta() {

    if (indice >= dadosEmbaralhados.length) {

        document.getElementById("pergunta").textContent =
            "🏁 Prova finalizada!";

        document.getElementById("resultado").textContent =
            "Clique em Reiniciar";

        return;

    }

    let modo = document.getElementById("modo").value;

    let item = dadosEmbaralhados[indice];

    if (modo === "nome") {
        document.getElementById("pergunta").textContent = item.nome;
    } else {
        document.getElementById("pergunta").textContent = item.codigo;
    }

    document.getElementById("resposta").value = "";

    document.getElementById("resultado").textContent = "";

}


function verificar() {

    let modo = document.getElementById("modo").value;

    let respostaUsuario =
        document.getElementById("resposta").value
        .toLowerCase()
        .trim();

    let item = dadosEmbaralhados[indice];

    let correta;

    if (modo === "nome") {
        correta = item.codigo.toLowerCase();
    } else {
        correta = item.nome.toLowerCase();
    }

    if (respostaUsuario === correta) {

        acertos++;

        document.getElementById("resultado").textContent =
            "✅ Acertou!";

    } else {

        erros++;

        document.getElementById("resultado").textContent =
            "❌ Errou! Resposta correta: " + correta;

    }

    atualizarPlacar();

}


function proximo() {

    indice++;

    mostrarPergunta();

}


function atualizarPlacar() {

    document.getElementById("placar").textContent =
        "Acertos: " + acertos +
        " | Erros: " + erros;

}


document
.getElementById("resposta")
.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        verificar();

    }

});


document
.getElementById("modo")
.addEventListener("change", mostrarPergunta);


iniciarProva();