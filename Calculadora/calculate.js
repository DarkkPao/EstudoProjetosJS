export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value); //Eval avalia o codigo JS e executa o codigo

  resultInput.value = result;
  resultInput.classList.remove("error");
}
