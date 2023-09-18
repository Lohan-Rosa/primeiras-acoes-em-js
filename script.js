//let array = ['string', 21, 'name', true, ['array2', 21, 2 + 8], ['array3'], ['array4']];

/*array.push(['array5'], ['array6']);
array.pop(array);*/

//console.log(array.indexOf(true));

// array.forEach(function(item, index){console.log(index, item)});

/*const nome = 'Lohan';
const age = 22;
const sex = 'Masculino';

let object = {string: 'Name', number: 1, boolean: true, user: [nome, age, sex], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.user);*/

/*const name = 'Lohan Rosa';
const age = 21;
const sex = 'Masculino';
const CPF = 949055877435;
const id = 273;
const RG = 7489976654

let object = {string: 'Nome', string: 'Idade', number: 21, user: ['Nome', 'Id']};
let array = [[name, age, id, CPF, sex, RG]];

/*for (let teste = 0; teste < array.length; teste++) {
    console.log(teste);
}

for (a of array){
    console.log(a);
}*/

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro! - Operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira um valor:'));
        let n2 = Number(prompt('Insira um segundo valor:'));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`);
            novaOperacao();
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!!');
            } else {
                alert('Digite uma operação válida.');
                novaOperacao();
            }
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();