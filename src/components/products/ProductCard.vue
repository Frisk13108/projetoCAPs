<script setup>
// Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.
import { ref } from 'vue';
import ButtonChild from '../ButtonChild.vue';
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import { produtosFavoritos } from '@/data/produtosFavoritos.js';
import Filter from '../Filter.vue';
import { formataPreco } from '@/utils/currencyUtils.js';

const props = defineProps(['id', 'titulo', 'autor', 'resenha', 'preco', 'capa'])
let existe = false;
const mostrarPopup = ref(false);
const produtoSelecionado = ref(null);
const livro = props;

function adcionarFavoritos(livro) {
    existe = produtosFavoritos.value.findIndex(p => p.titulo == livro.titulo);
    if (existe == -1) {
        produtosFavoritos.value.push(livro)
    } else {
        alert("Este livro já foi favoritado!")
    }
}

function adcionarCarrinho(livro) {
    existe = produtosCarrinho.value.findIndex(p => p.titulo == livro.titulo);
    if (existe == -1) {
        produtosCarrinho.value.push({ ...livro, quantidade: 1 })
    } else {
        produtosCarrinho.value[existe].quantidade++
    }

    console.log(produtosCarrinho.value);
}



function abrirPopup(produto) {
    produtoSelecionado.value = produto;
    mostrarPopup.value = true;
}

function fecharPopup() {
    mostrarPopup.value = false;
}

</script>


<template>

    <ul>
        <li>
            <img :src="livro.capa" :alt="livro.titulo">
            <h3>{{ livro.titulo }} <ButtonChild @clique="adcionarFavoritos(livro)" class="favoritar">❤︎</ButtonChild>
            </h3>
            <p class="autor">{{ livro.autor }}</p>
            <p class="preco">{{ formataPreco(livro.preco) }}</p>
            <ButtonChild @clique="adcionarCarrinho(livro)"> Adcionar </ButtonChild>
            <ButtonChild @clique="abrirPopup(livro)"> Informações </ButtonChild>
        </li>
    </ul>

    <div v-if="mostrarPopup" class="overlay">
        <div class="popup">
            <img :src="produtoSelecionado.capa" :alt="produtoSelecionado.titulo">
            <div class="texto">
                <h3>Título: {{ produtoSelecionado.titulo }}</h3>
                <h4>Autor: {{ produtoSelecionado.autor }}</h4>
                <p> <span>Resenha:</span> {{ produtoSelecionado.resenha }}</p>

                <ButtonChild class="fechar" @clique="fecharPopup">Fechar</ButtonChild>
            </div>
        </div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

h1,
h2,
h3,
p {
    font-family: 'Raleway';
}

ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1vw;
    margin: 9vw 0 1vw 0;
    list-style: none;
    align-items: center;
    place-items: center;
}

li img {
    width: 150px;
    height: 220px;
    object-fit: cover;
}

li h3 {
    color: white;
    font-size: 1vw;
}

li p.autor {
    color: rgb(121, 140, 141);
    font-size: 14px;
}

li p.preco {
    color: green;
    font-weight: bold;
    font-size: 1rem;
}

.favoritar {
    color: rgb(255, 0, 0);
    background-color: transparent;
    border: 2px solid transparent;
    font-size: 20px;
    cursor: pointer;
}

/* ============= modal ======================= */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup {
    display: flex;
    gap: 20px;
    background: #250050;
    padding: 2vw 3vw;
    border-radius: 12px;
    width: 70%;
    color: rgb(255, 255, 255);
}

.popup h3 {
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.popup h4 {
    color: darkgray;
    font-size: 15px;
}

.popup span {
    color: white;
    font-weight: bold;
}
.popup p {
    font-size: 15px;
    width: 900px;
}
.fechar {
    margin-top: 2vw;
    border: none;
    padding: 10px 30px;
    border-radius: 30px;
}
.popup img {
    width: 250px;
    height: 380px;
    object-fit: cover;
}

</style>
