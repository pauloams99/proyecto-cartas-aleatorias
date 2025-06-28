const figura = ["♦", "♥", "♠", "♣"];
const numero = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

let contenedorFigura1 = document.querySelector("#contenedorFigura1");
let contenedorFigura2 = document.querySelector("#contenedorFigura2");
let contenedorNumero = document.querySelector("#contenedorNumero");

function obtenerFiguraAleatoria() {
  const figuraAleatoria = Math.floor(Math.random() * figura.length);
  return figura[figuraAleatoria];
}

const figuraSeleccionada = obtenerFiguraAleatoria();

contenedorFigura1.innerHTML = figuraSeleccionada;
contenedorFigura2.innerHTML = figuraSeleccionada;

//--- sentencio los palos que deben ser rojos y establezco un ternario que diga cuales deben serlo, en este caso: corazon y diamante.
const esRojo = figuraSeleccionada === "♥" || figuraSeleccionada === "♦";
const colorClass = esRojo ? "red-suit" : "black-suit";

//--- aqui hago un array que se itera para evitar escribir mas codigo y ejecuta sobre las 3 variables a la vez el codigo,
// que en este caso lo que deseamos hacer es que los 3 contenedores cambien de color a la vez segun el palo (corazon o diamante),
// entonces, lo primero que hacemos es remover las clases preexistentes para evitar errores, y luego aplicamos nuestra
// constante colorCLass que decidira si es rojo o negro

[contenedorFigura1, contenedorFigura2, contenedorNumero].forEach((el) => {
  el.classList.remove("red-suit", "black-suit");
  el.classList.add(colorClass);
});

function obtenerNumeroAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * numero.length);
  return numero[numeroAleatorio];
}
obtenerNumeroAleatorio();
console.log(obtenerNumeroAleatorio());

contenedorNumero.innerHTML = obtenerNumeroAleatorio();
