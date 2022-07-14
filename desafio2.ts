enum profissao {
    Padeiro,
    Atriz
}

type dados = {
    nome: string,
    idade: number,
    profissao: profissao
}

let pessoa1: dados = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz,
}

let pessoa2: dados = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa3: dados = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
}

let pessoa4: dados = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}