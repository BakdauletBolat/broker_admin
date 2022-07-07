<script lang="ts" setup>
import ThreeDot from '@/components/icons/ThreeDot.vue';
import { ref } from 'vue';
import Tabs from './tabs/tabs.vue';
const activeItem = ref(1);

const items = [1, 2, 3, 4, 5, 6];

const handleChangeActiveItem = (value: number) => {
    activeItem.value = value;
}
</script>
<template>
<div>
     <div class="top">
        <div class="title">
            Этапы обработки заявки
        </div>
        <div class="tab__header">

            <div class="tab__header__item__container" v-for="item in items" @click="handleChangeActiveItem(item)">
                <div class="tab__header__span" v-if="item != 1">
                    <ThreeDot></ThreeDot>
                </div>
                <div class=tab__header__item :class="{ 'tab__header__item--active': activeItem == item }">
                    {{ item }}
                </div>

            </div>
        </div>
    </div>
    <div class="tab__body">
        <Tabs :activeItem="activeItem"></Tabs>
    </div>
</div>
   
</template>
<style>
.top{
    position: sticky;
    top:0px;
    padding-top: 20px;
    background-color: white;
    z-index: 1000;
}
.title {
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;
    margin-top: 6px;
    color: #001529;
    margin-bottom: 26px;
}


.tab__header {
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
    align-items: center;
}

.tab__body {
    min-height: 400px;
    padding: 10px;
}

.tab__header__item {
    width: 32px;
    height: 32px;
    display: flex;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    background: rgba(2, 154, 173, 0.1);
    color: var(--main-color);
    border-radius: 32px;
}

.tab__header__item__container {
    display: flex;
    align-items: center;
}

.tab__header__item--active {
    background-color: var(--main-color);
    color: white;
}

.tab__header__span {
    padding: 0px 10px;
}
</style>