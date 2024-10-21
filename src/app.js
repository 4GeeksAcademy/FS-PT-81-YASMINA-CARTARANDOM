/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  console.log("evento onload");
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "j",
    "k",
    "Q",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];

  const aleatorioPalos = palos[Math.floor(Math.random() * palos.length)];
  const aleatorioValores = valores[Math.floor(Math.random() * valores.length)]; //write your code hereç
  document.querySelector(".card-paloarriba").innerText = aleatorioPalos;
  document.querySelector(".card-valor").innerText = aleatorioValores;
  document.querySelector(".card-paloabajo").innerText = aleatorioPalos;
  if (aleatorioPalos == "♦" || aleatorioPalos == "♥") {
    document.querySelector(".card-paloarriba").classList.add("red");
    document.querySelector(".card-paloabajo").classList.add("red");
    document.querySelector(".card-valor").classList.add("red");
  }
};
