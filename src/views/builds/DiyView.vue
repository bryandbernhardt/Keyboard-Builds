<script setup>
import ItemsList from '../../components/ItemsList.vue';
import KeyboardFilters from '../../components/KeyboardFilters.vue';
</script>

<template>
  <div>
    <h1>DIY</h1>
    <KeyboardFilters :switchCompatibility="true" :connection="true"/>
    <ItemsList />
  </div>
</template>