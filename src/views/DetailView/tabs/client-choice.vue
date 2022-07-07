<script lang="ts" setup>
import { ref } from 'vue';
import CollapseHeader from './collapse-header.vue';
import HalykBank from '../../../components/icons/HalykBank.vue';
import AltynBankIcon from '../../../components/icons/AltynBankIcon.vue';
import EurasianBankIcon from '../../../components/icons/EurasianBankIcon.vue';
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);
</script>
<template>
    <div class="title">
       Выбор клиента
    </div>
    <a-collapse ghost>
        <a-collapse-panel key="1" :showArrow="false" collapsible="disabled" >
            <template #header>
                <CollapseHeader  title="Eurasian Bank">
                    <template #prefixIcon>
                        <EurasianBankIcon></EurasianBankIcon>
                    </template>
                    <template #rightExtra>
                        <div class="client_choise_title">
                            25 417 ₸ х 36 мес.
                        </div>
                    </template>
                </CollapseHeader>
            </template>
        </a-collapse-panel>
    </a-collapse>
</template>
<style>
.title {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    margin-top: 26px;
    margin-bottom: 16px;
}
.client_choise_title{
    color:black;
}
</style>
