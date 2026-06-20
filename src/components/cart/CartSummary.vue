<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.

import { computed } from 'vue'
import { produtosCarrinho } from '@/data/produtosCarrinho'
import ButtonChild from '../ButtonChild.vue'
import { useRouter } from 'vue-router'
import { formataPreco } from '@/utils/currencyUtils.js'

const router = useRouter()

const precoFinal = computed(() => {
    return produtosCarrinho.value.reduce((total, produto) => {
        return total + produto.preco * (produto.quantidade ?? 1)
    }, 0)
})

function confirmar() {
    produtosCarrinho.value = []
    router.push('/carrinho')
}

function voltar() {
    router.push('/carrinho')
}

</script>

<template>
    <div class="container">
        <div class="compraFinal">
            <h1>
                Compra Final
            </h1>
            <ul>
                <li v-for="produto in produtosCarrinho" :key="produto.titulo">
                    <p>
                        {{ produto.titulo }};
                    </p>
                </li>
            </ul>

            <p class="frete">
                Frete: Grátis
            </p>

            <h3>
                Preço final: {{ formataPreco(precoFinal) }}
            </h3>

            <div>
                <ButtonChild class="confirmar" @clique="confirmar()">
                    Confirmar Compra
                </ButtonChild>

                <ButtonChild class="botao" @clique="voltar()">
                    Voltar
                </ButtonChild>
            </div>


        </div>
    </div>


</template>

<style scoped>
h1 {
    margin-bottom: 1vw;
}

ul {
    font-size: 1vw;
    margin-bottom: 1vw;
}

h3 {
    margin-bottom: 1vw;
}
.frete{
    font-size: 1vw;
}
.botao {
    margin-left: 1vw;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
}
.confirmar {
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
}


div.compraFinal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #250050;
    padding: 4vw;
    border-radius: 1vw;
    align-items: center;
}
</style>
