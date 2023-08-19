function creatLabel(text, htmlFor) {
  const newLabel = document.createElement("label");
  newLabel.htmlFor = htmlFor;
  newLabel.innerText = text;
  return newLabel;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const devForm = document.getElementById("devForm");
const stackTech = document.getElementById("stackTech");
const addTechBtn = document.getElementById("addTechBtn");
const devs = [];
let techRow = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackTech = document.getElementById("stackTech");

  const newLi = document.createElement("li");
  const newLiIndex = techRow;
  techRow++;
  newLi.id = "li-" + newLiIndex;
  newLi.className = "newLi";

  const techNameLabel = creatLabel("Nome: ", +"techName-" + newLiIndex);
  const techNameInput = createInput("techName-" + newLiIndex, null, "techName");

  const expLabel = creatLabel("Experiência: ");

  //Radio1
  const idExpRadio1 = "expRadio-" + newLiIndex + ".1";
  const expRadio1 = createInput(
    idExpRadio1,
    "0-2 anos",
    "expRadio-" + newLiIndex,
    "radio"
  );
  const expLabel1 = creatLabel("0-2 anos", idExpRadio1);

  //Radio2
  const idExpRadio2 = "expRadio-" + newLiIndex + ".1";
  const expRadio2 = createInput(
    idExpRadio2,
    "0-2 anos",
    "expRadio-" + newLiIndex,
    "radio"
  );
  const expLabel2 = creatLabel("3-4 anos", idExpRadio2);

  //Radio3
  const idExpRadio3 = "expRadio-" + newLiIndex + ".1";
  const expRadio3 = createInput(
    idExpRadio3,
    "0-2 anos",
    "expRadio-" + newLiIndex,
    "radio"
  );
  const expLabel3 = creatLabel("5+ anos", idExpRadio3);

  //Remove Li
  const removeLiBtn = document.createElement("button");
  removeLiBtn.type = "button";
  removeLiBtn.innerText = "Remover";

  removeLiBtn.addEventListener("click", function () {
    stackTech.removeChild(newLi);
  });

  //Exibe na tela
  newLi.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeLiBtn
  );
  stackTech.append(newLi);
});

devForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameDev = document.getElementById("name");
  const newLi = document.querySelectorAll(".newLi");

  let technologies = [];
  newLi.forEach(function (li) {
    const techName = document.querySelector(
      "#" + li.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + li.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { nameDev: nameDev.value, technologies: technologies };
  devs.push(newDev);
  alert("Dev cadastrado com sucesso!");

  nameDev.value = "";
  newLi.forEach(function (li) {
    li.remove();
  });

  console.log(devs);
});
