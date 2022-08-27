// Selecionando os elementos da tela
const l1 = document.querySelector("#lado1");
const l2 = document.querySelector("#lado2");
const l3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {
    res.value = tipo_triang(l1.value, l2.value, l3.value);
}

const tipo_triang = (lado1, lado2, lado3) => {
    const lados = [lado1, lado2, lado3];
    lados.sort();

    if (lados[0] == lados[1]) {
        if (lados[1] == lados[2]) { 
            return "Triângulo equilátero"; //3 lados iguais
        }
        else {
            return "Triângulo isósceles"; //2 lados iguais
        }
    }
    else {
        if (lados[1] == lados[2]) {
            return "Triângulo isósceles"; //2 lados iguais
        } else {
            return "Triângulo escaleno"; //nenhum lado igual
        }
    }
}

// Vitória Carvalho de Santana