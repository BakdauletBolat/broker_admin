<template>
<div class="applications__filter-grid">  

     <a-range-picker class="base-picker" v-model:value="dateValue"  />
    
     <a-select class="base-select" placeholder="Канал продажи" v-model:value="sale_channel_value" :options="sale_channel_options" @change="handleChange">
        <template #suffixIcon>
            <sale-channel-icon color="#7F7F7F"></sale-channel-icon>
        </template>
    </a-select>
    <a-select class="base-select" placeholder="Город" v-model:value="city_value" :options="city_options" @change="handleChange">
        <template #suffixIcon>
            <city-icon color="#7F7F7F"></city-icon>
        </template>
    </a-select>
    <a-select class="base-select" placeholder="Статус" v-model:value="status_value" :options="status_options" @change="handleChange">
        <template #suffixIcon>
           <status-icon color="#7F7F7F"></status-icon>
        </template>
    </a-select>
    
</div>
   
</template>
<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';
import type { Dayjs } from 'dayjs';
import SaleChannelIcon from '../../components/icons/SaleChannelIcon.vue';
import CityIcon from '../../components/icons/CityIcon.vue';
import StatusIcon from '../../components/icons/StatusIcon.vue';


type RangeValue = [Dayjs, Dayjs];
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const dateValue = ref<RangeValue>();
const sale_channel_value = ref(undefined);
const sale_channel_options = ref<SelectProps['options']>([
    {
        value: 'Online store',
        label: 'Online store'
    },
    {
        value: 'Offline store',
        label: 'Offline store'
    },
]);

const city_value = ref(undefined);
const city_options = ref<SelectProps['options']>([
    {
        value: 'Алматы',
        label: 'Алматы',
    },
    {
        value: 'Астана',
        label: 'Астана',
    },
    {
        value: 'Караганда',
        label: 'Караганда',
    },
    {
        value: 'Каскелен',
        label: 'Каскелен',
    },
    {
        value: 'Тараз',
        label: 'Тараз',
    },
    {
        value: 'Туркестан',
        label: 'Туркестан',
    },
    {
        value: 'Шу',
        label: 'Шу',
    },
    {
        value: 'Шымкент',
        label: 'Шымкент',
    },
]);


const status_value = ref<SelectProps['options']>(undefined);
const status_options = ([
{
        value: 'Выдан',
        label: 'Выдан',
    },
    {
        value: 'Подписан',
        label: 'Подписан',
    },
    {
        value: 'Аннулирован',
        label: 'Аннулирован',
    },
    {
        value: 'Время истекло',
        label: 'Время истекло',
    },
    {
        value: 'Одобрено',
        label: 'Одобрено',
    },
    {
        value: 'Отказано',
        label: 'Отказано',
    },
    {
        value: 'Банк не дал предложений',
        label: 'Банк не дал предложений',
    },
    {
        value: 'Выбран банк',
        label: 'Выбран банк',
    },
]);
</script>

<style>
.applications__filter-grid{
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 23px;
}

</style>