<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

    import { produtosCarrinho } from '@/data/produtosCarrinho';
    import ButtonChild from '../ButtonChild.vue';
    import { formataPreco } from '@/utils/currencyUtils.js';
    



defineProps(['produto', 'quantidade']);

function remover(produto) {
  const posicao = produtosCarrinho.value.findIndex(item => item.id === produto.id);

  if (posicao !== -1) {
    produtosCarrinho.value.splice(posicao, 1);
  }
}

function atualizarQuantidade(produto) {
  if (produto.quantidade < 1 || !produto.quantidade) {
    produto.quantidade = 1;
  }
}
</script>

<template>
  <div class="bloco">
    <li :key="produto.id">
      <img :src="produto.capa" :alt="produto.titulo">

      <div class="texto">
        <h3>{{ produto.titulo }}</h3>
        <p>{{ formataPreco(produto.preco) }}</p>

        <ButtonChild class="remover" @clique="remover(produto)">
          Remover
        </ButtonChild>

        <input
          id="qntd"
          type="number"
          min="1"
          v-model.number="produto.quantidade"
          @change="atualizarQuantidade(produto)"
        >
      </div>
    </li>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

h1, h2, h3, p  {
    font-family: 'Raleway';
}

.remover {
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  border: none;
  padding: 10px;
}

p {
  color: green;
  font-weight: bold;
}

.bloco li{
    align-items: center;
    gap: 10vw;
}


    img {
        width: 150px;
        height: 220px;
        object-fit: cover;
    }
    li {
        display: flex;
        border-radius: 1vw;
        margin: 1vw;
    }

    h3 {
        font-weight: bold;
        font-size: 1vw;
    }

    div.texto {
        margin: 1.5vw;
        display: flex;
        flex-direction: column;
        gap: 1vw;
    }
    

    

</style>
