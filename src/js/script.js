// Array principal contendo os produtos do ecommerce

const produtos = [
    {
        // Objetos - {nome e preco} representando entidades
        nome: "GCX X11",
        preco: 8990,
        imagem: "./assets/img/moto1.jpg",
        perfil: "Explorador Urbano"
    },
    {
        nome: "Shineray SE 1",
        preco: 12990,
        imagem: "./assets/img/moto2.jpg",
        perfil: "Trabalhador Inteligente"
    },
    {
        nome: "Yadea Owin",
        preco: 15990,
        imagem: "./assets/img/moto3.jpg",
        perfil: "Lifestyle Premium"
    },
    {
        nome: "Voltz EV1",
        preco: 18990,
        imagem: "./assets/img/moto4.jpg",
        perfil: "Conectado Digital"
    },
    {
        nome: "Watts W125",
        preco: 22990,
        imagem: "./assets/img/moto5.jpg",
        perfil: "Motociclista Tradicional"
    }
];

// ===============================
// CAPTURANDO ELEMENTO DO HTML
// ===============================

// Local onde os cards serão criados / Manipulação em DOM
const conteiner = document.getElementById("container-produtos");

// ===============================
// Função para criar os Cards
// ===============================

function renderizarProdutos() {
    // Loop - Percorre todos os produtos/arrays
    produtos.forEach(produto => {

        // Criando uma div
        const card = document.createElement("div");
        // Adicionando uma classe
        card.classList.add("card");

        // Estrutura interna do Card
        // Pegando o preço do produto e formatando no padrão brasileiro.
        // <pan> Template String `texto ${variavel}`
        card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.perfil}</p>
        <span>
            R$ ${produto.preco.toLocaleString("pt-BR")}
        </span>

        <button>
            Comprar
        </button>
        
        `;
    })
}

// Executando a função
renderizarProdutos();
























// const produtos = [

//     {
//         nome: "Voltz EV1",
//         preco: 18990,
//         imagem: "./src/assets/img/moto1.jpg",

//         descricao: "Moto elétrica urbana com autonomia de 100km."
//     },

//     {
//         nome: "Watts W125",
//         preco: 21990,
//         imagem: "./src/assets/img/moto2.jpg",

//         descricao: "Modelo esportivo elétrico com alta eficiência."
//     },

//     {
//         nome: "Super Soco TC",
//         preco: 24990,
//         imagem: "./src/assets/img/moto3.jpg",

//         descricao: "Design futurista e excelente desempenho."
//     },

//     {
//         nome: "Horwin CR6",
//         preco: 27990,
//         imagem: "./src/assets/img/moto4.jpg",

//         descricao: "Modelo premium para viagens urbanas."
//     },

//     {
//         nome: "VMoto Stash",
//         preco: 31990,
//         imagem: "./src/assets/img/moto5.jpg",

//         descricao: "Moto elétrica esportiva de última geração."
//     }
// ]

// /*
// Seleciona o container onde os produtos
// serão renderizados dinamicamente
// */
// const container = document.getElementById("produtos-container")

// /*
// Percorre cada item do array para criar
// os cards dinamicamente usando DOM
// */
// produtos.forEach(produto => {

//     // Criação da estrutura principal do card
//     const card = document.createElement("div")

//     card.classList.add("card")

//     // Estrutura HTML interna do card
//     card.innerHTML = `

//         <img src="${produto.imagem}" alt="${produto.nome}">

//         <div class="card-conteudo">

//             <h2>${produto.nome}</h2>

//             <p>${produto.descricao}</p>

//             <span class="preco">
//                 R$ ${produto.preco.toLocaleString("pt-BR")}
//             </span>

//         </div>
//     `

//     // Insere o card dentro do container
//     container.appendChild(card)

// })