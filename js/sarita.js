let sinTopping = document.getElementById("sin_topping");
let oreo = document.getElementById("oreo");
let kit_kat = document.getElementById("kit_kat");
let brownie = document.getElementById("brownie");
let lacasitos = document.getElementById("lacasitos");
let edukem = document.getElementById("edukem");
let logo = document.getElementById("logo");

logo.addEventListener("click", index);
sinTopping.addEventListener("click", () => precios("sin_topping"));
oreo.addEventListener("click", () => precios("oreo"));
kit_kat.addEventListener("click", () => precios("kit_kat"));
brownie.addEventListener("click", () => precios("brownie"));
lacasitos.addEventListener("click", () => precios("lacasitos"));
edukem.addEventListener("click", () => precios("edukem"));

function index()
{
    window.location = "../html/index.html";
}
function topping()
{
    window.location = "../html/sin_topping.html";
}
function oreoTopping()
{
    window.location = "../html/oreo.html";
}
function kitkatTopping()
{
    window.location = "../html/kit_kat.html";
}
function brownieTopping()
{
    window.location = "../html/brownie.html";
}
function lacasitosTopping()
{
    window.location = "../html/lacasitos.html";
}
function edukemTopping()
{
    window.location = "../html/edukem.html";
}

function precios(opcionUsuario)
{
    switch (opcionUsuario)
    {
        case "sin_topping":
            return topping();
        case "oreo":
            return oreoTopping();
        case "kit_kat":
            return kitkatTopping();
        case "brownie":
            return brownieTopping();
        case "lacasitos":
            return lacasitosTopping();
        case "edukem":
            return edukemTopping();
    }
}

