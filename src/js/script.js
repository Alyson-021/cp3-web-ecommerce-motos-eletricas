// =================================================
// Array principal contendo os produtos do ecommerce
// =================================================

const produtos = [
    {
        nome: "GCX X11",
        preco: 8990,
        imagem: "./src/assets/img/moto01.jpg",
        perfil: "Explorador Urbano"
    },

    {
        nome: "Shineray SE 1",
        preco: 12990,
        imagem: "./src/assets/img/moto02.jpg",
        perfil: "Trabalhador Inteligente"
    },

    {
        nome: "Yadea Owin",
        preco: 15990,
        imagem: "./src/assets/img/moto03.jpg",
        perfil: "Lifestyle Premium"
    },

    {
        nome: "Voltz EV1",
        preco: 18990,
        imagem: "./src/assets/img/moto04.jpg",
        perfil: "Conectado Digital"
    },

    {
        nome: "Watts W125",
        preco: 22990,
        imagem: "./src/assets/img/moto05.jpg",
        perfil: "Motociclista Tradicional"
    }

];


// ======================================
// RENDERIZAÇÃO DOS PRODUTOS
// ======================================

// Local onde os cards serão criados / Manipulação em DOM
const container = document.getElementById("container-produtos");


// Verifica se o container existe
if(container){

    // Função para criar os Cards
    function renderizarProdutos(){
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
                <div class="card-conteudo">
                    <h3>${produto.nome}</h3>
                    <p>${produto.perfil}</p>

                    <span>
                        R$ ${produto.preco.toLocaleString("pt-BR")}
                    </span>

                    <button>
                        Comprar
                    </button>
                </div>
            `;
            // Inserindo card no HTML
            container.appendChild(card);
        });
    }
    // Executando a função
    renderizarProdutos();

}



// ======================================
// CARRINHO + REDUCE
// ======================================

// Produtos do carrinho
const carrinho = [
    {
        nome: "GCX X11",
        preco: 8990
    },

    {
        nome: "Voltz EV1",
        preco: 18990
    },

    {
        nome: "Yadea Owin",
        preco: 15990
    }

];

// Capturando elementos
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCompra = document.getElementById("total-compra");
const btnDesconto = document.getElementById("btn-desconto");

// Só executa na página loja.html
if(listaCarrinho){
    // Renderiza itens
    carrinho.forEach(item => {
        listaCarrinho.innerHTML += `
            <div class="item-carrinho">
                <h3>${item.nome}</h3>
                <p>
                    R$ ${item.preco.toLocaleString("pt-BR")}
                </p>
            </div>
        `;
    });

    // ======================================
    // REDUCE
    // ======================================

    /*
    O reduce percorre o array inteiro
    e transforma vários valores em um só.

    Aqui:
    vários preços => total final
    */

    let total = carrinho.reduce((acumulador, item) => {

        return acumulador + item.preco;

    }, 0);


    // Exibe valor
    totalCompra.innerText = `
        R$ ${total.toLocaleString("pt-BR")}
    `;


    // ======================================
    // DESCONTO
    // ======================================

    btnDesconto.addEventListener("click", () => {

        const desconto = total * 0.10;

        const totalFinal = total - desconto;

        totalCompra.innerText = `
            R$ ${totalFinal.toLocaleString("pt-BR")}
        `;

    });

}





















// // Array principal contendo os produtos do ecommerce

// const produtos = [
//     {
//         // Objetos - {nome e preco} representando entidades
//         nome: "GCX X11",
//         preco: 8990,
//         imagem: "./src/assets/img/moto01.jpg",
//         perfil: "Explorador Urbano"
//     },
//     {
//         nome: "Shineray SE 1",
//         preco: 12990,
//         imagem: "./src/assets/img/moto02.jpg",
//         perfil: "Trabalhador Inteligente"
//     },
//     {
//         nome: "Yadea Owin",
//         preco: 15990,
//         imagem: "./src/assets/img/moto03.jpg",
//         perfil: "Lifestyle Premium"
//     },
//     {
//         nome: "Voltz EV1",
//         preco: 18990,
//         imagem: "./src/assets/img/moto04.jpg",
//         perfil: "Conectado Digital"
//     },
//     {
//         nome: "Watts W125",
//         preco: 22990,
//         imagem: "./src/assets/img/moto05.jpg",
//         perfil: "Motociclista Tradicional"
//     }
// ];

// // ===============================
// // CAPTURANDO ELEMENTO DO HTML
// // ===============================

// // Local onde os cards serão criados / Manipulação em DOM
// const container = document.getElementById("container-produtos");

// // ===============================
// // Função para criar os Cards
// // ===============================

// function renderizarProdutos() {
//     // Loop - Percorre todos os produtos/arrays
//     produtos.forEach(produto => {

//         // Criando uma div
//         const card = document.createElement("div");
//         // Adicionando uma classe
//         card.classList.add("card");

//         // Estrutura interna do Card
//         // Pegando o preço do produto e formatando no padrão brasileiro.
//         // <pan> Template String `texto ${variavel}`
//         card.innerHTML = `
//         <img src="${produto.imagem}" alt="${produto.nome}">
//         <h3>${produto.nome}</h3>
//         <p>${produto.perfil}</p>
//         <span>
//             R$ ${produto.preco.toLocaleString("pt-BR")}
//         </span>

//         <button>
//             Comprar
//         </button>
        
//         `;
//         // Inserindo card no HTML
//         container.appendChild(card);
//     })
// }

// // Executando a função
// renderizarProdutos();






















