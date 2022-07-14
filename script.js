/*
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
          admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Angelo', 'Vendedor');
usuarios.set('Lais', 'Admin');
usuarios.set('Rambo', 'User');
usuarios.set('Joselito', 'Trambiqueiro');
usuarios.set('Elvis Presley', 'Admin');
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany','Admin');

console.log(getAdmins(usuarios));

*/
/*
const meuArrey =  [30,30,31,32,32,5,8,223,5,3049,346,3034,2049];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    /*return mySet; Retornando um Set*/
   /* return[...mySet];/*Criando um array vazio usando spread

}*/

/*
console.log(valoresUnicos(meuArrey));  */


/*
const meuArray = [1,1,2,3,4,5,6,7,8,2,1];
const mySet = new Set(meuArray);  

mySet.add(9);
mySet.add(10);
mySet.add(11);
mySet.add(12);
mySet.add(13);
mySet.add(14);
mySet.add(15);
mySet.add(16);
mySet.add(17);
mySet.add(21)
mySet.delete(17);

console.log(mySet.has(17)); 
/*console.log(meuArray); 
console.log(mySet.size);

*/

var meucar = {make: "Chevrolet", model: "Opala Comodoro", year: 1979};

var x, y, z;

x = meucar.year;
y = meucar.model;
z = meucar.make;
console.log(x);
console.log(y);
console.log(z);


var square = function(numero) {return numero * numero};
var x = square(4) //x recebe o valor 16

console.log(x);

var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(fatorial(3));