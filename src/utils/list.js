export function fakeList() {
  const fakeData = [
    {
      id: 1,
      name: "Mobile First",
      description: "Aula de Mobile First, com o professor Tiago",
    },
    {
      id: 2,
      name: "Fundamentos de React",
      description: "Aulas de Fundamentos de React, com o professor Armênio",
    },
    {
      id: 3,
      name: "Projeto de Bloco",
      description: "Aulas de Projeto de Bloco, com o professor Armênio",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
}
