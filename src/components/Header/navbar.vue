<template>
  <nav class="navbar is-link" role="navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="#"> Notebell </a>

        <a
          @click="active = !active"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active ': active }"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        :class="{ 'is-active ': active }"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <RouterLink @click="active = false" class="navbar-item" to="/">
            Notes
          </RouterLink>

          <RouterLink @click="active = false" class="navbar-item" to="/stats">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const active = ref(false);
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 24px;
}

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
