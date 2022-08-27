// Selecionando os elementos da tela
const nt = document.querySelector("#nota");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {
    res.value = arredondamento(nt.value);
}

const arredondamento = (n) => {

    if (n<0 || n>100) {
        return "Nota inválida"
    } else {
        if (n < 38) {
            return "Aluno reprovado";
        } else {
            // se o resto de divisão for maior que 2, o número será arredondado para cima
            if (n%5 > 2) {
                return n - n%5 + 5;
            } else {
                return n - n%5;
            }
        }
    }

}

// Vitória Carvalho de Santana