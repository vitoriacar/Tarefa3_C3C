// Selecionando os elementos da tela
const num = document.querySelector("#numero");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {
    res.value = luidymoura(num.value);
}

const luidymoura = (n) => {
    lista = [];
    for (let i = 1; i <= n; i++) {
        if (i%5 == 0 && i%9 == 0) {
            lista[i-1] = "LuidyMoura";
        } else if (i%5 == 0) {
            lista[i-1] = "Luidy";
        } else if (i%9 == 0) {
            lista[i-1] = "Moura";
        } else {
            lista[i-1] = i;
        }
    }
    return lista;
}

// Vitória Carvalho de Santana