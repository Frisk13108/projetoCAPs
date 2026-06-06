<script setup>
import router from '@/router';
import ProductList from '../products/ProductList.vue';

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

</script>

<template>
<div class="padrao">
    <h1>
        Opa!
    </h1>
    <p>
        Parece que ainda não ha nehum item em seu carrinho, clique <a href="/produtos">aqui</a> para ver nosso catálogo.
    </p>

</div>
</template>

<style scoped>

</style>
