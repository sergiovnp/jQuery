var elemento = document.querySelector('h1');
console.log(elemento.innerHTML);

var timeout = setTimeout(function(){
    elemento.innerHTML='Hola desde JavaScript!';
}, 1000)