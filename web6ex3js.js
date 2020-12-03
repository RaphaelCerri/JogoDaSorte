"use strict";
alert("Chute um Número e o programa irá dizer se é maior ou menor até você acertar e dirá a quantidade de tentativas")
window.onload = function () {
    let btn = document.getElementById("calcular");
    btn.onclick = function () {
        var pre, ale, tent = 0, x = true,
            pp;
        pre = parseInt(Number(document.getElementById("num").value));
        ale = Math.round(Math.random() * 100);
        while (x = true) {
            tent = tent + 1
            if (pre > ale) {
                document.getElementById("resultado").value = "Mais para baixo";
            } else {
                if (ale > pre) {
                    document.getElementById("resultado").value = "Mais para cima";
                } else {
                    if (ale == pre) {
                        document.getElementById("resultado").value = "Parabéns você acertou e o número de tentativas foram de: " + tent;
                    }
                }

            }
        }
        pp = prompt("voce quer jogar denovo?")
        if (pp == "n") {
            x = false
        } else {
            x = true
        }
    }
}
