let volverB = document.getElementById("volver");
let comprarB = document.getElementById("comprar");
let masB = document.querySelector(".mas");
let menosB = document.querySelector(".menos");
let precioB = document.querySelector(".helado > figcaption");
let logoB = document.getElementById("logo");

var inicio = 1;
var precioReal = 45;
var precioReal_2;

logoB.addEventListener("click", index);
volverB.addEventListener("click", atras);
comprarB.addEventListener("click", botonCompra);
masB.addEventListener("click", aumentar);
menosB.addEventListener("click", disminuir);

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
        menosB.style.visibility = "visible";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = ++inicio;
    precioReal_2 = precioReal * cantidad.value
    precioB.innerHTML = `Total de ${precioReal_2}.00 L.`;
}
function disminuir()
{
    if (inicio == 2)
    {
        menosB.style.visibility = "hidden";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = --inicio;
    precioReal_2 = precioReal_2 - precioReal;
    precioB.innerHTML = `Total de ${precioReal_2}.00 L.`;
}