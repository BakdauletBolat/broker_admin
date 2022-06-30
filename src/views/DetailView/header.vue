<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import BackIcon from "../../components/icons/BackIcon.vue";
import DateIcon from "../../components/icons/DateIcon.vue";
import SaleChannelIcon from "../../components/icons/SaleChannelIcon.vue";
import TabelLabel from "../ApplicationsView/tabel-label.vue";

const route = useRoute();
const router = useRouter();

const handleToBack = () => {
  router.back();
}
</script>
<template>
    <header class="page-header">
        <div style="width:100%">
            <div class="page-header-icon" @click="handleToBack">
                <BackIcon></BackIcon>
                <span>Назад</span>
            </div>
            <div class="page-header-top-list">
                <div class="page-header-title page-header-title--detail">
                    <h1>Заявка № <span class="page-header-title-span">000000{{ route.params.id }}</span></h1>
                </div>
                <div class="page-header-top-list__item">
                    <DateIcon></DateIcon>
                    <span>13.06.2022 09:00</span>
                </div>
                <div class="page-header-top-list__item">
                    <SaleChannelIcon color="black"></SaleChannelIcon>
                    <span>Online store</span>
                </div>
                <TabelLabel status="issued"></TabelLabel>
            </div>
        </div>
    </header>
</template>

<style>
.page-header-icon {
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 8px;
    cursor: pointer;
}

.page-header-icon>span {
    margin-left: 10px;
    line-height: 20px;
}

.page-header-title-span {
    color: var(--main-color);
}
.page-header-top-list{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.page-header-top-list__item{
    display: flex;
    align-items: center;
}
.page-header-top-list__item span {
    margin-left: 8px;
}
</style>