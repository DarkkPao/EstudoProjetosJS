const main = document.querySelector("main");
const root = document.querySelector(":root");
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

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value); //Eval avalia o codigo JS e executa o codigo

  resultInput.value = result;
  resultInput.classList.remove("error");
}

// Botão Copy
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const copyBtn = ev.currentTarget;
    if (copyBtn.innerText === "Copy") {
      copyBtn.innerText = "Copied!";
      copyBtn.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);

      // Aguarda 1 segundo (1000 milissegundos) para restaurar o texto
      setTimeout(function () {
        copyBtn.innerText = "Copy";
        copyBtn.classList.remove("success");
      }, 1000);
    }
  });

// Troca o tema da aplicação
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
