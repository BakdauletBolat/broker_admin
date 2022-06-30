<script setup lang="ts">
import Header from "./header.vue";
import Filter from "./filter.vue";
import {ref} from 'vue';

const checked = ref(false);


</script>

<template>
  <main class="container-page">
    <Header></Header>
    <Filter></Filter>
    <div class="reports__body">
       <div class="reports__body-caption">Список отчётов</div>
       <div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Название</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
        <div class="report__item">
          <a-checkbox v-model:checked="checked">Названия отчета</a-checkbox>
        </div>
       </div>
    </div>
  </main>
</template>

<style>
.reports__body{
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin-top: 40px;
}
.reports__body-caption{
  font-weight: 500;
font-size: 17px;
line-height: 23px;
}
.report__item{
  border-bottom: 0.5px solid #F0F0F0;
  padding: 16px 0px;
  font-weight: 400;
font-size: 13px;
line-height: 18px;

color: #001529;
}

</style>
