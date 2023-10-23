export default function (ev) {
  const copyBtn = ev.currentTarget;
  if (copyBtn.innerText === "Copy") {
    copyBtn.innerText = "Copied!";
    copyBtn.classList.add("success");
    navigator.clipboard.writeText(document.querySelector("#result").value);

    // Aguarda 1 segundo (1000 milissegundos) para restaurar o texto
    setTimeout(function () {
      copyBtn.innerText = "Copy";
      copyBtn.classList.remove("success");
    }, 1000);
  }
}
