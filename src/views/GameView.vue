<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GamePannel from '@/components/GamePannel.vue';
import GameSidebar from '@/components/GameSidebar.vue';

import audioFile from '@/assets/background-music.mp3';

const backgroundMusic = ref<HTMLAudioElement | null>(null);

const audioSrc = ref<string>(audioFile);

onMounted(() => {
  if (backgroundMusic.value) {
    backgroundMusic.value.play();
  }
});
</script>

<template>
  <div class="gameView">
    <audio ref="backgroundMusic" loop>
      <source :src="audioSrc" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
    <div class="gamePannel">
      <GamePannel />
    </div>
    <div class="gameSidebar">
      <GameSidebar />
    </div>
  </div>
</template>

<style>
html,
body {
  width: 100%;
}

.gameView {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  height: 100%;
  width: 100%;
  background-color: #313338;
}

.gameSidebar,
.gamePannel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'PixelFont';
}

.moneyCounter {
  font-size: 2rem;
  color: green;
}
</style>
