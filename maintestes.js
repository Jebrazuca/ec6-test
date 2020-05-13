
// Exemplo de Classes 
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
    
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();



//Exemplos Array

const arr = [1, 3, 4, 5, 8 , 9];

const newArr = arr.map(function(item) {
    return item * 2;
})

console.log("Teste de MAP: " + newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log("Teste de Reduce: " + sum);


const filter = arr.filter(function(item) {
    return item % 2 !== 0;
});

console.log("Teste de Filter: " + filter);


const find = arr.find(function(item) {
    return item === 1;
})

console.log("Teste de Find: "+ find);


//Exemplos de Arrow Functions

//const arr = [1, 3, 4, 5, 6];

/*
Metodo que pode ser reduzido no Arrow Function
const newArr = arr.map(function(item) {
    return item * 2;
})
const newArr = arr.map(item => item * 2);

console.log(newArr);
*/



function soma(a, b) {
    return a + b;
}

//Exemplo usando a função acima como Arrow Fuctions, usando com valores padrões
const soma2 = (a = 3 , b = 8 ) => a + b;



console.log("Soma: "+ soma(1, 2));
console.log("Soma: " + soma2(2, 2));


// Exemplos para Desestruturação

const usuario = {
    nome: 'Jefferson',
    idade: 28,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
// Desestruturação

const { nome, idade} = usuario;

console.log(nome);
console.log(idade);


// function mostraNome(usuario) {
//      console.log(usuario.nome);
//  }
function mostraNome({nome}) {
    console.log(nome, idade);
}

mostraNome(usuario);


// Utilizando o REST E SPREAD

//REST

const usuario2 = {
    nome2: 'Adriana',
    idade: 40,
    empresa: 'Escola'
};

const { nome2, ...resto} = usuario2; // usando a desestruturação com o REST

console.log(nome2);
console.log(resto);


const arr12 = [1, 2, 3, 4];

const [a, b, ...c] = arr12;

console.log(a);
console.log(b);
console.log('Operator REST ' + c + ' Resto dos valores');


// Exemplo REST na função
function somar(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somar(3, 2, 5));


// SPREAD

const arrNovo1 = [1, 2, 3];
const arrNovo2 = [4, 5, 6];

const arrNovo3 = [...arrNovo1, ...arrNovo2];

console.log('Exemplo de SPREAD ' + arrNovo3);


const usuario3 = {...usuario2, nome2: 'Jacob', local: 'Casa'};

console.log(usuario3);


// Template Literals
const name = 'Jeff';
const age = 28;

//console.log('Hello World, My name is ' + name + ' and i have ' + age + 'years old.');

console.log(`Hello, My name is ${name} and i have ${age} years old.`)