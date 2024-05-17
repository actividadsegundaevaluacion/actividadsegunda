<script setup lang="ts">
import { computed } from "vue";


// Components

// SupaBase

//Stores

//Rutas
import { useRoute } from "vue-router";

const cartStore = almacenCart();
const productStore = almacenProductos();

const route = useRoute();

//computed funcion de vue para definir product, productStore.items para acceder a los items dentro de producto dentro de store y finalmente route.params.productid 
//acedde a los parametros en este caso productid, as string me lo recomienda(no se si el funciona)

const product = computed<Product>(() => productStore.items[route.params.productid as string]);
</script>

<template>
    <div class="">
        <div v-if="!productStore.loaded">
            <Efecto cuando no se ven las cards />
    </div>
    


</template>