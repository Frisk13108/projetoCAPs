<script setup>
import { ref, computed } from 'vue'
import { categorias } from '@/data/categorias';

const emit = defineEmits(['filtrar'])
const mostrarFiltro = ref(false)
const categoriaSelecionada = ref('')
const livrosFiltrados = computed(() => {

  if (!categoriaSelecionada.value) {
    return produtos
  }

  return produtos.filter(
    livro => livro.categoria === categoriaSelecionada.value
  )

})

</script>

<template>

  <button @click="mostrarFiltro = true">Filtrar</button>

  <div v-if="mostrarFiltro" class="janela">
    <div class="coisa">
      <h2>Categorias</h2>

      <select v-model="categoriaSelecionada">
        <option value="">Toodas</option>
        <option v-for= "categoria in categorias" :key="categoria" :value="categoria">
          {{ categoria }}
        </option>
      </select>
      <button @click="emit('filtrar', categoriaSelecionada); mostrarFiltro = false" >Filtrar</button>
    </div>
  </div>
 
</template>

<style scoped>

</style>