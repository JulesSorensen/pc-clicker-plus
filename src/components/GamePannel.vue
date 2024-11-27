<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import ClickableComputer from '@/components/ClickableComputer.vue';
import type { AutoClicker } from '@/models/autoClicker';
import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import type { ComputedRef } from 'vue';
import MoneyViewer from './Pannel/MoneyViewer.vue';
import UserViewer from './Pannel/UserViewer.vue';

const moneyStore = useMoneyStore()
const autoclickersStore = useAutoclickersStore()

const { autoclickers } = storeToRefs(autoclickersStore)

const totalAutoclickers: ComputedRef<number> = computed(() => {
  return autoclickers.value
    .map((auto: AutoClicker) => auto.currentAmount)
    .reduce((acc: number, val: number) => acc + val, 0)
});

const handleAutoclicking = (): void => {
  if (totalAutoclickers.value <= 0) return;

  const totalMoneyPerSecond: number = Object.values(autoclickers.value)
    .map((auto: AutoClicker) => auto.currentAmount * auto.cps)
    .reduce((acc: number, val: number) => acc + val, 0)
    ;

  moneyStore.addMoney(totalMoneyPerSecond);
}

setInterval(handleAutoclicking, 1000);
</script>

<template>
  <div class="pannel">
    <UserViewer />
    <ClickableComputer />
    <MoneyViewer />
  </div>
</template>