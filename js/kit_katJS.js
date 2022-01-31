let volverK = document.getElementById("volver");
let comprarK = document.getElementById("comprar");
let masK = document.querySelector(".mas");
let menosK = document.querySelector(".menos");
let precioK = document.querySelector(".helado > figcaption");
let logoK = document.getElementById("logo");

var inicio = 1;
var precioReal = 50;
var precioReal_2;

logoK.addEventListener("click", index);
volverK.addEventListener("click", atras);
comprarK.addEventListener("click", botonCompra);
masK.addEventListener("click", aumentar);
menosK.addEventListener("click", disminuir);

function index()
{
    window.location = "../index.html";
}

function atras()
{
    window.location = "../index.html";
}

function aumentar()
{

    if (inicio == 1)
    {
        menosK.style.visibility = "visible";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = ++inicio;
    precioReal_2 = precioReal * cantidad.value
    precioK.innerHTML = `Total de ${precioReal_2}.00 L.`;
}
function disminuir()
{
    if (inicio == 2)
    {
        menosK.style.visibility= "hidden";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = --inicio;
    precioReal_2 = precioReal_2 - precioReal;
    precioK.innerHTML = `Total de ${precioReal_2}.00 L.`;
}