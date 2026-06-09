<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

    import { produtos } from '@/data/product';
    import { produtosCarrinho } from '@/data/produtosCarrinho';
    import CartPanel from './CartPanel.vue';
    import ProductList from '../products/ProductList.vue';



</script>

<template>

    <div>
        <ul>
            <li v-for="produto in produtosCarrinho" :nome="produto.titulo" :capa="produto.capa" :preco="produto.preco" :id="produto.id">
                <h3>{{ produto.titulo }}</h3>
                <p>{{ produto.preco }}</p>
                <img :src="produto.capa" :alt="produto.capa">
            </li>
        </ul>
    </div>

</template>

<style scoped>

</style>
