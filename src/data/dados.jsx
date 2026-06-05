const pegarImagem = (nomeDoArquivo) => {
  return new URL(`../assets/${nomeDoArquivo}`, import.meta.url).href;
};

export const procurados = [
  {
    id: 1,
    nome: "Monkey D. Luffy",
    tripulacao: "Piratas do Chapéu de Palha",
    recompensa: "3.000.000.000",
    imagem: pegarImagem("Monkey.png"),
    jaCapturado: false
  },
  {
    id: 2,
    nome: "Roronoa Zoro",
    tripulacao: "Piratas do Chapéu de Palha",
    recompensa: "320.000.000",
    imagem: pegarImagem("Zoro.png"),
    jaCapturado: false
  },
  {
    id: 3,
    nome: "Nami",
    tripulacao: "Piratas do Chapéu de Palha",
    recompensa: "66.000.000",
    imagem: pegarImagem("Nami.png"),
    jaCapturado: false
  },
  {
    id: 4,
    nome: "Usopp",
    tripulacao: "Piratas do Chapéu de Palha",
    recompensa: "200.000.000",
    imagem: pegarImagem("Usopp.png"),
    jaCapturado: false
  },
  {
    id: 5,
    nome: "Sanji",
    tripulacao: "Piratas do Chapéu de Palha",
    recompensa: "1.032.000.000",
    imagem: pegarImagem("Sanji.png"),
    jaCapturado: false
  },
  {
    id: 6,
    nome: "Trafalgar D. Water Law",
    tripulacao: "Piratas Coração",
    recompensa: "500.000.000",
    imagem: pegarImagem("Law.png"),
    jaCapturado: false
  },
  {
    id: 7,
    nome: "Shanks",
    tripulacao: "Piratas do Ruivo",
    recompensa: "4.048.900.000",
    imagem: pegarImagem("Shanks.png"),
    jaCapturado: false
  },
  {
    id: 8,
    nome: "Edward Newgate",
    tripulacao: "Piratas do Barba Branca",
    recompensa: "5.046.000.000",
    imagem: pegarImagem("Edward.png"),
    jaCapturado: false
  },
  {
    id: 9,
    nome: "Marshall D. Teach",
    tripulacao: "Piratas do Barba Negra",
    recompensa: "2.247.600.000",
    imagem: pegarImagem("BarbaNegra.png"),
    jaCapturado: false
  },
  {
    id: 10,
    nome: "Felipe Menegueli",
    tripulacao: "Piratas da T2M",
    recompensa: "? ? ? ? ?",
    imagem: pegarImagem("Menegueli.png"),
    jaCapturado: true
  }
];