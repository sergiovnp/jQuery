// var elemento = document.querySelector('h1');
// console.log(elemento.innerHTML);

// var timeout = setTimeout(function(){
//     elemento.innerHTML='Hola desde JavaScript!';
// }, 1000)


var elemento =jQuery('h1');
// console.log(elemento.text());
var timeout = setTimeout(function(){
    elemento.text('Ahora si es Jquery!');
    console.log(elemento.text());
}, 1000);
