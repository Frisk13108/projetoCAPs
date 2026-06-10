<script setup>
import { ref } from 'vue';
import ButtonChild from '../ButtonChild.vue';
import { produtos } from '@/data/product.js';
import ProductList from './ProductList.vue';
</script>

<template>
<div>
    <h3> {{ nome }}</h3>
    <h4> {{ autor }}</h4>
    <p> {{ preco }} </p>
    <p>{{ resenha }}</p>
    <ButtonChild @clique=""> </ButtonChild>
</div>

</template>

<style scoped>

</style>
