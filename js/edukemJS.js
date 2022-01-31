let volverE = document.getElementById("volver");
let comprarE = document.getElementById("comprar");
let masE = document.querySelector(".mas");
let menosE = document.querySelector(".menos");
let precioE = document.querySelector(".helado > figcaption");
let regalia = document.querySelector(".cono > figcaption");
let logoE = document.getElementById("logo");

var inicio = 1;
var precioReal = 65;
var precioReal_2;

logoE.addEventListener("click", index);
volverE.addEventListener("click", atras);
comprarE.addEventListener("click", botonCompra);
masE.addEventListener("click", aumentar);
menosE.addEventListener("click", disminuir);

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
        menosE.style.visibility = "visible";
    }
    if (inicio == 4)
    {
        masE.style.visibility = "hidden";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = ++inicio;
    precioReal_2 = precioReal * cantidad.value
    precioE.innerHTML = `Total de ${precioReal_2}.00 L.`;
    regalia.innerHTML = `Cono de Cocolate (¡GRATIS!) X${cantidad.value}`;
}
function disminuir()
{
    if (inicio == 2)
    {
        menosB.style.visibility = "hidden";
    }
    if (inicio == 5)
    {
        masB.style.visibility = "visible";
    }
    let cantidad = document.getElementById("numero");
    cantidad.value = --inicio;
    precioReal_2 = precioReal_2 - precioReal;
    precioB.innerHTML = `Total de ${precioReal_2}.00 L.`;
    regalia.innerHTML = `Cono de Cocolate (¡GRATIS!) X${cantidad.value}`;
}