<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.

// imports ////////////////////

import { produtos } from '@/data/product';
import ButtonChild from '../ButtonChild.vue';
import { ref, computed } from 'vue';
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import { produtosFavoritos } from '@/data/produtosFavoritos.js';
import { categoriaSelecionada } from '@/data/filtroCategoria.js';
import { useRoute } from 'vue-router'
import Filter from '../Filter.vue';
// props/////////////////////////////

defineProps(['nome', 'id', 'resenha', 'autor'])
let existe = false;


// functions /////////////////////////////////

 function adcionarFavoritos(livro){
  existe = produtosFavoritos.value.findIndex(p => p.titulo == livro.titulo);
   if(existe == -1){
                    produtosFavoritos.value.push(livro)
                 }else{
                    alert("Este livro já foi favoritado!")
                 }  
 }

 function adcionarCarrinho(livro){
existe = produtosCarrinho.value.findIndex(p => p.titulo == livro.titulo);
   if(existe == -1){
                    produtosCarrinho.value.push(livro)
                 }else{
                    produtosCarrinho.value[existe].quantidade++
                 }  
 }
 
const mostrarPopup = ref(false);
const produtoSelecionado = ref(null);

function abrirPopup(produto) {
  produtoSelecionado.value = produto;
  mostrarPopup.value = true;
}

function fecharPopup() {
  mostrarPopup.value = false;
}



const route = useRoute()

const livrosFiltrados = computed(() => {
  const palavra = (route.query.q || '').toLowerCase()

  if (!palavra) return produtos

  return produtos.filter(livro =>
    livro.titulo.toLowerCase().includes(palavra) 
    // || livro.autor.toLowerCase().includes(palavra)
  )
})

let teste = ref(false);

</script>


<template>


<section>
    
    <div class="container">
        <ul>
            <li v-for="livro in livrosFiltrados" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco" :resenha="livro.resenha" :autor="livro.autor" :capa="livro.capa" >
                <img :src="livro.capa" :alt="livro.titulo">
                <h3>{{ livro.titulo }} <ButtonChild @clique="adcionarFavoritos(livro)" class="favoritar">❤︎</ButtonChild></h3>
                <p class="autor">{{ livro.autor }}</p>
                <p class="preco">{{ livro.preco }}</p>
                <ButtonChild @clique="adcionarCarrinho(livro)"> Adcionar </ButtonChild>
                 <ButtonChild @clique="abrirPopup(livro)"> Informações </ButtonChild>
                 
            </li>
        </ul>
    </div>
</section>
<div v-if="mostrarPopup" class="overlay" @click.self="fecharPopup">
  <div class="popup">
    <h3>Título: {{ produtoSelecionado.titulo }}</h3>
    <h4>Autor: {{ produtoSelecionado.autor }}</h4>
    <p>{{ produtoSelecionado.resenha }}</p>

    <ButtonChild @clique="fecharPopup">Fechar</ButtonChild>
  </div>
</div>

  

<div v-show="teste == true">
<p>
    eu sou um teste
</p>
<ButtonChild @clique="teste = false">
Fechar
</ButtonChild>

</div>

</template>

<style scoped>


ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5vw;
    margin: 10vw 0 0 0;
    list-style: none;
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
.favoritar{
    color: rgb(255, 0, 0);
    background-color: transparent; 
    border: 2px solid transparent;
    font-size: 20px;
    cursor: pointer; 
}
/* modal */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  color: black;
}
</style>
