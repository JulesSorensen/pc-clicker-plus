<script setup lang="ts">
import { ref } from 'vue';

import AutoclickTab from "@/components/Sidebar/AutoclickTab.vue";
import ChallengesList from "@/components/Sidebar/ChallengesList.vue";
import LeaderboardTab from "@/components/Sidebar/LeaderboardTab.vue";
import PcTab from "@/components/Sidebar/PcTab.vue";

const currentTab = ref<string>('autoclicker');

const alert = ref(true);
const showAlert = () => {
  alert.value = false;
  setTimeout(() => {
    alert.value = true;
  }, 2000);
}
</script>

<template>
  <div class="sidebar">
    <v-card color="transparent" class="relative elevation-0">
      <v-tabs v-model="currentTab" align-tabs="center" color="blue">
        <v-tab base-color="white" :value="'autoclick'">Recrutement</v-tab>
        <v-tab base-color="white" :value="'pc'">Compétences</v-tab>
        <v-tab base-color="white" :value="'challenge'">Défis</v-tab>
        <v-tab base-color="white" :value="'leaderboard'">Classement</v-tab>
      </v-tabs>
      <v-alert :hidden="alert" class="absolute" color="error"
        text="Tu es trop pauvre ! Reviens après avoir plus clické !" />

      <v-tabs-window v-model="currentTab">
        <v-tabs-window-item v-for="tab in ['autoclick', 'pc', 'challenge', 'leaderboard']" :key="tab" :value="tab">
          <v-container fluid class="scrollable-content">
            <v-row>
              <div v-if="tab === 'autoclick'">
                <AutoclickTab :sendError="showAlert" />
              </div>
              <div v-else-if="tab === 'pc'">
                <PcTab />
              </div>
              <div v-else-if="tab === 'challenge'">
                <ChallengesList />
              </div>
              <div v-else-if="tab === 'leaderboard'">
                <LeaderboardTab />
              </div>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<style scoped>
@import "@/assets/styles/pixel-styles.css";

.sidebar {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  width: 90%;
  overflow-y: auto;
  user-select: none;
}

.topBar {
  margin-bottom: 3rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.scrollable-content {
  max-height: 80vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  z-index: 100;
}
</style>
