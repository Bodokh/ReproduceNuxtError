<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue'

const app = {
  name: 'Chutzlaaretz',
}
useState('app', () => app)


</script>

<style lang="scss">
.main-container {
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .register_button {
    display: none;
  }
}

@media (max-width: 426px) {
  .main-container {
    padding-top: 60px;
  }
}
</style>
