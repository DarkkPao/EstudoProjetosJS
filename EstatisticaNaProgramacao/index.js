const valores = [1, 3, 4, 16];

const mediaAritmetica = (...valores) => {
  if (valores.length === 0) {
    return 0;
  }

  const soma = valores.reduce((acumulado, num) => acumulado + num, 0);
  const media = soma / valores.length;
  return media;
};

console.log(`Media Aritmetica: ${mediaAritmetica(...valores)} `);

const mediaPonderada = (...entrada) => {
  const soma = entrada.reduce(
    (acumulado, { numero, peso }) => acumulado + numero * (peso ?? 1),
    0
  );
  const pesoSoma = entrada.reduce(
    (acumulado, entrou) => acumulado + (entrou.peso ?? 1),
    0
  );
  return soma / pesoSoma;
};

console.log(
  `Media Ponderada: ${mediaPonderada(
    { numero: 9, peso: 3 },
    { numero: 7 },
    { numero: 10, peso: 1 }
  )}`
);

const mediana = (...numeros) => {
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(numerosOrdenados.length / 2);

  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  }
  const primeiroMeio = numerosOrdenados[meio - 1];
  const segundoMeio = numerosOrdenados[meio];
  return mediaAritmetica(primeiroMeio, segundoMeio);
};

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`);

const moda = (...numeros) => {
  const quantidade = numeros.map((num) => [
    num,
    numeros.filter((n) => num === n).length,
  ]);
  quantidade.sort((a, b) => b[1] - a[1]);
  return quantidade[0][0];
};
console.log(
  `Moda: ${moda(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
