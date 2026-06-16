<script setup>
import ButtonChild from '../ButtonChild.vue'
import { produtosCarrinho } from '@/data/produtosCarrinho.js'
import { produtosFavoritos } from '@/data/produtosFavoritos.js'
import { formataPreco } from '@/utils/currencyUtils.js'
let existe = 0
let informacao = false
function adcionarFavoritos(livro) {
  existe = produtosFavoritos.value.findIndex((p) => p.titulo == livro.titulo)
  if (existe == -1) {
    produtosFavoritos.value.push(livro)
  } else {
    alert('Este livro já foi favoritado!')
  }
}

function adcionarCarrinho(livro) {
  existe = produtosCarrinho.value.findIndex((p) => p.titulo == livro.titulo)
  if (existe == -1) {
    produtosCarrinho.value.push(livro)
  } else {
    produtosCarrinho.value[existe].id++
  }
}
defineProps(['id', 'titulo', 'preco', 'resenha', 'autor', 'capa'])
</script>

<template>
  <div class="card">
    <img :src="capa" :alt="titulo" />
    <h3>{{ titulo }}</h3>
    <p class="autor">{{ autor }}</p>
    <p class="preco">{{ formataPreco(preco) }}</p>
    <ButtonChild @clique="adcionarCarrinho(livro)"> Adcionar </ButtonChild>
    <ButtonChild @clique="informacao = true"> Informações </ButtonChild>
    <ButtonChild @clique="adcionarFavoritos(livro)" class="favoritar">Favoritar</ButtonChild>
    <div v-if="informacao" class="overlay">
      <h3>Título: {{ titulo }}</h3>
      <h4>Autor: {{ autor }}</h4>
      <p>{{ resenha }}</p>
      <ButtonChild @clique="informacao = false">Fechar</ButtonChild>
    </div>
  </div>
</template>

<style scoped>
/* .card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
} */

img {
  width: 150px;
  height: 220px;
  object-fit: cover;
}
h3 {
  color: white;
  font-size: 1vw;
}
p.autor {
  color: rgb(121, 140, 141);
  font-size: 14px;
}
p.preco {
  color: green;
  font-weight: bold;
  font-size: 1rem;
}
.favoritar {
  color: white;
  background-color: red;
  padding: 5px;
}
</style>
