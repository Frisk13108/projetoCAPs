<script setup>
import { RouterLink } from 'vue-router'
import { produtosFavoritos } from '@/data/produtosFavoritos';
import ButtonChild from './ButtonChild.vue';
defineProps(['produto', 'quantidade']);

function remover(produto) {
    const index = produtosFavoritos.value.findIndex(item => item.id === produto.id);
    if (index !== -1) {
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
            Parece que ainda não ha nenhum item favoritado, clique <RouterLink to="/produtos">aqui</RouterLink> para
            achar seu próximo livro favorito!
        </p>

    </div>
    <div class="favoritos">
        <ul>
            <li v-for="produto in produtosFavoritos" :nome="produto.titulo" :capa="produto.capa" :preco="produto.preco"
                :key="produto.id" :autor="produto.autor" v-show="produtosFavoritos.length >= 1">
                <div>
                    <img :src="produto.capa" :alt="produto.capa">
                    <div class="texto">
                        <h3>{{ produto.titulo }}</h3>
                        <h4>{{ produto.autor }}</h4>
                        <p class="preco">{{ produto.preco }}</p>
                        <ButtonChild class="removerFavoritos" @clique="remover(produto)">Remover</ButtonChild>
                    </div>
                </div>
            </li>
        </ul>
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
    display: flex;
}

.removerFavoritos {
    border: none;
}



div.padrao {
    align-items: center;
    background-color: #250050;
    padding: 2vw 8vw;
    border-radius: 16px;
}

h1 {
    color: blueviolet;
}

p {
    color: white;
    font-size: 1vw;
}

a {
    color: blueviolet;
}

img {
    width: 150px;
    height: 220px;
    object-fit: cover;
}

ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    list-style: none;
}

li {
    padding: 1vw;
    margin-top: 5vw;
}

h3 {
    font-weight: bold;
    font-size: 1vw;
}

div.texto {
    margin: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.preco {
    color: green;
    font-weight: bold;
}
</style>