<script setup>
import { produtosFavoritos } from '@/data/produtosFavoritos';
import { ref } from 'vue';
</script>

<template>
<div class="padrao" v-show="produtosFavoritos.length === 0">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nenhum item favoritado, clique <a href="/produtos">aqui</a> para achar seu próximo livro favorito!
    </p>

</div>
<div class="favoritos">
    <ul>
        <li v-for="produto in produtosFavoritos" v-show="produtosFavoritos.length >= 1">
            {{ produto }}
        </li>
    </ul>
</div>

</template>

<style scoped>
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

</style>