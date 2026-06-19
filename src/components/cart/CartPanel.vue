<script setup>

import router from '@/router';
import ProductList from '../products/ProductList.vue';
import { ref } from 'vue';
// let semItens = ref(true);
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import CartItem from './CartItem.vue';
import ButtonChild from '../ButtonChild.vue';

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.


let precoFinal = 0;

function prosseguir () {
    router.push('/resumo');

    for (let produto of produtosCarrinho) {
        precoFinal = produto.preco + precoFinal;
    }
}

</script>

<template>
<div class="padrao" v-show="produtosCarrinho.length === 0">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nenhum item em seu carrinho, clique <a href="/produtos">aqui</a> para ver nosso catálogo.
    </p>

</div>

<div class="carrinho">
    <ul>
        <CartItem v-for="produto in produtosCarrinho" :key="produto.id" :produto="produto" v-show="produtosCarrinho.length >= 1">
        </CartItem>
    </ul>
</div>

<div class="prosseguir" v-show="produtosCarrinho.length >= 1">
    <ButtonChild @clique="prosseguir()">
        Prosseguir
    </ButtonChild>
</div>

</template>

<style scoped>

.carrinho {
    align-items: center;
    background-color: #250050;
    border-radius: 2vw;
    padding: 2vw 10vw;
    margin-top: 5vw;
}

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
