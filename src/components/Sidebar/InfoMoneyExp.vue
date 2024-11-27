
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref} from 'vue';
import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useXpStore } from '@/stores/xpStore';
import { XP_PER_LEVELS } from '@/constants/levels';
import { formatNumber } from '@/services/string';
import { useMoneyStore } from '@/stores/moneyStore';

const xpStore = useXpStore()
const { xp } = storeToRefs(xpStore)

const autoclickersStore = useAutoclickersStore()
const { autoclickers } = storeToRefs(autoclickersStore)


const moneyStore = useMoneyStore()
const { money } = storeToRefs(moneyStore)

const isStripped = ref(false);

const level = computed(() => {
  let currentLevel = 1;
  let remainingXp = xp.value;

  let i = 0;
  while (remainingXp >= XP_PER_LEVELS[i]) {
    remainingXp -= XP_PER_LEVELS[i];
    currentLevel++;

    if (i < XP_PER_LEVELS.length - 1) {
      i++;
    }
  }

  return currentLevel;
});

const autoclickingInterval = computed(() => {
  let sum = 0;
  for (const auto of autoclickers.value) {
    sum += auto.currentAmount * auto.cps;
  }

  return sum;
});

const nextLevelProgress = computed(() => {
  const currentLevel = level.value;
  let remainingXp = xp.value;

  for (let i = 0; i < currentLevel - 1; i++) {
    if (i < XP_PER_LEVELS.length - 1) {
      remainingXp -= XP_PER_LEVELS[i];
    } else {
      remainingXp -= XP_PER_LEVELS[XP_PER_LEVELS.length - 1];
    }
  }

  let nextLevelXp;
  if (currentLevel < XP_PER_LEVELS.length - 1) {
    nextLevelXp = XP_PER_LEVELS[currentLevel - 1];
  } else {
    nextLevelXp = XP_PER_LEVELS[XP_PER_LEVELS.length - 1];
  }

  return (remainingXp / nextLevelXp) * 100;
});

</script>

<template>
    <div class="relative elevation-0">
        <v-col class="d-flex flex-column">
            <v-row>
                <v-col>
                    <p class="levelCounter" style="font-size: 1rem;">Niveau {{ level }} ({{ formatNumber(xp) }} XP)</p>
                    <v-progress-linear color="blue" height="10" :model-value="nextLevelProgress" :striped="isStripped" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="levelCounter" style="font-size: 0.7rem;">Productivité : {{ formatNumber(autoclickingInterval) }} cps</p>
                    
                </v-col>
            </v-row>
        </v-col>
        <v-row>
            <v-col>
                    <span class="moneyCounter">{{ formatNumber(money, 1) }}$</span>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
@import "@/assets/styles/pixel-styles.css";

.levelCounter{
    color:white;
}
</style>
