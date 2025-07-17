# Exercício ES6 - Filtro de Alunos

Este projeto contém um exercício prático de ES6 (ECMAScript 2015) focado em manipulação de arrays e objetos.

## Objetivos

1. ✅ Criar um array de objetos com nome e nota de alunos
2. ✅ Implementar função que retorna alunos com nota >= 6
3. ✅ Usar recursos do ES6 como arrow functions e filter

## Estrutura do Código

### Array de Alunos
```javascript
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 5.2 },
    // ... mais alunos
];
```

### Função de Filtro
```javascript
const alunosAprovados = (arrayAlunos) => {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
};
```

## Como Executar

```bash
node exercicio_es6.js
```

## Conceitos ES6 Utilizados

- **Arrow Functions**: Sintaxe mais concisa para funções
- **Array.filter()**: Método para filtrar elementos de um array
- **Destructuring**: Extração de propriedades de objetos
- **Template Literals**: Para formatação de strings
- **const/let**: Declarações de variáveis com escopo de bloco

## Exemplo de Saída

```
Lista completa de alunos:
[Array de 10 alunos com suas notas]

Alunos aprovados (nota >= 6):
[Array filtrado com apenas alunos aprovados]

Nomes dos alunos aprovados:
- Ana: 8.5
- Carlos: 7.8
- Eduardo: 9.1
- Fernanda: 6.0
- Helena: 8.9
- Julia: 7.2
```
