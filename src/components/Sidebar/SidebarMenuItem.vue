<template>
    <div class="sidebar-menu-item" :class="{'sidebar-menu-item--active': isActive}">
        <slot name="prefixIcon"></slot>
        <div class="sidebar-menu-item__title" >{{title}}</div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String,
    isActive: {
        default: false,
        type: Boolean
    }
})

</script>

<style>


.sidebar-menu-item{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 50px;
    font-size: 17px;
    line-height: 23px;
    cursor: pointer;
}

.sidebar-menu-item--active{
    width: 100%;
    background-color: var(--main-color);
}

.sidebar-menu-item__title{
    margin-left: 19px;
}

</style>
