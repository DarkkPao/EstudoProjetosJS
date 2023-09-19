const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const cpfInput = document.getElementById("CPF");

const deleteInput = document.getElementById("delete");
const searchInput = document.getElementById("searchCPF");

const counterView = document.getElementById("registerCounter");
let counter = 0;

// Função de Cadastrar pessoa
function registerPerson() {
  if (!nameInput.value || !cpfInput.value || !addressInput.value) {
    alert("Preencha todos os campos");
    return;
  }

  localStorage.setItem("name" + cpfInput.value, nameInput.value);
  localStorage.setItem("cpf" + cpfInput.value, cpfInput.value);
  localStorage.setItem("adress" + cpfInput.value, addressInput.value);

  alert(
    "Nome: " +
      nameInput.value +
      "\nCPF: " +
      cpfInput.value +
      "\nEndereço: " +
      addressInput.value +
      "\nFoi cadastrado com sucesso!"
  );

  // Adiciona e atualiza o contador
  AddCounter();
  updateNumber();

  nameInput.value = "";
  cpfInput.value = "";
  addressInput.value = "";
}

// Função apaga pelo CPF
function deletePerson() {
  const removeCpf = deleteInput.value;
  const name = localStorage.getItem("name" + removeCpf);
  const cpf = localStorage.getItem("cpf" + removeCpf);
  const address = localStorage.getItem("adress" + removeCpf);

  if (!name || !cpf || !address) {
    alert("CPF não encontrado.");
    deleteInput.value = "";
    return;
  }

  alert(
    "Nome: " +
      name +
      "\nCPF: " +
      cpf +
      "\nEndereço: " +
      address +
      "\nFoi removido com sucesso!"
  );

  localStorage.removeItem("name" + removeCpf);
  localStorage.removeItem("cpf" + removeCpf);
  localStorage.removeItem("adress" + removeCpf);

  //Remove e atualiza o contador
  LessCounter();
  updateNumber();

  const styleUl = document.getElementById("personList");
  styleUl.style.display = "none";
  deleteInput.value = "";
}

//Função procura pessoa pelo CPF
function searchPerson() {
  const searchCpf = searchInput.value;
  const name = localStorage.getItem("name" + searchCpf);
  const cpf = localStorage.getItem("cpf" + searchCpf);
  const address = localStorage.getItem("adress" + searchCpf);

  if (!name || !cpf || !address) {
    alert("CPF não encontrado.");
    searchInput.value = "";
    return;
  }

  const nameLi = document.getElementById("nameLi");
  const cpfLi = document.getElementById("cpfLi");
  const addressLi = document.getElementById("addressLi");
  const styleUl = document.getElementById("personList");

  nameLi.innerText = "Nome: " + name;
  cpfLi.innerText = "CPF: " + cpf;
  addressLi.innerText = "Endereço: " + address;
  styleUl.style.display = "block";

  searchInput.value = "";
}

// Verifica se o contador está armazenado no localStorage
if (localStorage.getItem("counter")) {
  counter = parseInt(localStorage.getItem("counter"));
  updateNumber();
}

// Função para incrementar o número e atualizar o HTML
function AddCounter() {
  counter++;
  updateNumber();
  localStorage.setItem("counter", counter.toString());
}

// Função para decrementar o número e atualizar o HTML
function LessCounter() {
  counter--;
  updateNumber();
  localStorage.setItem("counter", counter.toString());
}

// Função para atualizar o número no HTML
function updateNumber() {
  counterView.innerText = counter.toString();
}

//Cadastra uma pessoa
document
  .getElementById("registerBtn")
  .addEventListener("click", registerPerson);
// Apaga uma pessoa pelo CPF
document.getElementById("deleteBtn").addEventListener("click", deletePerson);
// Procura uma pessoa e exibe
document.getElementById("searchBtn").addEventListener("click", searchPerson);
