<template>
<div class="applications__filter-grid">   
     <a-range-picker  class="base-picker" v-model:value="dateValue"  />
    <a-select class="base-select" placeholder="Банк" v-model:value="bank_value" :options="banks_options" @change="handleChange">
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
import CityIcon from '../../components/icons/CityIcon.vue';
import StatusIcon from '../../components/icons/StatusIcon.vue';
type RangeValue = [Dayjs, Dayjs];
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const dateValue = ref<RangeValue>();

const bank_value = ref(undefined);
const banks_options = ref<SelectProps['options']>([
    {
        value: 'Altyn Bank',
        label: 'Altyn Bank',
    },
    {
        value: 'Halyk Bank',
        label: 'Halyk Bank',
    },
    {
        value: 'Jysan Bank',
        label: 'Jysan Bank',
        disabled: true,
    },
    {
        value: 'Eurasian Bank',
        label: 'Eurasian Bank',
    },
    {
        value: 'Freedom finance',
        label: 'Freedom finance',
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