// =================================================
// Array principal contendo os produtos do ecommerce
// =================================================

const produtos = [
    {
        nome: "GCX X11",
        preco: 8990,
        imagem: "/src/assets/img/moto01.jpg",
        perfil: "Explorador Urbano"
    },

    {
        nome: "Shineray SE 1",
        preco: 12990,
        imagem: "/src/assets/img/moto02.jpg",
        perfil: "Trabalhador Inteligente"
    },

    {
        nome: "Yadea Owin",
        preco: 15990,
        imagem: "/src/assets/img/moto03.jpg",
        perfil: "Lifestyle Premium"
    },

    {
        nome: "Voltz EV1",
        preco: 18990,
        imagem: "/src/assets/img/moto04.jpg",
        perfil: "Conectado ao Digital"
    },

    {
        nome: "Watts W125",
        preco: 22990,
        imagem: "/src/assets/img/moto05.jpg",
        perfil: "Motociclista Tradicional"
    },

    {
        nome: "VMoto Super Soco CPx PRO",
        preco: 33990,
        imagem: "/src/assets/img/moto06.jpg",
        perfil: "Executivo Performance"
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

                    <button class="btn-comprar">
                        Comprar
                    </button>
                </div>
            `;
            // Inserindo card no HTML
            container.appendChild(card);

            // Seleciona botão do card criado
            const botaoComprar =
            card.querySelector(".btn-comprar");

            // Evento de clique
            botaoComprar.addEventListener("click", () => {

                // Adiciona produto no carrinho
                carrinho.push({
                    nome: produto.nome,
                    preco: produto.preco,
                    imagem: produto.imagem
                });

                // Salva no navegador
                salvarCarrinho();

                // Toast visual
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2500);

            });
        });
    }
    // Executando a função
    renderizarProdutos();

}



// ======================================
// CARRINHO + REDUCE
// ======================================

// Produtos do carrinho
// let carrinho = [
//     {
//         nome: "GCX X11",
//         preco: 8990
//     },

//     {
//         nome: "Shineray SE 1",
//         preco: 12990
//     },

//     {
//         nome: "Yadea Owin",
//         preco: 15990
//     },

//     {
//         nome: "Voltz EV1",
//         preco: 18990
//     },

//     {
//         nome: "Watts W125",
//         preco: 22990
//     },

//     {
//         nome: "VMoto Super Soco CPx PRO",
//         preco: 33990
//     }

// ];

// ======================================
// CARRINHO COM LOCALSTORAGE
// ======================================

// Busca carrinho salvo no navegador
let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

// Salva carrinho no navegador
function salvarCarrinho(){
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}

// Capturando elementos do HTML
const listaCarrinho =
document.getElementById("lista-carrinho");

const totalCompra =
document.getElementById("total-compra");

const btnDesconto =
document.getElementById("btn-desconto");


// Só executa na página loja.html
if(listaCarrinho){

    // ======================================
    // RENDERIZA CARRINHO
    // ======================================

    function renderizarCarrinho(){

        // Limpa HTML antes de renderizar novamente
        listaCarrinho.innerHTML = "";

        // Percorre produtos do carrinho
        carrinho.forEach((item, index) => {

            listaCarrinho.innerHTML += `

                <div class="item-carrinho">

                    <div class="item-info">
                        <img src="${item.imagem}" alt="${item.nome}" class="imagem-carrinho">
                        <div>
                            <h3>${item.nome}</h3>

                            <p>
                                R$ ${item.preco.toLocaleString("pt-BR")}
                            </p>
                        </div>

                    </div>

                    <button
                    class="btn-remover"
                    onclick="removerItem(${index})">

                        Remover

                    </button>

                </div>

            `;

        });

        atualizarTotal();

    }


    // ======================================
    // ATUALIZA TOTAL
    // ======================================

    function atualizarTotal(){

        let total = carrinho.reduce((acc, item) => {

            return acc + item.preco;

        }, 0);

        totalCompra.innerText = `
            R$ ${total.toLocaleString("pt-BR")}
        `;

    }


    // ======================================
    // REMOVER ITEM
    // ======================================

    window.removerItem = function(index){
    carrinho.splice(index, 1);
    salvarCarrinho();
    renderizarCarrinho();
}


    // ======================================
    // DESCONTO
    // ======================================

    btnDesconto.addEventListener("click", () => {

        let total = carrinho.reduce((acc, item) => {

            return acc + item.preco;

        }, 0);

        const desconto = total * 0.10;

        const totalFinal = total - desconto;

        totalCompra.innerText = `
            R$ ${totalFinal.toLocaleString("pt-BR")}
        `;

    });


    // Inicializa renderização
    renderizarCarrinho();

}

// ======================================
// TOAST DE COMPRA
// ======================================

const toast = document.getElementById("toast");


