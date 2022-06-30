<template>
    <div class="bank-card">
        <div class="bank-card-logo">
            <slot name="prefixIcon"></slot>
            <div class="bank-card-title">{{ title }}</div>
        </div>
        <a-modal :centered="true" :footer="null" v-model:visible="visible">
            <div class="warning-modal">
                <div class="warning-text">
                    <info-circle-outlined />
                    <div>Внимание!</div>
                </div>
                <div class="warning-p">
                    Вы хотите {{checked ? 'отключить': 'включить'}} банк «{{ title }}». Данное действие будет невозможно отменить.
                </div>
                <div class="btn-group">
                    <a-button type="primary" @click="handleOk">{{checked ? 'Отключить': 'Включить'}}</a-button>
                    <a-button @click="handleClose">Отменить</a-button>
                </div>
            </div>
        </a-modal>
        <a-switch :checked="checked" @change="onChangeHandle" />
    </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue'
defineProps(['title']);
const checked = ref<boolean>(true);
const visible = ref<boolean>(false);

const onChangeHandle = (value: any) => {
    visible.value = true;
}

const handleOk = () => {
    visible.value = false;
    checked.value = !checked.value;
}

const handleClose = () => {
    visible.value = false;
}
</script>
<style scoped>
.bank-card {
    background-color: white;
    display: flex;
    border-radius: 5px;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
}

.bank-card-logo {
    display: flex;
    align-items: center;
}

.bank-card-title {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    margin-left: 10px;
}

.warning-modal {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.warning-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: var(--main-color);
}

.warning-text div {
    font-weight: 500;
    font-size: 20px;
    margin-top: 15px;
}
.warning-p {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #001529;
    width: 100%;
    margin-top: 30px;
    max-width: 340px;
    text-align: center;
}

.btn-group {
        margin-top: 30px;
    min-width: 240px;
    display: flex;
    justify-content: space-between;
}
</style>