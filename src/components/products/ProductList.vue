<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/product.js'
defineProps(['titulo', 'resenha', 'autor', 'capa', 'preco'])
console.log(produtos)

</script>

<template>
  <section>
    <div class="catalogo">
        <ProductCard v-for="livro in produtos" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco" :capa="livro.capa" :resenha="livro.resenha" :autor="livro.autor" :id="livro.id" :livro="livro">
            
        </ProductCard>
    </div>
  </section>
</template>

<style scoped>
.catalogo {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5vw;
  margin: 10vw 0 0 0;
  list-style: none;
}
</style>
