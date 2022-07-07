<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue';
import Header from "./header.vue";
import Filter from "./filter.vue";
import { ref } from 'vue';

const checked = ref(false);
const current = ref(1);

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
    <div class="reports__body-pagination">
        <a-button :disabled="!checked" type="primary" size="large">
          <template #icon>
            <DownloadOutlined />
          </template>
          Скачать
        </a-button>
        <a-pagination v-model:current="current" :total="20" />
    </div>
  </main>
</template>

<style>
.reports__body {
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin-top: 40px;
}

.reports__body-pagination {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reports__body-caption {
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
}

.report__item {
  border-bottom: 0.5px solid #F0F0F0;
  padding: 16px 0px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: #001529;
}
</style>
