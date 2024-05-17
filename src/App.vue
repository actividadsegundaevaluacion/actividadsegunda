<script setup lang="ts">

import { almacenProductos } from './stores/products';
import { usePersistCart} from './com';
import Nav from "./components/Nav.vue";

const deProductos = almacenProductos();
deProductos.ObtenerProductos();

usePersistCart();
</script>

<template>
  <Nav />
  <router-view></router-view>
</template>
