<template>
  <div>
    <!-- Header-->
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
/* 
  ##### Imports
  */

import Header from "./components/Header/navbar.vue";
import Main from "./Pages/index.vue";
</script>
