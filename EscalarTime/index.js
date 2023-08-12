function addPlayer() {
  const position = document.getElementById("playerPosition").value;
  const name = document.getElementById("playerName").value;
  const number = document.getElementById("playerNumber").value;

  const confirmation = confirm(
    "Deseja escalar o jogador: " +
      name +
      ": " +
      number +
      " como: " +
      position +
      " ?"
  );

  if (confirmation) {
    const teamList = document.getElementById("player-list");
    const playerLi = document.createElement("li");
    playerLi.id = "player-" + number;
    playerLi.innerText = position + ", " + name + ": " + number;

    teamList.appendChild(playerLi);

    document.getElementById("playerPosition").value = "";
    document.getElementById("playerName").value = "";
    document.getElementById("playerNumber").value = "";
  } else {
    alert("Jogador: " + name + ": " + number + ", não foi escalado!");
  }
}

function removePlayer() {
  const number = document.getElementById("removePlayer").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Deseja remover o jogador: " + playerToRemove.innerText + " ?"
  );

  if (confirmation) {
    const teamList = document.getElementById("player-list");
    document.getElementById("removePlayer").value = "";
    teamList.removeChild(playerToRemove);
  } else {
    alert("O jogador: " + playerToRemove.innerText + " não foi removido!");
  }
}
