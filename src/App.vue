<script setup lang="ts">
import TabBar from "./pages/tabBar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts">
import tabBarVue from "./pages/tabBar.vue";
export default {
  components: {
    tabBarVue,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
