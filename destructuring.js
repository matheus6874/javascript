const numeroPares = [2,4,6];
const numerosImpares = [1,3,5];

//ao invés de ser um array de arrays ele cria um único array 
const numeros = [...numeroPares,...numerosImpares];

const [num1, num2,...outrosNumeros] = [1,2,3,4,5,6,7];

const [nome1 = 'Ma'] = [];

const pessoa = {
    nome: 'Ma',
    idade: 25
}

const pessoaComTelefone = 
    {...pessoa, telefone: 992017484};


const {idade} = pessoa;    
console.log(idade);

function imprimeDados({nome,idade}){
    console.log(nome,idade);
}

imprimeDados(pessoa);