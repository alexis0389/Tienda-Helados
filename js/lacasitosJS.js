let volverL = document.getElementById("volver");
let comprarL = document.getElementById("comprar");
let masL = document.querySelector(".mas");
let menosL = document.querySelector(".menos");
let precioL = document.querySelector(".helado > figcaption");
let logoL = document.getElementById("logo");

var inicio = 1;
var precioReal = 55;
var precioReal_2;

logoL.addEventListener("click", index);
volverL.addEventListener("click", atras);
comprarL.addEventListener("click", botonCompra);
masL.addEventListener("click", aumentar);
menosL.addEventListener("click", disminuir);

function index()
{
    window.location = "../html/index.html";
}

function atras()
{
    window.location = "../html/index.html";
}

function aumentar()
{

    if (inicio == 1)
    {
        menosL.style.visibility = "visible";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = ++inicio;
    precioReal_2 = precioReal * cantidad.value
    precioL.innerHTML = `Total de ${precioReal_2}.00 L.`;
}
function disminuir()
{
    if (inicio == 2)
    {
        menosL.style.visibility = "hidden";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = --inicio;
    precioReal_2 = precioReal_2 - precioReal;
    precioL.innerHTML = `Total de ${precioReal_2}.00 L.`;
}