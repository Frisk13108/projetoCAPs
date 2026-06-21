<script setup>
import { ref, computed } from 'vue'
import { categorias } from '@/data/categorias';

const emit = defineEmits(['filtrar'])
const mostrarFiltro = ref(false)
const categoriaSelecionada = ref('')



</script>

<template>

  <button class="filtrar" @click="mostrarFiltro = true">Filtrar</button>

  <div v-if="mostrarFiltro" class="janela">
    <div class="coisa">
      <h2>Categorias</h2>

      <select class="select" v-model="categoriaSelecionada">
        <option value="">Todas</option>
        <option class="select2" v-for= "categoria in categorias" :key="categoria" :value="categoria">
          {{ categoria }}
        </option>
      </select>
      <button class="vai" @click="emit('filtrar', categoriaSelecionada); mostrarFiltro = false" >Filtrar</button>
    </div>
  </div>
 
</template>

<style scoped>

.select2 {
  color: white;
  background-color: #250050;
}

.select {
  background-color: transparent;
  padding: 5px;
  border: solid 1px white;
  color: white;
}
.filtrar {
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 30px;
  color: white;
}
.vai {
  padding: 5px 10px;
  margin-left: 2px;
  border-radius: 30px;
  border: transparent 2px white;
}

</style>