<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

    import { produtosCarrinho } from '@/data/produtosCarrinho';
    import ButtonChild from '../ButtonChild.vue';
    defineProps(['id']);

    function remover(produto){
        const posicao = produtosCarrinho.value.findIndex(item => item.id === produto.id);
        produtosCarrinho.value.splice(posicao, 1);
    }



</script>

<template>

    <div>
        <ul>
            <li v-for="produto in produtosCarrinho" :nome="produto.titulo" :capa="produto.capa" :preco="produto.preco" :key="produto.id">
                <img :src="produto.capa" :alt="produto.capa">
                <div class="texto">
                    <h3>{{ produto.titulo }}</h3>
                    <p>{{ produto.preco }}</p>
                    <ButtonChild @clique="remover(produto)">Remover</ButtonChild>
                </div>
                
            </li>
        </ul>
    </div>

</template>

<style scoped>

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
