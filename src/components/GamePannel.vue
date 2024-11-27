<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';

import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import { useXpStore } from '@/stores/xpStore';

import ClickableComputer from '@/components/ClickableComputer.vue';
import { XP_PER_LEVELS } from '@/constants/levels';
import type { AutoClicker } from '@/models/autoClicker';
import type { ComputedRef } from 'vue';

const moneyStore = useMoneyStore()
const xpStore = useXpStore()
const autoclickersStore = useAutoclickersStore()

const { xp } = storeToRefs(xpStore)
const { autoclickers } = storeToRefs(autoclickersStore)

const strippedXp = ref(0);
const isStripped = ref(false);
const strippedXpTimeout = ref(0);

watch(xp, () => {
  isStripped.value = true;
  strippedXp.value = xp.value;

  clearTimeout(strippedXpTimeout.value);
  strippedXpTimeout.value = setTimeout(() => {
    if (strippedXp.value === xp.value) {
      isStripped.value = false;
    }
  }, 500);
});


const totalAutoclickers: ComputedRef<number> = computed(() => {
  return autoclickers.value
    .map((auto: AutoClicker) => auto.currentAmount)
    .reduce((acc: number, val: number) => acc + val, 0)
});

const handleAutoclicking = (): void => {
  if (totalAutoclickers.value > 0) {
    const totalMoneyPerSecond: number = Object.values(autoclickers.value)
      .map((auto: AutoClicker) => auto.currentAmount * auto.cps)
      .reduce((acc: number, val: number) => acc + val, 0)
      ;

    moneyStore.addMoney(totalMoneyPerSecond);
  }

}

setInterval(handleAutoclicking, 1000);

</script>

<template>
  <div class="pannel">
    <ClickableComputer />
  </div>
</template>

<style scoped>
.gameView {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #313338;
}

.gameSidebar,
.gamePannel {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'PixelFont';
}

.moneyCounter {
  font-size: 2rem;
  color: green;
}
</style>
