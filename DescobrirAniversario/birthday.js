const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date); //recebe o date do tipo String
  const today = dayjs(); //pega o dia atual

  const daysInYears = today.diff(birthday, "year"); //calcula a idade da pessoa em anos.

  const nextBirthday = birthday.add(daysInYears + 1, "year"); //calcula o proximo aniversario da pessoa
  const nextBirthdayInDays = nextBirthday.diff(today, "day"); //calcula quantos dias ate o proximo aniversario

  console.log(
    `Idade: ${daysInYears} \nProximo aniversario: ${nextBirthday.format(
      "DD/MM/YYYY"
    )}\nQuantos dias faltam: ${nextBirthdayInDays}`
  ); //exibe as informações
}

birthday("2003-01-17"); //idade
