let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Exercício 1
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// Exercício 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

// Exercício 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());


// Aula de 07/03/2025

/*
Exercício 1
Crie uma interface chamada Carro, que contenha as seguintes propriedades:
marca (string)
modelo (string)
ano (number)
motor (opcional, string)
Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
*/
interface Carros {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carros = {
    marca: "yamaha",
    modelo: "nmax",
    ano: 2020
};
console.log(meuCarro)

/*
Exercício 2
Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
Depois, implemente essa função e teste com diferentes valores.
*/
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplica: Multiplicacao = (x, y) => x * y;
console.log(multiplica(5,10));

/*
Exercício 3
Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
Teste a função com um array de números e um array de strings.
*/

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const listaNumero: number[] = [10,9,8,7,6,5,4,3,2,1];
console.log(inverterArray(listaNumero));

const listaPalavras: string[] = ["a","b","c","d"];
console.log(inverterArray(listaPalavras));

/*
Exercício 4
Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
*/
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class Usuario implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

// Teste da implementação
const pessoa = new Usuario();
pessoa.salvar({ nome: "Wesley", email: "wesley@hotmail.com" });
pessoa.salvar({ nome: "Eduardo", email: "eduardo@hotmail.com" });
console.log("Lista de usuários:", pessoa.obterTodos());

/*
Exercício 5
Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
*/

type RespostaServidor = string | boolean {
    function resposta (resposta: RespostaServidor) {
        console.log(`Respondendo o servidor com RespostaServidor: ${resposta}`)
    }
};



/*
Exercício 6
Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
*/

type Pessoa = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
    salario: number;
};
type FuncionarioDetalhado = Pessoa & Funcionario;
const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};