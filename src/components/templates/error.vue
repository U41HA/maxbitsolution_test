<script setup lang="ts">
import LogoIcon from '~/components/shared/icons/LogoIcon.vue';
</script>

<template>
  <div class="container">
    <LogoIcon class="primary-text-color logo" />
    <h1 class="title">500</h1>
    <p class="text">На сервере произошла ошибка, повторите попытку позже</p>
    <div class="containerLink">
      <a class="link" href="/public">Вернуться</a>
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
  font-size: 64px;
  color: #046300;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
}
.logo {
  display: block;
  height: 50px;
  width: 170px;
  margin: 0 auto;
}
.text {
  color: #046300;
  font-weight: bold;
  margin-bottom: 20px;
}
.link {
  display: block;
  color: white;
  background-color: limegreen;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: max-content;
  margin: 0 auto;
}
</style>
