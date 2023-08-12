<script setup>
import { RouterView } from 'vue-router'
import BuildsMenu from '../components/BuildsMenu.vue';
</script>

<template>
  <div class="builds-container">
    <BuildsMenu id="builds-menu" />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#builds-menu {
  position: relative;
  width: fit-content;
}

.container {
  width: calc(100% - 184px);
}

.builds-container {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
}
</style>