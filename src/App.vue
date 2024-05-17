<script setup lang="ts">

import { almacenProductos } from '';
import { usePersistCart} from '';
import Nav from "./components/Nav.vue";

const deProductos = almacenProductos();
deProductos.ObtenerProductos();

usePersistCart();
</script>

<template>
  <Nav />
  <router-view></router-view>
</template>
