function pantalla(simbolo) {
console.log (simbolo)
var elementoPantalla = document.getElementById("pantalla")
var textoPantalla = elementoPantalla.innerHTML
elementoPantalla.innerHTML = textoPantalla + simbolo
}
function limpiar() {
var elementoPantalla = document.getElementById("pantalla")
elementoPantalla.innerHTML = ""
console.log("limpiar")
}
function igual() {
var elementoPantalla = document.getElementById("pantalla")
var textoPantalla = elementoPantalla.innerHTML
var resultado = eval(textoPantalla)
elementoPantalla.innerHTML = resultado 
}