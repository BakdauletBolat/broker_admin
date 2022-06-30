<template>
  <div v-show="activeItem == 1">
  <ApplicationCreate></ApplicationCreate>
  </div>
  <div v-show="activeItem == 2">
    <BankOffer></BankOffer>
  </div>
  <div v-show="activeItem == 3">
    <ClientChoice></ClientChoice>
  </div>
  <div v-show="activeItem == 4">
    <SignCredit></SignCredit>
  </div>
  <div v-show="activeItem == 5">
    <Delivery></Delivery>
  </div>
  <div v-show="activeItem == 6">
    <Anul></Anul>
  </div>
</template>

<script lang="ts" setup>
import {ref,defineProps} from 'vue';
import ApplicationCreate from './application-create.vue';
import BankOffer from './bank-offer.vue';
import ClientChoice from './client-choice.vue';
import SignCredit from './sign-credit.vue';
import Delivery from './delivery.vue';
import Anul from './anul.vue';
defineProps(['activeItem']);

</script>