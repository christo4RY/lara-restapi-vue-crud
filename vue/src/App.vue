<script setup>
</script>

<template>
  <div class="container py-5">
    <ul class="nav nav-pills gap-2 mb-3">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link active"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'blogs' }" class="nav-link active"
          >Blogs</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>
</style>
