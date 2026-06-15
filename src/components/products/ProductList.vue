<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import { produtos } from '@/data/product';
import ButtonChild from '../ButtonChild.vue';
import { ref } from 'vue';
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import { produtosFavoritos } from '@/data/produtosFavoritos.js';
defineProps(['nome', 'id', 'resenha', 'autor'])
let existe = false;
let informacoes = ref(false);

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
                    produtosCarrinho.value[existe].id++
                 }  
 }
 


</script>


<template>
<section>
    <div class="container">
        <ul>
            <li v-for="livro in produtos" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco" :resenha="livro.resenha" :autor="livro.autor" :capa="livro.capa" >
                <img :src="livro.capa" :alt="livro.titulo">
                <h3>{{ livro.titulo }}</h3>
                <p class="autor">{{ livro.autor }}</p>
                <p class="preco">{{ livro.preco }}</p>
                <ButtonChild @clique="adcionarCarrinho(livro)"> Adcionar </ButtonChild>
                 <ButtonChild @clique="informacoes = true"> Informações </ButtonChild>
                 <ButtonChild @clique="adcionarFavoritos(livro)" class="favoritar">Favoritar</ButtonChild>
            </li>
        </ul>
    </div>
</section>
<div v-if="informacoes" class="overlay" :resenha>
    <h3>Título: {{  }}</h3>
    <h4>Autor: {{ autor }}</h4>
    <p>{{ resenha }}</p>
    <ButtonChild @clique="informacoes = false">Fechar</ButtonChild>

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
    color: white;
    background-color: red;
    padding: 5px;
}
</style>
