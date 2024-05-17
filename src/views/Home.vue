<script setup lang="ts">
import { computed } from "vue";

// Components

// SupaBase

//Stores



const deProductos = almacenProductos();

const products = computed(() => deProductos.list);
</script>

<template>
  <!--condicionales con v-if para mostrar en pantalla -->>

<div v-if="showPasswordReset" class="">
<PasswordReset />
</div>

<div v-else-if="userSesion === null"
class="">
<!--Aqui cogeremos el autentificador -->
<Auth />
</div>

<div v-else class="">
  <div class="">
    <LOSEFECTOSAQUI
    v-show="!deProductos.loaded"
    v-for="n in 10"
    :key="n"
  />
  <LASCARTASDELOSPRODUCTOS
  v-for="products in products"
  key:"product.id"
  :product = "product"
  />
</div>
<div class="flex justify-center">
  <button class="">EXIT/LOGOUT</button>
</div>
</template>
