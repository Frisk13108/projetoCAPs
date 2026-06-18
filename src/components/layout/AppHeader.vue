<script setup>
// Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import Filter from '../Filter.vue';
import { produtos } from '@/data/product.js';
import { categoriaSelecionada } from '@/data/filtroCategoria.js';
const route = useRoute()
const router = useRouter()
const busca = ref(route.query.q ?? '')

watch(busca, (novoValor) => {
  router.replace({
    query: {
      ...route.query,
      q: novoValor
    }
  })
})


</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/produtos">Produtos</RouterLink>
      <RouterLink to="/carrinho">Carrinho</RouterLink>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
    </nav>
    <div class="pesquisa">
      <input v-model="busca" type="search" placeholder="Buscar produto..." class="pesquisar" />
    </div>
    <div>
      <Filter @filtrar="categoriaSelecionada = $event"></Filter>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f8f8f8;
  z-index: 100;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20vw;
}
nav {
  display: flex;
  gap: 16px;
}
a {
  text-decoration: none;
  color: #333;
}
.router-link-active {
  font-weight: bold;
}
ul {
  justify-content: space-between;
  display: flex;
  gap: 1vw;
}
.pesquisa {
  display: flex;
  justify-content: center;
}
.pesquisar {
  border-radius: 5vw;
  padding: 6px 20px 6px 20px;
  border: rebeccapurple solid 2px;
}
</style>
