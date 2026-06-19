<script setup>
</script>

<template>
  <footer>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/produtos">Produtos</RouterLink>
        <RouterLink to="/carrinho">Carrinho</RouterLink>
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
footer {
  position: fixed;
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
}

</style>
