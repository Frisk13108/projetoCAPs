<script setup>

import router from '@/router';
import ProductList from '../products/ProductList.vue';
import { ref, computed } from 'vue';
// let semItens = ref(true);
import { produtosCarrinho } from '@/data/produtosCarrinho.js';
import CartItem from './CartItem.vue';
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/currencyUtils.js';
import { carrinho, addCarrinho, cupomDigitado, percentualDesconto, aplicarCupom, total } from '@/utils/cartUtils.js';

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.


let precoFinal = 0;





function prosseguir() {
    router.push('/resumo');

    for (let produto of produtosCarrinho.value) {
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
            Parece que ainda não ha nenhum item em seu carrinho, clique <RouterLink to="/produtos">aqui</RouterLink> para ver nosso catálogo.
        </p>

    </div>

    <div class="carrinho" v-if="produtosCarrinho.length >= 1">
        <ul>
            <CartItem v-for="produto in produtosCarrinho" :key="produto.id" :produto="produto"
                v-show="produtosCarrinho.length >= 1">
            </CartItem>
        </ul>
        <div class="tudo" v-show="produtosCarrinho.length >= 1">
            <ButtonChild class="prosseguir" @clique="prosseguir()">
                Prosseguir
            </ButtonChild>
            <h3>
                Preço Subtotal: {{ formataPreco(total) }}
            </h3>
        </div>

        <div class="cupom">
            <input class="desconto" v-model="cupomDigitado" type="text" placeholder="Digite o cupom" />

            <ButtonChild class="aplicar" @clique="aplicarCupom">
                Aplicar Cupom
            </ButtonChild>
        </div>

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

.cupom { 
    margin-top: 1vw;
    width: 500px;
    align-items: center;
}
.desconto {
    padding: 12px;
    border-radius: 30px;
    margin-right: 10px;
    border: none;
}
.aplicar {
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 140px;
}

.tudo {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 2vw;
}

.tudo h3 {
    font-weight: bold;
}

.prosseguir {
    background-color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
}

.carrinho {
    align-items: center;
    background-color: #250050;
    border-radius: 2vw;
    padding: 2vw 10vw;
    margin-top: 5vw;
}

div.padrao {
    background-color: #250050;
    padding: 2vw 4vw;
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
</style>
