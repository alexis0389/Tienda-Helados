let volver = document.getElementById("volver");
let comprar = document.getElementById("comprar");
let mas = document.querySelector(".mas");
let menos = document.querySelector(".menos");
let precio = document.querySelector(".helado > figcaption");
let saludo = document.querySelector(".saludo > h1");
let nombreCompra = document.querySelector(".nombre > p");
let cantidadPedido = document.querySelector(".cantidad_pedido");
let logoT = document.getElementById("logo");

logoT.addEventListener("click", index);
volver.addEventListener("click", atras);
mas.addEventListener("click", aumentar);
menos.addEventListener("click", disminuir);


function index()
{
    window.location = "../index.html";
}

function atras()
{
    window.location = "../index.html";
}

var precioNuevo;

let cantidad = document.getElementById("numero");

function aumentar()
{
    console.log("Aquí inicia");
    let precioReal = 30;
    cantidad.value++;
    console.log("cantidad", cantidad.value);

    precioNuevo = precioReal * cantidad.value;
    precio.innerHTML = `Total de ${precioNuevo}.00 L.`;
    if (cantidad.value >= 2)
    {
        menos.style.visibility = "visible";
    }
}
function disminuir()
{
    let precioReal = 30;
    let cantidad = document.getElementById("numero");
    cantidad.value--;
    precioNuevo = precioNuevo - precioReal;
    precio.innerHTML = `Total de ${precioNuevo}.00 L.`;
    if (cantidad.value == 1)
    {
        menos.style.visibility = "hidden";
    }
}