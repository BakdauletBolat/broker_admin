<template>
<div class="applications__filter-grid">   
     <a-range-picker  class="base-picker" v-model:value="dateValue"  />
     <a-select class="base-select" placeholder="Канал продажи" v-model:value="value1" :options="options1" @change="handleChange">
        <template #suffixIcon>
            <smile-outlined class="ant-select-suffix" />
        </template>
    </a-select>
    <a-select class="base-select" placeholder="Город" v-model:value="value1" :options="options1" @change="handleChange">
        <template #suffixIcon>
            <smile-outlined class="ant-select-suffix" />
        </template>
    </a-select>
    <a-select class="base-select" placeholder="Статус" v-model:value="value1" :options="options1" @change="handleChange">
        <template #suffixIcon>
            <smile-outlined class="ant-select-suffix" />
        </template>
    </a-select>
    
</div>
   
</template>
<script lang="ts" setup>
import { SmileOutlined, MehOutlined } from '@ant-design/icons-vue';
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const value1 = ref(undefined);
const dateValue = ref<RangeValue>();
const options1 = ref<SelectProps['options']>([
    {
        value: 'jack',
        label: 'Jack',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
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