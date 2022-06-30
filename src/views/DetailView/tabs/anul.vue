<script lang="ts" setup>
</script>
<template>
    <div class="title">
        Аннулирование
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
