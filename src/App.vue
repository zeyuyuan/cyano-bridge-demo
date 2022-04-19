<template>
  <div class="app">
    <TheHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
</style>

<style lang="scss">
@import "./styles/index.scss";
</style>
