<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<template>
  <main class="container-page">
    <div class="detail__body">
        Detail View {{route.params.id}}
    </div>
  </main>
</template>

<style>

</style>
