<script setup lang="ts">
import { computed } from 'vue';
import { almacenCart } from '../stores/cart';
import Search from './Search.vue';

const cart = almacenCart();

const count = computed(() => cart.count);
</script>
<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-none lg:hidden">
      <label for="drawer-input" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold"> Proyecto</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/">
          Productos
        </router-link>
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/cart">
          Cesta
          <div class="badge ml-2 badge-outline" v-text="count"></div>
        </router-link>
          <router-link class="btn btn-ghost btn-sm rounded-btn" to="/formulario">
          Formulario
        </router-link>
      </div>
    </div>
    <div class="flex-1 lg:flex-none">
      <Search />
    </div>
  </div>
</template>
