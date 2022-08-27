// Selecionando os elementos da tela
const ax2 = document.querySelector("#coeficiente_a");
const bx = document.querySelector("#coeficiente_b");
const c = document.querySelector("#coeficiente_c");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {
    res.value = bhaskara(ax2.value, bx.value, c.value);
}

const bhaskara = (a, b, c) => {
    delta = b*b - 4*a*c;
    if (delta < 0) {
        return "Delta é negativo";
    }
    else {
        return [(-b+delta)/(2*a), (-b-delta)/(2*a)];
    }
}

// Vitória Carvalho de Santana