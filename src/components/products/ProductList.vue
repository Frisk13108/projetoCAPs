<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import { produtos } from '@/data/product';
import ButtonChild from '../ButtonChild.vue';
import { ref } from 'vue';

let teste = ref(false);
</script>


<template>
<section>
    <div class="container">
        <ul>
            <li v-for="livro in produtos" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco" :resenha="livro.resenha" :autor="livro.autor" :capa="livro.capa" >
                {{ livro.titulo }}
                {{ livro.capa }}
                {{ livro.autor }}
                {{ livro.preco }}
            </li>
        </ul>
    </div>
</section>

<div v-show="teste == true">
<p>
    eu sou um teste 
</p>
<ButtonChild @clique="teste = false">
Fechar
</ButtonChild>

</div>
<ButtonChild @clique="teste = true" v-show="teste == false">
Eu sou um botun
</ButtonChild>
</template>

<style scoped>

 ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
} 

</style>
