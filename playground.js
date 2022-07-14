/*
function validaArray(arr, num){
  try{  
    if(!arr && !num) throw new ReferenceError("Envie os parametros");

    if (typeof arr !== 'object') throw new TypeError("O Array precisar ser do tipo Object");

    if (typeof arr !== 'number') throw new TypeError("O Array precisar ser do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho do numero ultrapassa os limites");
    
    return arr;
}

catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError!!");
        console.log(e.name);
        
    }else if(e instanceof TypeError){
        console.
    }

}

}*/
function quadrado(num){
    return num * num; 
}
console.log(quadrado(5,6));

function fatorial(n){
    if ((n == 0) || (n == 1))
      return 1;
    else
      return (n * fatorial(n - 1));
  }
  var a, b, c, d, e;
a = fatorial(1); // a recebe o valor 1
b = fatorial(2); // b recebe o valor 2
c = fatorial(3); // c recebe o valor 6
d = fatorial(4); // d recebe o valor 24
e = fatorial(5); // e recebe o valor 120
console.log(fatorial(/*11,10,9,8,7,6,*/5,4,3,2));


// As seguintes variáveis são definidas no escopo global
var num1 = 5,
    num2 = 5,
    nome = "Frankstain";

// Esta função é definida no escopo global
function multiplica() {
  return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore () {
  var num1 = 0,
      num2 = 0;

  function add() {
    return nome + " scored somado é =  "  +  (num1 + num2)  +  " Multiplicado é =  " +  (multiplica(num1,num2));
  }

  return add();
}

getScore(); // Retorna "Frankstain scored ..."

console.log(getScore());

function mul(n){
    return n * n; 
}

console.log(mul(5));


function foo(i) {
    if (i < 0)
       return;
    document.writeln('begin:' + i);
    foo(i - 1);
    document.writeln('end:' + i);
 }
 po = foo[3];
 console.log();
 

 function addSquares(a,b) {
    function square(x) {
       return x * x;
    }
    return square(a) + square(b);
 }
 a = addSquares(2,3); // retorna 13
 b = addSquares(3,4); // retorna 25
 c = addSquares(4,5); // retorna 41
 console.log(a + " = A  "+ b + " = B  " + c + " = C " );



 function fora(x) {
    function dentro(y) {
       return x + y;
    }
    return dentro;
 }
 fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
 result = fn_inside(5); // retorna 8
 
 result1 = fora(3)(5); // retorna 8

 //console.log("/ " + fn_inside);
 console.log("/ " + result);
 console.log("/ " + result1);

 