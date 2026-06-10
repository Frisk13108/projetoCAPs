<script setup>
import router from '@/router';
import ProductList from '../products/ProductList.vue';
import { ref } from 'vue';
let semItens = ref(true);
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import { carrinho } from '@/utils/cartUtils.js';
import ButtonChild from '../ButtonChild.vue';
import CartItem from './CartItem.vue';

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

</script>

<template>
<div class="padrao" v-show="produtosCarrinho.length === 1">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nenhum item em seu carrinho, clique <a href="/produtos">aqui</a> para ver nosso catálogo.
    </p>

</div>
<div class="carrinho">
    <ul>
        <CartItem v-for="produto in produtosCarrinho" v-show="produtosCarrinho.length >= 1">
            {{ produto }}
        </CartItem>
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
