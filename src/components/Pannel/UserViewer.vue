<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useXpStore } from '@/stores/xpStore';
import { XP_PER_LEVELS } from '@/constants/levels';
import { formatNumber } from '@/services/string';

const xpStore = useXpStore()
const { xp } = storeToRefs(xpStore)



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
    <v-col class="d-flex flex-column" style="margin-bottom: 7rem; margin-top: 2.5rem;">
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <p class="levelCounter">Niveau {{ level }} ({{ formatNumber(xp) }} XP)</p>
          <v-progress-linear color="blue" height="10" :model-value="nextLevelProgress" :striped="isStripped" />
        </v-col>
      </v-row>
    </v-col>

  </div>
</template>

<style scoped>
@import "@/assets/styles/pixel-styles.css";

.levelCounter {
  color: white;
}
</style>
