<script setup lang="ts">
import Header from "../DetailView/header.vue";
import DetailProcessingTab from "./detail-processing-tab.vue";
</script>

<template>
  <main class="container-page">
    <Header></Header>
    <div class="detail__body">
      <div class="detail__info">
        <div class="detail__info-title">
          Информация о заказе
        </div>
        <div class="detail__info-form">
          <div class="detail__info-form-title">
            Клиент
          </div>
          <div class="detail-info-grid">
            <span class="detail-info-placeholder">ФИО</span>
            <div class="detail-info-text">Храбова Алла Сергеевна</div>
          </div>
          <div class="detail-info-grid">
            <span class="detail-info-placeholder">ИИН</span>
            <div class="detail-info-text">500100732259</div>
          </div>
          <div class="detail-info-grid">
            <span class="detail-info-placeholder">Номер</span>
            <div class="detail-info-text">+7 705 361 65 67</div>
          </div>
        </div>
        <div class="detail__info-form">
          <div class="detail__info-form-title">
            Способ получения
          </div>
          <div class="detail-info-grid">
            <span class="detail-info-placeholder">Тип заказа</span>
            <div class="detail-info-text">Самовывоз</div>
          </div>
          <div class="detail-info-grid">
            <span class="detail-info-placeholder">Адрес</span>
            <div class="detail-info-text">г. Алматы, Самал-3 м-н, 2 этаж</div>
          </div>
        </div>

        <div class="detail__info-form">
          <div class="detail__info-form-title">
            Товары
          </div>
          <table class="detail__info-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Название</th>
                <th>Цена за шт</th>
                <th>Шт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Название в одну строку</td>
                <td>190 000 ₸</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Название товара название товара в две строки</td>
                <td>560 000 ₸</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Название товара название товара в две строки</td>
                <td>5 000 ₸</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Название в одну строку</td>
                <td>15 000 ₸</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <div class="detail__info-footer">
            <div>
              Итого
            </div>
            <div>
              915 000 ₸
            </div>
          </div>
        </div>
      </div>
      <div class="detail__processing">
        <DetailProcessingTab></DetailProcessingTab>
      </div>
    </div>
  </main>
</template>

<style>
.detail__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding-top: 40px;
  margin-bottom: 40px;
}

.detail__info,
.detail__processing {
  position: sticky;
  top:20px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
.detail__processing{
  padding-top: 0px;
}
.detail__processing,.detail__info{
  align-self: flex-start;
  height: min-content;
}

.detail__info-title {
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  color: #001529;
}

.detail__info-form {
  margin-top: 26px;
}

.detail__info-form-title {
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #001529;
  margin-bottom: 16px;
}

.detail-info-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 16px;
}

.detail-info-placeholder {
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #7F7F7F;
}

.detail-info-text {
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #001529;
}

.detail__info-table {
  width: 100%;
}

.detail__info-table>thead>tr>th {
  text-align: left;
  padding: 16px 16px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #029AAD;
   border-bottom: 0.5px solid #F0F0F0;
}

.detail__info-table>tbody>tr>td {
  max-width: 220px;
  padding: 16px 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #001529;
  border-bottom: 0.5px solid #F0F0F0;
}

.detail__info-footer {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 16px;
  color: #001529;
}
</style>
