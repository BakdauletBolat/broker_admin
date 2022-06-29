<template>
    <nav class="sidebar">
        <div class="sidebar__top">
            <div class="sidebar__logo">
                <Logo></Logo>
            </div>
            <div class="sidebar__menu">
                <SidebarMenuItem :isActive="true" title="Журнал заявок">
                    <template v-slot:prefixIcon>
                        <ApplicationsIcon></ApplicationsIcon>
                    </template>
                </SidebarMenuItem>
                <SidebarMenuItem title="Банки">
                    <template v-slot:prefixIcon>
                        <BankIcon></BankIcon>
                    </template>
                </SidebarMenuItem>
                <SidebarMenuItem title="Отчёты">
                    <template v-slot:prefixIcon>
                        <ReportsIcon></ReportsIcon>
                    </template>
                </SidebarMenuItem>
            </div>
        </div>

        <div class="sidebar__footer">
            <ExitButton></ExitButton>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import Logo from "./Logo.vue";
import SidebarMenuItem from "./SidebarMenuItem.vue";
import ApplicationsIcon from "../icons/ApplicationsIcon.vue";
import BankIcon from "../icons/BankIcon.vue";
import ReportsIcon from "../icons/ReportsIcon.vue";
import ExitButton from "./ExitButton.vue";
</script>

<style>
.sidebar {
    background-color: var(--main-bg-color);
    height: 100vh;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar__top {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
}

.sidebar__menu {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar__logo {
    margin-top: 50px;
}
.sidebar__footer{
    width: 100%;
    padding: 0px 20px;
    margin-bottom: 30px;
}
</style>