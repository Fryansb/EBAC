// Exercício ES6 - Array de Alunos e Filtro por Nota

// 1. Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 5.2 },
    { nome: "Carlos", nota: 7.8 },
    { nome: "Diana", nota: 4.3 },
    { nome: "Eduardo", nota: 9.1 },
    { nome: "Fernanda", nota: 6.0 },
    { nome: "Gabriel", nota: 3.7 },
    { nome: "Helena", nota: 8.9 },
    { nome: "Igor", nota: 5.8 },
    { nome: "Julia", nota: 7.2 }
];

// 2. Função que retorna apenas os alunos com nota >= 6
const alunosAprovados = (arrayAlunos) => {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
};

// Testando a função
console.log("Lista completa de alunos:");
console.log(alunos);

console.log("\nAlunos aprovados (nota >= 6):");
const aprovados = alunosAprovados(alunos);
console.log(aprovados);

// Exibindo apenas os nomes dos alunos aprovados
console.log("\nNomes dos alunos aprovados:");
aprovados.forEach(aluno => console.log(`- ${aluno.nome}: ${aluno.nota}`));

// Usando arrow function de forma mais concisa
const getAlunosAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

// Exemplo de uso alternativo com destructuring
const exibirAlunosAprovados = (arrayAlunos) => {
    const aprovados = arrayAlunos.filter(({ nota }) => nota >= 6);
    return aprovados.map(({ nome, nota }) => `${nome} - Nota: ${nota}`);
};

console.log("\nUsando destructuring:");
console.log(exibirAlunosAprovados(alunos));
