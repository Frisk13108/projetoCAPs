<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.
import { produtos } from '@/data/product'
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
        <button>Acessar página do livro</button>
      </div>
      <div class="capa">
        <img src="/images/fire-and-blood.jpg" alt="Game of thrones: Fogo e Sangue" />
      </div>
    </section>
  </main>
  <footer>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/produtos">Produtos</RouterLink>
      <RouterLink to="/carrinho">Carrinho</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
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
  padding: 2vw 10vw;
  margin: 5vw 10vw;
}

.padrao img {
  width: 18vw;
}

footer {
  background-color: #250050;
}
footer nav {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    list-style: none;
    color: black;
}
</style>
