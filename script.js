// var,Let e const = variaveis
// variavel serve para armazenar informaçoes

let nome = "Luan";
// string é um tipo de dado textual
// console.log(nome);

// array [] colchetes 
// array lista é uma variáveç especial onde podemos armazenar uma lista de dados

let compras = [
    "celular" ,
    "miojo" ,
    "pizza" ,
    "biscoito" ,
    "coca" ,
    "perfume" ,
    "carro" ,
    "energetico" ,
    "cafe" ,
    "RTX 4090" ,
    "pré treino" 

];

// no array temos um indice,vai iniciar do zero
console.log(compras) 

// console.log(compras[5])

let numeros = [ 1, 2, 3, 4, 5]
console.log(numeros);

// metodos de array
// forma de m,anipular dados

// adicionar numero 6 no array
numeros.push(6);
// push() adiciona/empurra no final da lista array

// adiciona o numero 0 no inicio:
numeros.unshift(0);
// adiciona ao inicio da array

numeros.pop();
// vai remover o ultimo item do array

console.log(numeros.join("-"))
