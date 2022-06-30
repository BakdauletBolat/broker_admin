<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar/index.vue";
import ruRu from 'ant-design-vue/es/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');
</script>

<template>
    <a-config-provider :locale="ruRu">
    <main class="page">
      <Sidebar></Sidebar>
      <RouterView />
    </main>
    </a-config-provider>
</template>

<style>

</style>
