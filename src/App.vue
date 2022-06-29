<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<template>
    <main class="page">
      <Sidebar></Sidebar>
      <RouterView />
    </main>
 
</template>

<style>

</style>
