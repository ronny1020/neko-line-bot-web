<template>
  <div id="nav">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/meme" class="nav-link">Meme</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
