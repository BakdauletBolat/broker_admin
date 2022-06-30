<script setup lang="ts">
import Header from './header.vue';
import Filter from './filter.vue';
import {ref} from 'vue';
import TabelLabel from './tabel-label.vue';
const current = ref(6);
</script>

<template>
  <main class="container-page">
    <Header>
    </Header>
    <Filter></Filter>
    <div class="applications__body">
        <div class="applications__table-caption">Список заявок</div>
      <table class="applications__table">    
        <thead class="applications__table-thead">
          <tr>
            <th >Номер заявки</th>
            <th >Дата создания</th>
            <th >ИИН</th>
            <th >Канал продажи</th>
            <th >Город</th>
            <th >Статус</th>
          </tr>
        </thead>
        <tbody class="applications__table-tbody">
          <tr>
            <td ><router-link to="/detail/1">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="signed"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/2">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="time-is-over"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/3">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="null"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/4">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="issued"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/5">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="signed"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/6">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="issued"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/7">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="null"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/8">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="time-is-over"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/9">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="issued"></TabelLabel>
            </td>
          </tr>
          <tr>
            <td ><router-link to="/detail/10">0000156</router-link></td>
            <td>22.06.2022, 10:00</td>
            <td>500100732259</td>
            <td>Online store</td>
            <td>Алматы</td>
            <td>
              <TabelLabel status="signed"></TabelLabel>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="applications__body-pagination" >
       <a-pagination v-model:current="current" :total="20" />
    </div>
   
  </main>
</template>

<style>

.applications__body{
  margin-top: 40px;
  border-radius: 10px;
  line-height: 23px;
  background-color: white;
  padding: 20px;
}
.applications__table-caption{
  font-size: 17px;
  font-weight: 500;
}
.applications__table{
  margin-top: 16px;
  width: 100%;
}
.applications__table-thead > tr > th{
  text-align: left;
  color:#029AAD;
  font-size: 13px;
  font-weight: 500;
  min-width: 130px;

  padding:16px 0px;
}
/* 
.applications__table-tbody {
   overflow: scroll;
} */
.applications__table-tbody > tr > td {
  border-top: 0.5px solid #F0F0F0;
  padding: 22px 0px;
  line-height: 17px;
} 

.applications__body-pagination{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 48px;
  margin-bottom: 58px;
}
</style>
