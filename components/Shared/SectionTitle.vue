<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="section-title">{{ title }}</h1>
</template>

<style lang="css">
.section-title {
  padding-left: 20px;
}
</style>
