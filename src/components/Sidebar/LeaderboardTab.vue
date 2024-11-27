<script setup lang="ts">
import { XP_PER_LEVELS } from '@/constants/levels';
import { useLeaderboard } from '@/services/leaderboard';
import { formatNumber } from '@/services/string';
import { onUnmounted } from 'vue';

const { users, subscribe } = useLeaderboard();

const unsubscribe = subscribe();

onUnmounted(() => {
  unsubscribe();
});

const getLevel = (xp: number): number => {
  let currentLevel = 1;
  let remainingXp = xp;

  let i = 0;
  while (remainingXp >= XP_PER_LEVELS[i]) {
    remainingXp -= XP_PER_LEVELS[i];
    currentLevel++;

    if (i < XP_PER_LEVELS.length - 1) {
      i++;
    }
  }

  return currentLevel;
};

const getPosition = (pos: number): string => {
  switch (pos) {
    case 1:
      return '🥇';
    case 2:
      return '🥈'
    case 3:
      return '🥉';
    default:
      return pos.toString();
  }
}

</script>

<template>
  <div class="leaderboard">
    <v-skeleton-loader v-if="!users" type="paragraph" color="transparent"></v-skeleton-loader>
    <div class="d-flex flex-column ">
      <div v-for="(user, index) in users" :key="user.id" class="d-flex flex-row align-center mb-4">
        <p class="mr-5 text-white text-center" :style="{ fontSize: (index < 3 ? '2.5rem' : '1rem') }"
          style="width: 2.5rem;">
          {{ getPosition(index + 1) }}
        </p>
        <v-card class="d-flex flex-row align-center" style="width: 25rem;">
          <v-card-title style="min-width: 9rem;">[{{ getLevel(user.xp) }}]</v-card-title>
          <v-card-title style="width: 10rem; padding: 0; margin-right: 1rem;">{{ user.name ? user.name : 'Anonymous'
            }}</v-card-title>
          <v-card-text>{{ formatNumber(user.money) }}$</v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaderboard {
  display: flex;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
