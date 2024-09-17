<script setup lang="ts">
</script>

<template>
  <div class="container">
    <h1 class="title text-bold-3xl cl-blue">Упс</h1>
    <p class="text-bold-lg mb-20">Кажется, такой страницы не существует</p>
    <div class="containerLink">
      <router-link class="link" to="/">На главную</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.link {
  display: block;
  color: white;
  background-color: rgb(var(--color-blue));
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: max-content;
  margin: 0 auto;
}
</style>
