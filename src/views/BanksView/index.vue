<script setup lang="ts">
import Header from "./header.vue";
import BankCard from "./bank-card.vue";
import HalykBank from "../../components/icons/HalykBank.vue";
import FreedomBank from "../../components/icons/FreedomBank.vue";
import JysonBank from "../../components/icons/JysonBank.vue";
import EurasianBankIcon from "../../components/icons/EurasianBankIcon.vue";
import AltynBankIcon from "../../components/icons/AltynBankIcon.vue";

</script>

<template>
  <main class="container-page">
    <Header></Header>
    <div class="banks__body">
         <div class="banks__body-caption">Список банков</div>
         <div class="banks__grid">
          <BankCard title="Halyk Bank">
            <template #prefixIcon>
              <HalykBank></HalykBank>
            </template>
          </BankCard>
          <BankCard title="Freedom Finance">
            <template #prefixIcon>
              <FreedomBank></FreedomBank>
            </template>
          </BankCard>
          <BankCard title="Jysan Bank">
            <template #prefixIcon>
              <JysonBank></JysonBank>
            </template>
          </BankCard>
          <BankCard title="Eurasian Bank">
            <template #prefixIcon>
              <EurasianBankIcon></EurasianBankIcon>
            </template>
          </BankCard>
          <BankCard title="Altyn-ai Bank">
            <template #prefixIcon>
              <AltynBankIcon></AltynBankIcon>
            </template>
          </BankCard>
         </div>
    </div>
  </main>
</template>

<style>
.banks__body-caption{
  font-weight: 500;
font-size: 17px;
line-height: 23px;
margin-bottom: 16px;
color: #001529;

}
.banks__body{
  margin-top: 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
.banks__grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:16px 45px;
}
</style>
