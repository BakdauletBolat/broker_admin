<script lang="ts" setup>
import { ref } from 'vue';
import JysonBank from '../../../components/icons/JysonBank.vue';
import CollapseHeader from './collapse-header.vue';
import HalykBank from '../../../components/icons/HalykBank.vue';
import AltynBankIcon from '../../../components/icons/AltynBankIcon.vue';
import EurasianBankIcon from '../../../components/icons/EurasianBankIcon.vue';
import FreedomBank from '../../../components/icons/FreedomBank.vue';
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);
</script>
<template>
    <div class="title">
        Создание заявки
    </div>
    <a-collapse ghost>
        <a-collapse-panel key="1" :showArrow="false" collapsible="disabled">
            <template #header>
                <CollapseHeader title="Halyk Bank">
                    <template #prefixIcon>
                        <HalykBank></HalykBank>
                    </template>
                    <template #rightExtra>
                        <div class="collapse-header-message">
                            Успешно
                        </div>
                    </template>
                </CollapseHeader>
            </template>
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel :accordion="true" :showArrow="false" collapsible="disabled" key="2">
            <template #header>
                <CollapseHeader title="Jysan Bank">
                    <template #prefixIcon>
                        <JysonBank></JysonBank>
                    </template>
                    <template #rightExtra>
                        <div class="collapse-header-message collapse-header-message--error">
                            Неуспешно
                        </div>
                    </template>
                </CollapseHeader>
            </template>
        </a-collapse-panel>
        <a-collapse-panel :accordion="true" :showArrow="false" collapsible="disabled" key="2">
            <template #header>
                <CollapseHeader title="Altyn-ai Bank">
                    <template #prefixIcon>
                        <AltynBankIcon></AltynBankIcon>
                    </template>
                    <template #rightExtra>
                        <div class="collapse-header-message">
                            Успешно
                        </div>
                    </template>
                </CollapseHeader>
            </template>
        </a-collapse-panel>
        <a-collapse-panel :accordion="true" :showArrow="false" collapsible="disabled" key="2">
            <template #header>
                <CollapseHeader title="Eurasian Bank">
                    <template #prefixIcon>
                        <EurasianBankIcon></EurasianBankIcon>
                    </template>
                    <template #rightExtra>
                        <div class="collapse-header-message">
                        Успешно
                        </div>
                    </template>
                </CollapseHeader>
            </template>
        </a-collapse-panel>
        <a-collapse-panel :accordion="true" :showArrow="false" collapsible="disabled" key="2">
            <template #header>
                <CollapseHeader title="Freedom Finance">
                    <template #prefixIcon>
                        <FreedomBank></FreedomBank>
                    </template>
                    <template #rightExtra>
                        <div class="collapse-header-message collapse-header-message--error">
                            Неуспешно
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
</style>
