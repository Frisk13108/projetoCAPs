<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.

import { computed } from 'vue'
import { produtosCarrinho } from '@/data/produtosCarrinho'
import ButtonChild from '../ButtonChild.vue'
import { useRouter } from 'vue-router'

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
            

            <h3>
                Preço final: {{ precoFinal }}
            </h3>
            
            <ButtonChild @clique="confirmar()">
                Confirmar Compra
            </ButtonChild>
            

        </div>
    </div>
    
    
</template>

<style scoped>

    div.compraFinal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: chartreuse;
        border: 1px solid #000000;
        padding: 2vw;
        border-radius: 1vw;
        align-items: center;
        justify-content: center;
    }

</style>
