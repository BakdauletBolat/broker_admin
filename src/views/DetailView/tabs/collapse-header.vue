<template>
    <div class="collapse-header" :class="{'collapse-header-arrow': showArrow}">
        <div style="display:flex;align-items:center">
            <slot name="prefixIcon">
            </slot>
            <div class="collapse-header-title">
                {{title}}
            </div>
        </div>
        <slot name="rightExtra">
        </slot>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps(['title','showArrow'])
</script>

<style>
.collapse-header-arrow{
    width: 90%!important;
}
.collapse-header-title{
    color: black;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
        position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    right: 20px;
}
.ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header{
    padding-left: 16px!important;
}
</style>