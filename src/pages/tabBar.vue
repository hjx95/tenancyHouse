<template>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </template>
  
  <script lang="ts">
  import { ref } from "vue";
  
  export default {
    setup() {
      const active = ref(0);
      const icon = {
        active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
        inactive: "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
      };
      return {
        icon,
        active,
      };
    },
  };
  </script>
  