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
        Выдача товара
    </div>
    <div>
        <div class="form">
            <div class="form__title">Статус</div>
            <div class="collapse-header-message">
                Успешно
            </div>
        </div>
    </div>
    <div>
        <div class="form">
            <div class="form__title">Дата выдачи</div>
            <div>16.06.2022, 14:00</div>
        </div>
    </div>

</template>
<style scoped>
.form {
    display: inline-grid;
    align-items: center;
    grid-template-columns: 100px 1fr;
    margin-bottom: 22px;
}

.form__title {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #7F7F7F;
}

.title {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    margin-top: 26px;
    margin-bottom: 16px;
}
</style>
