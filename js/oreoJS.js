let volverO = document.getElementById("volver");
let comprarO = document.getElementById("comprar");
let masO = document.querySelector(".mas");
let menosO = document.querySelector(".menos");
let precioO = document.querySelector(".helado > figcaption");
let logoO = document.getElementById("logo");

var inicio = 1;
var precioReal = 37;
var precioNuevo;

logoO.addEventListener("click", index);
volverO.addEventListener("click", atras);
comprarO.addEventListener("click", botonCompra);
masO.addEventListener("click", aumentar);
menosO.addEventListener("click", disminuir);

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
    let cantidad = document.getElementById("numero");
    cantidad.value = ++inicio;
    precioNuevo = precioReal * cantidad.value
    precioO.innerHTML = `Total de ${precioNuevo}.00 L.`;
    if (inicio >= 2)
    {
        menosO.style.visibility = "visible";
    }
}
function disminuir()
{
    let cantidad = document.getElementById("numero");
    cantidad.value = --inicio;
    precioNuevo = precioNuevo - precioReal;
    precioO.innerHTML = `Total de ${precioNuevo}.00 L.`;
    if (inicio == 1)
    {
        menosO.style.visibility = "hidden";
    }
}