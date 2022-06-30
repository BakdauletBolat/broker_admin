<template>
<div class="table-label" :class="{
    'table-label-null': status == 'null',
    'table-label-time-is-over': status == 'time-is-over',
    'table-label-signed': status == 'signed',
    'table-label-issued': status == 'issued',
}">
<div v-if="status == 'null'">
Аннулирован
</div>
<div v-if="status == 'time-is-over'">
Время истекло
</div>
<div v-if="status == 'signed'">
Подписан
</div>
<div v-if="status == 'issued'">
Выдан
</div>
</div>
</template>
<script setup lang="ts">

import { defineProps } from 'vue';

defineProps(['status']);

</script>

<style>

.table-label{
    padding: 6px 30px;
    display: block;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
}

.table-label-null {
    background-color: #A0B9D0;
}

.table-label-time-is-over {
    background-color: #FDE7AF;
}

.table-label-signed {
    background-color: #DDEBFF;
}

.table-label-issued {
    background-color: #F2CEFF;
}

</style>