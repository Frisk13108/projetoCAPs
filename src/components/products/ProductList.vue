<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.

// imports ////////////////////

import { produtos } from '@/data/product';
import { ref, computed } from 'vue';
import { categoriaSelecionada } from '@/data/filtroCategoria.js';
import ProductCard from './ProductCard.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const livrosFiltrados = computed(() => {

  let resultado = [...produtos]
  const busca = (route.query.q ?? '').toLowerCase()

  if (busca) {
    resultado = resultado.filter(livro =>
      livro.titulo.toLowerCase().includes(busca)
    )
  }

   if (
    categoriaSelecionada.value &&
    categoriaSelecionada.value !== 'Todos'
  ) {

    if (categoriaSelecionada.value === 'Maior Preço') {
      resultado.sort((a, b) => b.preco - a.preco)
    }

    else if (categoriaSelecionada.value === 'Menor Preço') {
      resultado.sort((a, b) => a.preco - b.preco)
    }

    else {
      resultado = resultado.filter(
        livro => livro.categoria === categoriaSelecionada.value
      )
    }
  }

  return resultado


})

</script>


<template>


<section>
    
    <div class="container">
       
            <ProductCard v-for="livro in livrosFiltrados" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco" :resenha="livro.resenha" :autor="livro.autor" :capa="livro.capa" 
            />
        
    </div>
</section>

</template>

<style scoped>


.container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    place-items: center;
    align-items: center;
}
</style>
