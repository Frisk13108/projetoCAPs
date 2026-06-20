<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.
import { produtos } from '@/data/product'
import ProductList from '../products/ProductList.vue';
import { computed } from 'vue';
import AppFooter from './AppFooter.vue';

const maiorPreco = computed(() => {

  return [...produtos].sort(
    (a, b) => b.vendidos - a.vendidos
  )

})


</script>

<template>
  <main>
    <section class="padrao">
      <div class="destaque">
        <p class="textodestaque">Livro em Destaque</p>
        <h1>Game of thrones: Fogo e Sangue</h1>
        <p class="resenha">
          Séculos antes de A Guerra dos Tronos, George R.R. Martin narra a história da Casa
          Targaryen em Fogo & Sangue, desde a conquista de Aegon até a brutal guerra civil da Dança
          dos Dragões. O livro descreve os conflitos, segredos e a construção do Trono de Ferro
          pelos senhores dos dragões que sobreviveram a Valíria. É uma crônica essencial para
          entender a mitologia de Westeros e os eventos que moldaram a série da HBO, A Casa do
          Dragão.
        </p>
        <RouterLink to="/produtos"><button>Acessar página do livro</button></RouterLink>
      </div>
      <div class="capa">
        <img src="/images/fire-and-blood.jpg" alt="Game of thrones: Fogo e Sangue" />
      </div>
    </section>

    <section class="coisas">
      <div>
          Frete Grátis para SC
      </div>
      <div>
         <RouterLink to="/recomendados">★ LIvros Recomentados</RouterLink>
      </div>
      <div>
          Mais Vendidos
      </div>

    </section>

    <h2>
      Mais Vendidos
    </h2>
    <ul>
      <li v-for="livro in maiorPreco.slice(0, 5)" :key="livro.id" :titulo="livro.titulo" :preco="livro.preco"
        :resenha="livro.resenha" :autor="livro.autor" :capa="livro.capa">
        <img :src="livro.capa" :alt="livro.titulo">
        <h3>{{ livro.titulo }}</h3>
        <p class="autor">{{ livro.autor }}</p>
        <p class="preco">{{ livro.preco }}</p>
      </li>
    </ul>

  </main>

   <footer>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/produtos">Produtos</RouterLink>
        <RouterLink to="/carrinho">Carrinho</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
      </nav>
    </div>
    <div>
      <p>Contato:</p>
      <p>(67)6767-7676</p>
      <p>Capas@gmail.com</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

h1,
h2 {
  font-family: "Raleway";
}

.textodestaque {
  color: #7700ff;
  border: 2px solid #7700ff;
  border-radius: 5px;
  padding: 10px;
  margin: 2vw 0;
}

.destaque {
  padding: 1vw 1vw 1vw 1vw;
}

h1 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 2vw 0;
}

.padrao button {
  background: #7700ff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px;
  font-size: 1vw;
}

.resenha {
  width: 20vw;
}

p {
  margin: 2vw 0;
  color: rgb(206, 205, 205);
}

.padrao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 2vw 10vw; */
  margin: 5vw 10vw;
}

.padrao img {
  width: 18vw;
}

.coisas {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  border-top: 2px solid #250050;
  border-bottom: 2px solid #250050;
  margin-bottom: 3vw;
}

.coisas div {
  flex: 1;
  font-size: 1vw;
  border-right: 2px solid #250050;
  text-align: center;
  font-weight: bold;

}
.coisas div a {
  font-weight: bold;
}

/*MAIS VENBDIUDS8*/


li img {
  width: 150px;
  height: 220px;
  object-fit: cover;
}

ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5vw;
  margin-top: 4vw;
  list-style: none;
}

li h3 {
  color: white;
  font-size: 1vw;
}
li p.autor {
  color: rgb(121, 140, 141);
  font-size: 14px;
}

li p.preco {
  color: green;
  font-weight: bold;
  font-size: 1rem;
}

.favoritar {
  color: rgb(255, 0, 0);
  background-color: transparent;
  border: 2px solid transparent;
  font-size: 20px;
  cursor: pointer;
}

/*FOOTER*/

footer {
  align-items: center;
  background-color: #250050;
  display: flex;
  justify-content: space-between;
  padding: 1.5vw 1.5vw;
  font-size: 1vw;
  left: 0;
  bottom: 0;
  width: 100%;
}

footer nav {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;
  color: black;
  gap: 1vw;
}
footer p {
  font-weight: bold;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.router-link-active {
  font-weight: bold;
}

</style>
