<script setup>
import router from '@/router';
import { ref } from 'vue';
// let semItens = ref(true);
import { produtosCarrinho } from '@/data/produtosCarrinho.js';



// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

</script>

<template>
<div class="padrao" v-show="produtosCarrinho.length === 0">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nehum item em seu carrinho, clique <RouterLink to="/produtos">aqui</RouterLink> para ver nosso catálogo.
    </p>

</div>
<div class="carrinho">
    <ul>
        <li v-for="produto in produtosCarrinho" v-show="produtosCarrinho.length >= 1">
            {{ produto.titulo }}
        </li>
    </ul>
</div>
</template>

<style scoped>
div.padrao{
    background-color: white;
    padding: 2vw 4vw;
border-radius: 16px;}
h1{
    color: rgb(200, 8, 229);
}
p{
    color: rgb(0, 0, 0);;
}
a{
    color: rgb(200, 8, 229);;
}
    
</style>
