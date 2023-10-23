import calculate from "./calculate.js";
import copy from "./copy.js";
import switchTheme from "./switchTheme.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// Todos os caracteres permitidos

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

// Limpar o Resultado
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  resultInput.value = "";
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();

  // Permite digitar apenas os caracteres permitidos
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  // Permite apagar o ultimo numero
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  // Executa calculate
  if (ev.key === "Enter") {
    calculate();
  }
});

// Calcula
document.getElementById("equal").addEventListener("click", calculate);

// Botão Copy
document.getElementById("copyToClipboard").addEventListener("click", copy);

// Troca o tema da aplicação
document.getElementById("themeSwitcher").addEventListener("click", switchTheme);
