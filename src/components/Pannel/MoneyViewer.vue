<script setup lang="ts">
import { formatNumber } from '@/services/string';
import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const autoclickersStore = useAutoclickersStore()
const { autoclickers } = storeToRefs(autoclickersStore)


const moneyStore = useMoneyStore()
const { money } = storeToRefs(moneyStore)

const autoclickingInterval = computed(() => {
    let sum = 0;
    for (const auto of autoclickers.value) {
        sum += auto.currentAmount * auto.cps;
    }

    return sum;
});

const autoclickingTotal = computed(() => {
    let sum = 0;
    for (const auto of autoclickers.value) {
        sum += auto.currentAmount;
    }

    return sum;
});
</script>

<template>
    <v-row style="padding-left: 2.5rem;">
        <v-col>
            <span class="moneyCounter">{{ formatNumber(money, 1) }}$</span>
        </v-col>
    </v-row>
    <v-row style="margin-top: 0;">
        <v-col style="padding: 5px;">
            <p class="levelCounter" style="font-size: 0.7rem;">Employé{{ autoclickingTotal > 0 ? "s" : "" }} : {{
                formatNumber(autoclickingTotal) }}</p>
        </v-col>
    </v-row>
    <v-row style="margin-top: 0;">
        <v-col style="padding: 5px;">
            <p class="levelCounter" style="font-size: 0.7rem;">Productivité : {{ formatNumber(autoclickingInterval) }}
                cps
            </p>
        </v-col>
    </v-row>
</template>

<style scoped>
.levelCounter {
    color: white;
    padding-left: 3rem;
}
</style>