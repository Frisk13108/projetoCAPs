<script setup>
import { RouterLink } from 'vue-router'
import { produtosFavoritos } from '@/data/produtosFavoritos';
import ButtonChild from './ButtonChild.vue';

function remover(produto) {
  const index = produtosFavoritos.value.findIndex(item => item.id === produto.id);
  if (index >= 0) {
    produtosFavoritos.value.splice(index, 1);
  }
}
</script>

<template>
<div class="padrao" v-show="produtosFavoritos.length === 0">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nenhum item favoritado, clique <RouterLink to="/produtos">aqui</RouterLink> para achar seu próximo livro favorito!
    </p>

</div>
<div class="favoritos">
    <ul>
        <li v-for="produto in produtosFavoritos" :nome="produto.titulo" :capa="produto.capa" :preco="produto.preco" :key="produto.id" :autor="produto.autor" v-show="produtosFavoritos.length >= 1"> 
            <div>
                <img :src="produto.capa" :alt="produto.capa">
                <div class="texto">
                    <h3>{{ produto.titulo }}</h3>
                    <h4>{{ produto.autor }}</h4>
                    <p class="preco">{{ produto.preco }}</p>
                    <ButtonChild @clique="remover(produto)">Remover</ButtonChild>
                </div>
            </div>
        </li>
    </ul>
</div>

</template>

<style scoped>

ul{
    display: flex;
}



div.padrao{
    background-color: rgb(200, 8, 229);
    padding: 4vw 8vw;
border-radius: 16px;}
h1{
    color: rgb(0, 255, 60);
}
p{
    color: white;
}
a{
    color: rgb(0, 255, 30);
}

img {
        width: 150px;
        height: 220px;
        object-fit: cover;
    }
    li {
        display: flex;
        background-color: chartreuse;
        border: 1px solid #6e6e6e;
        border-radius: 1vw;
        padding: 1.5vw;
        margin: 1vw;
    }

    h3 {
        font-weight: bold;
        font-size: 1.5vw;
    }

    div.texto {
        margin: 1.5vw;
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }

</style>