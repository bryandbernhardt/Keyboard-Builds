<script setup>
import KeyboardFilters from '../../components/KeyboardFilters.vue';
</script>

<template>
  <div>
    <h1>Keycaps</h1>
    <KeyboardFilters :keycapMaterial="true" :keycapProduction="true" :keycapProfile="true" />
  </div>
</template>